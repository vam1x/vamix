import React from 'react';
import { motion } from 'framer-motion';

export default function AboutStats() {
  const stats = [
    { label: "CLIENT RETENTION RATE", val: "85%" },
    { label: "COMPLETED CLIENT PROJECTS", val: "66+" },
    { label: "FASTER PROJECT DELIVERY", val: "5X" }
  ];

  return (
    <section className="about-stats-section" id="about-stats">
      <div className="about-stats-container">
        
        {/* Left Side: Watermark / Studio Identity */}
        <div className="about-stats-side">
          <span className="about-watermark-text">WEBUS®</span>
        </div>

        {/* Right Side: Studio Showcase & Metrics Card */}
        <motion.div 
          className="about-stats-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Studio Interior Photo */}
          <div className="about-studio-photo-frame">
            <img 
              src="https://framerusercontent.com/images/c67C5n6mfhTUQv7UYjH3n7xbSvk.jpg?width=1184&height=864" 
              alt="Webus Studio Open Plan Office" 
              className="about-studio-img"
              loading="lazy"
            />
          </div>

          {/* Bottom Dark Metrics Card */}
          <div className="about-metrics-bar">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-metric-column">
                <span className="metric-label">{stat.label}</span>
                <div className="metric-value-row">
                  <span className="metric-val">{stat.val}</span>
                  <div className="metric-grip-icon" aria-hidden="true">
                    <span></span><span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
