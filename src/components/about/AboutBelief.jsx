import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../../hooks/useScrollReveal';

export default function AboutBelief() {
  const milestones = [
    {
      year: "2012",
      icon: "🔍",
      desc: "FOUNDED IN DELHI TO SOLVE REAL DESIGN PROBLEMS"
    },
    {
      year: "2017",
      icon: "👤",
      desc: "OPENED TENNESSEE OFFICE TO SERVE US CLIENTS"
    },
    {
      year: "2020",
      icon: "🚩",
      desc: "CROSSED 50 SUCCESSFUL CLIENT PROJECTS MILESTONE"
    },
    {
      year: "2025",
      icon: "❖",
      desc: "OVER A DECADE BUILDING PRODUCTS USERS LOVE"
    }
  ];

  return (
    <section className="about-belief-section" id="about-belief">
      <div className="about-belief-outer-card">
        <span className="corner-cross tl">+</span>
        <span className="corner-cross tr">+</span>
        <span className="corner-cross bl">+</span>
        <span className="corner-cross br">+</span>

        {/* Top Split: Founder Photo & Statement */}
        <div className="about-belief-top-split">
          
          {/* Left Column: Founder Photo */}
          <div className="about-founder-col">
            <div className="about-founder-frame">
              <img 
                src="https://framerusercontent.com/images/FP6nNnQY60yUMD3si95zI4tbxuk.png?width=2048&height=2048" 
                alt="Jaspal Singh - Founder & Product Director" 
                className="about-founder-img"
                loading="lazy"
              />
            </div>
            <div className="about-founder-meta">
              <h4 className="founder-name">JASPAL SINGH</h4>
              <span className="founder-role">FOUNDER & PRODUCT DIRECTOR</span>
            </div>
          </div>

          {/* Right Column: Belief Manifesto */}
          <div className="about-manifesto-col">
            <span className="giant-quote-watermark" aria-hidden="true">“</span>
            
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>09 WHAT WE BELIEVE</span>
            </div>

            <RevealText 
              text="WE DIDN'T BUILD THIS STUDIO TO FOLLOW TRENDS. WE BUILT IT TO SOLVE REAL PROBLEMS, CLEARLY AND WITHOUT WASTING YOUR TIME. GOOD PRODUCTS WORK QUIETLY, BUT ONLY IF THEY'RE BUILT RIGHT."
              className="about-belief-giant-text"
              theme="light"
            />

            <p className="about-belief-subtext">
              We’re here to build products that work, without buzzwords, trends, or wasted effort.
            </p>
          </div>

        </div>

        {/* Bottom Horizontal Milestones Timeline with Rainbow Aurora Top Bar */}
        <div className="about-milestones-row">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx}
              className="about-milestone-cell"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="milestone-year-header">
                <span className="milestone-year-num">{item.year}</span>
                <span className="milestone-icon-sym">{item.icon}</span>
              </div>
              <p className="milestone-cell-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
