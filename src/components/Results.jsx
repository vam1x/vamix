import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function Results() {
  return (
    <section className="section results-section" id="results">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      {/* Left Editorial Column */}
      <motion.div
        className="results-left"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div className="section-badge" style={{ marginBottom: 0 }}>
              <span className="section-badge-dot"></span>
              <span>05 RESULTS</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', opacity: 0.4 }}>VAMIX®</span>
          </div>

          <h2 className="section-title-huge" style={{ marginBottom: '2rem' }}>
            SUCCESS<br />STORY
          </h2>
          <p className="section-subhead" style={{ marginBottom: '4rem' }}>
            Bitfront partnered with VAMIX to redesign its crypto exchange interface, removing intimidation from digital asset trading while preserving professional-grade capability. The platform was rebuilt to guide users from first transaction to advanced trading with clarity and confidence.
          </p>
        </div>

        {/* Case Study Spec Table */}
        <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-hairline)' }}>
            <span style={{ color: 'var(--text-dark-subtle)' }}>DATE:</span>
            <span>2020-2023</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-hairline)' }}>
            <span style={{ color: 'var(--text-dark-subtle)' }}>INDUSTRY:</span>
            <span>FINTECH / WEB3</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
            <span style={{ color: 'var(--text-dark-subtle)' }}>CHALLENGE:</span>
            <span style={{ textAlign: 'right', maxWidth: '350px' }}>INTIMIDATING, EXPERT-ONLY INTERFACE THAT BLOCKED RETAIL USER ADOPTION</span>
          </div>
        </div>
      </motion.div>

      {/* Right Immersive Photo Quote */}
      <motion.div
        className="results-right-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="results-quote-overlay" aria-hidden="true"></div>
        <RevealText
          text="THEY DIDN'T JUST MAKE IT PRETTY. THEY MADE IT WORK. OUR USERS WENT FROM CONFUSED TO CONFIDENT IN WEEKS. BEST DESIGN INVESTMENT WE'VE MADE."
          className="results-quote-text"
        />
      </motion.div>
    </section>
  );
}
