import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaBullseye, FaInfoCircle } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div 
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Bio Card */}
        <motion.div className="about-card main-bio glass-panel" variants={itemVariants}>
          <div className="card-header">
            <FaInfoCircle className="card-icon bio-icon" />
            <h3>My Story</h3>
          </div>
          <p className="about-bio-text">
            I am <strong>Koniki Rahul Kumar</strong>, a passionate Computer Science and Engineering student who enjoys building modern, robust web applications and solving real-world challenges through code.
          </p>
          <p className="about-bio-text">
            I love learning new technologies, experimenting with developer tools, and finding elegant engineering solutions. My focus ranges from frontend React UI craft to python scripting and OpenCV integrations.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div className="about-card education-card glass-panel" variants={itemVariants}>
          <div className="card-header">
            <FaGraduationCap className="card-icon edu-icon" />
            <h3>Education</h3>
          </div>
          <div className="education-details">
            <h4 className="degree">3rd Year B.Tech Student</h4>
            <p className="department">Computer Science and Engineering</p>
            <p className="college">Vasireddy Venkatadri International Technological University</p>
            <div className="location-wrapper">
              <FaMapMarkerAlt className="loc-icon" />
              <span>Guntur, Andhra Pradesh, India</span>
            </div>
          </div>
        </motion.div>

        {/* Interests Card */}
        <motion.div className="about-card interests-card glass-panel" variants={itemVariants}>
          <div className="card-header">
            <FaCode className="card-icon interest-icon" />
            <h3>Core Interests</h3>
          </div>
          <div className="interests-grid">
            <div className="interest-badge">Full Stack Development</div>
            <div className="interest-badge">Artificial Intelligence</div>
            <div className="interest-badge">Python Development</div>
            <div className="interest-badge">React & Frontend UI</div>
            <div className="interest-badge">Computer Vision (OpenCV)</div>
            <div className="interest-badge">Java Programming</div>
          </div>
        </motion.div>

        {/* Goals Card */}
        <motion.div className="about-card goals-card glass-panel" variants={itemVariants}>
          <div className="card-header">
            <FaBullseye className="card-icon goal-icon" />
            <h3>My Goal</h3>
          </div>
          <p className="goal-text">
            My goal is to become an expert Full Stack Developer, crafting high-performance, accessible, and delightful digital products. I aim to contribute to innovative software solutions and work with collaborative, forward-thinking teams.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
