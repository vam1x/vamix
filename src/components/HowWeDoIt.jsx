import React, { useState, useEffect, useRef } from 'react';
import SectionGrid from './SectionGrid';
import AnimatedCounter from './AnimatedCounter';
import RollingLabel from './RollingLabel';

export default function HowWeDoIt({ navigate }) {
  const [delayInView, setDelayInView] = useState(false);
  const delayRef = useRef(null);

  useEffect(() => {
    const el = delayRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDelayInView(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      num: "01/",
      text: "EMPATHY MAPPING, LEARN USER NEEDS THROUGH FIELD RESEARCH"
    },
    {
      num: "02/",
      text: "RAPID PROTOTYPING, VALIDATE IDEAS BEFORE FULL DEVELOPMENT"
    },
    {
      num: "03/",
      text: "USER TESTING, GATHER LIVE FEEDBACK TO REFINE THE WORK"
    },
    {
      num: "04/",
      text: "BUILD AND LAUNCH, IMPLEMENT AND MEASURE PERFORMANCE"
    }
  ];

  const delayCards = [
    {
      barFrac: 0.8,
      num: "01/",
      line1: "USER FRUSTRATION ",
      line2: "DRIVES CHURN",
      numVal: 83,
      val: "+83%",
      metric: "/CHURNRATE"
    },
    {
      barFrac: 0.5,
      num: "02/",
      line1: "COMPETITORS CAPTURE ",
      line2: "YOUR MARKET",
      numVal: 55,
      val: "+55%",
      metric: "/MARKETSHARE"
    },
    {
      barFrac: 0.6,
      num: "03/",
      line1: "TECHNICAL DEBT ",
      line2: "ACCUMULATES",
      numVal: 66,
      val: "+66%",
      metric: "/DEVELOPMENT"
    },
    {
      barFrac: 0.3,
      num: "04/",
      line1: "REDESIGN COSTS ",
      line2: "CLIMB OVER TIME",
      numVal: 45,
      val: "+45%",
      metric: "/cost"
    }
  ];

  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="process-section__inner">
        {/* Top Part: Process Group (Heading + Steps + Footer CTA/Chart) */}
        <div className="process-group">
          <div className="process-row">
            {/* Left Column (Cols 1-2): Kicker, Title, Intro */}
            <div className="process-lead">
              <div className="process-lead__heading">
                <div className="section-kicker section-kicker--dark">
                  <span>04</span>
                  <span>How we do it</span>
                </div>
                <h2 id="process-title" className="process-section__title">
                  The Fast <span className="process-section__title-line">Track to </span>LIVE PRODUCTS
                </h2>
              </div>
              <div className="process-section__intro">
                <p>We skip the guesswork and the endless revisions. The work ships.</p>
              </div>
            </div>

            {/* Right Column (Cols 3-4): 2x2 Steps Grid */}
            <div className="process-steps">
              {steps.map((step, idx) => (
                <article key={idx} className="process-step">
                  <div className="process-step__number">{step.num}</div>
                  <div className="process-step__line" aria-hidden="true">
                    <span></span>
                  </div>
                  <h3>{step.text}</h3>
                </article>
              ))}
            </div>
          </div>

          {/* Footer Row: Left CTA Block, Right Segmented Circle Chart */}
          <div className="process-section__footer">
            <div className="process-section__cta">
              <a
                className="cta-block"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate?.('contact');
                }}
              >
                <RollingLabel text="START YOUR PROJECT" />
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

            <div className="process-chart">
              <svg
                className="process-segmented-circle"
                viewBox="0 0 200 200"
                role="img"
                aria-label="Progress: 98 percent"
              >
                <circle cx="100" cy="100" r="100" fill="rgb(23, 23, 23)" />
                <path
                  d="M 180.90169943749476 158.77852522924732 A 100 100 0 0 0 100 0 L 100 100 Z"
                  fill="rgb(245, 245, 245)"
                />
              </svg>
              <p id="process-chart-copy">
                Our work has improved task completion by up to 98% in the first month.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Part: Cost of Delay Matrix */}
        <section className="delay-block" aria-labelledby="delay-title">
          <div className="delay-block__heading">
            <div className="section-kicker section-kicker--dark">
              <span className="delay-block__dot" aria-hidden="true"></span>
              <span>WHY DELAY HURTS</span>
            </div>
            <h2 id="delay-title">
              THE LONGER YOU WAIT, THE MORE IT COSTS TO BUILD IT RIGHT.
            </h2>
          </div>

          <div ref={delayRef} className="delay-cards">
            {delayCards.map((card, idx) => (
              <article key={idx} className="delay-card">
                <div
                  className="delay-card__fill"
                  style={{
                    '--bar-frac': delayInView ? card.barFrac : 0.02
                  }}
                >
                  <div className="delay-card__copy">
                    <span className="delay-card__number">{card.num}</span>
                    <span className="delay-card__line">{card.line1}</span>
                    <span className="delay-card__line">{card.line2}</span>
                  </div>
                  <strong className="delay-card__value">
                    <AnimatedCounter to={card.numVal} prefix="+" suffix="%" />
                  </strong>
                </div>
                <div className="delay-card__metric">
                  <span>{card.metric}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
