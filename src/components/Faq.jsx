import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How far in advance should I book a project?",
      a: "IT DEPENDS ON PROJECT SCOPE AND OUR CURRENT WORKLOAD. WE RECOMMEND REACHING OUT AS EARLY AS POSSIBLE. WE'LL REVIEW YOUR NEEDS AND LET YOU KNOW OUR AVAILABILITY. RUSH PROJECTS ARE POSSIBLE WHEN SCHEDULES ALLOW."
    },
    {
      q: "How much does a project cost, and what's included?",
      a: "OUR PRICING IS SCOPE-BASED RATHER THAN HOURLY, GIVING YOU COMPLETE COST PREDICTABILITY. TYPICAL PRODUCT DESIGN SPRINTS START AT $8,000, WITH FULL-STACK APPLICATION BUILDS SCOPED TRANSPARENTLY AFTER OUR DISCOVERY SESSION."
    },
    {
      q: "What if we don't have design specs or wireframes ready?",
      a: "THAT'S EXACTLY WHAT PRODUCT DISCOVERY IS DESIGNED FOR. MOST CLIENTS COME TO US WITH A ROUGH IDEA OR FEATURE LIST; WE ORGANIZE AND TEST THE SPECS WITH ACTUAL USERS BEFORE A SINGLE LINE OF PRODUCTION CODE IS WRITTEN."
    },
    {
      q: "Do you build the product, or just design it?",
      a: "WE ARE A DUAL-TRACK STUDIO: WE DESIGN AND SHIP THE CODE. OUR ENGINEERING LEADS WORK HAND-IN-HAND WITH PRODUCT DESIGNERS SO THERE ARE NO HANDOFF BOTTLENECKS OR LOSS OF DESIGN INTENT."
    },
    {
      q: "What if we're not satisfied with the initial work?",
      a: "OUR SPRINT PROCESS INCLUDES DAILY ASYNC CHECK-INS AND WEEKLY REVIEW DEMOS. YOU ARE NEVER BLINDSIDED BY A BIG REVEAL; FEEDBACK IS INCORPORATED CONTINUOUSLY THROUGHOUT THE MILESTONE."
    }
  ];

  return (
    <section className="section faq-section" id="faq">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="section-container">

        <div className="faq-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>11 HELP & INFO</span>
            </div>
            <h2 className="section-title-huge">FAQ</h2>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`} style={{ position: 'relative' }}>
                  <GridCrosshair style={{ left: '0%', top: '0px' }} />
                  <GridCrosshair style={{ left: '100%', top: '0px' }} />
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span className="faq-num-pill">0{idx + 1}</span>
                      <span>{faq.q}</span>
                    </span>
                    <motion.span
                      className="faq-icon"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="faq-answer-text">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
