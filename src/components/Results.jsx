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
          alt="DV Jewellery Designer Luxury Boutique"
          loading="lazy"
          decoding="async"
          width="1440"
          height="960"
        />
        <div className="case-section__mask"></div>
      </motion.div>

      <div className="case-section__inner">
        {/* Left Column: Story, Specs, CTA & Proof Stats */}
        <div className="case-section__copy">
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
          </div>

          <a
            className="cta-block case-section__cta"
            href="/case-studies"
            onClick={(e) => {
              e.preventDefault();
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

          <div className="case-section__proof">
            <div>
              <span>CHECKOUT DROPOFF CUT</span>
              <strong>
                <AnimatedCounter to={58} prefix="-" suffix="%" />
                <span className="case-section__proof-dots" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i>
                </span>
              </strong>
            </div>
            <div>
              <span>SALES CONVERSION</span>
              <strong>
                <AnimatedCounter to={76} prefix="+" suffix="%" />
                <span className="case-section__proof-dots" aria-hidden="true">
                  <i></i><i></i><i></i><i></i><i></i><i></i>
                </span>
              </strong>
            </div>
          </div>
        </div>

        {/* Right Column: Immersive Quote & Glyph */}
        <figure className="case-section__quote">
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

          <blockquote>
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
