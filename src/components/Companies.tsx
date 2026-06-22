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
        'Modernized milling infrastructure to optimize energy efficiency and implement sustainable agro-processing technologies.',
        'Scaled the commercial presence of signature brands (Sriyan, Nokha, and Jaypore), significantly boosting market share.',
        'Established strong distribution partnerships, enhancing value delivery across regional retail and wholesale channels.',
        'Formulated a robust end-to-end supply chain network to ensure consistent and cost-effective product flow.'
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
        'Directed a team of 50+ technical professionals to deliver high-impact enterprise software and IT services across multiple industries.',
        'Pioneered the development of proprietary digital solutions, establishing key differentiators in a competitive tech landscape.',
        'Implemented modern project management frameworks and automated workflows to increase project delivery efficiency.'
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
        'Architected an expansive domestic and international logistics network, optimizing transit routes and expanding market presence in emerging cities.',
        'Deployed enterprise-grade tracking platforms to provide real-time shipment visibility and enhance operational transparency for clients.',
        'Diversified service offerings by integrating multimodal transit options and securing long-term partner contracts to reduce freight overhead.'
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
        'Oversee the design and construction of high-capacity agri-storage and industrial processing plants, boosting regional supply chain capabilities.',
        'Pioneered eco-friendly construction standards, prioritizing energy conservation and sustainable materials across all infrastructure projects.',
        'Cultivated strategic public-private partnerships (PPP) and successfully executed key infrastructure initiatives on budget.'
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
        'Established global sourcing and trade corridors for premium agricultural products, including grains, flour, and processed items.',
        'Instituted strict quality control and safety protocols to align with international regulatory standards, minimizing product loss.',
        'Drove market penetration and volume growth by establishing distribution partnerships with leading regional wholesalers.'
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
