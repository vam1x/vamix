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
      a: "PRICING DEPENDS ON PROJECT SCOPE AND COMPLEXITY. TYPICAL DELIVERABLES INCLUDE RESEARCH, DESIGN, PROTOTYPES, TESTING, AND A WORKING BUILD WITH HANDOFF DOCS. WE PROVIDE DETAILED QUOTES AFTER YOUR DISCOVERY CALL."
    },
    {
      q: "What if we don't have design specs or wireframes ready?",
      a: "NO PROBLEM. MOST OF OUR CLIENTS START WITH JUST AN IDEA OR A BUSINESS CHALLENGE. WE RUN DISCOVERY WORKSHOPS TO DEFINE YOUR REQUIREMENTS, MAP USER FLOWS, AND CREATE THE FOUNDATION BEFORE ANY DESIGN WORK BEGINS."
    },
    {
      q: "Do you build the product, or just design it?",
      a: "WE BUILD, IN-HOUSE. OUR TEAM SHIPS PRODUCTION CODE FOR WEB, MOBILE, AND AI PRODUCTS. WE CAN ALSO WORK ALONGSIDE YOUR DEV TEAM WITH CLEAN HANDOFFS WHEN THAT FITS BETTER."
    },
    {
      q: "What if we're not satisfied with the initial work?",
      a: "WE BUILD IN REVISION ROUNDS AT EVERY STAGE. IF THE WORK MISSES THE MARK, WE ITERATE UNTIL IT'S RIGHT. REGULAR CHECK-INS AND FEEDBACK LOOPS ENSURE YOU'RE NEVER SURPRISED BY THE FINAL RESULT."
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
          <div className="faq-contact-prompt">
            <span className="faq-contact-eyebrow">CONTACT US DIRECTLY</span>
            <div className="faq-contact-action">
              <h3>STILL UNSURE?</h3>
              <a href="/contact" className="faq-contact-button">ASK A QUESTION <span aria-hidden="true">›</span></a>
            </div>
            <div className="faq-contact-person">
              <p>My role is to make sure every client feels supported from day one.</p>
              <div className="faq-contact-person-detail">
                <img src="https://framerusercontent.com/images/awFufuyIlbDdk2me7dySF9Y3r8.png?scale-down-to=512&width=2048&height=2048" alt="Ruby Rattey" width="42" height="42" />
                <span><strong>RUBY RATTEY</strong><small>CLIENT SUCCESS MANAGER</small></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
