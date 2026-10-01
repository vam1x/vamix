import React, { useState } from 'react';
import SectionGrid from './SectionGrid';
import projects from '../pages/caseStudiesData.json';

export default function MoreProjects({ navigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

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
            const isHovered = hoveredIdx === idx;
            return (
              <article
                key={idx}
                className={`case-row ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="case-row__heading">
                  <h3>{project.title}</h3>
                </div>

                <div
                  className="case-row__reveal"
                  style={{
                    height: isHovered ? 'auto' : undefined
                  }}
                >
                  <p style={{ opacity: isHovered ? 1 : undefined }}>
                    {project.desc}
                  </p>
                  <span className="case-row__tags"></span>
                </div>

                <div
                  className="case-row__visual"
                  style={{
                    opacity: isHovered ? 1 : 0,
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
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
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
                  style={{ opacity: isHovered ? 1 : 0 }}
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
