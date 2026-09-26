import React from 'react';
import { RevealText } from '../hooks/useScrollReveal';

export default function Results() {
  return (
    <section className="section results-section" id="results">
      {/* Left Editorial Column */}
      <div className="results-left">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div className="section-badge" style={{ marginBottom: 0 }}>
              <span className="section-badge-dot"></span>
              <span>05 RESULTS</span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', opacity: 0.4 }}>WEBUS®</span>
          </div>

          <h2 className="section-title-huge" style={{ marginBottom: '2rem' }}>
            SUCCESS<br/>STORY
          </h2>
          <p className="section-subhead" style={{ marginBottom: '4rem' }}>
            Bitfront partnered with Webus to redesign its crypto exchange interface, removing intimidation from digital asset trading while preserving professional-grade capability. The platform was rebuilt to guide users from first transaction to advanced trading with clarity and confidence.
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
      </div>

      {/* Right Immersive Photo Quote */}
      <div className="results-right-quote">
        <div className="results-quote-overlay" aria-hidden="true"></div>
        <RevealText 
          text="THEY DIDN'T JUST MAKE IT PRETTY. THEY MADE IT WORK. OUR USERS WENT FROM CONFUSED TO CONFIDENT IN WEEKS. BEST DESIGN INVESTMENT WE'VE MADE."
          className="results-quote-text"
        />
      </div>
    </section>
  );
}
