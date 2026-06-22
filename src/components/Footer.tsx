import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './Footer.css';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch("https://formsubmit.co/ajax/Sandeepkatariya@krishvana.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Portfolio Inquiry: ${formData.subject || 'No Subject'}`,
          message: formData.message,
          _replyto: formData.email
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <footer id="contact" className="footer-section">
      {/* Premium ambient glows */}
      <div className="footer-bg-glow glow-1"></div>
      <div className="footer-bg-glow glow-2"></div>

      <div className="container">
        <SectionHeading 
          title="GET IN TOUCH" 
          textGradient="linear-gradient(180deg, #a855f7 0%, #9333ea 40%, #7e22ce 70%, #6b21a8 100%)"
          shadowColor="rgba(107, 33, 168, 0.6)"
        />

        <div className="footer-grid-layout">
          
          {/* Left: Unified Premium Glassmorphic Card */}
          <div className="footer-left-col">
            <motion.div 
              className="premium-contact-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Tech corner accents */}
              <div className="card-corner top-left"></div>
              <div className="card-corner top-right"></div>
              <div className="card-corner bottom-left"></div>
              <div className="card-corner bottom-right"></div>

              <div className="card-header">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">Have a query, business proposal, or collaboration idea? Drop a line below.</p>
              </div>

              {/* Email quick links */}
              <div className="quick-emails">
                <a href="mailto:Sandeep.katariya@krishvana.com" className="email-badge">
                  <div className="badge-icon">
                    <Mail size={16} />
                  </div>
                  <div className="badge-details">
                    <span className="badge-label">Primary Business</span>
                    <span className="badge-val">Sandeep.katariya@krishvana.com</span>
                  </div>
                </a>
                
                <a href="mailto:sandeepkatariya@gmail.com" className="email-badge">
                  <div className="badge-icon">
                    <Mail size={16} />
                  </div>
                  <div className="badge-details">
                    <span className="badge-label">Alternative / Personal</span>
                    <span className="badge-val">sandeepkatariya@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-row">
                  <div className="input-group">
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder=" "
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      disabled={status === 'loading'}
                    />
                    <label htmlFor="name">Your Name *</label>
                    <div className="input-line"></div>
                  </div>

                  <div className="input-group">
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder=" "
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      disabled={status === 'loading'}
                    />
                    <label htmlFor="email">Your Email *</label>
                    <div className="input-line"></div>
                  </div>
                </div>

                <div className="input-group">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder=" "
                    value={formData.subject} 
                    onChange={handleChange} 
                    disabled={status === 'loading'}
                  />
                  <label htmlFor="subject">Subject</label>
                  <div className="input-line"></div>
                </div>

                <div className="input-group">
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder=" "
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows={4}
                    disabled={status === 'loading'}
                  ></textarea>
                  <label htmlFor="message">Message *</label>
                  <div className="input-line"></div>
                </div>

                <div className="form-action-row">
                  <AnimatePresence mode="wait">
                    {status === 'success' && (
                      <motion.div 
                        className="status-banner success"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                      >
                        <CheckCircle2 size={16} />
                        <span>Inquiry sent successfully!</span>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div 
                        className="status-banner error"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                      >
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button 
                    type="submit" 
                    className={`premium-submit ${status === 'loading' ? 'loading' : ''}`}
                    disabled={status === 'loading'}
                  >
                    <span className="submit-btn-glow"></span>
                    <span className="submit-btn-text">
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="spinner" size={16} />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

            </motion.div>
          </div>

          {/* Right: Portrait Image with premium tech frame */}
          <div className="footer-right-col">
            <motion.div 
              className="premium-image-frame"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Sci-fi frame corners */}
              <div className="hud-corner top-left"></div>
              <div className="hud-corner top-right"></div>
              <div className="hud-corner bottom-left"></div>
              <div className="hud-corner bottom-right"></div>
              
              <div className="glow-backdrop"></div>
              <img src={content.about.photo} alt="Sandeep Katariya" className="premium-photo" />
            </motion.div>
          </div>

        </div>
      </div>
    </footer>
  );
}
