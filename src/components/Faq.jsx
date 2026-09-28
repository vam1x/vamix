import React, { useState } from 'react';
import SectionGrid from './SectionGrid';
import RollingLabel from './RollingLabel';

export default function Faq({ navigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      num: "01",
      q: "How far in advance should I book a project?",
      a: "IT DEPENDS ON PROJECT SCOPE AND OUR CURRENT WORKLOAD. WE RECOMMEND REACHING OUT AS EARLY AS POSSIBLE. WE'LL REVIEW YOUR NEEDS AND LET YOU KNOW OUR AVAILABILITY. RUSH PROJECTS ARE POSSIBLE WHEN SCHEDULES ALLOW."
    },
    {
      num: "02",
      q: "How much does a project cost, and what's included?",
      a: "PRICING DEPENDS ON PROJECT SCOPE AND COMPLEXITY. TYPICAL DELIVERABLES INCLUDE RESEARCH, DESIGN, PROTOTYPES, TESTING, AND A WORKING BUILD WITH HANDOFF DOCS. WE PROVIDE DETAILED QUOTES AFTER YOUR DISCOVERY CALL."
    },
    {
      num: "03",
      q: "What if we don't have design specs or wireframes ready?",
      a: "NO PROBLEM. MOST OF OUR CLIENTS START WITH JUST AN IDEA OR A BUSINESS CHALLENGE. WE RUN DISCOVERY WORKSHOPS TO DEFINE YOUR REQUIREMENTS, MAP USER FLOWS, AND CREATE THE FOUNDATION BEFORE ANY DESIGN WORK BEGINS."
    },
    {
      num: "04",
      q: "Do you build the product, or just design it?",
      a: "WE BUILD, IN-HOUSE. OUR TEAM SHIPS PRODUCTION CODE FOR WEB, MOBILE, AND AI PRODUCTS. WE CAN ALSO WORK ALONGSIDE YOUR DEV TEAM WITH CLEAN HANDOFFS WHEN THAT FITS BETTER."
    },
    {
      num: "05",
      q: "What if we're not satisfied with the initial work?",
      a: "WE BUILD IN REVISION ROUNDS AT EVERY STAGE. IF THE WORK MISSES THE MARK, WE ITERATE UNTIL IT'S RIGHT. REGULAR CHECK-INS AND FEEDBACK LOOPS ENSURE YOU'RE NEVER SURPRISED BY THE FINAL RESULT."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="faq-section__inner">
        {/* Column 1: Kicker & Big Section Heading */}
        <div className="faq-section__heading">
          <div className="section-kicker section-kicker--dark">
            <span>11</span>
            <span>Help &amp; Info</span>
          </div>
          <h2 id="faq-title">FAQ</h2>
        </div>

        {/* Columns 2-4: FAQ Accordion List */}
        <div className="faq-section__main">
          <div className="faq-list">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <details
                  key={idx}
                  className="faq-item"
                  open={isOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    toggle(idx);
                  }}
                >
                  <summary>
                    <span className="faq-item__number mono-label">{item.num}</span>
                    <span className="faq-item__question">{item.q}</span>
                    <svg
                      className="faq-item__icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M 0 0 L 16.5 0"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        stroke="#171717"
                        transform="translate(3.75 12)"
                      />
                      {!isOpen && (
                        <path
                          className="faq-item__icon-bar"
                          d="M 0 0 L 0 16.5"
                          fill="transparent"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          stroke="#171717"
                          transform="translate(12 3.75)"
                        />
                      )}
                    </svg>
                  </summary>
                  {isOpen && <p>{item.a}</p>}
                </details>
              );
            })}
          </div>
        </div>

        {/* FAQ Contact Us Directly Footer Block */}
        <div className="faq-contact">
          <div className="faq-contact__kicker">
            <span className="faq-contact__dot" aria-hidden="true"></span>
            <span className="mono-label">Contact us directly</span>
          </div>

          <div className="faq-contact__heading">
            <h3>Still unsure?</h3>
            <a
              className="cta-block"
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate?.('contact');
              }}
            >
              <RollingLabel text="Ask a question" />
              <svg
                className="cta-arrow"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 0 0 L 8 8 L 0 16"
                  transform="translate(8 4)"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="faq-contact__quote">
            <p>My role is to make sure every client feels supported from day one.</p>
            <div>
              <img
                src="/faq/faq-1.webp"
                alt="Ruby Rattey"
                loading="lazy"
                decoding="async"
                width="42"
                height="42"
              />
              <span className="mono-label">RUBY RATTEY</span>
              <span className="mono-label">Client Success Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
