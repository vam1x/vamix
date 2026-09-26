import React, { useState } from 'react';
import RollingText from './RollingText';

export default function MoreProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Formfunction",
      desc: "Most NFT platforms looked like stock tickers, so we designed Formfunction to look like a gallery. A minimalist interface that put 1/1 art back in the spotlight.",
      link: "./case-studies"
    },
    {
      title: "RBC Data Fabric Portal",
      desc: "We transformed fragmented, global data into a unified 'Data Fabric,' giving teams a single source of truth. The result was a dramatic reduction in data discovery time and a massive boost in governance compliance.",
      link: "./case-studies"
    },
    {
      title: "CoRide",
      desc: "Ride-sharing apps had become cluttered and transactional. We stripped the experience back to its essentials to prioritize user safety and booking speed.",
      link: "./case-studies"
    },
    {
      title: "Bitfront",
      desc: "Crypto interfaces are notoriously intimidating; we made this one inviting. By swapping the industry-standard 'dark mode' for a clean, illustrative aesthetic, we bridged the gap between casual buyers and professional traders.",
      link: "./case-studies"
    },
    {
      title: "USpeak Inc",
      desc: "Public speaking is terrifying. We designed an AI interface that turns high-stakes anxiety into a safe, guided conversation with real-time feedback metrics.",
      link: "./case-studies"
    },
    {
      title: "TSCx",
      desc: "TSCx had the engineering chops but a digital presence that didn't match their innovation. We brought their visual language up to their technical depth and built a site that finally looks the part.",
      link: "./case-studies"
    }
  ];

  return (
    <section className="section more-projects-section" id="projects">
      <div className="section-container">
        
        <div className="projects-split-showcase">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>MORE PROJECTS</span>
            </div>
          </div>

          <div className="projects-accordion-list">
            {projects.map((project, idx) => {
              const isActive = activeProject === idx;
              return (
                <div key={idx} className="project-selector-item">
                  <div 
                    className={`project-item-title ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveProject(isActive ? -1 : idx)}
                  >
                    {project.title}
                  </div>
                  <div className={`project-drawer-panel ${isActive ? 'open' : ''}`}>
                    <p className="project-drawer-desc">{project.desc}</p>
                    <a href={project.link} className="project-read-more" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <RollingText text="READ MORE" /> <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
