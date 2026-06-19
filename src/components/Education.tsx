import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import './Education.css';

export function Education() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first active

  const eduItems = [
    {
      id: 0,
      title: "PhD, Philosophiae Doctor in Innovation in Agro Products",
      major: "Major in Production & Supply Chain",
      year: "2025",
      institution: "Ecole Supérieure Robert de Sorbon",
      logo: content.education.items[0].logo,
      color: "#22c55e",
      logoBg: "#c1272d", // Sorbon Red
      details: "Focused on modernizing agriculture production lines, supply chain mapping, and integration of sustainable operations. Thesis centered on smart logistics and eco-friendly manufacturing automation."
    },
    {
      id: 1,
      title: "Bachelor's in Mechanical Engineering",
      major: "SKIT, Jaipur (Rajasthan University)",
      year: "2009",
      institution: "Swami Keshvanand Institute of Technology (SKIT)",
      logo: content.education.items[1].logo,
      color: "#4ade80",
      logoBg: "#ffffff", // SKIT White
      details: "Studied core mechanical engineering disciplines including machine design, operations management, thermodynamics, and automation systems. Lead engineer for final year pneumatic material handling design project."
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container education-container">
        <SectionHeading 
          title="EDUCATION" 
          textGradient="linear-gradient(180deg, #4ade80 0%, #22c55e 40%, #16a34a 70%, #15803d 100%)"
          shadowColor="rgba(21, 128, 61, 0.6)"
        />

        <div className="education-center">
          <div className="timeline-line"></div>
          
          {eduItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div 
                key={index}
                className={`education-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(isActive ? null : index)} // Toggle active
                style={{ cursor: 'pointer' }}
                animate={{ 
                  opacity: isActive ? 1 : 0.6,
                  scale: isActive ? 1.02 : 0.98,
                  borderColor: isActive ? item.color : 'transparent',
                  boxShadow: isActive 
                    ? `0 12px 30px rgba(0,0,0,0.4), 0 0 15px ${item.color}30` 
                    : '0 8px 20px rgba(0,0,0,0.2)'
                }}
                whileHover={{ opacity: 0.9, scale: 1.0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              >
                <div className="card-logo-bg" style={{ backgroundColor: item.logoBg, borderColor: isActive ? item.color : 'transparent' }}>
                  <img src={item.logo} alt={item.institution} className="card-logo" />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="year">{item.year} — {item.institution}</p>
                  
                  {/* Collapsible details */}
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="edu-details" style={{ marginTop: '10px', fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: 0 }}>
                      {item.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="education-right">
          <motion.a 
            href="#experience" 
            className="btn-experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            EXPERIENCE <span className="arrows">&gt;&gt;</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
