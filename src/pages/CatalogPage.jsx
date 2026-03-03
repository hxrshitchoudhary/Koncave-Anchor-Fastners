import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data.js';
import { IconSearch, IconArrowRight } from '../components/Icons.jsx';

const CatalogPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
  }, [location.search]);

  const filtered = products.filter(p => {
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) || 
      p.category.toLowerCase().includes(term) ||
      p.materials.some(m => m.toLowerCase().includes(term)) ||
      p.applications?.some(app => app.toLowerCase().includes(term))
    );
  });

  return (
    <div className="page-wrapper container section pt-navbar">
      <div className="catalog-header-modern fade-in-down">
        <h1>Product Portfolio</h1>
        <div className="search-bar-modern hover-lift">
          <IconSearch size={20} className="search-icon"/>
          <input type="text" placeholder="Search catalogue..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      <div className="catalog-list">
        {filtered.map((product, idx) => (
          <div key={product.id} className="catalog-list-item slide-up-fade" style={{animationDelay: `${idx * 0.1}s`}}>
            <div className="cli-img" style={{backgroundImage: `url(${product.image})`}}></div>
            <div className="cli-content">
              <span className="cli-category">{product.category}</span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="cli-tags">
                {product.materials.map((mat, i) => <span key={i} className="tag">{mat}</span>)}
              </div>
            </div>
            <div className="cli-action">
              <Link to={`/product/${product.id}`} className="btn btn-primary group">
                Technical Data <IconArrowRight size={16} className="icon-slide"/>
              </Link>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="no-results">No products found matching "{searchTerm}".</div>}
      </div>
    </div>
  );
};

export default CatalogPage;