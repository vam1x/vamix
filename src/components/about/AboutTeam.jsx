import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTeam() {
  const members = [
    {
      roleHeader: " & TECHNICAL DIRECTOR",
      badge: "*",
      img: "/team/mayur-unagar.png",
      gradient: "linear-gradient(90deg, #9333ea 0%, #f97316 100%)",
      name: "MAYUR UNAGAR",
      sub: "CO-FOUNDER & TECHNICAL DIRECTOR"
    },
    {
      roleHeader: "CO-FOUNDER & CREATIVE DIRECTOR",
      badge: "**",
      img: "/team/vinit-pansuriya.png",
      gradient: "linear-gradient(90deg, #ef4444 0%, #f97316 100%)",
      name: "VINIT PANSURIYA",
      sub: "CO-FOUNDER & CREATIVE DIRECTOR"
    },
    {
      roleHeader: "CO-FOUNDER & STRATEGY DIRECTOR",
      badge: "***",
      img: "/team/vatsal-kalathiya.png",
      gradient: "linear-gradient(90deg, #9333ea 0%, #f97316 100%)",
      name: "VATSAL KALATHIYA",
      sub: "CO-FOUNDER & STRATEGY DIRECTOR"
    }
  ];


  return (
    <section className="about-team-section" id="about-team">
      <div className="about-team-container">
        
        {/* Left Badge Column */}
        <div className="about-team-side">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            <span>THE TEAM</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-team-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="about-team-title">
              THE TEAM BEHIND<br/>THE WORK
            </h2>
            <p className="about-team-subhead">
              WE’RE DESIGNERS, ENGINEERS, AND STRATEGISTS WORKING TOGETHER TO BUILD DIGITAL PRODUCTS THAT ACTUALLY WORK.
            </p>
          </motion.div>

          {/* 3 Members Card Grid matching the reference design */}
          <div className="about-team-cards-grid">
            {members.map((member, idx) => (
              <motion.div
                key={idx}
                className="about-team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top header bar */}
                <div className="about-team-card-header">
                  <span className="about-team-card-role">{member.roleHeader}</span>
                  <span className="about-team-card-badge">{member.badge}</span>
                </div>

                {/* Photo container */}
                <div className="about-team-card-photo-wrap">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="about-team-card-photo"
                    loading="lazy"
                  />
                </div>

                {/* Bottom accent gradient line */}
                <div 
                  className="about-team-card-gradient" 
                  style={{ background: member.gradient }}
                  aria-hidden="true"
                />

                {/* Bottom card footer info */}
                <div className="about-team-card-footer">
                  <div className="about-team-card-name-row">
                    <div className="about-team-card-name-group">
                      <span className="about-team-card-symbol" aria-hidden="true">◖●</span>
                      <h3 className="about-team-card-name">{member.name}</h3>
                    </div>
                    <svg className="about-team-card-grip" width="6" height="12" viewBox="0 0 6 12" fill="none" aria-hidden="true">
                      <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
                      <circle cx="4.5" cy="1.5" r="1" fill="currentColor" />
                      <circle cx="1.5" cy="6" r="1" fill="currentColor" />
                      <circle cx="4.5" cy="6" r="1" fill="currentColor" />
                      <circle cx="1.5" cy="10.5" r="1" fill="currentColor" />
                      <circle cx="4.5" cy="10.5" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="about-team-card-sub">{member.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
