import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function Timeline() {
  const milestones = [
    { year: "2023", icon: "🔍", desc: "FOUNDED IN SURAT TO SOLVE REAL DESIGN PROBLEMS" },
    { year: "2024", icon: "⚙️", desc: "OPENED TENNESSEE OFFICE TO SERVE US CLIENTS" },
    { year: "2025", icon: "🚩", desc: "CROSSED 20+ SUCCESSFUL CLIENT PROJECTS MILESTONE" },
    { year: "2026", icon: "❖", desc: "BUILDING DIGITAL PRODUCTS USERS AND TEAMS LOVE" }
  ];

  return (
    <section className="section timeline-section" id="timeline">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="timeline-arc-glow" aria-hidden="true"></div>
      <div className="section-container">
        <div className="timeline-belief-grid">
          <div className="timeline-founder-photo">
            <img src="https://framerusercontent.com/images/cz23onHcSXhg4ZTu5ZQiuL8tAM8.png?scale-down-to=1024&width=1023&height=1537" alt="Jaspal Singh at his desk" />
            <span>JASPAL SINGH<br />FOUNDER &amp; DIRECTOR</span>
          </div>
          <motion.div
            className="belief-quote-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>09 WHAT WE BELIEVE</span>
            </div>
            <RevealText
              text="WE DIDN'T BUILD THIS STUDIO TO FOLLOW TRENDS. WE BUILT IT TO SOLVE REAL PROBLEMS, CLEARLY AND WITHOUT WASTING YOUR TIME. GOOD PRODUCTS WORK QUIETLY, BUT ONLY IF THEY'RE BUILT RIGHT."
              className="section-title-huge"
              theme="light"
            />
          </motion.div>
        </div>

        <div className="timeline-milestones-grid">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              className="milestone-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="milestone-year">{item.year}</div>
              <p className="milestone-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
