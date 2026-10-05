import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionGrid from './SectionGrid';

export default function Faq({ navigate }) {
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
    <section className="faq-section about-faq-section" id="faq" aria-labelledby="faq-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      {/* JSON-LD Structured Data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((item, idx) => ({
              "@type": "Question",
              "position": idx + 1,
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })
        }}
      />

      <div className="about-faq-container">
        {/* Header: Column 1 Badge & Columns 2-4 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>11 HELP &amp; INFO</span>
          </div>
          <h2 id="faq-title" className="about-faq-title">FAQ</h2>
        </motion.div>

        {/* FAQ Accordion List (Columns 2-4) */}
        <div className="about-faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`about-faq-item ${isOpen ? 'active' : ''}`}>
                <button 
                  className="about-faq-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-trigger-left">
                    <span className="faq-index-pill">0{idx + 1}</span>
                    <span className="faq-question-text">{faq.q}</span>
                  </div>
                  <span className="faq-icon-cross">{isOpen ? '−' : '+'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div 
                      className="about-faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="about-faq-answer-text">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Split: Still Unsure / Client Success Card */}
        <div className="about-faq-bottom-cards">
          {/* Left Card: Still Unsure & Direct Action */}
          <motion.div 
            className="about-unsure-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>CONTACT US DIRECTLY</span>
            </div>
            <h3 className="about-unsure-heading">STILL UNSURE?</h3>
            <a
              href="/contact"
              className="about-ask-question-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate?.('contact');
              }}
            >
              <span>ASK A QUESTION</span>
              <span className="arrow-sym">›</span>
            </a>
          </motion.div>

          {/* Right Card: Ruby Rattey Quote & Role */}
          <motion.div 
            className="about-support-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about-support-quote">
              My role is to make sure every client feels supported from day one.
            </p>
            <div className="about-support-profile">
              <img 
                src="/images/ruby-avatar.webp" 
                alt="Ruby Rattey - Client Success Manager" 
                className="about-support-avatar"
                loading="lazy"
                decoding="async"
                width="42"
                height="42"
              />
              <div className="about-support-meta">
                <span className="support-name">RUBY RATTEY</span>
                <span className="support-role">CLIENT SUCCESS MANAGER</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

