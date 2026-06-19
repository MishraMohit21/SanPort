import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Hero.css';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-text">
        <span>SANDEEP</span>
        <span>KATARIYA</span>
      </div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.9 }}
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

      <motion.img 
        src={content.hero.image} 
        alt="Sandeep Katariya" 
        className="hero-person-img" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <div className="know-more">
        <span>Know More</span>
        <button className="know-more-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="hero-banner">
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
