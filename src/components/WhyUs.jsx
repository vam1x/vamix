import React from 'react';
import SectionGrid from './SectionGrid';
import AnimatedCounter from './AnimatedCounter';

export default function WhyUs() {
  const advantages = [
    {
      num: "01",
      line1: " USER-FIRST",
      line2: "DESIGN APPROACH"
    },
    {
      num: "02",
      line1: "PROVEN RESULTS",
      line2: "ACROSS INDUSTRIES"
    },
    {
      num: "03",
      line1: "COLLABORATIVE PROCESS, ",
      line2: "NO SURPRISES"
    },
    {
      num: "04",
      line1: "3+ YEARS OF",
      line2: "DESIGN AND BUILD"
    }
  ];

  return (
    <section className="advantages-section" id="why-us" aria-labelledby="advantages-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="advantages-section__inner">
        <div className="advantages-row">
          {/* Left Column (Cols 1-2): Kicker, Heading, Description */}
          <div className="advantages-lead">
            <div className="advantages-lead__heading">
              <div className="section-kicker section-kicker--dark">
                <span>03</span>
                <span>Why us?</span>
              </div>
              <h2 id="advantages-title">
                <span className="advantages-lead__muted">WHY COMPANIES</span> CHOOSE VAMIX®
              </h2>
            </div>
            <p className="advantages-lead__description">
              We turn messy product problems into tools people trust.
            </p>
          </div>

          {/* Right Column (Cols 3-4): Aperture Icon, Heading, 4 Advantage Items, Source */}
          <div className="advantages-section__list">
            <div className="advantages-section__list-heading">
              <span className="advantages-section__mark" aria-hidden="true">
                <svg width="79" height="58" viewBox="0 0 79 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.9438 29C21.9438 45.0163 34.7162 58 50.4719 58C66.2275 58 79 45.0163 79 29C79 12.9837 66.2275 0 50.4719 0C34.7162 0 21.9438 12.9837 21.9438 29Z" fill="#171717" />
                  <path d="M18.9145 1.79855C7.89493 5.7584 4.18643e-06 16.4418 0 28.9998C0 41.5577 7.89493 52.2411 18.9145 56.201V1.79855Z" fill="#171717" />
                </svg>
              </span>
              <h3>
                <span>OUR ADVANTAGES </span>
                <span className="advantages-section__list-heading-muted">include:</span>
              </h3>
            </div>

            <div className="advantage-items" role="list">
              {advantages.map((item, idx) => (
                <article key={idx} className="advantage-item" role="listitem">
                  <i className="corner-mark corner-mark--bottom-left" aria-hidden="true"></i>
                  <span className="advantage-item__number">{item.num}</span>
                  <div className="advantage-item__copy">
                    <span className="advantage-item__line">{item.line1}</span>
                    <span className="advantage-item__line">{item.line2}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="stats-panel__source mono-label">
              <span>Source:</span>
              <span>CLIENT FEEDBACK & PROJECT DATA</span>
              <span className="stats-panel__source-date">
                <img src="/calendar.png" alt="Calendar date icon" width="16" height="16" loading="lazy" decoding="async" />
                <span>Apr 2025</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats & Partnership Panel Box */}
        <aside className="stats-panel" aria-labelledby="stats-heading">
          <div className="page-grid-lines stats-panel__grid" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h2 id="stats-heading" className="visually-hidden">Key Statistics</h2>

          <div className="stats-panel__top" role="list">
            <div className="stat-card" role="listitem">
              <strong>
                <AnimatedCounter to={85} suffix="%" aria-label="85 percent client retention" />
              </strong>
              <span className="mono-label">CLIENT RETENTION</span>
            </div>
            <div className="stat-card" role="listitem">
              <strong>
                <AnimatedCounter to={3} suffix="+" aria-label="3 plus years experience" />
              </strong>
              <span className="mono-label">YEARS EXPERIENCE</span>
            </div>
            <div className="stat-card" role="listitem">
              <strong>
                <AnimatedCounter to={5} suffix="X" aria-label="5 times faster delivery" />
              </strong>
              <span className="mono-label">FASTER DELIVERY</span>
            </div>
          </div>

          <div className="stats-panel__bottom">
            <div className="partnership-panel">
              <div className="partnership-panel__copy">
                <div className="partnership-panel__heading">
                  <p className="partnership-panel__eyebrow">PARTNERSHIP, NOT HANDOFFS</p>
                  <h3>YOUR TEAM WORKS WITH OUR TEAM</h3>
                </div>
                <p>
                  We don't vanish for weeks then drop finished work. You're involved at every step: workshops, reviews, testing.
                </p>
              </div>
            </div>
          </div>

          <img
            src="/stats-gradient.webp"
            alt=""
            aria-hidden="true"
            width="676"
            height="563"
            className="stats-panel__gradient"
          />
        </aside>
      </div>
    </section>
  );
}