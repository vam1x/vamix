import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionGrid from '../components/SectionGrid';
import RollingText from '../components/RollingText';
import ServiceRow from '../components/services/ServiceRow';
import AboutBooking from '../components/about/AboutBooking';
import Contact from '../components/Contact';
import './services.css';

const designServices = [
  {
    id: 'product-discovery',
    title: 'Product Discovery & Design',
    desc: 'We find what to build before you spend on building it. Research and MVP planning rank the features users want, then the same team turns them into interfaces, flows, and prototypes people understand on first use.',
    img: 'https://framerusercontent.com/images/6OmjgOx22QtO6dEOYVLiZJeoSwM.png?width=1280&height=853'
  },
  {
    id: 'design-system',
    title: 'Design System',
    desc: 'We build the systems that make a product easier to scale: component libraries, tokens, and documentation that keep every screen consistent. Your team moves faster because the rules are clear, reusable, and ready to use.',
    img: 'https://framerusercontent.com/images/ZvNRQ5Oed8cQPMrFre4rMhtcfo.png?width=1280&height=853'
  },
  {
    id: 'web-mobile-apps-design',
    title: 'Web & Mobile Apps',
    desc: 'We design web and mobile apps that feel obvious to use. Every screen, state, and gesture is worked out before a line of code, so the build inherits a product that already makes sense.',
    img: 'https://framerusercontent.com/images/386pvl4aR5zXLiVC2vXxYb8kQM.png?width=1280&height=853'
  },
  {
    id: 'design-ops',
    title: 'Design Ops',
    desc: 'We set up the systems that keep design consistent as you grow: component libraries, tokens, and documentation. New screens stay on brand and ship faster because the rules are already built.',
    img: 'https://framerusercontent.com/images/JzhjVso2Nh4zknv4ZH2tzWBG1I.png?width=1280&height=853'
  }
];

const devServices = [
  {
    id: 'ai-products',
    title: 'AI Products',
    desc: 'We build products that run on AI: copilots, assistants, and search that understands your data. It all ships as one piece, designed and engineered by one team.',
    img: 'https://framerusercontent.com/images/rNRMJnqYryuqBFloeiR7qJvIbg.png?width=1280&height=853'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    desc: 'We take repetitive, manual work off your team and hand it to AI. Document processing, support triage, data entry, and reporting run on their own, with people kept in the loop where judgment matters.',
    img: 'https://framerusercontent.com/images/9SNyQRgQae9KDut3bhvfty7JcM.png?width=1280&height=853'
  },
  {
    id: 'ai-harness',
    title: 'AI Harness',
    desc: 'We build the agentic systems behind serious AI work: custom agents, tool and MCP integrations, memory, and the control loop that keeps them reliable. The engine room for teams that need AI to do real tasks, not just chat.',
    img: 'https://framerusercontent.com/images/rQHDqrktYhv0HbXCAlNKL7QVzUI.png?width=1280&height=853'
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    desc: 'We build web apps that stay fast and stable under real load, from dashboards to full platforms. The same team that designed the product writes the code, so nothing gets lost between mockup and launch.',
    img: 'https://framerusercontent.com/images/j2E0U7LSCXIY3QGiowBEwLy6Ecw.png?width=1280&height=853'
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    desc: 'We build iOS and Android apps that feel native, load fast, and hold up in daily use. Designed and engineered under one roof, shipped store ready.',
    img: 'https://framerusercontent.com/images/EI1VrST0kTaUMxSZNeKb7QxO7g.png?width=1280&height=853'
  },
  {
    id: 'websites-landing-pages',
    title: 'Websites & Landing Pages',
    desc: 'We build websites and landing pages with a job to do: explain, convince, convert. Fast, responsive, and easy to update, with the motion and polish that make a brand look right online.',
    img: 'https://framerusercontent.com/images/WefTiNGQj0OvMaZMWy9rb67Tq4.png?width=1280&height=853'
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools & Automation',
    desc: 'We build the admin panels, dashboards, and internal tools your team runs on every day. Custom fit to how you actually work, with the right access controls and no bloat.',
    img: 'https://framerusercontent.com/images/DXEOFkSPNA52OzNsP4UU22Wis.png?width=1280&height=853'
  }
];

export default function ServicesPage({ navigate }) {
  useEffect(() => {
    document.title = "Services: Design & Development | Webus";
    window.scrollTo(0, 0);
  }, []);

  const handleCaseStudiesClick = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('/case-studies');
    } else {
      window.location.href = '/case-studies';
    }
  };

  return (
    <div className="services-page-wrapper">
      {/* 01: HERO SECTION */}
      <section className="services-hero" aria-label="Services overview">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />

        <div className="services-hero-grid">
          {/* Left Column: Number Badge & Tagline */}
          <div className="services-hero-col-side">
            <motion.div
              className="services-hero-num"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>2</span>
              <span>/</span>
            </motion.div>
            <motion.p
              className="services-hero-tag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              TRACKS UNDER ONE ROOF
            </motion.p>
          </div>

          {/* Right Column: Main H1 Headline & Statement */}
          <div className="services-hero-col-content">
            <motion.h1
              className="services-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              WE DESIGN IT,<br />THEN WE BUILD IT
            </motion.h1>

            <motion.p
              className="services-hero-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Two tracks under one roof. Design works out what to make. Development ships it as working software. One team runs both.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02: TRACK 01 — DESIGN */}
      <section className="services-track-section services-track-design" id="design-services" aria-labelledby="design-services-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />

        <div className="services-track-container">
          <div className="services-track-header">
            {/* Left Badge */}
            <div className="services-track-badge-col">
              <div className="services-track-badge">
                <span className="services-track-badge-num">
                  <span className="services-track-dot" aria-hidden="true" />
                  <span>01</span>
                </span>
                <span>DESIGN</span>
              </div>
            </div>

            {/* Right Heading & Statement */}
            <div className="services-track-heading-col">
              <h2 id="design-services-title" className="services-track-title">
                DESIGN
              </h2>
              <p className="services-track-desc">
                We decide what to build and shape how it works, from first research to final screen.
              </p>
            </div>
          </div>

          {/* Expandable Rows for Design Track */}
          <div className="services-rows-list">
            {designServices.map((service, idx) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={idx}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 03: TRACK 02 — DEVELOPMENT */}
      <section className="services-track-section services-track-dev" id="development-services" aria-labelledby="dev-services-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />

        <div className="services-track-container">
          <div className="services-track-header">
            {/* Left Badge */}
            <div className="services-track-badge-col">
              <div className="services-track-badge">
                <span className="services-track-badge-num">
                  <span className="services-track-dot" aria-hidden="true" />
                  <span>02</span>
                </span>
                <span>DEVELOPMENT</span>
              </div>
            </div>

            {/* Right Heading & Statement */}
            <div className="services-track-heading-col">
              <h2 id="dev-services-title" className="services-track-title">
                DEVELOPMENT
              </h2>
              <p className="services-track-desc">
                We write the production code that turns the design into a product people can use. AI leads the way we build.
              </p>
            </div>
          </div>

          {/* Expandable Rows for Development Track */}
          <div className="services-rows-list">
            {devServices.map((service, idx) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={idx}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 04: IN-HOUSE PRODUCTS BRIDGE (Dark Card) */}
      <section className="services-products-bridge" aria-label="In-house products highlight">
        <SectionGrid theme="dark" showTopLine={false} showBottomLine={false} />

        <div className="services-bridge-container">
          <h2 className="services-bridge-text">
            WANT PROOF? SEE THE PRODUCTS WE BUILT IN-HOUSE.
          </h2>

          <a
            href="/case-studies"
            onClick={handleCaseStudiesClick}
            className="services-bridge-btn"
            aria-label="View our case studies and products"
          >
            <RollingText text="VIEW PRODUCTS" />
          </a>
        </div>
      </section>

      {/* 05: YOUR FIRST STEP (Book a Call with Ruby Rattey) */}
      <AboutBooking navigate={navigate} />

      {/* 06: GET IN TOUCH (Contact form, bottom mega-nav, and footer) */}
      <Contact navigate={navigate} />
    </div>
  );
}
