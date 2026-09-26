import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function HowWeDoIt() {
  const steps = [
    { num: "01/", text: "EMPATHY MAPPING, LEARN USER NEEDS THROUGH FIELD RESEARCH" },
    { num: "02/", text: "RAPID PROTOTYPING, VALIDATE IDEAS BEFORE FULL DEVELOPMENT" },
    { num: "03/", text: "USER TESTING, GATHER LIVE FEEDBACK TO REFINE THE WORK" },
    { num: "04/", text: "BUILD AND LAUNCH, IMPLEMENT AND MEASURE PERFORMANCE" }
  ];

  const delayRows = [
    { num: "01/", text: "USER FRUSTRATION", bold: "DRIVES CHURN", badge: "+83%", tag: "/CHURNRATE", offset: "0%" },
    { num: "02/", text: "COMPETITORS CAPTURE", bold: "YOUR MARKET", badge: "+55%", tag: "/MARKETSHARE", offset: "20%" },
    { num: "03/", text: "TECHNICAL DEBT", bold: "ACCUMULATES", badge: "+66%", tag: "/DEVELOPMENT", offset: "40%" },
    { num: "04/", text: "REDESIGN COSTS", bold: "CLIMB OVER TIME", badge: "+45%", tag: "/COST", offset: "10%" }
  ];

  return (
    <section className="section path-section" id="path">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="section-container">

        <div className="path-grid">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>04 HOW WE DO IT</span>
            </div>
            <RevealText
              text="THE FAST TRACK TO LIVE PRODUCTS"
              className="section-title-huge"
              theme="light"
            />
            <p className="section-subhead">
              We skip the guesswork and the endless revisions. The work ships.
            </p>
          </div>

          {/* 4 Execution Steps 2x2 Grid */}
          <div className="steps-2x2-grid">
            <GridCrosshair style={{ left: '0%', top: '0%' }} />
            <GridCrosshair style={{ left: '100%', top: '0%' }} />
            <GridCrosshair style={{ left: '0%', top: '100%' }} />
            <GridCrosshair style={{ left: '100%', top: '100%' }} />
            <GridCrosshair style={{ left: '50%', top: '50%' }} />

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="step-card-num">
                  <span>{step.num}</span>
                  <div className="grip-icon">
                    <span></span><span></span>
                    <span></span><span></span>
                    <span></span><span></span>
                  </div>
                </div>
                <p className="step-card-text">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cost of Delay Matrix */}
        <div className="delay-matrix-section">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>WHY DELAY HURTS</span>
          </div>
          <RevealText
            text="THE LONGER YOU WAIT, THE MORE IT COSTS TO BUILD IT RIGHT."
            className="section-title-huge"
            theme="light"
          />

          <div className="delay-matrix-list">
            {delayRows.map((row, idx) => (
              <motion.div
                key={idx}
                className="delay-row"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="delay-row-content">
                  <span>{row.num}</span>
                  <span>{row.text} <strong>{row.bold}</strong></span>
                </div>
                <div className="delay-badge-pill" style={{ marginLeft: row.offset }}>
                  {row.badge}
                </div>
                <span className="delay-code-tag">{row.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
