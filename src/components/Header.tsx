import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180; // Trigger threshold
      const sections = ['home', 'about', 'education', 'experience', 'competencies', 'achievements', 'industries', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollSpy);
    
    // Initial call
    handleScroll();
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Competencies', href: '#competencies', id: 'competencies' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#home" className="nav-logo" onClick={() => setActiveSection('home')}>
          <img src={logoImg} alt="Dr. Sandeep Katariya" className="header-logo-img" />
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
