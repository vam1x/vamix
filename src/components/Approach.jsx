import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import SectionGrid from './SectionGrid';
import RollingLabel from './RollingLabel';

export default function Approach({ navigate }) {
  const services = [
    {
      num: "/01",
      title: "Product Discovery & Design",
      img: "/services/service-01.webp",
      desc: "WE FIND WHAT TO BUILD BEFORE YOU SPEND ON BUILDING IT. RESEARCH AND MVP PLANNING RANK THE FEATURES USERS WANT, THEN THE SAME TEAM TURNS THEM INTO INTERFACES, FLOWS, AND PROTOTYPES PEOPLE UNDERSTAND ON FIRST USE.",
      tags: ["USER RESEARCH", "MVP PLANNING"]
    },
    {
      num: "/02",
      title: "Design System",
      img: "/services/service-02.webp",
      desc: "WE BUILD REUSABLE COMPONENTS, TOKENS AND PATTERNS THAT STAY IN STEP ACROSS DESIGN AND CODE. CLEAR USAGE GUIDELINES HELP DESIGNERS AND ENGINEERS CREATE CONSISTENT SCREENS AS YOUR PRODUCT GROWS.",
      tags: ["COMPONENT LIBRARY", "TOKENS"]
    },
    {
      num: "/03",
      title: "Web & Mobile Apps",
      img: "/services/service-03.webp",
      desc: "WE DESIGN WEB AND MOBILE APPS THAT FEEL OBVIOUS TO USE. EVERY SCREEN, STATE, AND GESTURE IS WORKED OUT BEFORE A LINE OF CODE, SO THE BUILD INHERITS A PRODUCT THAT ALREADY MAKES SENSE.",
      tags: ["WEB APPS", "MOBILE APPS"]
    },
    {
      num: "/04",
      title: "Design Ops",
      img: "/services/service-04.webp",
      desc: "WE ORGANISE HOW DESIGN WORK GETS DONE: CLEAR BRIEFS, SHARED PRIORITIES, USEFUL REVIEWS AND SMOOTH HANDOFFS. YOUR TEAM KNOWS WHO OWNS EACH DECISION AND HOW TO MOVE WORK FROM IDEA TO DELIVERY.",
      tags: ["WORKFLOWS", "COLLABORATION"]
    },
    {
      num: "/05",
      title: "Websites & Landing Pages",
      img: "/services/service-05.webp",
      desc: "WE BUILD WEBSITES AND LANDING PAGES WITH A JOB TO DO: EXPLAIN, CONVINCE, CONVERT. FAST, RESPONSIVE, AND EASY TO UPDATE, WITH THE MOTION AND POLISH THAT MAKE A BRAND LOOK RIGHT ONLINE.",
      tags: ["WEBSITES", "LANDING PAGES"]
    },
    {
      num: "/06",
      title: "AI Products",
      img: "/services/service-06.webp",
      desc: "WE BUILD PRODUCTS THAT RUN ON AI: COPILOTS, ASSISTANTS, AND SEARCH THAT UNDERSTANDS YOUR DATA. IT ALL SHIPS AS ONE PIECE, DESIGNED AND ENGINEERED BY ONE TEAM.",
      tags: ["LLM", "RAG"]
    }
  ];

  return (
    <section className="company-section" id="approach" aria-labelledby="approach-heading">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="dark"
        showTopLine={true}
      />

      {/* JSON-LD Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((svc, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": svc.title,
                "description": svc.desc,
                "provider": {
                  "@id": "https://vamix.in/#organization"
                },
                "areaServed": "Worldwide",
                "serviceType": svc.title
              }
            }))
          })
        }}
      />

      <div className="company-section__inner">
        {/* Row 1: Left Approach Rail (Col 1) & Right Manifesto Statement (Col 3-4) */}
        <div className="company-row">
          {/* Column 1: Approach Rail */}
          <article className="company-rail" aria-labelledby="approach-title">
            <motion.div
              className="approach-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <i className="corner-mark corner-mark--top-left" aria-hidden="true" />
              <i className="corner-mark corner-mark--top-right" aria-hidden="true" />
              <i className="corner-mark corner-mark--bottom-left" aria-hidden="true" />
              <i className="corner-mark corner-mark--bottom-right" aria-hidden="true" />

              <div className="approach-card__text">
                <div className="approach-section__top">
                  <p className="approach-section__label">OUR APPROACH</p>
                  <span className="approach-section__dot" aria-hidden="true" />
                </div>
                <h2 id="approach-title" className="approach-section__title">
                  HOW WE BUILD WHAT WE DESIGN
                </h2>
              </div>

              <div className="approach-section__visual">
                <img
                  src="/services/approach-dashboard.webp"
                  alt="VAMIX approach dashboard showing product development workflow"
                  loading="lazy"
                  decoding="async"
                  width="1672"
                  height="941"
                />
              </div>
            </motion.div>

            <p className="approach-section__description">
              WE SOLVE HARD PRODUCT PROBLEMS THROUGH DESIGN, ENGINEERING, AND TESTING WITH USERS. WE DESIGN AND SHIP PRODUCTS PEOPLE KEEP USING.
            </p>
          </article>

          {/* Columns 3 & 4: Who We Are Manifesto */}
          <article className="company-statement" aria-labelledby="who-title">
            <div className="section-kicker">
              <span>01</span>
              <span>Who we are</span>
            </div>

            <div className="who-section__content">
              <h2 id="who-title" className="who-section__statement">
                <RevealText
                  text="WE'RE A PRODUCT STUDIO THAT DESIGNS AND BUILDS. WE DON'T CHASE TRENDS OR ADD UNNECESSARY FLOURISHES. WE FOCUS ON WHAT USERS NEED, WHAT BUSINESSES REQUIRE, AND WHAT ACTUALLY SHIPS."
                  theme="dark"
                />
              </h2>

              <div className="who-section__credit">
                <img
                  src="/favicon.svg"
                  alt="VAMIX Logo"
                  loading="lazy"
                  decoding="async"
                  width="42"
                  height="42"
                  className="who-section__credit-image"
                />
                <span className="who-section__credit-lines">
                  <span>VAMIX</span>
                  <span>CORE DEVELOPERS</span>
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Row 2: Services Track 02 (Intro & 6 Service Cards) */}
        <section className="services-block" id="services" aria-labelledby="services-title">
          <div className="services-section__intro">
            <div className="services-section__lead">
              <div className="section-kicker">
                <span>02</span>
                <span>Services</span>
              </div>
              <h2 id="services-title" className="services-section__title">
                <span className="services-section__title-lead">TURNING IDEAS INTO </span>
                PRODUCTS PEOPLE LOVE
              </h2>
            </div>

            <div className="services-section__copy">
              <p>
                Two tracks under one roof. We find what to build, shape how it works, and ship the software that makes it real—from product discovery and design ops to web, mobile, internal tools, and AI.
              </p>
              <div className="services-section__actions">
                <a
                  className="services-cta"
                  href="/case-studies"
                  onClick={(e) => {
                    if (navigate) {
                      e.preventDefault();
                      navigate('case-studies');
                    }
                  }}
                >
                  <RollingLabel text="OUR CASE STUDIES" />
                </a>
                <a
                  className="services-cta services-cta--secondary"
                  href="/services"
                  onClick={(e) => {
                    if (navigate) {
                      e.preventDefault();
                      navigate('services');
                    }
                  }}
                >
                  <RollingLabel text="ALL SERVICES" />
                </a>
              </div>
            </div>
          </div>

          {/* 6 Services Grid Items */}
          <div className="services-grid" role="list">
            {services.map((svc) => (
              <motion.article
                className="service-card"
                key={svc.num}
                role="listitem"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <i className="corner-mark corner-mark--top-left" aria-hidden="true" />
                <i className="corner-mark corner-mark--top-right" aria-hidden="true" />

                <div className="service-card__number">{svc.num}</div>
                <h3 className="service-card__title">
                  <a
                    href="/services"
                    onClick={(e) => {
                      if (navigate) {
                        e.preventDefault();
                        navigate('services');
                      }
                    }}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {svc.title}
                  </a>
                </h3>

                <div className="service-card__work">
                  <div className="service-card__media">
                    <img
                      src={svc.img}
                      alt={`${svc.title} service illustration`}
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="427"
                    />
                  </div>
                  <div className="service-card__details">
                    <p>{svc.desc}</p>
                    <div className="service-card__tags">
                      {svc.tags.map((tag, tIdx) => (
                        <span className="service-card__tag" key={tIdx}>
                          <span aria-hidden="true">#</span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}