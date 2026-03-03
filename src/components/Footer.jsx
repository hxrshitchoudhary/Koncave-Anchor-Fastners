import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data.js';
import { IconAward, IconMapPin, IconPhone, IconMail } from './Icons.jsx';

const Footer = () => {
  const testReports = [
    { name: "Cocave Wedge Anchor.pdf", file: "/reports/Cocave%20Wedge%20Anchor.pdf" },
    { name: "8X100MM Anchor Test Report.pdf", file: "/reports/8X100MM%20Anchor%20Test%20Report.pdf" },
    { name: "10X100 Anchor Test Report.pdf", file: "/reports/10X100%20Anchor%20Test%20Report.pdf" },
    { name: "12X150 Anchor Test Report.pdf", file: "/reports/12X150%20Anchor%20Test%20Report.pdf" },
    { name: "16x220mm Anchor Test Report.pdf", file: "/reports/16x220mm%20Anchor%20Test%20Report.pdf" },
    { name: "Atmay - SS M10 -Pullout Test Certificate.pdf", file: "/reports/Atmay%20-%20SS%20M10%20-Pullout%20Test%20Certificate.pdf" },
    { name: "Atmay SS -Wedge Anchors -M10 X 100 - Tesile Test.pdf", file: "/reports/Atmay%20SS%20-Wedge%20Anchors%20-M10%20X%20100%20-%20Tesile%20Test.pdf" },
    { name: "Atmay SS M12 Wedge Anchor - Pull Out Test.pdf", file: "/reports/Atmay%20SS%20M12%20Wedge%20Anchor%20-%20Pull%20Out%20Test.pdf" },
    { name: "Atmay - SS wedge anchor M12 x 100 - Tensile Test - Koncave.pdf", file: "/reports/Atmay%20-%20SS%20wedge%20anchor%20M12%20x%20100%20-%20Tensile%20Test%20-%20Koncave.pdf" },
  ];

  return (
    <footer className="footer" id="about">
      <div className="container footer-grid">
        <div className="footer-col fade-in-up">
          <Link to="/" className="brand footer-brand-lockup">
            <img src="/images/logo.png" alt="Koncept" className="footer-logo-img" onError={(e) => {e.target.style.display='none';}} />
            <span className="brand-text text-accent">{companyInfo.name}</span>
          </Link>
          <p className="about-text mt-4">A dedicated participant in the "Make in India" initiative, specializing in high-performance anchoring and fastening solutions.</p>
          <div className="footer-badges mt-4">
            <span className="iso-badge"><IconAward size={16}/> {companyInfo.certifications}</span>
          </div>
        </div>

        <div className="footer-col fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Full Catalogue</Link></li>
            <li><a href="/catalogue/catalogue.pdf" download>Download Catalogue</a></li>
          </ul>
        </div>

        <div className="footer-col fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="footer-heading">Test Reports</h3>
          <ul className="footer-links">
            {testReports.map((report, idx) => (
              <li key={idx}><a href={report.file} target="_blank" rel="noopener noreferrer" download className="download-link">{report.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="footer-heading">Contact Information</h3>
          <ul className="contact-list">
            <li><IconMapPin size={24} className="contact-icon"/> <span>{companyInfo.address}</span></li>
            <li><IconPhone size={20} className="contact-icon"/> <span>{companyInfo.phones.join(' / ')}</span></li>
            <li><IconMail size={20} className="contact-icon"/> <span>{companyInfo.email}</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 {companyInfo.legalName}. All rights reserved. | {companyInfo.website}</p>
      </div>
    </footer>
  );
};

export default Footer;