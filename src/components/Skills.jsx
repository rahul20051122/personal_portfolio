import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 85, icon: <FaJava /> },
      { name: 'Python', level: 90, icon: <FaPython /> },
      { name: 'C', level: 75, icon: <SiC /> },
      { name: 'JavaScript', level: 80, icon: <FaJs /> }
    ]
  },
  {
    title: 'Web & Databases',
    skills: [
      { name: 'React.js', level: 85, icon: <FaReact /> },
      { name: 'HTML', level: 95, icon: <FaHtml5 /> },
      { name: 'CSS', level: 90, icon: <FaCss3Alt /> },
      { name: 'SQL', level: 80, icon: <FaDatabase /> }
    ]
  },
  {
    title: 'Tools & Platform',
    skills: [
      { name: 'Git', level: 85, icon: <FaGitAlt /> },
      { name: 'GitHub', level: 90, icon: <FaGithub /> },
      { name: 'VS Code', level: 95, icon: <VscCode /> }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-categories-grid">
        {skillCategories.map((category, catIdx) => (
          <motion.div 
            key={category.title}
            className="skills-category-panel glass-panel"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="category-title">{category.title}</h3>
            
            <div className="skills-list">
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="skill-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="skill-info">
                    <div className="skill-icon-name">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  <div className="progress-bar-container">
                    <motion.div 
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
