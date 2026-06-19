import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import './Industries.css';

export function Industries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active card index for overlay

  const getTextColor = (title: string) => {
    switch(title) {
      case 'Agriculture': return '#84cc16'; // Light Lime Green
      case 'Agro Trading': return '#06b6d4'; // Cyan
      case 'Manufacturing': return '#f97316'; // Orange
      case 'Shipping & Logistics': return '#818cf8'; // Indigo
      case 'Renewable Energy': return '#0ea5e9'; // Blue/Sky
      case 'Infrastructure': return '#f59e0b'; // Amber
      case 'Mining': return '#10b981'; // Emerald
      case 'Education': return '#f43f5e'; // Rose
      default: return '#cbd5e1';
    }
  };

  const displayIndustries = [
    { title: 'Agriculture', imgTitle: 'Agriculture', desc: 'Specializing in organic grain sourcing, modern crop rotation, and smart farming systems.' },
    { title: 'Agro Trading', imgTitle: 'Agri-Tech', desc: 'Managing wholesale commodity trade networks for grains, flour, and processed items globally.' },
    { title: 'Manufacturing', imgTitle: 'Manufacturing', desc: 'Operating high-throughput roller flour mills and automated agricultural processing systems.' },
    { title: 'Shipping & Logistics', imgTitle: 'Ports & Shipping', desc: 'Managing end-to-end freight distribution, transport logistics, and custom clearing operations.' },
    { title: 'Renewable Energy', imgTitle: 'Farming', desc: 'Integrating solar grids to power roller mills and storage silos, cutting raw power overheads.' },
    { title: 'Infrastructure', imgTitle: 'Infrastructure', desc: 'Constructing modern high-capacity warehouses, transport depots, and storage facilities.' },
    { title: 'Mining', imgTitle: 'Mining', desc: 'Managing mineral extraction sites and processing chains to supply high-quality industrial inputs.' },
    { title: 'Education', imgTitle: 'Flour Milling', desc: 'Fostering research in sustainable agriculture technologies and industrial milling sciences.' }
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="container industries-container">
        <SectionHeading 
          title="INDUSTRIES" 
          textGradient="linear-gradient(180deg, #06b6d4 0%, #0891b2 40%, #0369a1 70%, #075985 100%)"
          shadowColor="rgba(3, 105, 161, 0.6)"
        />

        <div className="industries-content">
          <div className="industries-grid">
            {displayIndustries.map((ind, index) => {
              const imageInfo = content.industries.find(i => i.title === ind.imgTitle) || content.industries[index];
              const isActive = activeIndex === index;
              
              return (
                <motion.div 
                  className="industry-card" 
                  key={ind.title}
                  onClick={() => setActiveIndex(isActive ? null : index)} // Toggle active overlay
                  style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  animate={{
                    borderColor: isActive ? getTextColor(ind.title) : 'rgba(255, 255, 255, 0.08)',
                    boxShadow: isActive 
                      ? `0 15px 30px rgba(0,0,0,0.5), 0 0 15px ${getTextColor(ind.title)}30` 
                      : '0 10px 25px rgba(0,0,0,0.3)'
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: getTextColor(ind.title),
                    boxShadow: `0 15px 30px rgba(0,0,0,0.5), 0 0 15px ${getTextColor(ind.title)}35`
                  }}
                >
                  <img src={imageInfo?.image} alt={ind.title} className="industry-img" />
                  <div className="industry-title" style={{ color: getTextColor(ind.title) }}>
                    {ind.title}
                    <div style={{ fontSize: '9px', color: '#94a3b8', marginTop: '3px', fontWeight: 'normal', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Click for info
                    </div>
                  </div>

                  {/* Sliding/Fading Description Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(11, 19, 43, 0.96)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      zIndex: 5,
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    <h4 style={{ color: getTextColor(ind.title), marginBottom: '10px', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {ind.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.55', margin: 0, fontWeight: 500 }}>
                      {ind.desc}
                    </p>
                    <div style={{ marginTop: '20px', fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 'bold' }}>
                      Click to close
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="industries-right">
          <motion.a 
            href="#contact" 
            className="btn-contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            GET IN TOUCH <span className="arrows">&gt;&gt;</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
