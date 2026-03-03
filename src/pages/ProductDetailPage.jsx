import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products, companyInfo } from '../data.js';
import { IconChevronRight, IconCheck } from '../components/Icons.jsx';

const ProductDetailPage = ({ openQuoteModal }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="container section pt-navbar"><h2>Product not found</h2></div>;

  return (
    <div className="page-wrapper container section pt-navbar">
      <div className="breadcrumb-modern fade-in">
        <Link to="/">Home</Link> <IconChevronRight size={14}/> 
        <Link to="/products">Product Range</Link> <IconChevronRight size={14}/> 
        <span>{product.name}</span>
      </div>

      <div className="product-header-full">
         <div className="product-header-content slide-up-fade">
           <span className="meta-category">{product.category}</span>
           <h1 className="meta-title">{product.name}</h1>
           <p className="meta-desc">{product.description}</p>
           <div className="meta-applications">
             <h3>Approved By</h3>
             <div className="app-grid-horizontal">
               {companyInfo.approvals.map(app => (<span key={app} className="approval-pill">{app}</span>))}
             </div>
           </div>
         </div>
         <div className="product-header-image fade-in" style={{backgroundImage: `url(${product.image})`}}></div>
      </div>

      <div className="product-data-container fade-in" style={{animationDelay: '0.2s'}}>
        {product.sections?.map((section, secIdx) => (
          <div key={secIdx} className="data-card hover-lift">
            <div className="data-card-header">
              <h2 className="data-title">{section.title}</h2>
              {section.subtitle && <p className="data-subtitle">{section.subtitle}</p>}
            </div>
            
            <div className="table-responsive-wrapper">
              {section.type === "variant" && (
                <table className="catalog-table variant-table">
                  <thead><tr>{section.headers.map((h, i) => <th key={i}>{h}</th>)}<th>Action</th></tr></thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i}>
                        <td className="font-bold text-accent">{row.article}</td><td>{row.drill}</td><td>{row.length}</td>
                        {row.embed && <td>{row.embed}</td>}
                        <td><button className="btn btn-sm btn-outline-dark" onClick={() => openQuoteModal(product, row)}>Quote</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {section.type === "tech" && (
                <table className="catalog-table tech-table">
                  <tbody>{section.rows.map((row, i) => (<tr key={i}><th className="tech-label">{row.label}</th><td className="tech-value">{row.value}</td></tr>))}</tbody>
                </table>
              )}
              {section.type === "report" && (
                <table className="catalog-table report-table">
                  <thead><tr>{section.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                  <tbody>{section.rows.map((row, i) => (<tr key={i}>{row.map((cell, cellIdx) => (<td key={cellIdx} className={cellIdx === 0 ? "font-bold text-dark" : ""}>{cell}</td>))}</tr>))}</tbody>
                </table>
              )}
            </div>
          </div>
        ))}

        {product.applications && (
          <div className="data-card hover-lift">
             <div className="data-card-header"><h2 className="data-title">Common Applications</h2></div>
             <div className="applications-list-grid">
                {product.applications.map((app, i) => (<div key={i} className="app-item-box"><IconCheck size={20} className="text-accent"/> {app}</div>))}
             </div>
          </div>
        )}
        
        {product.appReferenceImage && (
          <div className="data-card hover-lift">
            <div className="data-card-header"><h2 className="data-title">Application References</h2></div>
            <div className="app-reference-wrapper"><img src={product.appReferenceImage} alt="Application References" className="app-reference-img" /></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;