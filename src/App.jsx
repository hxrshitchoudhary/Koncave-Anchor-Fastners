import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import QuoteModal from './components/QuoteModal.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';

import './App.css';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

  const openGeneralInquiry = () => {
    setQuoteData(null);
    setModalOpen(true);
  };

  const openProductQuote = (product, variant) => {
    setQuoteData({ product, variant });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setQuoteData(null), 300); 
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar openInquiryModal={openGeneralInquiry} />
        <QuoteModal isOpen={modalOpen} onClose={closeModal} quoteData={quoteData} />
        
        <main className="main-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<ProductDetailPage openQuoteModal={openProductQuote} />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}