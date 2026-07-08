import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';
import '../styles/Navbar.css';

const navLinks = [
  { name: 'Home', target: '#home' },
  { name: 'About', target: '#about' },
  { name: 'Skills', target: '#skills' },
  { name: 'Projects', target: '#projects' },
  { name: 'Certificates', target: '#certificates' },
  { name: 'Contact', target: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Change navbar styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position
      const sections = navLinks.map(link => {
        const id = link.target.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on viewport
          return {
            name: link.name,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      // Find section currently in viewport
      const current = sections.find(sec => sec.top <= 160 && sec.bottom > 160);
      if (current) {
        setActiveSection(current.name);
      } else if (window.scrollY < 100) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (name, target) => {
    setActiveSection(name);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('Home', '#home'); }}>
            <FaTerminal className="logo-icon" />
            <span className="logo-text">Rahul<span className="text-glow">.dev</span></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.target}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.name, link.target);
                    }}
                    className={`nav-link ${activeSection === link.name ? 'active' : ''}`}
                  >
                    {link.name}
                    {activeSection === link.name && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="active-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-nav-overlay glass-panel"
          >
            <nav className="mobile-nav">
              <ul>
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={link.target}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.name, link.target);
                      }}
                      className={`mobile-nav-link ${activeSection === link.name ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
