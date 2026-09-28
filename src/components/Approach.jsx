import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import RollingText from './RollingText';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function Approach({ navigate }) {
  const services = [
    {
      num: "/01",
      title: "PRODUCT DISCOVERY & DESIGN",
      img: "https://framerusercontent.com/images/FP6nNnQY60yUMD3si95zI4tbxuk.png?width=2048&height=2048",
      desc: "WE FIND WHAT TO BUILD BEFORE YOU SPEND ON BUILDING IT. RESEARCH AND MVP PLANNING RANK THE FEATURES USERS WANT, THEN THE SAME TEAM TURNS THEM INTO INTERFACES, FLOWS, AND PROTOTYPES PEOPLE UNDERSTAND ON FIRST USE.",
      tags: ["#USER RESEARCH", "#MVP PLANNING"]
    },
    {
      num: "/02",
      title: "DESIGN SYSTEM",
      img: "https://framerusercontent.com/images/6OmjgOx22QtO6dEOYVLiZJeoSwM.png?width=1280&height=853",
      desc: "SCALABLE COMPONENT LIBRARIES, DESIGN TOKENS, AND TYPOGRAPHIC FOUNDATIONS THAT KEEP EVERY SCREEN CONSISTENT ACROSS TEAMS AND ACCELERATE DEVELOPMENT SPEED.",
      tags: ["#TOKENS", "#ACCESSIBILITY"]
    },
    {
      num: "/03",
      title: "WEB & MOBILE APPS",
      img: "https://framerusercontent.com/images/ZvNRQ5Oed8cQPMrFre4rMhtcfo.png?width=1280&height=853",
      desc: "END-TO-END PRODUCT ARCHITECTURE. NATIVE IOS AND ANDROID EXPERIENCES, PROGRESSIVE WEB APPS, AND CROSS-PLATFORM SYSTEMS OPTIMIZED FOR RETENTION AND FLUID PERFORMANCE.",
      tags: ["#WEB APPS", "#MOBILE APPS"]
    },
    {
      num: "/04",
      title: "DESIGN OPS",
      img: "https://framerusercontent.com/images/386pvl4aR5zXLiVC2vXxYb8kQM.png?width=1280&height=853",
      desc: "WE SET UP THE SYSTEMS THAT KEEP DESIGN CONSISTENT AS YOU GROW: COMPONENT LIBRARIES, TOKENS, AND DOCUMENTATION. NEW SCREENS STAY ON BRAND AND SHIP FASTER BECAUSE THE RULES ARE ALREADY BUILT.",
      tags: ["#DESIGN SYSTEMS", "#TOKENS"]
    },
    {
      num: "/05",
      title: "WEBSITES & LANDING PAGES",
      img: "https://framerusercontent.com/images/JzhjVso2Nh4zknv4ZH2tzWBG1I.png?width=1280&height=853",
      desc: "WE BUILD WEBSITES AND LANDING PAGES WITH A JOB TO DO: EXPLAIN, CONVINCE, CONVERT. FAST, RESPONSIVE, AND EASY TO UPDATE, WITH THE MOTION AND POLISH THAT MAKE A BRAND LOOK RIGHT ONLINE.",
      tags: ["#WEBSITES", "#LANDING PAGES"]
    },
    {
      num: "/06",
      title: "AI PRODUCTS",
      img: "https://framerusercontent.com/images/WefTiNGQj0OvMaZMWy9rb67Tq4.png?width=1280&height=853",
      desc: "APPLIED AI EXPERIENCES THAT TURN NOVEL CAPABILITIES INTO INTUITIVE WORKFLOWS. MULTI-MODAL PROMPT INTERFACES, CONVERSATIONAL AGENTS, AND AUTOMATED DECISION PIPELINES BUILT FOR UTILITY.",
      tags: ["#AI INTERFACES", "#LLM AGENTS"]
    }
  ];

  return (
    <section className="section section-dark approach-section" id="approach">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="dark"
        showTopLine={true}
      />

      <div className="section-container">

        {/* Intro Grid & Manifesto (4-Column Layout) */}
        <div className="approach-intro-grid">
          {/* Column 1: Left Approach Header Box & Mockup */}
          <motion.div
            className="approach-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="approach-header-box">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>OUR APPROACH</span>
              </div>
              <h3 className="approach-heading">
                HOW WE BUILD WHAT WE DESIGN
              </h3>

              {/* Horizontal divider line under title with crosshairs and dot */}
              <div className="approach-header-divider">
                <GridCrosshair style={{ left: '0px', top: '0px' }} />
                <GridCrosshair style={{ right: '0px', top: '0px' }} />
                <span className="approach-header-dot"></span>
              </div>
            </div>

            <motion.div
              className="approach-mockup-frame"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <GridCrosshair style={{ left: '0px', top: '0px' }} />
              <GridCrosshair style={{ right: '0px', top: '0px' }} />
              <GridCrosshair style={{ left: '0px', bottom: '0px' }} />
              <GridCrosshair style={{ right: '0px', bottom: '0px' }} />
              <img
                src="https://framerusercontent.com/images/aSnx8r69QAkgwoNJwYhujjsNU0.png?width=1672&height=941"
                alt="Webus Product Interface Dashboard Mockup"
                className="approach-mockup-img"
              />
            </motion.div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-light-muted)', lineHeight: 1.6, textTransform: 'uppercase', marginTop: '2rem' }}>
              WE SOLVE HARD PRODUCT PROBLEMS THROUGH DESIGN, ENGINEERING, AND TESTING WITH USERS. WE DESIGN AND SHIP PRODUCTS PEOPLE KEEP USING.
            </p>
          </motion.div>

          {/* Column 2: Empty Spacer Column showing Blueprint Grid Lines */}
          <div className="approach-spacer" aria-hidden="true" />

          {/* Columns 3 & 4: Manifesto & Founder Signature */}
          <motion.div
            className="approach-right"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>01 WHO WE ARE</span>
            </div>

            <RevealText
              text="WE'RE A PRODUCT STUDIO THAT DESIGNS AND BUILDS. WE DON'T CHASE TRENDS OR ADD UNNECESSARY FLOURISHES. WE FOCUS ON WHAT USERS NEED, WHAT BUSINESSES REQUIRE, AND WHAT ACTUALLY SHIPS."
              className="approach-manifesto-text"
            />

            <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', fontSize: '13px', textTransform: 'uppercase' }}>
              <p style={{ fontWeight: 700, color: '#ffffff' }}>JASPAL S RATTEY</p>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '11px' }}>FOUNDER & PRODUCT DIRECTOR</p>
            </div>
          </motion.div>
        </div>

        {/* Services Track 02 Header */}
        <div className="services-header-split">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>02 SERVICES</span>
            </div>
            <RevealText
              text="TURNING IDEAS INTO PRODUCTS PEOPLE LOVE"
              className="section-title-huge"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-subhead" style={{ marginBottom: '2rem' }}>
              Two tracks under one roof. We find what to build, shape how it works, and ship the software that makes it real—from product discovery and design ops to web, mobile, internal tools, and AI.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.a
                href="/case-studies"
                onClick={(e) => {
                  if (navigate) {
                    e.preventDefault();
                    navigate('/case-studies');
                  }
                }}
                className="btn-pill btn-pill-light"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RollingText text="OUR CASE STUDIES" />
              </motion.a>
              <motion.a
                href="/services"
                onClick={(e) => {
                  if (navigate) {
                    e.preventDefault();
                    navigate('/services');
                  }
                }}
                className="btn-pill btn-pill-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RollingText text="ALL SERVICES" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 6 Services Items with Blueprint Dividing Lines & Crosshairs */}
        <div className="services-list-wrap">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              className="service-item-row"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <GridCrosshair style={{ left: '0%', top: '0px' }} />
              <GridCrosshair style={{ left: '100%', top: '0px' }} />
              {idx === services.length - 1 && (
                <>
                  <GridCrosshair style={{ left: '0%', bottom: '0px' }} />
                  <GridCrosshair style={{ left: '100%', bottom: '0px' }} />
                </>
              )}
              <span className="service-num">{svc.num}</span>
              <h3 className="service-title">{svc.title}</h3>
              <div className="service-img-preview">
                <img src={svc.img} alt={svc.title} />
              </div>
              <div className="service-details">
                <p className="service-desc">{svc.desc}</p>
                <div className="service-tags">
                  {svc.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
