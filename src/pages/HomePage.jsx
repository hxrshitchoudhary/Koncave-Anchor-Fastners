import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, aboutUsData } from '../data.js';
import { IconAward, IconArrowRight, IconDownload, IconFactory, IconCheck, IconShield } from '../components/Icons.jsx';

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
            
            <div className="hero-company-name fade-in">{companyInfo.legalName}</div>
            
            <h1 className="hero-split-text">
              <span className="text-transparent-outline">FORGING</span><br/>
              THE FUTURE OF<br/>
              <span className="text-accent">INFRASTRUCTURE.</span>
            </h1>
            <p className="hero-split-desc">{aboutUsData.hero.subtitle}</p>
            
            <div className="hero-actions mt-4">
              <a href="/catalogue/catalogue.pdf" download className="btn btn-primary btn-large hover-lift">
                <IconDownload size={20} /> Download Catalogue
              </a>
              <Link to="/products" className="btn btn-outline-white btn-large group hover-lift">
                Explore Catalogue <IconArrowRight size={20} className="icon-slide"/>
              </Link>
            </div>
          </div>
          <div className="hero-scroll-indicator fade-in">
            <span>Scroll to explore</span><div className="scroll-line"></div>
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
              <button key={idx} className={`modern-dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)}></button>
            ))}
          </div>
        </div>
      </section>

      <section className="section container fade-in">
        <div className="about-home-flex">
          <div className="about-home-text">
            <div className="section-pre-title justify-start"><span></span> WHO WE ARE</div>
            <h2 className="section-title text-uppercase">Precision Engineering.<br/><span className="text-accent">Critical Loads.</span></h2>
            <p className="section-desc">{companyInfo.legalName} is an ISO 9001:2015 certified manufacturer specializing in high-performance anchoring solutions. Our commitment to the "{companyInfo.initiative}" initiative ensures we deliver the highest accuracy structural components for global infrastructure.</p>
            
            <div className="about-home-stats mt-4">
              <div className="stat-item"><h3 className="text-accent">100%</h3><p>Tested Safety</p></div>
              <div className="stat-item"><h3 className="text-accent">5+</h3><p>Govt Approvals</p></div>
              <div className="stat-item"><h3 className="text-accent">ISO</h3><p>9001:2015</p></div>
            </div>
            <Link to="/about" className="btn btn-outline-dark group mt-4">Discover Our Heritage <IconArrowRight size={18} className="icon-slide"/></Link>
          </div>
          <div className="about-home-images">
            <div className="img-large hover-lift" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop')"}}></div>
            <div className="img-small hover-lift" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop')"}}></div>
            <div className="experience-badge bounce-in" style={{animationDelay: '0.4s'}}>
              <IconFactory size={32} /><span>{companyInfo.initiative}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="infrastructure-section">
         <div className="container infrastructure-inner slide-up-fade">
           <div className="infra-header">
             <h2 className="section-title text-white">Specialized Manufacturing</h2>
             <p className="section-desc text-light">Our facility is equipped with specialized machinery dedicated to the production of high-quality anchors, including advanced threading and dedicated manufacturing lines for wedge, nylon, and drop-in anchors.</p>
           </div>
           <div className="infra-features">
             <div className="infra-feature-card hover-lift"><IconFactory size={40} className="infra-icon"/><h3>Dedicated Lines</h3><p>Focused infrastructure allows us to deliver high-accuracy components with absolute consistency across high-volume production.</p></div>
             <div className="infra-feature-card hover-lift"><IconCheck size={40} className="infra-icon"/><h3>Rigorous QC</h3><p>Supported by rigorous quality control processes, we ensure that every fastener meets stringent engineering standards.</p></div>
             <div className="infra-feature-card hover-lift"><IconShield size={40} className="infra-icon"/><h3>Load-Bearing Excellence</h3><p>From Carbon Steel Galvanized to Stainless Steel A2/A4, our materials are forged to handle the toughest architectural loads.</p></div>
           </div>
         </div>
      </section>

      <section className="section container quality-section fade-in">
         <div className="quality-header text-center">
           <h2 className="section-title">Proven Quality & Reliability</h2>
           <p className="section-desc mx-auto max-w-800">Because of our commitment to quality, {companyInfo.legalName} is a trusted partner for India's major infrastructure authorities. Our anchors undergo extensive testing for tensile and pull-out strength.</p>
         </div>
         <div className="testing-banner hover-lift">
            <div className="test-badge">
               <IconShield size={40}/>
               <div><h4>TEST METHOD: IS1608, P1:2022</h4><span>Certified Pull-Out & Tensile Strength Testing</span></div>
            </div>
         </div>
         <div className="approvals-container">
           <p className="approvals-title">APPROVED BY MAJOR AUTHORITIES</p>
           <div className="approvals-logos-large">
             {companyInfo.approvals.map(app => (<div key={app} className="approval-card hover-lift">{app}</div>))}
           </div>
         </div>
      </section>
    </div>
  );
};

export default HomePage;