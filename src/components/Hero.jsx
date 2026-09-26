import React from 'react';
import { motion } from 'framer-motion';
import LogoMarquee from './LogoMarquee';
import RollingText from './RollingText';

export default function Hero() {
  const avatars = [
    "https://framerusercontent.com/images/G3S93NVRBOPBVRHvuiD7v8mUec.jpg?width=75&height=75",
    "https://framerusercontent.com/images/AxkRNnDGOBIp7ssXlvfLRssOBsI.jpg?width=75&height=75",
    "https://framerusercontent.com/images/rIoYytoloWw5l32qBj1FRQtOUI.jpg?width=75&height=75",
    "https://framerusercontent.com/images/KWxDguvOOnQPeXxMf68OhIFwLY.jpg?width=75&height=75",
    "https://framerusercontent.com/images/AZyCsbeyJ3cYlMEBl91DwbIRc.jpg?width=75&height=75"
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Background Split Screen */}
      <div className="hero-split-grid" aria-hidden="true">
        <div className="hero-left-art">
          <motion.img 
            initial={{ scale: 1.06, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="https://framerusercontent.com/images/cx9DzPrXWjEIHDWlLpzDmBWYZI.png?width=1024&height=1536" 
            alt="Macro Material Abstraction" 
            className="hero-texture-img" 
          />
          <div className="hero-aurora-glow"></div>
        </div>
        <div className="hero-right-canvas"></div>
      </div>

      {/* Floating Foreground Layer */}
      <div className="hero-content-layer">
        {/* Social Proof Rating Badge */}
        <motion.div 
          className="hero-social-proof"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-avatars-group">
            {avatars.map((url, i) => (
              <motion.img 
                key={i}
                src={url} 
                alt="Verified Client" 
                className="hero-avatar-circle"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              />
            ))}
          </div>
          <div className="hero-rating-info">
            <span className="hero-rating-score"><span className="hero-rating-dots">•••••</span> 4.9/5</span>
            <span className="hero-rating-label">BASED ON 23 VERIFIED REVIEWS</span>
          </div>
        </motion.div>

        {/* Hero Headings Banner */}
        <div className="hero-headings-wrap">
          <motion.h1 
            className="hero-headline-1"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            DESIGN THAT CONVERTS
          </motion.h1>

          <motion.h2 
            className="hero-headline-2"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            CODE THAT SHIPS
          </motion.h2>

          <motion.p 
            className="hero-sub-statement"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            One team designs your product and builds it. No handoffs, no lost intent.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.a 
              href="#contact" 
              className="btn-pill btn-pill-dark"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RollingText text="SCHEDULE A FREE ASSESSMENT" />
            </motion.a>
            <motion.a 
              href="#projects" 
              className="btn-pill btn-pill-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RollingText text="OUR CASE STUDIES" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Brand Marquee Ticker */}
      <LogoMarquee />
    </section>
  );
}
