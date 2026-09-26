import React from 'react';
import { RevealText } from '../hooks/useScrollReveal';
import RollingText from './RollingText';

export default function Approach() {
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
      <div className="section-container">
        
        {/* Intro Grid & Manifesto */}
        <div className="approach-intro-grid">
          <div className="approach-left">
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>OUR APPROACH</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2rem' }}>
              HOW WE BUILD WHAT WE DESIGN
            </h3>
            
            <div className="approach-mockup-frame">
              <span className="corner-cross tl">+</span>
              <span className="corner-cross tr">+</span>
              <span className="corner-cross bl">+</span>
              <span className="corner-cross br">+</span>
              <img 
                src="https://framerusercontent.com/images/aSnx8r69QAkgwoNJwYhujjsNU0.png?width=1672&height=941" 
                alt="Webus Product Interface Dashboard Mockup" 
                className="approach-mockup-img" 
              />
            </div>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-light-muted)', lineHeight: 1.6, textTransform: 'uppercase', marginTop: '2rem' }}>
              WE SOLVE HARD PRODUCT PROBLEMS THROUGH DESIGN, ENGINEERING, AND TESTING WITH USERS. WE DESIGN AND SHIP PRODUCTS PEOPLE KEEP USING.
            </p>
          </div>

          <div className="approach-right">
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
          </div>
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
          <div>
            <p className="section-subhead" style={{ marginBottom: '2rem' }}>
              Two tracks under one roof. We find what to build, shape how it works, and ship the software that makes it real—from product discovery and design ops to web, mobile, internal tools, and AI.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-pill btn-pill-light">
                <RollingText text="OUR CASE STUDIES" />
              </a>
              <a href="./services" className="btn-pill btn-pill-white">
                <RollingText text="ALL SERVICES" />
              </a>
            </div>
          </div>
        </div>

        {/* 6 Services Items */}
        <div className="services-list-wrap">
          {services.map((svc, idx) => (
            <div key={idx} className="service-item-row">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
