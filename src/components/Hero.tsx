import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Watermark Text (desktop/tablet) */}
      <div className="hero-background-text desktop-only-text">
        <span>SANDEEP</span>
        <span>KATARIYA</span>
      </div>
      
      {/* Foreground Header Text (desktop/tablet only) */}
      <div className="hero-content desktop-hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="title-sandeep">SANDEEP</span>
          <div className="title-bottom-row">
            <span className="title-kata">KATA</span>
            <div className="title-gap"></div>
            <span className="title-riya">RIYA</span>
          </div>
        </motion.h1>
      </div>

      {/* Redesigned Hero Body for Mobile Viewports (<= 768px) */}
      <div className="mobile-hero-body">
        {/* Ambient Background Glow */}
        <div className="mobile-ambient-glow"></div>

        {/* Centered Portrait with Glow */}
        <div className="mobile-hero-photo-col">
          <div className="portrait-glow"></div>
          <img src={content.hero.image} alt="Sandeep Katariya" className="mobile-portrait-img" />
        </div>

        {/* Name & Info Below Portrait */}
        <div className="mobile-hero-info">
          <h1 className="mobile-hero-name">
            <span>SANDEEP</span>
            <span>KATARIYA</span>
          </h1>

          <div className="mobile-hero-divider"></div>

      
          <p className="mobile-tagline">
            Blending academic innovation with 15+ years of cross-industry expertise in Agro Products &amp; Supply Chain.
          </p>

          <div className="mobile-cta-row">
            <a href="#about" className="mobile-btn-primary">
              Know More
            </a>
            <a href="#experience" className="mobile-btn-secondary">
              Experience &rarr;
            </a>
          </div>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="mobile-scroll-dots">
          <a href="#home" className="scroll-dot active" aria-label="Go to Home"></a>
          <a href="#about" className="scroll-dot" aria-label="Go to About"></a>
          <a href="#experience" className="scroll-dot" aria-label="Go to Experience"></a>
        </div>
      </div>

      {/* Centered Cutout Portrait (desktop/tablet only) */}
      <motion.img 
        src={content.hero.image} 
        alt="Sandeep Katariya" 
        className="hero-person-img desktop-hero-img" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Right-aligned Know More CTA (desktop/tablet only) */}
      <div className="know-more desktop-know-more">
        <span>Know More</span>
        <button className="know-more-btn" aria-label="Scroll Down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Purple Info Banner (desktop/tablet only) */}
      <div className="hero-banner desktop-hero-banner">
        <div className="banner-item">
          <span className="star-icon">✦</span> DIRECTOR
        </div>
        <div className="banner-item">
          <span className="star-icon">✦</span> VISIONARY ENTREPRENEUR
        </div>
        <div className="banner-item">
          <span className="star-icon">✦</span> INDUSTRY INNOVATOR
        </div>
        <div className="banner-item">
          <span className="star-icon">✦</span> BUSINESS LEADER
        </div>
      </div>
    </section>
  );
}
