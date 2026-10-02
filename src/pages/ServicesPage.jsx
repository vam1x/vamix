import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
    tags: '#DISCOVERY #UIUXDESIGN #PROTOTYPING',
    img: '/images/services/discovery.webp'
  },
  {
    id: 'design-system',
    title: 'Design System',
    desc: 'We build reusable components, tokens and patterns that stay in step across design and code. Clear usage guidelines help designers and engineers create consistent screens as your product grows.',
    tags: '#COMPONENTLIBRARY #TOKENS #PATTERNS',
    img: '/images/services/design-system.avif'
  },
  {
    id: 'web-mobile-apps-design',
    title: 'Web & Mobile Applications',
    desc: 'We design web and mobile apps that feel obvious to use. Every screen, state, and gesture is worked out before a line of code, so the build inherits a product that already makes sense.',
    tags: '#WEBAPPS #MOBILEAPPS #RESPONSIVE',
    img: '/images/services/web-mobile.webp'
  },
  {
    id: 'design-ops',
    title: 'Design Ops',
    desc: 'We organise how design work gets done: clear briefs, shared priorities, useful reviews and smooth handoffs. Your team knows who owns each decision and how to move work from idea to delivery.',
    tags: '#WORKFLOWS #COLLABORATION #HANDOFFS',
    img: '/images/services/design-ops.webp'
  },
  {
    id: 'ux-strategy',
    title: 'UX Strategy',
    desc: 'We turn business goals into a product direction you can act on. Audits, user research, and journey mapping decide what to fix, what to build next, and what to leave alone.',
    tags: '#RESEARCH #AUDITS #JOURNEYMAPPING',
    img: '/images/services/ux-strategy.webp'
  }
];

const devServices = [
  {
    id: 'ai-products',
    title: 'AI Products',
    desc: 'We build products that run on AI: copilots, assistants, and search that understands your data. It all ships as one piece, designed and engineered by one team.',
    tags: '#LLM #RAG #VECTORDB',
    img: '/images/services/discovery.webp'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    desc: 'We take repetitive, manual work off your team and hand it to AI. Document processing, support triage, data entry, and reporting run on their own, with people kept in the loop where judgment matters.',
    tags: '#AUTOMATION #WORKFLOWS #INTEGRATIONS',
    img: '/images/services/web-mobile.webp'
  },
  {
    id: 'ai-harness',
    title: 'AI Harness',
    desc: 'We build the agentic systems behind serious AI work: custom agents, tool and MCP integrations, memory, and the control loop that keeps them reliable. The engine room for teams that need AI to do real tasks, not just chat.',
    tags: '#AGENTS #MCP #ORCHESTRATION',
    img: '/images/services/design-ops.webp'
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    desc: 'We build web apps that stay fast and stable under real load, from dashboards to full platforms. The same team that designed the product writes the code, so nothing gets lost between mockup and launch.',
    tags: '#REACT #NODEJS #POSTGRESQL',
    img: '/images/services/ux-strategy.webp'
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    desc: 'We build iOS and Android apps that feel native, load fast, and hold up in daily use. Designed and engineered under one roof, shipped store ready.',
    tags: '#REACTNATIVE #EXPO #FIREBASE',
    img: '/images/services/mobile-apps.webp'
  },
  {
    id: 'websites-landing-pages',
    title: 'Websites & Landing Pages',
    desc: 'We build websites and landing pages with a job to do: explain, convince, convert. Fast, responsive, and easy to update, with the motion and polish that make a brand look right online.',
    tags: '#NEXTJS #GSAP #SEO',
    img: '/images/services/websites.avif'
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools & Automation',
    desc: 'We build the admin panels, dashboards, and internal tools your team runs on every day. Custom fit to how you actually work, with the right access controls and no bloat.',
    tags: '#DASHBOARDS #RBAC #FASTAPI',
    img: '/images/services/internal-tools.webp'
  }
];

function RevealHeading({ text, className = '' }) {
  const reducedMotion = useReducedMotion();
  return <motion.span className={`services-reveal ${className}`} aria-label={text} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ staggerChildren: reducedMotion ? 0 : 0.018 }}>
    {text.split(' ').map((word, i) => <span className="services-reveal-word" aria-hidden="true" key={i}>{[...word].map((char, j) => <motion.span key={j} variants={{ hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : '105%' }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}>{char}</motion.span>)}{'\u00a0'}</span>)}
  </motion.span>;
}

export default function ServicesPage({ navigate }) {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    document.title = "Services: Design & Development | VAMIX";
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
      {/* 01: SERVICES HERO SECTION */}
      <section className="services-hero page-section" aria-labelledby="services-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />

        <div className="content-grid section-content hero-content">
          <aside className="section-aside">
            <span className="aside-number">2/</span>
            <span className="aside-label">TRACKS UNDER ONE ROOF</span>
          </aside>

          <div className="hero-copy section-span-three">
            <h1 id="services-title" className="display-heading">
              <RevealHeading text="WE DESIGN IT," />
              <span className="display-heading__muted"><RevealHeading text="THEN WE" /><br /><RevealHeading text="BUILD IT" /></span>
            </h1>

            <motion.p className="hero-description" initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.3 }}>
              Two tracks under one roof. Design works out what to make. Development ships it as working software. One team runs both.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02: TRACK 01 — DESIGN */}
      <section id="design-services" className="track-section page-section" aria-labelledby="design-services-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />

        <div className="content-grid section-content track-content">
          <aside className="section-aside section-aside--inline">
            <span className="aside-number">01</span>
            <span className="aside-label">DESIGN</span>
          </aside>

          <div className="track-copy section-span-three">
            <h2 id="design-services-title" className="track-title"><RevealHeading text="DESIGN" /></h2>
            <p className="track-description">
              We decide what to build and shape how it works, from first research to final screen.
            </p>
          </div>

          <div className="service-list section-span-three">
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
      <section id="development-services" className="track-section page-section" aria-labelledby="dev-services-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />

        <div className="content-grid section-content track-content">
          <aside className="section-aside section-aside--inline">
            <span className="aside-number">02</span>
            <span className="aside-label">DEVELOPMENT</span>
          </aside>

          <div className="track-copy section-span-three">
            <h2 id="dev-services-title" className="track-title"><RevealHeading text="DEVELOPMENT" /></h2>
            <p className="track-description">
              We write the production code that turns the design into a product people can use. AI leads the way we build.
            </p>
          </div>

          <div className="service-list section-span-three">
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

      {/* 04: PRODUCTS BRIDGE (Dark Card) */}
      <section className="products-bridge page-section" aria-labelledby="products-title">
        <SectionGrid theme="dark" showTopLine={false} showBottomLine={false} />

        <div className="content-grid section-content bridge-inner">
          <div className="bridge-copy section-span-three">
            <h2 id="products-title">
              WANT PROOF? SEE THE PRODUCTS WE BUILT IN-HOUSE.
            </h2>
            <a
              className="bridge-link"
              href="/case-studies"
              onClick={handleCaseStudiesClick}
              aria-label="View our case studies and products"
            >
              <span><RollingText text="VIEW PRODUCTS" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* 05: YOUR FIRST STEP (Booking Band) */}
      <AboutBooking navigate={navigate} />

      {/* 06: GET IN TOUCH (Contact Section) */}
      <Contact navigate={navigate} />
    </div>
  );
}
