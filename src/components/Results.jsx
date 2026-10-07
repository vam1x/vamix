import React from 'react';
import { motion } from 'framer-motion';
import SectionGrid from './SectionGrid';
import { RevealText } from '../hooks/useScrollReveal';
import RollingLabel from './RollingLabel';
import AnimatedCounter from './AnimatedCounter';

export default function Results({ navigate }) {
  return (
    <section className="case-section" id="results" aria-labelledby="case-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      {/* JSON-LD Structured Data for Featured Project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "DV Jewellery Designer - Digital Flagship Boutique",
            "headline": "DV Jewellery Designer - Digital Flagship Boutique",
            "description": "DV Jewellery Designer partnered with VAMIX to architect a digital flagship boutique. Blending editorial storytelling with intuitive jewelry filtering, tactile piece inspection, and a seamless checkout.",
            "creator": {
              "@id": "https://vamix.in/#organization"
            },
            "publisher": {
              "@id": "https://vamix.in/#organization"
            },
            "url": "https://vamix.in/case-studies",
            "image": "https://vamix.in/projects/real/dv-hero.jpg",
            "genre": "Luxury E-Commerce / Fine Jewellery",
            "inLanguage": "en-US"
          })
        }}
      />

      {/* Featured Right-Side Image Backdrop with Split Mask */}
      <motion.div
        className="case-section__backdrop"
        aria-hidden="true"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/projects/real/dv-hero.jpg"
          alt="DV Jewellery Designer luxury digital boutique homepage showing fine jewelry collections"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1440"
          height="960"
        />
        <div className="case-section__mask"></div>
      </motion.div>

      <div className="case-section__inner">
        {/* Left Column: Story, Specs, CTA & Proof Stats */}
        <article className="case-section__copy">
          <div className="case-section__story">
            <div className="case-section__head">
              <div className="case-section__head-row">
                <div className="case-section__head-copy">
                  <div className="section-kicker section-kicker--dark">
                    <span>05</span>
                    <span>Results</span>
                  </div>
                  <h2 id="case-title" className="case-section__eyebrow">
                    SUCCESS STORY
                  </h2>
                </div>
                <span className="case-section__logo-text" aria-hidden="true">
                  VAMIX®
                </span>
              </div>
              <p className="case-section__description">
                DV Jewellery Designer partnered with VAMIX to architect a digital flagship
                boutique worthy of fine craftsmanship. By blending high-fashion editorial storytelling
                with intuitive jewelry filtering, tactile piece inspection, and a seamless checkout,
                the bespoke atelier transformed high-ticket online browsing into confident luxury purchases.
              </p>
            </div>

            <dl className="case-meta">
              <div>
                <dt>Date:</dt>
                <dd>2023–2024</dd>
              </div>
              <div>
                <dt>Industry:</dt>
                <dd>Luxury E-Commerce / Fine Jewellery</dd>
              </div>
              <div>
                <dt>Challenge:</dt>
                <dd>Standard digital catalog lacked tactile prestige, suppressing high-ticket custom conversions</dd>
              </div>
            </dl>

            <a
              className="cta-block case-section__cta"
              href="/case-studies"
              aria-label="See how we did it - view case studies"
              onClick={(e) => {
                e.preventDefault();
                e.currentTarget?.blur();
                navigate?.('case-studies');
              }}
            >
              <RollingLabel text="SEE HOW WE DID IT" />
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

            <div className="case-section__proof" role="list" aria-label="Key results">
              <div role="listitem">
                <span>CHECKOUT DROPOFF CUT</span>
                <strong>
                  <AnimatedCounter to={58} prefix="-" suffix="%" aria-label="58 percent reduction in checkout dropoff" />
                  <span className="case-section__proof-dots" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i><i></i>
                  </span>
                </strong>
              </div>
              <div role="listitem">
                <span>SALES CONVERSION</span>
                <strong>
                  <AnimatedCounter to={76} prefix="+" suffix="%" aria-label="76 percent increase in sales conversion" />
                  <span className="case-section__proof-dots" aria-hidden="true">
                    <i></i><i></i><i></i><i></i><i></i><i></i>
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </article>

        {/* Right Column: Immersive Quote & Glyph */}
        <figure className="case-section__quote" aria-labelledby="quote-text">
          <svg
            className="case-section__quote-glyph"
            width="88"
            height="72"
            viewBox="0 0 88 72"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M 24.856 31.462 C 24.856 16.75 41.784 15.891 41.784 15.891 L 41.784 0 C 6.443 0 0 24.178 0 35.715 L 0 72 L 41.788 72 L 41.788 31.462 Z M 71.068 31.462 C 71.068 16.75 88 15.891 88 15.891 L 88 0 C 52.654 0 46.212 24.178 46.212 35.715 L 46.212 72 L 88 72 L 88 31.462 Z"
              fill="rgb(245, 245, 245)"
            />
          </svg>

          <blockquote id="quote-text">
            <RevealText
              text="THEY DIDN'T JUST MAKE IT PRETTY. THEY MADE IT SELL. OUR BUYERS WENT FROM BROWSING TO BUYING WITH COMPLETE CONFIDENCE. BEST DESIGN INVESTMENT WE'VE MADE."
              theme="dark"
            />
          </blockquote>

          <figcaption>
            <div className="case-section__quote-lines">
              <span>DV JEWELLERY DESIGNER</span>
              <span>CRAFTING TIMELESS ELEGANCE</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}