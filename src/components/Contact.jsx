import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success banner after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-grid">
        {/* Left Column: Info cards */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="info-title">Let's Connect</h3>
          <p className="info-subtitle">
            I am always open to discussing new projects, internship opportunities, creative ideas, or partnerships. Feel free to reach out to me!
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item glass-panel">
              <div className="detail-icon-box email">
                <FaEnvelope />
              </div>
              <div className="detail-text-box">
                <span className="detail-label">Email Me</span>
                <a href="mailto:konikirahulkumar@gmail.com" className="detail-val">
                  konikirahulkumar@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail-item glass-panel">
              <div className="detail-icon-box location">
                <FaMapMarkerAlt />
              </div>
              <div className="detail-text-box">
                <span className="detail-label">My Location</span>
                <span className="detail-val">Guntur, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <div className="social-links-box">
            <span className="social-box-title">Follow My Profiles</span>
            <div className="social-badges-row">
              <motion.a 
                href="https://github.com/rahul20051122" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-badge github glass-panel"
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <FaGithub /> GitHub
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/koniki-rahul-kumar-7a7a8b339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-badge linkedin glass-panel"
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact form */}
        <motion.div 
          className="contact-form-container glass-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                className="success-wrapper"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring' }}
              >
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Koniki Rahul Kumar will get back to you shortly.</p>
                <button className="btn btn-secondary" onClick={() => setIsSuccess(false)}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleFormSubmit}
                className="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiry about..."
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello, I would like to talk about..."
                  ></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="loader-dots">Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
