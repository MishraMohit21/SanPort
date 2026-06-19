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
      baseText: "Successfully scaled two businesses, each in different sectors, showcasing adaptability and entrepreneurial expertise.",
      extendedText: "Managed over 100 employees across multiple business divisions. Streamlined inter-corporate relations between LunarEdge IT, Krishlogix shipping, and KrishVana logistics to optimize growth.",
      imgKey: "Leadership"
    },
    {
      id: 1,
      title: "Operational Milestones",
      class: "card-milestones",
      color: "#be123c",
      baseText: "Reduced operational costs at Krishna Flour Mill through automation and process optimization.",
      extendedText: "Integrated modern PLC processing controls and automated packaging lines, improving flour production capacity by 20% while cutting energy waste.",
      imgKey: "Milestones"
    },
    {
      id: 2,
      title: "Revenue Growth",
      class: "card-growth",
      color: "#0369a1",
      baseText: "Increased annual turnover at LunarEdge IT Services through strategic market expansion and innovation.",
      extendedText: "Directed the software development division to launch state-of-the-art enterprise tracking tools, acquiring 15 high-value corporate clients in the first fiscal year.",
      imgKey: "Growth"
    },
    {
      id: 3,
      title: "Industry Recognition",
      class: "card-recognition",
      color: "#0f766e",
      baseText: "Earned accolades for sustainable business practices and technological contributions in both domains.",
      extendedText: "Presented at the national Agro Summit on integration of solar-powered silo storage, receiving the Green Enterprise Certificate.",
      imgKey: "Trophy"
    },
    {
      id: 4,
      title: "Innovation Champion",
      class: "card-innovation",
      color: "#6b21a8",
      baseText: "Launched new products/services at LunarEdge IT Services, resulting in increased market share.",
      extendedText: "Pioneered development of AI-driven supply chain trackers used across partner companies to track sales, shipping routes, and product freshness.",
      imgKey: "Innovation"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container achievements-container">
        <SectionHeading 
          title="ACHIEVEMENTS" 
          textGradient="linear-gradient(180deg, #b84800 0%, #ff8c00 40%, #e06000 70%, #c05000 100%)"
          shadowColor="rgba(80, 35, 5, 0.6)"
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
