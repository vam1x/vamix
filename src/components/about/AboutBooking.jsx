import React from 'react';
import { motion } from 'framer-motion';
import RollingText from '../RollingText';
import './about-booking.css';

const auroraImage = '/stats-gradient.webp';
const rubyImage = '/images/ruby-avatar.webp';

export default function AboutBooking({ navigate }) {
  const handleBooking = (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (navigate) {
      event.preventDefault();
      navigate('/contact');
    }
  };

  return (
    <section className="booking-band" id="swup-booking" aria-labelledby="booking-title">
      <div className="booking-hand" aria-hidden="true">
        <img src={auroraImage} alt="" width="676" height="563" loading="lazy" decoding="async" />
      </div>
      <div className="booking-grid" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="booking-rule" aria-hidden="true"></div>
      <span className="booking-corner booking-corner--left" aria-hidden="true"></span>
      <span className="booking-corner booking-corner--right" aria-hidden="true"></span>
      <div className="booking-inner">
        <div className="booking-marker">
          <span className="booking-dot" aria-hidden="true"></span>
          <span>YOUR FIRST STEP</span>
        </div>
        <div className="booking-content">
          <div className="booking-copy">
            <h2 className="booking-title" id="booking-title">
              Book a free <span className="booking-title-break">30-minute call.</span>
            </h2>
            <a className="booking-button" href="/contact" onClick={handleBooking} aria-label="Book a call">
              <span><RollingText text="BOOK A CALL" /></span>
              <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M 0 0 L 8 8 L 0 16" transform="translate(8 4)" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="booking-rainbow" aria-hidden="true"></span>
            </a>
          </div>
          <div className="booking-note">
            <p>My job is making sure you leave our first call with clarity and next steps.</p>
            <div className="booking-person">
              <div className="booking-person-copy">
                <p>RUBY RATTEY</p>
                <p>CLIENT SUCCESS MANAGER</p>
              </div>
              <img src={rubyImage} alt="Ruby Rattey - Client Success Manager" width="48" height="48" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
