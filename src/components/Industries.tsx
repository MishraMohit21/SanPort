import { motion } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
// @ts-ignore
import { ChromaGrid } from './ChromaGrid';
import './Industries.css';

export function Industries() {

  const getTextColor = (title: string) => {
    switch(title) {
      case 'Agriculture': return '#84cc16'; // Light Lime Green
      case 'Agro Trading': return '#06b6d4'; // Cyan
      case 'Manufacturing': return '#f97316'; // Orange
      case 'Shipping & Logistics': return '#818cf8'; // Indigo
      case 'Infrastructure': return '#f59e0b'; // Amber
      case 'Mining': return '#10b981'; // Emerald
      case 'Education': return '#f43f5e'; // Rose
      default: return '#cbd5e1';
    }
  };

  const displayIndustries = [
    { title: 'Agriculture', imgTitle: 'Agriculture', desc: 'Driving innovation in sustainable agribusiness through modern cultivation techniques, smart farming integration, and resource optimization.' },
    { title: 'Agro Trading', imgTitle: 'Agri-Tech', desc: 'Facilitating international trade networks with high-efficiency distribution systems for premium agricultural commodities and processed goods.' },
    { title: 'Manufacturing', imgTitle: 'Manufacturing', desc: 'Operating state-of-the-art milling facilities and automated processing systems to ensure production excellence and strict quality standards.' },
    { title: 'Shipping & Logistics', imgTitle: 'Ports & Shipping', desc: 'Managing robust global supply chains, freight operations, and custom clearance processes with precision and reliable execution.' },
    { title: 'Infrastructure', imgTitle: 'Infrastructure', desc: 'Developing high-capacity warehousing, storage complexes, and transportation networks to power regional industrial growth.' },
    { title: 'Mining', imgTitle: 'Mining', desc: 'Orchestrating sustainable mineral extraction and resource processing pipelines to fuel industrial manufacturing supply chains.' },
    { title: 'Education', imgTitle: 'Education', desc: 'Providing professional internships and industry-standard training, alongside planning strategic initiatives in the government sector.' }
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="container industries-container">
        <SectionHeading 
          title="INDUSTRIES" 
          textGradient="linear-gradient(180deg, #06b6d4 0%, #0891b2 40%, #0369a1 70%, #075985 100%)"
          shadowColor="rgba(3, 105, 161, 0.6)"
        />

        <div className="industries-content" style={{ position: 'relative', marginTop: '40px', width: '100%' }}>
          <ChromaGrid 
            items={displayIndustries.map((ind, index) => {
              const imageInfo = content.industries.find(i => i.title === ind.imgTitle) || content.industries[index];
              const color = getTextColor(ind.title);
              return {
                title: ind.title,
                subtitle: ind.desc,
                image: imageInfo?.image || '',
                borderColor: color,
                gradient: `linear-gradient(145deg, ${color}30, #000)`,
                url: ''
              };
            })}
            columns={4}
            radius={250}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
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
