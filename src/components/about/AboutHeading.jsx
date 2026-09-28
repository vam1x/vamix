import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHeading() {
  const reviewAvatars = [
    "https://framerusercontent.com/images/G3S93NVRBOPBVRHvuiD7v8mUec.jpg?width=75&height=75",
    "https://framerusercontent.com/images/AxkRNnDGOBIp7ssXlvfLRssOBsI.jpg?width=75&height=75",
    "https://framerusercontent.com/images/rIoYytoloWw5l32qBj1FRQtOUI.jpg?width=75&height=75",
    "https://framerusercontent.com/images/KWxDguvOOnQPeXxMf68OhIFwLY.jpg?width=75&height=75",
    "https://framerusercontent.com/images/AZyCsbeyJ3cYlMEBl91DwbIRc.jpg?width=75&height=75"
  ];

  const line1Words = ["WHO", "WE", "ARE:"];
  const line2Words = ["A", "DECADE", "OF", "PRODUCT", "WORK"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const renderAnimatedWords = (words) => {
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="about-hero-word">
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={letterVariants}
            className="about-hero-char"
          >
            {char}
          </motion.span>
        ))}
        {wordIndex < words.length - 1 && <span className="about-hero-space">&nbsp;</span>}
      </span>
    ));
  };

  return (
    <section className="about-heading-section" id="about-heading">
      {/* 5 Background Blueprint Grid Lines */}
      <div className="about-heading-grid-lines" aria-hidden="true">
        <div className="about-heading-grid-inner">
          <div className="about-grid-line"></div>
          <div className="about-grid-line"></div>
          <div className="about-grid-line"></div>
          <div className="about-grid-line"></div>
          <div className="about-grid-line"></div>
        </div>
      </div>

      <div className="about-heading-container">
        {/* Column 1: 3+ Years of Excellence */}
        <motion.div 
          className="about-side-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="years-number-row">
            <span className="years-num">3</span>
            <span className="years-plus">+</span>
          </div>
          <p className="years-label">YEARS OF EXCELLENCE</p>
        </motion.div>

        {/* Columns 2-4: Main Headline & Social Proof */}
        <div className="about-heading-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="about-hero-title">
              <span className="about-hero-line primary-line">
                {renderAnimatedWords(line1Words)}
              </span>
              <span className="about-hero-line secondary-line">
                {renderAnimatedWords(line2Words)}
              </span>
            </h1>

            <motion.p 
              className="about-hero-subhead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              We don’t chase trends or add unnecessary features. We focus on what users need, what businesses require, and what actually ships.
            </motion.p>

            {/* Verified Reviews Widget */}
            <motion.div 
              className="about-reviews-widget"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-reviews-avatars">
                {reviewAvatars.map((url, i) => (
                  <div key={i} className="about-avatar-wrapper" style={{ left: `${i * 22}px`, zIndex: 10 - i }}>
                    <img src={url} alt={`Client ${i + 1}`} className="about-avatar-img" />
                  </div>
                ))}
              </div>

              <div className="about-rating-meta">
                <div className="about-rating-top-row">
                  <div className="about-rating-dots" aria-label="5 star rating">
                    <span className="rating-dot"></span>
                    <span className="rating-dot"></span>
                    <span className="rating-dot"></span>
                    <span className="rating-dot"></span>
                    <span className="rating-dot"></span>
                  </div>
                  <span className="about-score">4.9/5</span>
                </div>
                <div className="about-rating-label">
                  <span className="muted">Based on </span>15 verified reviews
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
