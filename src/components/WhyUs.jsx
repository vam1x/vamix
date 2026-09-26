import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function WhyUs() {
  const pillars = [
    { num: "01", text: "USER-FIRST", highlight: "DESIGN APPROACH" },
    { num: "02", text: "PROVEN RESULTS", highlight: "ACROSS INDUSTRIES" },
    { num: "03", text: "COLLABORATIVE PROCESS,", highlight: "NO SURPRISES" },
    { num: "04", text: "12+ YEARS", highlight: "OF DESIGN AND BUILD" }
  ];

  return (
    <section className="section why-section" id="why">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

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
                <motion.div
                  key={idx}
                  className="why-pillar-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GridCrosshair style={{ left: '0px', top: '0px' }} />
                  <span className="pillar-badge">{pillar.num}</span>
                  <span>{pillar.text} <strong>{pillar.highlight}</strong></span>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-dark-subtle)' }}>
              <span>SOURCE: CLIENT FEEDBACK & PROJECT DATA</span>
            </div>
          </div>
        </div>

        {/* Studio Metrics Row */}
        <div className="metrics-row">
          {[
            { num: "85%", label: "CLIENT\nRETENTION" },
            { num: "12+", label: "YEARS\nEXPERIENCE" },
            { num: "5X", label: "FASTER\nDELIVERY" }
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              className="metric-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <span className="metric-big-num">{metric.num}</span>
              <span className="metric-label" style={{ whiteSpace: 'pre-line' }}>{metric.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Partnership Callout Banner with Aurora */}
        <motion.div
          className="partnership-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.div>

      </div>
    </section>
  );
}
