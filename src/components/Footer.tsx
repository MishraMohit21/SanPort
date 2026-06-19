import { motion } from 'framer-motion';
import { content } from '../data/content';
import { SectionHeading } from './SectionHeading';
import './Footer.css';

export function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        <SectionHeading 
          title="GET IN TOUCH" 
          textGradient="linear-gradient(180deg, #a855f7 0%, #9333ea 40%, #7e22ce 70%, #6b21a8 100%)"
          shadowColor="rgba(107, 33, 168, 0.6)"
        />

        <div className="footer-content">
          <div className="contact-cards">
            
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="contact-icon">@</div>
              <div className="contact-info">
                <h4>Email Address</h4>
                <p>sandeepkatariya@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h4>Phone Number</h4>
                <p>+91-9829011076</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                </svg>
              </div>
              <div className="contact-info">
                <h4>Address</h4>
                <p>Choudhary Dhaba, Marudhar Vihar,<br/>Khatipura Road, Jaipur, Rajasthan - 302012</p>
              </div>
            </motion.div>

          </div>
        </div>

        <div className="footer-right">
          <motion.div 
            className="footer-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="brown-glow"></div>
            <img src={content.about.photo} alt="Sandeep Katariya" className="footer-photo" />
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
