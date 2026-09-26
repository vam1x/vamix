import React, { useState } from 'react';

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
      <div className="section-container">
        
        <div className="faq-container">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>11 HELP & INFO</span>
            </div>
            <h2 className="section-title-huge">FAQ</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button 
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span className="faq-num-pill">0{idx + 1}</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer-panel">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
