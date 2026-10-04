import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionGrid from '../components/SectionGrid';
import RollingText from '../components/RollingText';
import AboutBooking from '../components/about/AboutBooking';
import Contact from '../components/Contact';
import useSeo from '../hooks/useSeo';
import './not-found.css';

export default function NotFoundPage({ navigate }) {
  useSeo('not-found');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleGoHome = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('/');
    } else {
      window.location.href = '/';
    }
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="not-found-page">
      <section className="not-found-hero" aria-labelledby="not-found-title">
        {/* 5 Vertical Blueprint Grid Lines matching the entire studio */}
        <SectionGrid 
          theme="light" 
          showTopLine={false} 
          showBottomLine={true} 
          crosshairPositions={[0, 4]} 
        />

        <div className="not-found-container">
          <motion.div 
            className="not-found-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="not-found-heading">
              <div className="not-found-eyebrow">
                <span className="not-found-eyebrow__dot" aria-hidden="true" />
                <span>Page not found</span>
              </div>
              <h1 id="not-found-title">404</h1>
            </div>

            <p className="not-found-desc">
              This page doesn't exist. But we can help you find what you're looking for.
            </p>

            <div className="not-found-quicklinks" aria-label="Suggested Pages">
              <a href="/services" onClick={(e) => handleNavClick(e, '/services')} className="not-found-quicklink">
                SERVICES
              </a>
              <a href="/case-studies" onClick={(e) => handleNavClick(e, '/case-studies')} className="not-found-quicklink">
                CASE STUDIES
              </a>
              <a href="/about" onClick={(e) => handleNavClick(e, '/about')} className="not-found-quicklink">
                ABOUT US
              </a>
              <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="not-found-quicklink">
                CONTACT
              </a>
            </div>
          </motion.div>

          <motion.a 
            className="not-found-cta" 
            href="/" 
            onClick={handleGoHome}
            aria-label="Back to Homepage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>
              <RollingText text="BACK TO HOMEPAGE" />
            </span>
            <svg 
              className="not-found-cta-arrow" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              aria-hidden="true"
            >
              <path 
                d="M 8 4 L 16 12 L 8 20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* Booking Band */}
      <AboutBooking navigate={navigate} />

      {/* Shared Interactive Contact Section */}
      <Contact navigate={navigate} />
    </div>
  );
}
