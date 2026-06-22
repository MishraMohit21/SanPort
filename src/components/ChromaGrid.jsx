import { useState } from 'react';
import './ChromaGrid.css';

export const ChromaGrid = ({
  items,
  className = '',
  columns = 4,
  rows = 2
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #000)',
      url: ''
    }
  ];
  const data = items?.length ? items : demo;

  const handleCardClick = (index, url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setExpandedIndex(prev => (prev === index ? null : index));
    }
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      className={`chroma-grid ${className}`}
      style={{
        '--cols': columns,
        '--rows': rows
      }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className={`chroma-card ${expandedIndex === i ? 'expanded' : ''}`}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(i, c.url)}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient,
            cursor: 'pointer'
          }}
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          
          <footer className="chroma-info-default">
            <h3 className="name" style={{ color: c.borderColor }}>{c.title}</h3>
            <span className="click-prompt">Click to details</span>
          </footer>

          <div className={`chroma-overlay-content ${expandedIndex === i ? 'show' : ''}`}>
            <h3 className="overlay-title" style={{ color: c.borderColor }}>{c.title}</h3>
            <p className="overlay-desc">{c.subtitle}</p>
            <span className="close-prompt">Close ▲</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
