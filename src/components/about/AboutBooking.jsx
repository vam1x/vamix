import React from 'react';
import { motion } from 'framer-motion';
import RollingText from '../RollingText';
import SectionGrid from '../SectionGrid';
import './about-booking.css';

const auroraImage = 'https://framerusercontent.com/images/0iIr9plKeMJd8dBb4O7iHnWw.png?scale-down-to=512&width=676&height=563';
const rubyImage = 'https://framerusercontent.com/images/awFufuyIlbDdk2me7dySF9Y3r8.png?scale-down-to=512&width=2048&height=2048';

export default function AboutBooking({ navigate }) {
  const handleBooking = (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (navigate) {
      event.preventDefault();
      navigate('/contact');
    }
  };

  return (
    <section className="about-booking-section" id="book-call" aria-labelledby="about-booking-title">
      <SectionGrid theme="light" showTopLine showBottomLine={false} />
      <img className="about-booking-aurora" src={auroraImage} alt="" aria-hidden="true" />

      <div className="about-booking-grid">
        <div className="about-booking-badge">
          <span className="about-booking-dot" aria-hidden="true" />
          <span>YOUR FIRST STEP</span>
        </div>

        <div className="about-booking-main">
          <motion.h2
            id="about-booking-title"
            className="about-booking-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            Book a free <span className="about-booking-title-second">30-minute call.</span>
          </motion.h2>
          <a className="about-booking-button" href="/contact" onClick={handleBooking} aria-label="Book a call">
            <span className="about-booking-button-text"><RollingText text="BOOK A CALL" /></span>
            <svg className="about-booking-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="m7 3 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="about-booking-rainbow" aria-hidden="true" />
          </a>
        </div>

        <div className="about-booking-quote-block">
          <p className="about-booking-quote">My job is making sure you leave our first call with clarity and next steps.</p>
          <div className="about-booking-author">
            <div className="about-booking-author-text">
              <span>RUBY RATTEY</span>
              <span>CLIENT SUCCESS MANAGER</span>
            </div>
            <img src={rubyImage} alt="Ruby Rattey" />
          </div>
        </div>
      </div>
    </section>
  );
}
