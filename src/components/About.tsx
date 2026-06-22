import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import './About.css';

// Fixed image per user instruction
import aboutImage from '../assets/FooterImage.png';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <SectionHeading 
          title="ABOUT ME" 
          textGradient="linear-gradient(180deg, #3b82f6 0%, #2563eb 40%, #1d4ed8 70%, #1e40af 100%)"
          shadowColor="rgba(30, 58, 138, 0.6)"
        />
        
        <div className="about-image-col">
          <motion.div 
            className="about-photo-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={aboutImage} alt="Sandeep Katariya" className="about-photo" />
          </motion.div>
        </div>

        <div className="about-text-col">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="about-paragraph">
              Dr. Sandeep Katariya, PhD in Innovation in Agro Products — specializing in Production & Supply Chain Management — seamlessly integrates advanced academic research with over 15 years of leadership across diverse industries. As an established entrepreneur and visionary executive, he specializes in building scalable enterprises, driving operational excellence, and implementing sustainable business practices.
            </p>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <p className="about-paragraph">
                With deep expertise in agricultural manufacturing and global supply chains, Dr. Katariya champions sustainable agro-industrial systems. His initiatives incorporate advanced methodologies such as IoT-enabled monitoring, precision agricultural technologies, and optimized logistics networks. His operational philosophy focuses on merging traditional sector knowledge with modern technology to enhance productivity, commercial viability, and environmental stewardship.
              </p>
              <p className="about-paragraph" style={{ marginBottom: 0 }}>
                Currently serving as Partner at Krishna Flour Mill and Director of KrishVana Global Gains Pvt Ltd, KrishVana Infrastructure Pvt Ltd, Krishlogix Pvt Ltd, and LunarEdge IT Services Pvt Ltd, he drives the strategic vision of these enterprises, cultivating high-value partnerships and delivering sustainable returns for all stakeholders.
              </p>
            </motion.div>

            <button 
              className="btn-read-more" 
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
            </button>
          </motion.div>
        </div>

        <div className="about-action-col">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#education" className="btn-education">
              EDUCATION <span className="arrows">&gt;&gt;</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
