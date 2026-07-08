import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLaptopCode, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import projectAttendanceImg from '../assets/project_attendance.png';
import projectLandingImg from '../assets/project_landing.png';
import projectCalculatorImg from '../assets/project_calculator.png';
import '../styles/Projects.css';

const projectsList = [
  {
    id: 1,
    title: 'Smart Attendance System',
    description: 'A Flask-based Smart Attendance Management System utilizing advanced Face Recognition technology (OpenCV) to automatically identify students and log their attendance in real-time. Features a clean dashboard with Home, Dashboard, Analytics, Diagnostics, and About sections, along with Take Attendance and Register workflows.',
    technologies: ['Python', 'Flask', 'OpenCV', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahul20051122/SmartAttendanceSystem',
    image: projectAttendanceImg
  },
  {
    id: 2,
    title: 'Responsive Landing Page',
    description: 'A modern, responsive landing page built for NexusFlow — a DevOps automation platform. Features a dark-themed hero section with a bold heading ("The Autonomous DevOps Platform"), smooth call-to-action buttons, navbar with Book Demo, and professional layout optimized for all device resolutions.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahul20051122/SCT_WD_1',
    image: projectLandingImg
  },
  {
    id: 3,
    title: 'Calculator Web Application',
    description: 'An interactive NovaCalc web calculator supporting full arithmetic operations (+, −, ×, ÷, %, ±). Features a dark modern UI with formula display (e.g. 9 + 8 = 17), backspace, clear, and a teal equals button. Supports history tracking and light/dark mode toggle.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rahul20051122/SCT_WD_2',
    image: projectCalculatorImg
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projectsList.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card glass-panel"
            variants={projectVariants}
            whileHover={{ y: -8 }}
          >
            {/* Screenshot Thumbnail */}
            <div className="project-visual-wrapper" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} className="project-card-image" />
              <div className="project-img-overlay">
                <span className="project-expand-btn">
                  <FaExternalLinkAlt /> View Details
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="project-info-wrapper">
              <div className="project-header">
                <FaLaptopCode className="proj-title-icon" />
                <h3 className="project-title-text">{project.title}</h3>
              </div>

              <p className="project-desc-text">{project.description}</p>

              {/* Technologies */}
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="project-links">
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="btn-icon" /> View Code
                </motion.a>
                <motion.button
                  className="project-btn-link"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="btn-icon" /> View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Screenshot Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-content glass-panel"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="proj-modal-close-btn" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>

              <div className="proj-modal-img-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} className="proj-modal-img" />
              </div>

              <div className="proj-modal-footer">
                <div className="proj-modal-header-row">
                  <FaLaptopCode className="proj-title-icon" />
                  <h3 className="project-title-text">{selectedProject.title}</h3>
                </div>
                <p className="project-desc-text">{selectedProject.description}</p>
                <div className="project-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links" style={{ marginTop: '16px' }}>
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="btn-icon" /> View Code on GitHub
                  </motion.a>
                  <button className="project-btn-link" onClick={() => setSelectedProject(null)}>
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
