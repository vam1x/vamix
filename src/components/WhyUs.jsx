import React from 'react';
import { RevealText } from '../hooks/useScrollReveal';

export default function WhyUs() {
  const pillars = [
    { num: "01", text: "USER-FIRST", highlight: "DESIGN APPROACH" },
    { num: "02", text: "PROVEN RESULTS", highlight: "ACROSS INDUSTRIES" },
    { num: "03", text: "COLLABORATIVE PROCESS,", highlight: "NO SURPRISES" },
    { num: "04", text: "12+ YEARS", highlight: "OF DESIGN AND BUILD" }
  ];

  return (
    <section className="section why-section" id="why">
      <div className="section-container">
        
        <div className="why-split-grid">
          <div className="why-left">
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>03 WHY US?</span>
            </div>
            <RevealText 
              text="WHY COMPANIES CHOOSE WEBUS®"
              className="section-title-huge"
              theme="light"
            />
            <p className="section-subhead">
              We turn messy product problems into tools people trust.
            </p>
          </div>

          <div className="why-right">
            {/* Geometric Aperture Symbol */}
            <div style={{ marginBottom: '2rem', display: 'flex', gap: '8px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50% 0 0 50%', background: '#000' }}></div>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#d0d0d0' }}></div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              OUR ADVANTAGES INCLUDE:
            </h3>

            <div className="why-pillars-list">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="why-pillar-item">
                  <span className="pillar-badge">{pillar.num}</span>
                  <span>{pillar.text} <strong>{pillar.highlight}</strong></span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-dark-subtle)' }}>
              <span>SOURCE: CLIENT FEEDBACK & PROJECT DATA</span>
              <span>📅 APR 2025</span>
            </div>
          </div>
        </div>

        {/* Studio Metrics Row */}
        <div className="metrics-row">
          <div className="metric-card">
            <span className="metric-big-num">85%</span>
            <span className="metric-label">CLIENT<br/>RETENTION</span>
          </div>
          <div className="metric-card">
            <span className="metric-big-num">12+</span>
            <span className="metric-label">YEARS<br/>EXPERIENCE</span>
          </div>
          <div className="metric-card">
            <span className="metric-big-num">5X</span>
            <span className="metric-label">FASTER<br/>DELIVERY</span>
          </div>
        </div>

        {/* Partnership Callout Banner with Aurora */}
        <div className="partnership-banner">
          <div className="partnership-aurora" aria-hidden="true"></div>
          <div>
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>PARTNERSHIP, NOT HANDOFFS</span>
            </div>
            <h3 className="section-title-huge" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
              YOUR TEAM WORKS WITH OUR TEAM
            </h3>
            <p className="section-subhead">
              We don't vanish for weeks then drop finished work. You're involved at every step: workshops, reviews, testing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
