import React from 'react';
import { companyInfo, aboutUsData } from '../data.js';
import { IconShield, IconFactory, IconAward, IconCheck, IconSearch } from '../components/Icons.jsx';

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
           <div className="hero-company-name fade-in-up">{companyInfo.legalName}</div>
           <h1 className="hero-title-massive">We Don't Just Build Anchors.<br />We Build <span className="text-accent">Trust.</span></h1>
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
         <div className="container"><h2 className="manifesto-text slide-up-fade">"{aboutUsData.intro}"</h2></div>
       </section>

       <section className="about-vm-band">
         <div className="container vm-band-grid">
           <div className="vm-band-card fade-in-up">
             <div className="vm-band-header"><IconSearch size={28} className="text-accent" /><h3>Our Vision</h3></div>
             <p>{aboutUsData.vision}</p>
           </div>
           <div className="vm-divider hidden-mobile"></div>
           <div className="vm-band-card fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="vm-band-header"><IconAward size={28} className="text-accent" /><h3>Our Mission</h3></div>
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
                 <div className="icon-box-minimal">{getIcon(v.icon)}</div>
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

export default AboutPage;