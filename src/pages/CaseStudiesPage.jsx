import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionGrid from '../components/SectionGrid';
import Contact from '../components/Contact';
import AboutBooking from '../components/about/AboutBooking';
import projects from './caseStudiesData.json';
import useSeo from '../hooks/useSeo';
import RollingText from '../components/RollingText';
import './case-studies.css';

export default function CaseStudiesPage({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useSeo('case-studies');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFinePointer = () => {
    return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  };

  const handleLink = (e, href) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (['/', '/about', '/case-studies', '/services', '/contact'].includes(href)) {
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
      {/* JSON-LD Structured Data for Case Studies Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "VAMIX Case Studies",
            "description": "Explore how VAMIX designs and builds high-performing digital products for clients across industries.",
            "itemListElement": projects.map((project, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "headline": `${project.title} - ${project.category}`,
                "description": project.desc,
                "genre": project.category,
                "url": project.href,
                "image": `https://vamix.in${project.images[1]}`,
                "creator": {
                  "@id": "https://vamix.in/#organization"
                },
                "publisher": {
                  "@id": "https://vamix.in/#organization"
                }
              }
            }))
          })
        }}
      />

      {/* 01. Case Studies Heading / Hero Section */}
      <section className="cs-hero-section" id="cs-hero" aria-labelledby="cs-main-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={false} crosshairPositions={[0, 1, 2, 3, 4]} />
        <div className="cs-content-grid">
          {/* Column 1: Client Stories Tag */}
          <div className="cs-tag-col">
            <div className="cs-pill-badge">
              <span className="cs-badge-dot" aria-hidden="true" />
              <span>CLIENT STORIES</span>
            </div>
          </div>

          {/* Column 2-4: Title and Subtitle */}
          <div className="cs-heading-col">
            <h1 id="cs-main-title" className="cs-main-title">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                CASE STUDIES
              </motion.span>
            </h1>
            <motion.p
              className="cs-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Real projects where design solved actual business<br className="cs-desktop-break" />{' '}
              problems, not just made things look prettier.
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
            <div className="cs-projects-list" role="list" aria-label="Case studies">
              {projects.map((project, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <article
                    key={project.title}
                    className={`cs-project-row ${isActive ? 'is-active' : ''}`}
                    role="listitem"
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
                        e.currentTarget.blur();
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
                          role="region"
                          aria-label={`${project.title} details`}
                        >
                          <p className="cs-row-desc">{project.desc}</p>
                          
                          <div className="cs-project-details">
                            {project.challenge && (
                              <div className="cs-detail-block">
                                <span className="cs-detail-label">The Challenge</span>
                                <p>{project.challenge}</p>
                              </div>
                            )}
                            {project.approach && (
                              <div className="cs-detail-block">
                                <span className="cs-detail-label">Our Approach</span>
                                <p>{project.approach}</p>
                              </div>
                            )}
                            {project.technology && project.technology.length > 0 && (
                              <div className="cs-detail-block">
                                <span className="cs-detail-label">Technology & Architecture</span>
                                <div className="cs-tech-tags">
                                  {project.technology.map((tech, tIdx) => (
                                    <span key={tIdx} className="cs-tech-pill">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                            {project.results && (
                              <div className="cs-detail-block">
                                <span className="cs-detail-label">Key Outcomes</span>
                                <p>{project.results}</p>
                              </div>
                            )}
                            {project.serviceLink && project.serviceName && (
                              <div className="cs-detail-block">
                                <span className="cs-detail-label">Related Service</span>
                                <a
                                  href={project.serviceLink}
                                  className="cs-service-link"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (navigate) {
                                      e.preventDefault();
                                      navigate(project.serviceLink);
                                    }
                                  }}
                                >
                                  {project.serviceName} ↗
                                </a>
                              </div>
                            )}
                          </div>

                          <div className="cs-row-actions">
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cs-read-more-btn"
                              aria-label={`View live project for ${project.title}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                e.currentTarget.blur();
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
                            <img src={project.images[1]} alt={`${project.title} project preview`} width="460" height="306" className="cs-mobile-preview-img" loading="lazy" decoding="async" />
                            <div className="cs-mobile-logo-wrap">
                              <img src={project.images[0]} alt={`${project.title} brand logo`} width="160" height="70" className="cs-mobile-logo-img" loading="lazy" decoding="async" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
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
                      width="1440"
                      height="900"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="cs-logo-center-badge">
                      <img
                        src={currentProject.images[0]}
                        alt={`${currentProject.title} client logo`}
                        className="cs-client-logo-img"
                        width="200"
                        height="80"
                        loading="lazy"
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

      {/* 03. Services Bridge Callout */}
      <section className="products-bridge page-section" aria-labelledby="cs-services-bridge-title">
        <SectionGrid theme="dark" showTopLine={false} showBottomLine={false} />
        <div className="content-grid section-content bridge-inner">
          <div className="bridge-copy section-span-three">
            <h2 id="cs-services-bridge-title">
              READY TO BUILD? EXPLORE OUR COMPLETE SERVICE OFFERINGS.
            </h2>
            <a
              className="bridge-link"
              href="/services"
              onClick={(e) => {
                if (navigate) {
                  e.preventDefault();
                  navigate('/services');
                }
              }}
              aria-label="View all services"
            >
              <span><RollingText text="VIEW ALL SERVICES" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* 04. Shared booking callout, matched to the reference section. */}
      <AboutBooking navigate={navigate} />

      {/* 04. Standard Contact / Get In Touch Form Section */}
      <Contact navigate={navigate} />
    </div>
  );
}