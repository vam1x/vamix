import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from './RollingText';
import SectionGrid, { GridCrosshair } from './SectionGrid';
import Contact from './Contact';

export default function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    toImprove: '',
    budget: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        toImprove: '',
        budget: '',
        email: ''
      });
    }, 4000);
  };

  return (
    <div className="contact-page-root">
      {/* Noise Texture Overlay */}
      <div 
        className="noise-overlay" 
        style={{
          background: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")',
          opacity: 0.027,
          inset: '-200%',
          width: '400%',
          height: '400%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999
        }} 
        aria-hidden="true" 
      />

      {/* SECTION 1: HERO / HEADING */}
      <section className="section contact-hero-section" id="contact-hero">
        <SectionGrid theme="light" showTopLine={false} />

        <div className="section-container">
          <div className="contact-hero-grid">
            <div className="contact-hero-badge-col">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>START WITH A SIMPLE STEP</span>
              </div>
            </div>

            <div className="contact-hero-title-col">
              <motion.h1 
                className="contact-hero-h1"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                LET’S BUILD YOUR NEXT PRODUCT
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CONVERSATIONAL FORM ("HI, VAMIX TEAM!") */}
      <section className="section contact-conversational-section" id="contact-form">
        <SectionGrid theme="light" showTopLine={false} />

        <div className="section-container">
          <div className="contact-conversational-grid">
            {/* 1st column is filler / alignment on 4-col grid */}
            <div className="contact-form-filler-col" aria-hidden="true"></div>

            {/* 2nd - 4th columns span the interactive form */}
            <div className="contact-form-main-col">
              <form className="conversational-form" onSubmit={handleSubmit}>
                <div className="conversational-header">
                  <p className="conversational-greeting">HI, VAMIX TEAM!</p>
                </div>

                {/* Line 1: MY NAME IS [input] FROM [input] . */}
                <div className="conversational-row">
                  <span className="conversational-label">MY NAME IS</span>
                  <div className="conversational-input-wrapper name-input-wrapper">
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder="YOUR NAME"
                      className="conversational-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <span className="conversational-label">FROM</span>
                  <div className="conversational-input-wrapper company-input-wrapper">
                    <input
                      type="text"
                      name="Company"
                      placeholder="COMPANY NAME/ OPTIONAL"
                      className="conversational-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <span className="conversational-punct">.</span>
                </div>

                {/* Line 2: I WANT TO IMPROVE: [input] . */}
                <div className="conversational-row">
                  <span className="conversational-label">I WANT TO IMPROVE:</span>
                  <div className="conversational-input-wrapper improve-input-wrapper">
                    <input
                      type="text"
                      name="ToImprove"
                      required
                      placeholder="DESCRIBE YOUR WORKFLOW CHALLENGE"
                      className="conversational-input"
                      value={formData.toImprove}
                      onChange={(e) => setFormData({ ...formData, toImprove: e.target.value })}
                    />
                  </div>
                  <span className="conversational-punct">.</span>
                </div>

                {/* Line 3: BUDGET: [input] $ */}
                <div className="conversational-row">
                  <span className="conversational-label">BUDGET:</span>
                  <div className="conversational-input-wrapper budget-input-wrapper">
                    <input
                      type="text"
                      name="Budget"
                      placeholder="ENTER BUDGET"
                      className="conversational-input"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>
                  <span className="conversational-punct">$</span>
                </div>

                {/* Line 4: CONTACT ME AT: [input] . */}
                <div className="conversational-row">
                  <span className="conversational-label">CONTACT ME AT:</span>
                  <div className="conversational-input-wrapper email-input-wrapper">
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="YOUR EMAIL"
                      className="conversational-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <span className="conversational-punct">.</span>
                </div>

                {/* Line 5: Submit CTA Button & Legal Consent */}
                <div className="conversational-action-row">
                  <motion.button
                    type="submit"
                    className="conversational-submit-btn"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="submit-btn-text">
                      {isSubmitted ? "REQUEST SENT! WE WILL REPLY SHORTLY" : <RollingText text="SEND REQUEST" />}
                    </span>
                    <svg className="submit-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Animated Aurora Gradient Underline */}
                    <span className="submit-aurora-bar"></span>
                  </motion.button>

                  <p className="conversational-legal-note">
                    BY SUBMITTING, YOU AGREE TO OUR <strong>TERMS</strong> AND <strong>PRIVACY POLICY</strong>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "LET’S KEEP IT SIMPLE" & STUDIO PHOTO */}
      <section className="section contact-simple-section" id="contact-simple">
        <SectionGrid theme="light" showTopLine={true} />

        <div className="section-container">
          <div className="contact-simple-grid">
            <div className="contact-simple-badge-col">
              <div className="section-badge">
                <span className="section-badge-dot"></span>
                <span>LET’S KEEP IT SIMPLE</span>
              </div>
            </div>

            <div className="contact-simple-content-col">
              <div className="contact-statement-wrap">
                <p className="contact-lead-statement">
                  You don’t need to prepare slides or technical notes, just share what’s on your mind. Whether it’s a quick question or a bigger project idea, we’ll get back to you with a clear next step.
                </p>
                <p className="contact-sub-statement">
                  Every message that comes through this form is read by a real person on our team. No chatbots, no outsourced support. Most of the time, it's Ruby or Jaspal who will see it first and make sure it reaches the right designer or engineer.
                </p>
              </div>

              {/* Studio Office Image Frame */}
              <div className="contact-studio-image-frame">
                <img
                  src="https://framerusercontent.com/images/c67C5n6mfhTUQv7UYjH3n7xbSvk.jpg?width=1184&height=864"
                  alt="VAMIX Studio Office Space"
                  className="contact-studio-img"
                  loading="lazy"
                />
              </div>

              {/* Direct Reach Meta Row */}
              <div className="contact-direct-reach-row">
                <div className="contact-reach-item">
                  <a href="tel:+919654730419" className="reach-phone-link">
                    +91 96547 30419
                  </a>
                  <a href="mailto:hi@vamix.com" className="reach-email-link">
                    HI@VAMIX.COM
                  </a>
                </div>

                <div className="contact-reach-socials">
                  <a href="https://www.linkedin.com/in/jsrattey/" target="_blank" rel="noopener noreferrer" className="reach-social-pill">
                    LI
                  </a>
                  <a href="https://www.instagram.com/vamix/?hl=en" target="_blank" rel="noopener noreferrer" className="reach-social-pill">
                    IG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: "YOUR FIRST STEP" - 30-MINUTE CALL BOOKING */}
      <section className="section contact-book-call-section" id="book-call">
        <SectionGrid theme="light" showTopLine={true} />

        <div className="book-call-card">
          {/* Subtle Background Aurora Glow */}
          <div className="book-call-aurora-bg" aria-hidden="true">
            <img
              src="https://framerusercontent.com/images/0iIr9plKeMJd8dBb4O7iHnWw.png?scale-down-to=512&width=676&height=563"
              alt=""
              className="aurora-glow-img"
            />
          </div>

          <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="book-call-grid">
              {/* Col 1: Badge */}
              <div className="book-call-badge-col">
                <div className="section-badge">
                  <span className="section-badge-dot"></span>
                  <span>YOUR FIRST STEP</span>
                </div>
              </div>

              {/* Col 2: Heading + CTA Button */}
              <div className="book-call-heading-col">
                <h3 className="book-call-title">
                  Book a free 30-minute call.
                </h3>

                <motion.a
                  href="#contact-form"
                  className="book-call-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="btn-call-text">
                    <RollingText text="BOOK A CALL" />
                  </span>
                  <svg className="btn-call-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="btn-call-aurora-bar"></span>
                </motion.a>
              </div>

              {/* Col 3: Quote & Ruby Rattey Card */}
              <div className="book-call-quote-col">
                <p className="book-call-quote-text">
                  “My job is making sure you leave our first call with clarity and next steps.”
                </p>

                <div className="ruby-author-card">
                  <div className="ruby-info-text">
                    <span className="ruby-name">RUBY RATTEY</span>
                    <span className="ruby-title">CLIENT SUCCESS MANAGER</span>
                  </div>
                  <div className="ruby-avatar-circle">
                    <img
                      src="https://framerusercontent.com/images/awFufuyIlbDdk2me7dySF9Y3r8.png?width=2048&height=2048"
                      alt="Ruby Rattey - Client Success Manager"
                      className="ruby-avatar-img"
                    />
                  </div>
                </div>
              </div>

              {/* Col 4: Spacer on 4-col blueprint */}
              <div className="book-call-spacer-col" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: "READY TO START? GET IN TOUCH" (Bottom Contact Form & Mega Navigation) */}
      <Contact navigate={navigate} />
    </div>
  );
}
