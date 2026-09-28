import React from 'react';
import { motion } from 'framer-motion';
import SectionGrid from './SectionGrid';
import { RevealText } from '../hooks/useScrollReveal';

export default function Timeline() {
  const milestones = [
    {
      year: "2013",
      icon: "/beliefs/beliefs-2.webp",
      desc: "FOUNDED IN SURAT TO\nSOLVE REAL DESIGN PROBLEMS",
      gap: "120px"
    },
    {
      year: "2017",
      icon: "/beliefs/beliefs-3.webp",
      desc: "EXPANDED OPERATIONS\nTO SERVE GLOBAL CLIENTS",
      gap: "150px"
    },
    {
      year: "2020",
      icon: "/beliefs/beliefs-4.webp",
      desc: "CROSSED 50 SUCCESSFUL\nCLIENT PROJECTS MILESTONE",
      gap: "180px"
    },
    {
      year: "2025",
      icon: "/beliefs/beliefs-5.webp",
      desc: "OVER A DECADE BUILDING\nPRODUCTS USERS LOVE",
      gap: "210px"
    }
  ];

  return (
    <section className="belief-section" id="beliefs" aria-labelledby="belief-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="belief-section__inner">
        {/* Upper 4-Column Row: Founder Profile, Quote Glyph & Manifesto Statement */}
        <div className="belief-section__quote">
          {/* Column 1: Founder Portrait & Title */}
          <motion.div 
            className="belief-section__profile"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/beliefs/beliefs-1.webp"
              alt="Mayur Unagar at his desk"
              loading="lazy"
              decoding="async"
              width="480"
              height="721"
            />
            <div className="belief-section__profile-copy mono-label">
              <span>MAYUR UNAGAR</span>
              <span>FOUNDER &amp; DIRECTOR</span>
            </div>
          </motion.div>

          {/* Columns 2-4: Quote Mark & Illuminated Manifesto Headline */}
          <div className="belief-section__body">
            <span className="belief-section__quote-mark" aria-hidden="true">
              <svg width="157" height="129" viewBox="0 0 157 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44.346 56.3698C44.346 30.0095 74.5459 28.4713 74.5459 28.4713V0C11.4942 0 0 43.3191 0 63.9899V129H74.5538V56.3698H44.346ZM126.792 56.3698C126.792 30.0095 157 28.4713 157 28.4713V0C93.9403 0 82.4462 43.3191 82.4462 63.9899V129H157V56.3698H126.792Z"
                  fill="#EAEAEA"
                />
              </svg>
            </span>

            <div className="belief-section__content">
              <div className="section-kicker section-kicker--dark">
                <span>09</span>
                <span>What we believe</span>
              </div>
              <div className="belief-section__text">
                <h2 id="belief-title">
                  <RevealText
                    text="WE DIDN'T BUILD THIS STUDIO TO FOLLOW TRENDS. WE BUILT IT TO SOLVE REAL PROBLEMS, CLEARLY AND WITHOUT WASTING YOUR TIME. GOOD PRODUCTS WORK QUIETLY, BUT ONLY IF THEY'RE BUILT RIGHT."
                    theme="light"
                  />
                </h2>
                <p>
                  We're here to build products that work, without buzzwords, trends, or wasted effort.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Bottom-Aligned Staircase Timeline Milestones */}
        <div className="milestones">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="milestone"
              style={{ '--milestone-gap': m.gap }}
            >
              <i className="corner-mark corner-mark--bottom-left" aria-hidden="true"></i>
              {idx === milestones.length - 1 && (
                <i className="corner-mark corner-mark--bottom-right" aria-hidden="true"></i>
              )}
              <div className="milestone__top">
                <strong>{m.year}</strong>
                <img
                  src={m.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="82"
                  height="82"
                  className="milestone__icon"
                />
              </div>
              <span className="mono-label" style={{ whiteSpace: 'pre-line' }}>
                {m.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
