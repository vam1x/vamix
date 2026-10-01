import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../../hooks/useScrollReveal';

function MilestoneIcon({ index }) {
  const base = { width: 30, height: 30, viewBox: '0 0 32 32', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (index === 0) return <svg {...base}><circle cx="13.5" cy="13.5" r="9.5" /><path d="m21 21 8 8" /></svg>;
  if (index === 1) return <svg {...base}><path d="M4 21c3-2 5-2 8-1l3 2 6-4c2-1 4 1 2 3l-7 6c-3 2-7 1-12 0" /><path d="M14 13l2-2 4 1 3 4M21 4v4m-2-2h4" /></svg>;
  if (index === 2) return <svg {...base}><path d="M6 29V4m0 1c5-3 10 3 17 0v15c-7 3-12-3-17 0" /></svg>;
  return <svg {...base}><path d="M4 4h9v9H4zM19 4h9v9h-9zM4 19h9v9H4zM19 19h9v9h-9z" /></svg>;
}

export default function AboutBelief() {
  const milestones = [
    {
      year: "2023",
      desc: "FOUNDED IN SURAT TO SOLVE REAL DESIGN PROBLEMS"
    },
    {
      year: "2024",
      desc: "OPENED TENNESSEE OFFICE TO SERVE US CLIENTS"
    },
    {
      year: "2025",
      desc: "CROSSED 50 SUCCESSFUL CLIENT PROJECTS MILESTONE"
    },
    {
      year: "2026",
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
                src="/images/architectural-studio-corner.jpg" 
                alt="VAMIX Design Studio & Craft" 
                className="about-founder-img"
                loading="lazy"
                decoding="async"
                width="480"
                height="721"
              />
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
                <span className="milestone-icon-sym"><MilestoneIcon index={idx} /></span>
              </div>
              <p className="milestone-cell-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
