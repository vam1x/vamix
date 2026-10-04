import React from 'react';
import { motion } from 'framer-motion';
import SectionGrid from './SectionGrid';
import { RevealText } from '../hooks/useScrollReveal';

export default function Timeline() {
  const milestones = [
    {
      year: "2023",
      icon: "/beliefs/beliefs-2.webp",
      desc: "FOUNDED IN SURAT TO\nSOLVE REAL DESIGN PROBLEMS",
      gap: "120px"
    },
    {
      year: "2024",
      icon: "/beliefs/beliefs-3.webp",
      desc: "OPENED TENNESSEE OFFICE\nTO SERVE US CLIENTS",
      gap: "150px"
    },
    {
      year: "2025",
      icon: "/beliefs/beliefs-4.webp",
      desc: "CROSSED 21+ SUCCESSFUL\nCLIENT PROJECTS MILESTONE",
      gap: "180px"
    },
    {
      year: "2026",
      icon: "/beliefs/beliefs-5.webp",
      desc: "SCALING GLOBAL IMPACT &\nNEXT-GEN DIGITAL PRODUCTS",
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

      {/* JSON-LD Structured Data for Company Milestones */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://vamix.vercel.app/#organization",
            "name": "VAMIX",
            "foundingDate": "2023",
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            },
            "hasHistory": [
              {
                "@type": "Event",
                "name": "Founded in Surat",
                "startDate": "2023",
                "description": "Founded in Surat to solve real design problems"
              },
              {
                "@type": "Event",
                "name": "Opened Tennessee Office",
                "startDate": "2024",
                "description": "Opened Tennessee office to serve US clients"
              },
              {
                "@type": "Event",
                "name": "21+ Successful Client Projects",
                "startDate": "2025",
                "description": "Crossed 21+ successful client projects milestone"
              },
              {
                "@type": "Event",
                "name": "Scaling Global Impact",
                "startDate": "2026",
                "description": "Scaling global impact and next-gen digital products"
              }
            ]
          })
        }}
      />

      <div className="belief-section__inner">
        {/* Upper 4-Column Row: Founder Profile, Quote Glyph & Manifesto Statement */}
        <div className="belief-section__quote">
          {/* Column 1: Founder Portrait & Title */}
          <figure className="belief-section__profile" aria-labelledby="studio-title">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/architectural-studio-corner.jpg"
                alt="VAMIX studio workspace interior showing design team collaboration area"
                loading="lazy"
                decoding="async"
                width="480"
                height="721"
              />
              <figcaption className="belief-section__profile-copy mono-label">
                <span>VAMIX</span>
                <span id="studio-title">CORE DEVELOPERS</span>
              </figcaption>
            </motion.div>
          </figure>

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
        <nav className="milestones" aria-labelledby="milestones-heading" role="list">
          <h2 id="milestones-heading" className="visually-hidden">Company Milestones</h2>
          {milestones.map((m, idx) => (
            <article
              key={idx}
              className="milestone"
              style={{ '--milestone-gap': m.gap }}
              role="listitem"
            >
              <i className="corner-mark corner-mark--bottom-left" aria-hidden="true"></i>
              {idx === milestones.length - 1 && (
                <i className="corner-mark corner-mark--bottom-right" aria-hidden="true"></i>
              )}
              <header className="milestone__top">
                <time dateTime={m.year}><strong>{m.year}</strong></time>
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
              </header>
              <p className="mono-label" style={{ whiteSpace: 'pre-line' }}>
                {m.desc}
              </p>
            </article>
          ))}
        </nav>
      </div>
    </section>
  );
}