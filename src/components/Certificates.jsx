import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import certSkillcraft from '../assets/cert_skillcraft.png';
import certNptel from '../assets/cert_nptel.png';
import certCodechef from '../assets/cert_codechef.png';
import '../styles/Certificates.css';

const certificatesList = [
  {
    id: 1,
    title: 'Web Development Internship',
    issuer: 'SkillCraft Technology',
    date: 'June 2026',
    credentialId: 'SCT/MAY26/7080',
    image: certSkillcraft,
    description: 'Completed a 1-month internship from 15th May, 2026 to 14th June, 2026 in Web Development. Verified by SkillCraft Technology. Credential ID: SCT/MAY26/7080.',
    theme: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%)'
  },
  {
    id: 2,
    title: 'Programming in Java (Elite)',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'Jan-Apr 2026',
    credentialId: 'NPTEL26CS36S1150802509',
    image: certNptel,
    description: 'Elite NPTEL certified with a consolidated score of 85% (Online Assignments: 24.88/25, Proctored Exam: 60/75) for the 12-week course. Roll No: NPTEL26CS36S1150802509.',
    theme: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)'
  },
  {
    id: 3,
    title: '500 Difficulty Rating Practice',
    issuer: 'CodeChef',
    date: 'Feb 2026',
    credentialId: 'ccb9c75',
    image: certCodechef,
    description: 'Completed all the practice problems of 500 difficulty rating by CodeChef. Username: vvit24bq1a05n3. Certificate ID: ccb9c75. Issued on 22nd February 2026.',
    theme: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%)'
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="certificates-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      <div className="certificates-grid">
        {certificatesList.map((cert) => (
          <motion.div 
            key={cert.id}
            className="certificate-card glass-panel"
            style={{ background: cert.theme }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => setSelectedCert(cert)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: cert.id * 0.1 }}
          >
            {/* Image Thumbnail Preview */}
            <div className="cert-thumbnail-container">
              <img src={cert.image} alt={cert.title} className="cert-thumbnail-img" />
              <div className="cert-thumbnail-overlay">
                <span className="overlay-btn">Click to Expand</span>
              </div>
            </div>

            <div className="cert-header">
              <div className="award-icon-box">
                <FaAward className="cert-award-icon" />
              </div>
              <span className="cert-date">
                <FaCalendarAlt className="date-icon" /> {cert.date}
              </span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-desc">{cert.description}</p>
            
            <div className="cert-action-hint">
              <span>View Full Certificate</span>
              <FaExternalLinkAlt className="hint-arrow" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content glass-panel"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>
                <FaTimes />
              </button>

              {/* Real Certificate Image Layout */}
              <div className="official-cert-image-container">
                <img src={selectedCert.image} alt={selectedCert.title} className="official-cert-image-display" />
              </div>

              {/* Info & Modal Footer */}
              <div className="modal-details-footer">
                <p className="modal-cert-desc">{selectedCert.description}</p>
                <div className="modal-actions-bar">
                  <button className="btn btn-secondary" onClick={() => setSelectedCert(null)}>Close Viewer</button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
