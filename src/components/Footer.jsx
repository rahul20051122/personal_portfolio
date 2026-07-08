import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Bar */}
        <div className="footer-socials">
          <a href="https://github.com/rahul20051122" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/koniki-rahul-kumar-7a7a8b339" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:konikirahulkumar@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        {/* Copy text */}
        <p className="footer-text">
          &copy; {currentYear} <span className="footer-name">Koniki Rahul Kumar</span>. All rights reserved.
        </p>

        {/* Build label */}
        <p className="footer-credits">
          Made with <FaHeart className="heart-icon" /> using React, Vite & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
