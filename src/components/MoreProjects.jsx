import React, { useState } from 'react';
import SectionGrid from './SectionGrid';

export default function MoreProjects({ navigate }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const projects = [
    {
      title: "Formfunction",
      desc: "Most NFT platforms looked like stock tickers, so we designed Formfunction to look like a gallery. A minimalist interface that put 1/1 art back in the spotlight.",
      img: "/projects/projects-1.webp",
      logo: "/projects/projects-2.webp"
    },
    {
      title: "RBC Data Fabric Portal",
      desc: "We transformed fragmented, global data into a unified \"Data Fabric,\" giving teams a single source of truth. The result was a dramatic reduction in data discovery time and a massive boost in governance compliance.",
      img: "/projects/projects-3.webp",
      logo: "/projects/projects-4.webp"
    },
    {
      title: "CoRide",
      desc: "Ride-sharing apps had become cluttered and transactional. We stripped the experience back to its essentials to prioritize user safety and booking speed.",
      img: "/projects/projects-5.webp",
      logo: "/projects/projects-6.webp"
    },
    {
      title: "Bitfront",
      desc: "Crypto interfaces are notoriously intimidating; we made this one inviting. By swapping the industry-standard \"dark mode\" for a clean, illustrative aesthetic, we bridged the gap between casual buyers and professional traders.",
      img: "/projects/projects-7.webp",
      logo: "/projects/projects-8.webp"
    },
    {
      title: "USpeak Inc",
      desc: "Public speaking is terrifying. We designed an AI interface that turns high-stakes anxiety into a safe, guided conversation.",
      img: "/projects/projects-9.webp",
      logo: "/projects/projects-10.webp"
    },
    {
      title: "TSCx",
      desc: "TSCx had the engineering chops but a digital presence that didn't match their innovation. We brought their visual language up to their technical depth and built a site that finally looks the part.",
      img: "/projects/projects-11.webp",
      logo: "/projects/projects-12.webp"
    }
  ];

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
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      data-case-hover-photo="true"
                      style={{
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                    {project.logo && (
                      <img
                        src={project.logo}
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
