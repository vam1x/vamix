import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionGrid from '../components/SectionGrid';
import Contact from '../components/Contact';
import AboutBooking from '../components/about/AboutBooking';
import projects from './caseStudiesData.json';
import './case-studies.css';

export default function CaseStudiesPage({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    document.title = 'Case Studies | VAMIX Product Studio';
    window.scrollTo(0, 0);
  }, []);

  const isFinePointer = () => {
    return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  };

  const handleLink = (e, href) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (['/', '/about', '/case-studies', '/contact'].includes(href)) {
      e.preventDefault();
      if (navigate) navigate(href);
    }
  };

  const toggleProject = (idx) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  const handleRowHover = (idx) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1200) {
      setActiveIdx(idx);
    }
  };

  const currentProject = activeIdx === null ? null : projects[activeIdx];

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
              Real projects where design solved actual business<br className="cs-desktop-break" />{' '}problems, not just made things look prettier.
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
                    onMouseEnter={() => handleRowHover(idx)}
                    onClick={() => toggleProject(idx)}
                  >
                    <button 
                      className="cs-row-title-btn"
                      aria-expanded={isActive}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProject(idx);
                      }}
                    >
                      <span className="cs-row-title-text">{project.title}</span>
                      <span className={`cs-row-chevron ${isActive ? 'is-open' : ''}`} aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
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
                              aria-label={`View live project for ${project.title}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (project.href.startsWith('/')) {
                                  handleLink(e, project.href);
                                }
                              }}
                            >
                              View Live <span className="cs-arrow-icon" aria-hidden="true">↗</span>
                            </a>
                          </div>

                          {/* Mobile inline preview card (visible on screens <= 1199px) */}
                          <div className="cs-mobile-preview-card">
                            <img src={project.images[1]} alt={`${project.title} project preview`} className="cs-mobile-preview-img" loading="lazy" decoding="async" />
                            <div className="cs-mobile-logo-wrap">
                              <img src={project.images[0]} alt={`${project.title} brand logo`} className="cs-mobile-logo-img" loading="lazy" decoding="async" />
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
          <div className="cs-preview-col" aria-hidden="true" style={{ '--preview-offset': `${(activeIdx ?? 0) * 62}px` }}>
            <div className="cs-sticky-preview-wrap">
              <AnimatePresence mode="wait">
                {currentProject && <motion.div
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
                      alt={`${currentProject.title} featured showcase`} 
                      className="cs-featured-bg-img"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="cs-logo-center-badge">
                      <img 
                        src={currentProject.images[0]} 
                        alt={`${currentProject.title} client logo`} 
                        className="cs-client-logo-img"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </motion.div>}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Shared booking callout, matched to the reference section. */}
      <AboutBooking navigate={navigate} />

      {/* 04. Standard Contact / Get In Touch Form Section */}
      <Contact navigate={navigate} />
    </div>
  );
}
