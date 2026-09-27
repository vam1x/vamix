import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from '../components/RollingText';
import SectionGrid, { GridCrosshair } from '../components/SectionGrid';
import Contact from '../components/Contact';
import projects from './caseStudiesData.json';
import './case-studies.css';

const rubyAvatar = 'https://framerusercontent.com/images/awFufuyIlbDdk2me7dySF9Y3r8.png?width=2048&height=2048';

export default function CaseStudiesPage({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    document.title = 'Case Studies | Webus Product Studio';
    window.scrollTo(0, 0);
  }, []);

  const handleLink = (e, href) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (['/', '/about', '/case-studies', '/contact'].includes(href)) {
      e.preventDefault();
      if (navigate) navigate(href);
    }
  };

  const currentProject = projects[activeIdx] || projects[0];

  return (
    <div className="case-studies-page">
      {/* 01. Case Studies Heading / Hero Section */}
      <section className="cs-hero-section" id="cs-hero">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={false} crosshairPositions={[0, 1, 2, 3, 4]} />
        <div className="cs-content-grid">
          {/* Column 1: Client Stories Tag */}
          <div className="cs-tag-col">
            <div className="cs-pill-badge">
              <span className="cs-badge-dot" />
              <span>CLIENT STORIES</span>
            </div>
          </div>

          {/* Column 2-4: Title and Subtitle */}
          <div className="cs-heading-col">
            <motion.h1 
              className="cs-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              CASE STUDIES
            </motion.h1>
            <motion.p 
              className="cs-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Real projects where design solved actual business problems, not just made things look prettier.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. Interactive Projects Showcase Section (Clean 4-Column Grid, No extra horizontal lines) */}
      <section className="cs-projects-section" id="cs-projects" aria-label="Projects Showcase">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={false} crosshairPositions={[0, 1, 2, 3, 4]} />
        <div className="cs-projects-grid">
          {/* Column 1: Empty Filler matching blueprint Col 1 */}
          <div className="cs-filler-col" aria-hidden="true" />

          {/* Column 2 & 3: Projects List */}
          <div className="cs-accordion-col">
            <div className="cs-projects-list">
              {projects.map((project, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div 
                    key={project.title}
                    className={`cs-project-row ${isActive ? 'is-active' : ''}`}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <button 
                      className="cs-row-title-btn"
                      aria-expanded={isActive}
                      type="button"
                    >
                      <span className="cs-row-title-text">{project.title}</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div 
                          className="cs-row-body"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <p className="cs-row-desc">{project.desc}</p>
                          <div className="cs-row-actions">
                            <a 
                              href={project.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="cs-read-more-btn"
                              onClick={(e) => {
                                if (project.href.startsWith('/')) {
                                  handleLink(e, project.href);
                                }
                              }}
                            >
                              <RollingText text="Read more" />
                              <span className="cs-arrow-icon" aria-hidden="true">↗</span>
                            </a>
                          </div>

                          {/* Mobile inline preview card (visible only on screens <= 810px) */}
                          <div className="cs-mobile-preview-card">
                            <img src={project.images[1]} alt={project.title} className="cs-mobile-preview-img" loading="lazy" />
                            <div className="cs-mobile-logo-wrap">
                              <img src={project.images[0]} alt="" className="cs-mobile-logo-img" loading="lazy" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 4: Interactive Desktop Image Preview Card (Exact Framed Mockup matching Photo 4) */}
          <div className="cs-preview-col" aria-hidden="true">
            <div className="cs-sticky-preview-wrap">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentProject.title}
                  className="cs-featured-preview-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="cs-preview-mockup-frame">
                    <img 
                      src={currentProject.images[1]} 
                      alt={currentProject.title} 
                      className="cs-featured-bg-img"
                      loading="eager"
                    />
                    <div className="cs-logo-center-badge">
                      <img 
                        src={currentProject.images[0]} 
                        alt="" 
                        className="cs-client-logo-img"
                        loading="eager"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 03. "YOUR FIRST STEP" Callout Section (Exact Match to Reference Photo 2) */}
      <section className="cs-callout-section" id="cs-first-step">
        <SectionGrid theme="light" showTopLine={true} showBottomLine={false} crosshairPositions={[0, 1, 2, 3, 4]} />
        <div className="cs-callout-grid">
          {/* Column 1: Badge */}
          <div className="cs-callout-badge-col">
            <div className="cs-pill-badge">
              <span className="cs-badge-dot" />
              <span>YOUR FIRST STEP</span>
            </div>
          </div>

          {/* Column 2: Heading & Light Book Call Button with Rainbow Bar */}
          <div className="cs-callout-heading-col">
            <h2 className="cs-callout-title">
              BOOK A FREE<br />
              30-MINUTE<br />
              CALL.
            </h2>

            <div className="cs-callout-btn-wrap">
              <a 
                href="/contact" 
                onClick={(e) => handleLink(e, '/contact')}
                className="cs-book-call-btn"
              >
                <span className="cs-book-btn-text">
                  <RollingText text="BOOK A CALL" />
                </span>
                <span className="cs-call-btn-arrow" aria-hidden="true">›</span>
                {/* Rainbow bottom gradient bar */}
                <div className="cs-rainbow-bar" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 3: Ruby Rattey Quote & Profile */}
          <div className="cs-callout-quote-col">
            <p className="cs-callout-quote-text">
              My job is making sure you leave our first call with clarity and next steps.
            </p>
            <div className="cs-callout-author">
              <div className="cs-author-text">
                <span className="cs-author-name">RUBY RATTEY</span>
                <span className="cs-author-role">CLIENT SUCCESS MANAGER</span>
              </div>
              <img src={rubyAvatar} alt="Ruby Rattey" className="cs-author-avatar" loading="lazy" />
            </div>
          </div>

          {/* Column 4: Ambient glow column */}
          <div className="cs-callout-glow-col" aria-hidden="true" />
        </div>
      </section>

      {/* 04. Standard Contact / Get In Touch Form Section */}
      <Contact navigate={navigate} />
    </div>
  );
}
