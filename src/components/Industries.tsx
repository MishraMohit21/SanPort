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
