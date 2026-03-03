import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { companyInfo, aboutUsData, products } from './data';
import './App.css';

// --- PURE NATIVE SVG ICONS ---
const IconSearch = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const IconChevronRight = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>;
const IconCheck = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>;
const IconMapPin = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const IconPhone = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const IconMail = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const IconAward = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
const IconFactory = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>;
const IconArrowRight = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const IconShield = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const IconDownload = ({ size=24, className="" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;

// --- ENHANCED SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

// --- WEB3FORMS MODAL COMPONENT ---
const QuoteModal = ({ isOpen, onClose, quoteData }) => {
  const [status, setStatus] = useState("idle"); 

  useEffect(() => {
    if (isOpen) setStatus("idle");
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.target);
    
    // UPDATED WEB3FORMS ACCESS KEY
    formData.append("access_key", "e769da46-1e41-45e4-ae33-acae1bc6b547");
    
    const subject = quoteData 
      ? `Website Quote Request: ${quoteData.product.name} (Article: ${quoteData.variant.article})` 
      : `Website Bulk Inquiry / Contact Form`;
    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setTimeout(() => onClose(), 3000); 
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box bounce-in">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {status === "success" ? (
          <div className="modal-success">
            <div className="success-icon"><IconCheck size={60} /></div>
            <h2>Request Sent Successfully</h2>
            <p>Thank you for reaching out. Our sales team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>{quoteData ? "Request Custom Quote" : "Bulk Inquiry"}</h2>
              <p>{quoteData ? "Enter your details to get pricing for this specific variant." : "Need bulk anchors? Leave your requirements below."}</p>
            </div>

            <form onSubmit={onSubmit} className="modal-form">
              <input 
                type="hidden" 
                name="Product_Requested" 
                value={quoteData ? `${quoteData.product.name} | Article: ${quoteData.variant.article}` : "General Bulk Inquiry"} 
              />

              {quoteData && (
                <div className="quote-product-card">
                  <strong>Selected Product:</strong> {quoteData.product.name}<br/>
                  <strong>Article No:</strong> <span className="text-accent">{quoteData.variant.article}</span><br/>
                  <strong>Size:</strong> {quoteData.variant.drill} x {quoteData.variant.length}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Company Name *</label>
                  <input type="text" name="company" required placeholder="BuildTech Corp" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" name="phone" required placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="form-group">
                <label>Estimated Quantity Required</label>
                <input type="text" name="quantity" placeholder="e.g., 5,000 pieces" />
              </div>

              <div className="form-group">
                <label>Additional Message / Requirements *</label>
                <textarea name="message" required rows="3" placeholder="Please share lead time and best pricing..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary full-width btn-large" disabled={status === 'submitting'}>
                {status === "submitting" ? "Sending Request..." : "Send Request"}
              </button>
              
              {status === "error" && <p className="error-text">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// --- HORIZONTAL NAVBAR (DROPDOWN REMOVED) ---
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

// --- FOOTER ---
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
          <p className="about-text mt-4">
            A dedicated participant in the "Make in India" initiative, specializing in high-performance anchoring and fastening solutions.
          </p>
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
              <li key={idx}>
                <a href={report.file} target="_blank" rel="noopener noreferrer" download className="download-link">
                  {report.name}
                </a>
              </li>
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


// --- PAGES ---

// 1. Home Page 
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="page-wrapper">
      
      <section className="hero-modern-split">
        <div className="hero-left">
          <div className="hero-content-wrapper fade-in-up">
            <div className="hero-badge hover-lift">
              <IconAward size={16} /> {companyInfo.initiative}
            </div>
            
            {/* STYLIZED HIGHLIGHTED COMPANY NAME */}
            <div className="hero-company-name fade-in">{companyInfo.legalName}</div>
            
            <h1 className="hero-split-text">
              <span className="text-transparent-outline">FORGING</span><br/>
              THE FUTURE OF<br/>
              <span className="text-accent">INFRASTRUCTURE.</span>
            </h1>
            <p className="hero-split-desc">
              {aboutUsData.hero.subtitle}
            </p>
            
            <div className="hero-actions mt-4">
              <Link to="/products" className="btn btn-primary btn-large group hover-lift">
                Explore Catalogue <IconArrowRight size={20} className="icon-slide"/>
              </Link>
              <a href="/catalogue/catalogue.pdf" download className="btn btn-outline-white btn-large hover-lift">
                <IconDownload size={20} /> Download Catalogue
              </a>
            </div>
          </div>

          <div className="hero-scroll-indicator fade-in">
            <span>Scroll to explore</span>
            <div className="scroll-line"></div>
          </div>
        </div>

        <div className="hero-right">
          {heroSlides.map((slide, index) => (
            <div key={index} className={`slide-item ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide-bg" style={{backgroundImage: `url('${slide}')`}}></div>
              <div className="slide-overlay-gradient"></div>
            </div>
          ))}
          
          <div className="modern-slide-indicators">
            {heroSlides.map((_, idx) => (
              <button 
                key={idx} 
                className={`modern-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section className="section container fade-in">
        <div className="about-home-flex">
          <div className="about-home-text">
            <div className="section-pre-title justify-start"><span></span> WHO WE ARE</div>
            <h2 className="section-title text-uppercase">
              Precision Engineering.<br/>
              <span className="text-accent">Critical Loads.</span>
            </h2>
            <p className="section-desc">
              {companyInfo.legalName} is an ISO 9001:2015 certified manufacturer specializing in high-performance anchoring solutions. Our commitment to the "{companyInfo.initiative}" initiative ensures we deliver the highest accuracy structural components for global infrastructure.
            </p>
            
            <div className="about-home-stats mt-4">
              <div className="stat-item">
                <h3 className="text-accent">100%</h3>
                <p>Tested Safety</p>
              </div>
              <div className="stat-item">
                <h3 className="text-accent">5+</h3>
                <p>Govt Approvals</p>
              </div>
              <div className="stat-item">
                <h3 className="text-accent">ISO</h3>
                <p>9001:2015</p>
              </div>
            </div>

            <Link to="/about" className="btn btn-outline-dark group mt-4">
              Discover Our Heritage <IconArrowRight size={18} className="icon-slide"/>
            </Link>
          </div>

          <div className="about-home-images">
            <div className="img-large hover-lift" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop')"}}></div>
            <div className="img-small hover-lift" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop')"}}></div>
            <div className="experience-badge bounce-in" style={{animationDelay: '0.4s'}}>
              <IconFactory size={32} />
              <span>{companyInfo.initiative}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="infrastructure-section">
         <div className="container infrastructure-inner slide-up-fade">
           <div className="infra-header">
             <h2 className="section-title text-white">Specialized Manufacturing</h2>
             <p className="section-desc text-light">
               Our facility is equipped with specialized machinery dedicated to the production of high-quality anchors, including advanced threading and dedicated manufacturing lines for wedge, nylon, and drop-in anchors.
             </p>
           </div>
           
           <div className="infra-features">
             <div className="infra-feature-card hover-lift">
               <IconFactory size={40} className="infra-icon"/>
               <h3>Dedicated Lines</h3>
               <p>Focused infrastructure allows us to deliver high-accuracy components with absolute consistency across high-volume production.</p>
             </div>
             <div className="infra-feature-card hover-lift">
               <IconCheck size={40} className="infra-icon"/>
               <h3>Rigorous QC</h3>
               <p>Supported by rigorous quality control processes, we ensure that every fastener meets stringent engineering standards.</p>
             </div>
             <div className="infra-feature-card hover-lift">
               <IconShield size={40} className="infra-icon"/>
               <h3>Load-Bearing Excellence</h3>
               <p>From Carbon Steel Galvanized to Stainless Steel A2/A4, our materials are forged to handle the toughest architectural loads.</p>
             </div>
           </div>
         </div>
      </section>

      <section className="section container quality-section fade-in">
         <div className="quality-header text-center">
           <h2 className="section-title">Proven Quality & Reliability</h2>
           <p className="section-desc mx-auto max-w-800">
             Because of our commitment to quality, {companyInfo.legalName} is a trusted partner for India's major infrastructure authorities. Our anchors undergo extensive testing for tensile and pull-out strength.
           </p>
         </div>

         <div className="testing-banner hover-lift">
            <div className="test-badge">
               <IconShield size={40}/>
               <div>
                 <h4>TEST METHOD: IS1608, P1:2022</h4>
                 <span>Certified Pull-Out & Tensile Strength Testing</span>
               </div>
            </div>
         </div>

         <div className="approvals-container">
           <p className="approvals-title">APPROVED BY MAJOR AUTHORITIES</p>
           <div className="approvals-logos-large">
             {companyInfo.approvals.map(app => (
               <div key={app} className="approval-card hover-lift">{app}</div>
             ))}
           </div>
         </div>
      </section>

    </div>
  );
};

// 2. About Page 
const AboutPage = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'shield': return <IconShield size={36} />;
      case 'factory': return <IconFactory size={36} />;
      case 'award': return <IconAward size={36} />;
      default: return <IconCheck size={36} />;
    }
  };

  return (
    <div className="page-wrapper pt-navbar fade-in bg-white">
       
       <section className="about-hero-redefined container">
         <div className="hero-redefined-content slide-up-fade">
           <span className="section-pre-title justify-start"><span></span> OUR STORY</span>
           
           {/* STYLIZED HIGHLIGHTED COMPANY NAME */}
           <div className="hero-company-name fade-in-up">{companyInfo.legalName}</div>

           <h1 className="hero-title-massive">
             We Don't Just Build Anchors.<br />
             We Build <span className="text-accent">Trust.</span>
           </h1>
           <p className="hero-redefined-sub">{aboutUsData.hero.subtitle}</p>
         </div>
         <div className="hero-redefined-image fade-in" style={{ animationDelay: '0.3s' }}>
           <div className="img-wrapper hover-lift">
             <div className="red-accent-block"></div>
             <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" alt="Industrial Manufacturing" className="glitch-free-img" />
           </div>
         </div>
       </section>

       <section className="about-manifesto-section">
         <div className="container">
           <h2 className="manifesto-text slide-up-fade">
             "{aboutUsData.intro}"
           </h2>
         </div>
       </section>

       <section className="about-vm-band">
         <div className="container vm-band-grid">
           <div className="vm-band-card fade-in-up">
             <div className="vm-band-header">
               <IconSearch size={28} className="text-accent" />
               <h3>Our Vision</h3>
             </div>
             <p>{aboutUsData.vision}</p>
           </div>
           
           <div className="vm-divider hidden-mobile"></div>
           
           <div className="vm-band-card fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="vm-band-header">
               <IconAward size={28} className="text-accent" />
               <h3>Our Mission</h3>
             </div>
             <p>{aboutUsData.mission}</p>
           </div>
         </div>
       </section>

       <section className="section container">
         <div className="text-left slide-up-fade">
           <div className="section-pre-title justify-start"><span></span> THE STANDARD</div>
           <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Our Core Values</h2>
         </div>
         
         <div className="values-minimal-grid">
           {aboutUsData.values.map((v, i) => (
             <div key={i} className="value-minimal-card slide-up-fade" style={{ animationDelay: `${i * 0.15}s` }}>
               <div className="value-number-watermark">0{i + 1}</div>
               <div className="value-content-front">
                 <div className="icon-box-minimal">
                   {getIcon(v.icon)}
                 </div>
                 <h4 className="value-title-minimal">{v.title}</h4>
                 <p className="value-desc-minimal">{v.desc}</p>
               </div>
               <div className="value-hover-line"></div>
             </div>
           ))}
         </div>
       </section>

    </div>
  );
};

// 3. Catalog List Page
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
          <input 
            type="text" 
            placeholder="Search catalogue..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
        {filtered.length === 0 && (
          <div className="no-results">No products found matching "{searchTerm}".</div>
        )}
      </div>
    </div>
  );
};

// 4. Product Detail Page
const ProductDetailPage = ({ openQuoteModal }) => {
  const id = window.location.pathname.split('/').pop();
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
               {companyInfo.approvals.map(app => (
                  <span key={app} className="approval-pill">{app}</span>
               ))}
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
            
            {/* The wrapper handles horizontal scroll seamlessly on mobile devices */}
            <div className="table-responsive-wrapper">
              {section.type === "variant" && (
                <table className="catalog-table variant-table">
                  <thead>
                    <tr>
                      {section.headers.map((h, i) => <th key={i}>{h}</th>)}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i}>
                        <td className="font-bold text-accent">{row.article}</td>
                        <td>{row.drill}</td>
                        <td>{row.length}</td>
                        {row.embed && <td>{row.embed}</td>}
                        <td>
                          <button className="btn btn-sm btn-outline-dark" onClick={() => openQuoteModal(product, row)}>
                            Quote
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {section.type === "tech" && (
                <table className="catalog-table tech-table">
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i}>
                        <th className="tech-label">{row.label}</th>
                        <td className="tech-value">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {section.type === "report" && (
                <table className="catalog-table report-table">
                  <thead>
                    <tr>
                      {section.headers.map((h, i) => <th key={i}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className={cellIdx === 0 ? "font-bold text-dark" : ""}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ))}

        {product.applications && (
          <div className="data-card hover-lift">
             <div className="data-card-header">
               <h2 className="data-title">Common Applications</h2>
             </div>
             <div className="applications-list-grid">
                {product.applications.map((app, i) => (
                  <div key={i} className="app-item-box"><IconCheck size={20} className="text-accent"/> {app}</div>
                ))}
             </div>
          </div>
        )}
        
        {product.appReferenceImage && (
          <div className="data-card hover-lift">
            <div className="data-card-header">
              <h2 className="data-title">Application References</h2>
            </div>
            <div className="app-reference-wrapper">
              <img src={product.appReferenceImage} alt="Application References" className="app-reference-img" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

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