import React from 'react';
import { motion } from 'framer-motion';
import RollingText from '../RollingText';

export default function AboutSteps({ navigate }) {
  const diffPillars = [
    {
      num: "01",
      title: "We don't chase trends.",
      desc: "WE BUILD FOR USERS, NOT AWARDS OR TRENDS."
    },
    {
      num: "02",
      title: "We don't waste time.",
      desc: "IF SOMETHING WON'T WORK, WE SAY IT UPFRONT."
    },
    {
      num: "03",
      title: "We don't hide costs.",
      desc: "EVERY PRICE IS CLEAR AND EXPLAINED BEFORE WE START."
    }
  ];

  return (
    <section className="about-steps-section" id="about-why-us">
      <div className="about-steps-container">
        
        {/* Left Badge & CTA Column */}
        <div className="about-steps-side">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>WHY US?</span>
          </div>

        </div>

        {/* Right Content */}
        <div className="about-steps-content">
          
          {/* Top Editorial Statements */}
          <motion.div
            className="about-steps-top-editorial"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="about-editorial-large">
              We believe good design should be invisible. It shouldn’t draw attention to itself, it should simply solve the problem, remove friction, and let users focus on what they’re actually trying to accomplish.
            </p>
            <p className="about-editorial-sub">
              Every decision is backed by research and testing. We don’t guess, we validate. The result is products that work from day one, with fewer revisions and a faster path to launch.
            </p>
          </motion.div>

          <div className="about-steps-cta-group" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.a
              href="/services"
              className="about-contact-sales-btn"
              whileHover={{ x: 3 }}
              onClick={(e) => {
                if (navigate) {
                  e.preventDefault();
                  navigate('/services');
                }
              }}
            >
              <RollingText text="Explore our services ↗" />
            </motion.a>
            <motion.a
              href="#contact"
              className="about-contact-sales-btn"
              style={{ background: 'transparent', color: 'inherit', border: '1px solid rgba(23, 23, 23, 0.25)' }}
              whileHover={{ x: 3 }}
            >
              <RollingText text="Contact sales ↗" />
            </motion.a>
          </div>

          {/* Bottom "What Makes Us Different" Block */}
          <div className="about-diff-block">
            <motion.h2 
              className="about-diff-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              WHAT MAKES US<br/>DIFFERENT
            </motion.h2>

            <div className="about-diff-grid">
              {diffPillars.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  className="about-diff-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <span className="diff-pill-badge">{pillar.num}</span>
                  <h3 className="diff-card-title">{pillar.title}</h3>
                  <p className="diff-card-desc">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
