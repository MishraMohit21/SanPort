import { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import './Achievements.css';

export function Achievements() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default to first expanded

  const achievementsData = [
    {
      id: 0,
      title: "Leadership Excellence",
      class: "card-leadership",
      color: "#047857",
      baseText: "Successfully scaled multiple businesses across distinct sectors, demonstrating strategic adaptability and entrepreneurial leadership.",
      extendedText: "Directed operations and strategic alignment for over 100 employees across corporate divisions. Harmonized operational synergies between LunarEdge IT, Krishlogix shipping, and KrishVana logistics to drive sustained organizational growth.",
      imgKey: "Leadership"
    },
    {
      id: 1,
      title: "Operational Milestones",
      class: "card-milestones",
      color: "#be123c",
      baseText: "Optimized operational efficiency and minimized production costs at Krishna Flour Mill through automation.",
      extendedText: "Spearheaded the integration of PLC processing controls and automated packaging systems, increasing throughput by 20% while achieving significant energy savings.",
      imgKey: "Milestones"
    },
    {
      id: 2,
      title: "Revenue Growth",
      class: "card-growth",
      color: "#0369a1",
      baseText: "Drove revenue expansion and market penetration for LunarEdge IT Services through product innovation.",
      extendedText: "Led the software development division to launch enterprise tracking platforms, securing 15 enterprise-level clients within the first fiscal year.",
      imgKey: "Growth"
    },
    {
      id: 3,
      title: "Industry Recognition",
      class: "card-recognition",
      color: "#0f766e",
      baseText: "Recognized for pioneering sustainable practices and technological contributions across multiple business domains.",
      extendedText: "Honored at the National Agro Summit for implementing solar-powered storage systems, receiving the Green Enterprise Certification.",
      imgKey: "Trophy"
    },
    {
      id: 4,
      title: "Innovation Champion",
      class: "card-innovation",
      color: "#6b21a8",
      baseText: "Introduced advanced digital services at LunarEdge IT Services to capture new market opportunities.",
      extendedText: "Pioneered the deployment of AI-driven supply chain tracking systems used across portfolio companies to optimize routing, sales reporting, and quality control.",
      imgKey: "Innovation"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container achievements-container">
        <SectionHeading 
          title="ACHIEVEMENTS" 
          textGradient="linear-gradient(180deg, #b84800 0%, #ff8c00 40%, #e06000 70%, #c05000 100%)"
          shadowColor="rgba(249, 115, 22, 0.45)"
        />

        <div className="achievements-content">
          <div className="achievements-grid">
            {achievementsData.map((ach, index) => {
              const isActive = expandedIndex === index;
              const imgInfo = content.achievements.find(a => a.title === ach.imgKey) || content.achievements[index];

              return (
                <motion.div 
                  key={index}
                  className={`achievement-card ${ach.class}`}
                  onClick={() => setExpandedIndex(isActive ? null : index)} // Toggle active
                  style={{ cursor: 'pointer', border: isActive ? `2.5px solid ${ach.color}` : '2.5px solid transparent', boxSizing: 'border-box' }}
                  animate={{ 
                    scale: isActive ? 1.03 : 0.97,
                    opacity: expandedIndex !== null ? (isActive ? 1 : 0.6) : 0.9,
                    boxShadow: isActive 
                      ? `0 15px 30px rgba(0,0,0,0.5), 0 0 15px ${ach.color}25` 
                      : '0 6px 15px rgba(0,0,0,0.15)'
                  }}
                  whileHover={{ scale: 1.01, opacity: 0.95 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <div className="ach-text">
                    <h3>{ach.title}</h3>
                    
                    {/* Animated Text Container */}
                    <p style={{ color: 'rgba(15, 23, 42, 0.95)', fontWeight: 500, fontSize: '13px', lineHeight: '1.55' }}>
                      {isActive ? ach.extendedText : ach.baseText}
                    </p>
                  </div>
                  
                  {/* Image fades out completely when card is expanded to show details */}
                  <motion.img 
                    src={imgInfo?.image || ''} 
                    alt={ach.title} 
                    className="ach-img" 
                    animate={{ 
                      opacity: isActive ? 0 : 1,
                      scale: isActive ? 0.9 : 1,
                      y: isActive ? 20 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Tiny expand indicator */}
                  <div style={{ position: 'absolute', bottom: '12px', right: '12px', zIndex: 10, color: ach.color, fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {isActive ? 'Collapse ▲' : 'Details ▼'}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="achievements-right">
          <motion.a 
            href="#competencies" 
            className="btn-competencies"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            COMPETENCIES <span className="arrows">&gt;&gt;</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
