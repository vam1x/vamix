import React from 'react';
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
            <div key={idx} className="milestone-card">
              <div className="milestone-year">
                <span>{item.year}</span>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              </div>
              <p className="milestone-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Belief Statement Quote */}
        <div className="belief-quote-wrap">
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
        </div>

      </div>
    </section>
  );
}
