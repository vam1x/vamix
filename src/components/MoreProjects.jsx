import React, { useState } from 'react';
import SectionGrid from './SectionGrid';
import projects from '../pages/caseStudiesData.json';

export default function MoreProjects({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleRowHover = (idx) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1200) {
      setActiveIdx(idx);
    }
  };

  const toggleProject = (idx) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="more-projects" id="projects">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="more-projects__inner">
        {/* Column 1: Section Label */}
        <div className="more-projects__label">
          <span>More projects</span>
          <span className="more-projects__dot" aria-hidden="true"></span>
        </div>

        {/* Columns 2-4: Case Rows */}
        <div className="case-rows">
          {projects.map((project, idx) => {
            const isActive = activeIdx === idx;
            return (
              <article
                key={idx}
                className={`case-row ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => handleRowHover(idx)}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth < 1200) {
                    toggleProject(idx);
                  }
                }}
              >
                <div 
                  className="case-row__heading"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={(e) => {
                    if (typeof window !== 'undefined' && window.innerWidth < 1200) {
                      e.stopPropagation();
                      toggleProject(idx);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject(idx);
                    }
                  }}
                >
                  <h3>{project.title}</h3>
                  <span className={`case-row__chevron ${isActive ? 'is-open' : ''}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>

                <div
                  className="case-row__reveal"
                  style={{
                    height: isActive ? 'auto' : undefined
                  }}
                >
                  <p style={{ opacity: isActive ? 1 : undefined }}>
                    {project.desc}
                  </p>

                  <div className="case-row__mobile-actions">
                    <a
                      href="/case-studies"
                      className="case-row__mobile-link"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate?.('case-studies');
                      }}
                    >
                      VIEW CASE STUDY <span className="case-row__arrow" aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <span className="case-row__tags"></span>
                </div>

                <div
                  className="case-row__visual"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <div className="case-row__visual-group">
                    <img
                      src={project.images[1]}
                      alt={project.title}
                      loading="lazy"
                      data-case-hover-photo="true"
                      style={{
                        transform: isActive ? 'scale(1.04)' : 'scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                    {project.images[0] && (
                      <img
                        src={project.images[0]}
                        alt=""
                        loading="lazy"
                        className="case-row__visual-logo"
                      />
                    )}
                  </div>
                </div>

                <span
                  className="case-row__hover-label"
                  style={{ opacity: isActive ? 1 : 0 }}
                  aria-hidden="true"
                >
                  VIEW CASE STUDY ↗
                </span>

                <a
                  className="case-row__link"
                  href="/case-studies"
                  aria-label={`View ${project.title} case study`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate?.('case-studies');
                  }}
                >
                  VIEW CASE STUDY
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
