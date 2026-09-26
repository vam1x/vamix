import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../hooks/useScrollReveal';
import SectionGrid, { GridCrosshair } from './SectionGrid';

export default function Team() {
  const members = [
    {
      roleHeader: "FOUNDER & PRODUCT DIRECTOR",
      badge: "•",
      img: "https://framerusercontent.com/images/WUBBnQErSmrdpYbOewj2y5Sg1Q.png?width=973&height=1616",
      name: "JASPAL SINGH",
      sub: "12+ YEARS BUILDING DIGITAL EXPERIENCES",
      skills: [
        { gauge: "||||||||||||||||||", label: "UX STRATEGY & VISION" },
        { gauge: "||||||||||||......", label: "DESIGN SYSTEMS" },
        { gauge: "|||||||||||||||...", label: "CREATIVE DIRECTION" }
      ]
    },
    {
      roleHeader: "PRODUCT DESIGN HEAD",
      badge: "••",
      img: "https://framerusercontent.com/images/LiYyq1u80njGedJpBraH2EHZDQ0.png?width=1696&height=2528",
      name: "RAHUL ROHILLA",
      sub: "SENIOR UI/UX DESIGNER",
      skills: [
        { gauge: "||||||||||||||....", label: "PRODUCT DESIGN" },
        { gauge: "||||||||||||||||..", label: "DESIGN SYSTEM" },
        { gauge: "||||||||||........", label: "USER RESEARCH" }
      ]
    },
    {
      roleHeader: "UI/UX DESIGNER",
      badge: "•••",
      img: "https://framerusercontent.com/images/gE8W7P6IkfEZ065NkXkptmimk.png?width=1696&height=2528",
      name: "AHMAR KHAN",
      sub: "EMERGING DESIGN TALENT",
      skills: [
        { gauge: "||||||||||||......", label: "INTERFACE DESIGN" },
        { gauge: "|||||||||||||||...", label: "RAPID PROTOTYPING" },
        { gauge: "||||||||||||||||..", label: "VISUAL DESIGN" }
      ]
    },
    {
      roleHeader: "US SALES LEAD",
      badge: "••••",
      img: "https://framerusercontent.com/images/fhY0tSzJsoYVfBzbeoxV6nAlrA.png?width=1696&height=2397",
      name: "ANURAG SETHI",
      sub: "YOUR US-BASED CONTACT",
      skills: [
        { gauge: "||||||||||||||||..", label: "CLIENT PARTNERSHIPS" },
        { gauge: "||||||||||||......", label: "PROJECT COORDINATION" },
        { gauge: "||||||||||||||||||", label: "US MARKET EXPERTISE" }
      ]
    }
  ];

  return (
    <section className="section team-section" id="team">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="section-container">

        <div className="section-badge">
          <span className="section-badge-dot"></span>
          <span>07 WHO WE ARE</span>
        </div>
        <RevealText
          text="THE TEAM"
          className="section-title-huge"
        />

        {/* 4 Column Divider Line with Crosshairs */}
        <div className="team-grid-header-line" aria-hidden="true">
          <GridCrosshair style={{ left: '0%', top: '0px' }} />
          <GridCrosshair style={{ left: '25%', top: '0px' }} />
          <GridCrosshair style={{ left: '50%', top: '0px' }} />
          <GridCrosshair style={{ left: '75%', top: '0px' }} />
          <GridCrosshair style={{ left: '100%', top: '0px' }} />
        </div>

        <div className="team-grid">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="team-card-header">
                <span>{member.roleHeader}</span>
                <span>{member.badge}</span>
              </div>
              <div className="team-photo-wrap">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="team-photo-img"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                />
              </div>
              <div className="team-gradient-line"></div>
              <div className="team-card-body">
                <div className="team-member-name">{member.name}</div>
                <div className="team-member-role">{member.sub}</div>

                {member.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-bar-row">
                    <span className="skill-gauges">{skill.gauge}</span>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
