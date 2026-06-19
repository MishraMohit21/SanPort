import { useState } from 'react';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import './Companies.css';

export function Companies() {
  const companyData = [
    {
      id: 1,
      name: 'Krishna Flour Mill',
      fullName: 'Krishna Flour Mill',
      role: '- Partner',
      colorClass: 'green-footer',
      logoName: 'Krishna Flour Mill',
      imgTitle: 'Flour Milling',
      bullets: [
        'Transformed operations into a modern, eco-friendly setup using sustainable practices and technology.',
        'Built a strong Sriyan, Nokha and Jaypore brand, driving notable growth in visibility and market share.',
        'Expanded reach through strategic partnerships, strengthening distribution and customer networks.',
        'Developed the great supply chain network through distribution'
      ]
    },
    {
      id: 2,
      name: 'Lunar Edge',
      fullName: 'LunarEdge IT Services Private Limited',
      role: '- Director',
      colorClass: 'blue-footer',
      logoName: 'Lunar Edge',
      imgTitle: 'IT & Technology',
      bullets: [
        'Led a 50+ member team delivering innovative IT solutions across multiple industries while expanding operations into the IT sector with consistent annual revenue growth.',
        'Drove development of proprietary software solutions, enhancing client satisfaction and market differentiation.',
        'Optimized internal operations through advanced project management tools and streamlined processes with innovations.'
      ]
    },
    {
      id: 3,
      name: 'Krish Logix',
      fullName: 'Krishlogix Private Limited',
      role: '- Director',
      colorClass: 'purple-footer',
      logoName: 'Krish Logix',
      imgTitle: 'Ports & Shipping',
      bullets: [
        'Built a high-performing domestic and international logistics network, optimizing routes and reducing delivery times while expanding into tier-2 and tier-3 cities.',
        'Implemented advanced digital tracking systems for Sales Visit, Inquiry & complete shipment visibility, strengthening customer trust and operational transparency.',
        'Expanded service portfolio and strategic partnerships, introducing multimodal transport solutions and securing long-term contracts that reduced overall freight costs.'
      ]
    },
    {
      id: 4,
      name: 'Krishvana Infra',
      fullName: 'Krishvana Infrastructure Private Limited',
      role: '- Director',
      colorClass: 'green-footer',
      logoName: 'Krishvana Infra',
      imgTitle: 'Mining',
      bullets: [
        'Directed design and construction of modern agri-storage and processing facilities, delivering turnkey projects that improved supply chain efficiency.',
        'Championed sustainable construction through energy-efficient designs, eco-friendly materials, and timely, on-budget project completion.',
        'Strengthened public-private collaborations, securing government contracts and maintaining high-quality standards across large-scale infrastructure projects.'
      ]
    },
    {
      id: 5,
      name: 'Krishvana Flour',
      fullName: 'Krishvana Global Grains Private Limited',
      role: '- Director',
      colorClass: 'olive-footer',
      logoName: 'Krishvana Flour',
      imgTitle: 'Farming',
      bullets: [
        'Developed an international sourcing and export network for premium grains, atta, and maida, while expanding the product range to pulses, cereals, and value-added items.',
        'Established modern quality control facilities to ensure compliance with global food safety standards and optimized supply chain operations, reducing waste and improving delivery timelines.',
        'Boosted market share through strategic partnerships with regional wholesalers and retailers.'
      ]
    }
  ];

  const [activeId, setActiveId] = useState(1);

  const getLogo = (name: string) => content.companies.find(c => c.name === name)?.logo || '';
  const getImage = (title: string) => content.industries.find(i => i.title === title)?.image || '';

  return (
    <section id="experience" className="experience-section">
      <div className="container experience-container">
        <SectionHeading 
          title="EXPERIENCE" 
          textGradient="linear-gradient(180deg, #a855f7 0%, #9333ea 40%, #7e22ce 70%, #6b21a8 100%)"
          shadowColor="rgba(107, 33, 168, 0.6)"
        />

        <div className="experience-content">
          <div className="experience-top">
            <div className="experience-accordion">
              {companyData.map((comp) => {
                const isExpanded = comp.id === activeId;
                return (
                  <div
                    key={comp.id}
                    className={`experience-card ${isExpanded ? 'expanded' : 'collapsed'} border-${comp.colorClass}`}
                    onClick={() => !isExpanded && setActiveId(comp.id)}
                  >
                    {/* Collapsed View: Always in the DOM, toggled via CSS */}
                    <div className="collapsed-content">
                      <div className="vertical-title">{comp.fullName}</div>
                      <div className="collapsed-logo-wrapper">
                        <img src={getLogo(comp.logoName)} alt="Logo" className="collapsed-logo" />
                      </div>
                    </div>

                    {/* Expanded View: Always in the DOM, toggled via CSS */}
                    <div className="expanded-content">
                      <img src={getImage(comp.imgTitle)} alt={comp.fullName} className="exp-card-img" />
                      <div className="exp-card-bullets">
                        <ul>
                          {comp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                      <div className={`exp-card-footer ${comp.colorClass}`}>
                        <img src={getLogo(comp.logoName)} alt="Logo" className="footer-logo" />
                        <div className="footer-text">
                          <h4>{comp.fullName}</h4>
                          <p>{comp.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="experience-action">
              <a href="#achievements" className="btn-achievements">
                ACHIEVEMENTS <span className="arrows">&gt;&gt;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
