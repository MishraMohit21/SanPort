import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import './Competencies.css';

export function Competencies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first item active

  const compItems = [
    {
      title: 'Business Management',
      searchTerm: 'Business',
      description: 'Expertise in strategic planning, operational efficiency, and financial oversight across diverse industries.',
      color: '#3b82f6' // Blue
    },
    {
      title: 'Leadership Excellence',
      searchTerm: 'Leadership',
      description: 'Proven ability in team development, mentorship, and conflict resolution to drive organizational success.',
      color: '#10b981' // Green
    },
    {
      title: 'Industry Expertise',
      searchTerm: 'Industry',
      description: 'In-depth knowledge of flour milling operations and IT services, including adherence to quality standards and staying ahead of technology trends.',
      color: '#f59e0b' // Gold/Amber
    }
  ];

  return (
    <section id="competencies" className="competencies-section">
      <div className="container competencies-container">
        <SectionHeading 
          title="COMPETENCIES" 
          textGradient="linear-gradient(180deg, #3b82f6 0%, #2563eb 40%, #1d4ed8 70%, #1e40af 100%)"
          shadowColor="rgba(30, 58, 138, 0.6)"
        />

        <div className="competencies-content">
          <div className="comp-top-row">
            {compItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={index}
                  className="comp-item"
                  onClick={() => setActiveIndex(isActive ? null : index)} // Toggle active state on click
                  style={{ cursor: 'pointer' }}
                >
                  {/* Circle Wrapper */}
                  <motion.div 
                    className="comp-circle-wrapper"
                    animate={{ 
                      scale: isActive ? 1.15 : 0.9,
                      opacity: isActive ? 1 : 0.5,
                      borderColor: isActive ? item.color : 'transparent',
                      boxShadow: isActive 
                        ? `0 0 25px ${item.color}50` 
                        : '0 0 10px rgba(0,0,0,0.1)'
                    }}
                    whileHover={{ scale: 1.05, opacity: 0.8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <img 
                      src={content.competencies.find(c => c.title.includes(item.searchTerm))?.image || ''} 
                      alt={item.title} 
                      className="comp-circle-img" 
                    />
                  </motion.div>

                  {/* Connector Line with animated height and vertical margins */}
                  <motion.div 
                    className="comp-connector"
                    initial={{ height: 0, marginTop: 0, marginBottom: 0 }}
                    animate={{ 
                      height: isActive ? 48 : 0,
                      marginTop: isActive ? 12 : 0,
                      marginBottom: isActive ? 12 : 0,
                      backgroundColor: isActive ? item.color : '#fdfbf7',
                    }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ width: '2px' }}
                  />

                  {/* Tooltip Card Container for animating height & overflow */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center' }}
                  >
                    <div 
                      className="comp-tooltip"
                      style={{ 
                        width: '280px',
                        border: `2px solid ${isActive ? item.color : 'transparent'}`,
                        boxShadow: isActive 
                          ? `0 12px 28px rgba(0,0,0,0.3), 0 0 15px ${item.color}20` 
                          : '0 10px 20px rgba(0,0,0,0.2)'
                      }}
                    >
                      <h3 style={{ color: item.color }}>
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Bottom row displaying inactive cards, as shown in the design mockup */}
          <div className="comp-bottom-row">
            {compItems.map((item, index) => {
              if (index === activeIndex) return null;
              return (
                <motion.div
                  key={index}
                  className="comp-bottom-card"
                  style={{
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 8px 20px rgba(0,0,0,0.15), 0 0 10px ${item.color}15`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 style={{ color: item.color }}>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="competencies-right">
          <motion.a 
            href="#industries" 
            className="btn-industries"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            INDUSTRIES <span className="arrows">&gt;&gt;</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
