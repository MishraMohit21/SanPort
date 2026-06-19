import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Me', href: '#about', active: false },
    { name: 'Education', href: '#education', active: false },
    { name: 'Experience', href: '#experience', active: false },
    { name: 'Competencies', href: '#competencies', active: false },
    { name: 'Achievements', href: '#achievements', active: false },
    { name: 'Industries', href: '#industries', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`nav-link ${link.active ? 'active' : ''}`}>
              {link.name}
            </a>
          ))}
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`mobile-nav-link ${link.active ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
