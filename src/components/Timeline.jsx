import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';

export default function Timeline() {
  const milestones = [
    { year: "2012", icon: "🔍", desc: "FOUNDED IN DELHI TO SOLVE REAL DESIGN PROBLEMS" },
    { year: "2017", icon: "⚙️", desc: "OPENED TENNESSEE OFFICE TO SERVE US CLIENTS" },
    { year: "2020", icon: "🚩", desc: "CROSSED 50 SUCCESSFUL CLIENT PROJECTS MILESTONE" },
    { year: "2025", icon: "❖", desc: "OVER A DECADE BUILDING PRODUCTS USERS LOVE" }
  ];

  return (
    <section className="section timeline-section" id="timeline">
      <div className="timeline-arc-glow" aria-hidden="true"></div>
      <div className="section-container">
        
        {/* 4 Milestones Cards */}
        <div className="timeline-milestones-grid">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="milestone-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="milestone-year">
                <span>{item.year}</span>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              </div>
              <p className="milestone-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Belief Statement Quote */}
        <motion.div 
          className="belief-quote-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="belief-giant-quote-mark" aria-hidden="true">“</span>
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>09 WHAT WE BELIEVE</span>
          </div>
          <RevealText 
            text="WE DIDN'T BUILD THIS STUDIO TO FOLLOW TRENDS. WE BUILT IT TO SOLVE REAL PROBLEMS, CLEARLY AND WITHOUT WASTE."
            className="section-title-huge"
            theme="light"
          />
        </motion.div>

      </div>
    </section>
  );
}
