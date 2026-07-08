import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import '../styles/Hero.css';

const roles = ["Full Stack Developer", "Python Developer", "React Developer", "AI Enthusiast"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer;
    const activeRole = roles[currentRoleIndex];

    if (!isDeleting && currentText === activeRole) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting
      const delay = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? activeRole.substring(0, prev.length - 1)
            : activeRole.substring(0, prev.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleScrollTo = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
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

  const downloadMockResume = () => {
    // Generate a simple text-based resume data URI to download, representing a modern approach
    const resumeContent = `KONIKI RAHUL KUMAR
Full Stack Developer | Python Developer | React Developer | AI Enthusiast
Guntur, Andhra Pradesh, India
Email: konikirahulkumar@gmail.com
GitHub: https://github.com/rahul20051122
LinkedIn: https://www.linkedin.com/in/koniki-rahul-kumar-7a7a8b339

EDUCATION:
Vasireddy Venkatadri International Technological University
3rd Year Computer Science and Engineering Student

SKILLS:
Java, Python, C, HTML, CSS, JavaScript, React.js, SQL, Git, GitHub, VS Code

PROJECTS:
1. Smart Attendance System
A Flask-based Smart Attendance Management System using Face Recognition.
GitHub: https://github.com/rahul20051122/SmartAttendanceSystem

2. Responsive Landing Page
Modern responsive landing page with engaging user experience.
GitHub: https://github.com/rahul20051122/SCT_WD_1

3. Calculator Web Application
Responsive calculator application with arithmetic operations.
GitHub: https://github.com/rahul20051122/SCT_WD_2

CERTIFICATES:
- SkillCraft Technology Web Development Internship (Credential ID: SCT/MAY26/7080)
- NPTEL Programming in Java (Elite Category - Score: 85%, Roll: NPTEL26CS36S1150802509)
- CodeChef 500 Difficulty Rating Practice (Credential ID: ccb9c75, Username: vvit24bq1a05n3)
`;
    const element = document.createElement("a");
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Koniki_Rahul_Kumar_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Left text column */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting glass-panel">Welcome to my Portfolio</span>
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Koniki Rahul Kumar</span>
          </h1>
          
          <div className="hero-role-wrapper">
            <span className="hero-role-prefix">I am a </span>
            <span className="hero-role-typed">{currentText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-description">
            3rd Year Computer Science and Engineering student at Vasireddy Venkatadri International Technological University. Passionate about building modern, futuristic web solutions with robust architectures.
          </p>

          {/* Social Links */}
          <div className="hero-socials">
            <motion.a 
              href="https://github.com/rahul20051122" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#f3f4f6' }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/koniki-rahul-kumar-7a7a8b339" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#3b82f6' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:konikirahulkumar@gmail.com"
              whileHover={{ y: -5, color: '#ef4444' }}
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          {/* Actions */}
          <div className="hero-actions">
            <motion.button 
              className="btn btn-primary"
              onClick={downloadMockResume}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="btn-icon" /> Download Resume
            </motion.button>
            
            <motion.button 
              className="btn btn-secondary"
              onClick={() => handleScrollTo('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects <FaArrowRight className="btn-icon-right" />
            </motion.button>

            <motion.button 
              className="btn btn-outline"
              onClick={() => handleScrollTo('#contact')}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent-secondary)', color: '#fff' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right image column */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-image-wrapper">
            <div className="glow-ring"></div>
            <div className="glow-ring-inner"></div>
            <img src={profileImg} alt="Koniki Rahul Kumar" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
