import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTeam() {
  const members = [
    {
      name: "JASPAL SINGH",
      role: "FOUNDER & PRODUCT DIRECTOR",
      desc: "13+ YEARS BUILDING PRODUCTS",
      img: "https://framerusercontent.com/images/4MeRl7e2941aYE8j9iIP9mqKcxA.png?width=1254&height=1254",
      badgeIcon: "•"
    },
    {
      name: "RAHUL ROHILLA",
      role: "PRODUCT DESIGN HEAD",
      desc: "SYSTEMS & USER RESEARCH EXPERT",
      img: "https://framerusercontent.com/images/gE8W7P6IkfEZ065NkXkptmimk.png?width=1696&height=2528",
      badgeIcon: "••"
    },
    {
      name: "AHMAR KHAN",
      role: "UI/UX DESIGNER",
      desc: "RAPID PROTOTYPING SPECIALIST",
      img: "https://framerusercontent.com/images/LiYyq1u80njGedJpBraH2EHZDQ0.png?width=1696&height=2528",
      badgeIcon: "•••"
    },
    {
      name: "ANURAG SETHI",
      role: "US SALES LEAD",
      desc: "YOUR US-BASED POINT OF CONTACT",
      img: "https://framerusercontent.com/images/fhY0tSzJsoYVfBzbeoxV6nAlrA.png?width=1696&height=2397",
      badgeIcon: "••••"
    },
    {
      name: "RUBY RATTEY",
      role: "CLIENT SUCCESS MANAGER",
      desc: "ENSURING EVERY CLIENT FEELS SUPPORTED",
      img: "https://framerusercontent.com/images/X9xLPsYSVWl1LlqQDsYTQiuwG5E.png?width=1696&height=2288",
      badgeIcon: "•"
    },
    {
      name: "PRABHJOT",
      role: "SENIOR AI OPERATIONS HEAD",
      desc: "INTEGRATING AI INTO EVERY WORKFLOW",
      img: "https://framerusercontent.com/images/ggjJGQwzCvwbhdllMh7BpYl6vHo.png?width=864&height=1016",
      badgeIcon: "••"
    },
    {
      name: "HIMANSHU RAJPUT",
      role: "FULL STACK DEVELOPER",
      desc: "BUILDING WHAT WE DESIGN, END TO END",
      img: "https://framerusercontent.com/images/vnDfIyoHw2PLIG3FTK7edMabWA.jpg?width=1464&height=1650",
      badgeIcon: "•••"
    },
    {
      name: "VIKSIT CHAUHAN",
      role: "AI ENGINEER",
      desc: "BUILDING THE AI BEHIND OUR PRODUCTS",
      img: "https://framerusercontent.com/images/MBqo0GIIQocT1gzABuKnzvDNk.jpeg?width=1345&height=1600",
      badgeIcon: "••••"
    },
    {
      name: "ANKIT",
      role: "DESIGN ENGINEER",
      desc: "WHERE DESIGN MEETS CODE",
      img: "https://framerusercontent.com/images/IC37LVrT6pb4wg7A2jXQpTxNqQ.jpeg?width=1400&height=1600",
      badgeIcon: "•"
    },
    {
      name: "SURAJ MALIK",
      role: "PROJECT MANAGER",
      desc: "KEEPING EVERY PROJECT ON TRACK AND ON TIME",
      img: "https://framerusercontent.com/images/sEx6L8h3gCY2AeK1MVoRpriKJA.png?width=676&height=848",
      badgeIcon: "••"
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

        {/* Right Content & 10 Member Cards List */}
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

          {/* Members List */}
          <div className="about-members-list">
            {members.map((member, idx) => (
              <motion.div 
                key={idx}
                className="about-member-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
              >
                <span className="corner-cross tl">+</span>
                <span className="corner-cross tr">+</span>
                <span className="corner-cross bl">+</span>
                <span className="corner-cross br">+</span>

                {/* Avatar Photo + Aperture Indicator */}
                <div className="about-member-avatar-wrap">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="about-member-img" 
                    loading="lazy" 
                  />
                  <div className="about-member-dot-tag" aria-hidden="true">
                    <span className="dot-shape"></span>
                  </div>
                </div>

                {/* Name & Role Header */}
                <div className="about-member-info">
                  <h3 className="about-member-name">{member.name}</h3>
                  <span className="about-member-role">{member.role}</span>
                </div>

                {/* Monospace Description */}
                <div className="about-member-desc-wrap">
                  <span className="about-member-desc">{member.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
