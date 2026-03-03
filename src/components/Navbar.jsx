import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data.js';
import { IconMail } from './Icons.jsx';

const Navbar = ({ openInquiryModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img src="/images/logo.png" alt="Koncept Logo" className="brand-logo" onError={(e) => {e.target.style.display='none';}} />
          <span className="brand-text">{companyInfo.name}</span>
        </Link>
        
        <div className="nav-right-container">
          <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/about">ABOUT US</Link>
          </nav>
          
          <div className="nav-actions">
            <button className="cart-btn" onClick={openInquiryModal}>
              <div className="cart-btn-content">
                <IconMail size={20} className="cart-icon" />
                <span>BULK INQUIRY</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;