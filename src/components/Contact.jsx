import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import RollingText from './RollingText';
import SectionGrid from './SectionGrid';
import VamixLogo from './VamixLogo';

const DragDotsIcon = () => (
  <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-drag-dots">
    <circle cx="3" cy="3" r="1.5" fill="currentColor" />
    <circle cx="9" cy="3" r="1.5" fill="currentColor" />
    <circle cx="3" cy="9" r="1.5" fill="currentColor" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <circle cx="3" cy="15" r="1.5" fill="currentColor" />
    <circle cx="9" cy="15" r="1.5" fill="currentColor" />
  </svg>
);

export default function Contact({ navigate }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lenis = useLenis();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 3500);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, href) => {
    if (href === '/' || href === '/about' || href === '/contact' || href === '/case-studies') {
      e.preventDefault();
      if (navigate) {
        navigate(href);
      }
    }
  };

  return (
    <section className="section contact-section" id="contact">
      {/* Blueprint Grid Lines & Top Boundary with Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
        showBottomLine={false}
        crosshairPositions={[0, 1, 2, 3, 4]}
      />

      <div className="section-container contact-inner-container">
        <div className="contact-grid-4col">
          {/* Column 1: Logo & Badge • 12 READY TO START? */}
          <div className="contact-col-1">
            <div className="contact-col-1-header">
              <a href="/" onClick={(e) => handleLinkClick(e, '/')} aria-label="VAMIX Home" className="contact-col-1-logo-link">
                <VamixLogo />
              </a>
            </div>
            <div className="contact-num-badge">
              <span className="contact-badge-dot" />
              <span className="contact-badge-num">12</span>
              <span className="contact-badge-label">READY TO START?</span>
            </div>
          </div>

          {/* Form Spanning Columns 2, 3, and 4 */}
          <form className="contact-form-3col" onSubmit={handleSubmit}>
            {/* Column 2: Title, Subhead, NAME Input */}
            <div className="contact-col-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="contact-main-title">GET IN TOUCH</h2>
                <p className="contact-subhead">
                  Whether you have questions or just want to explore options, we're here.
                </p>

                <div className="contact-input-group contact-name-group">
                  <label className="contact-field-label">NAME</label>
                  <div className="contact-input-row">
                    <input
                      type="text"
                      className="contact-underline-input"
                      placeholder="YOUR NAME"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <div className="contact-dots-wrap" aria-hidden="true">
                      <DragDotsIcon />
                    </div>
                  </div>
                  <div className="contact-line-crosshair" aria-hidden="true">+</div>
                </div>
              </motion.div>
            </div>

            {/* Column 3: Staggered EMAIL Input */}
            <div className="contact-col-3">
              <div className="contact-input-group contact-email-group">
                <label className="contact-field-label">EMAIL ADDRESS</label>
                <div className="contact-input-row">
                  <input
                    type="email"
                    className="contact-underline-input"
                    placeholder="EMAIL@ADDRESS.COM"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <div className="contact-dots-wrap" aria-hidden="true">
                    <DragDotsIcon />
                  </div>
                </div>
                <div className="contact-line-crosshair" aria-hidden="true">+</div>
              </div>
            </div>

            {/* Column 4: Nav Links, Submit Button, Legal Info */}
            <div className="contact-col-4">
              <nav className="contact-mega-links">
                <a href="/" onClick={(e) => handleLinkClick(e, '/')}><RollingText text="HOME" /></a>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}><RollingText text="ABOUT" /></a>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}><RollingText text="SERVICES" /></a>
                <a href="/case-studies" onClick={(e) => handleLinkClick(e, '/case-studies')}><RollingText text="CASE STUDIES" /></a>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}><RollingText text="CONTACT" /></a>
              </nav>

              <button
                type="submit"
                className="contact-submit-card"
                style={isSubmitted ? { backgroundColor: '#171717', color: '#ffffff' } : {}}
              >
                <span className="contact-submit-text">
                  {isSubmitted ? "REQUEST SENT! WE WILL REPLY SHORTLY" : <RollingText text="LET'S TALK" />}
                </span>
                <span className="contact-submit-arrow" aria-hidden="true">›</span>
                <div className="contact-rainbow-bar" aria-hidden="true" />
              </button>

              <div className="contact-legal-info">
                <div className="contact-legal-left">
                  BY SUBMITTING, YOU AGREE TO OUR <a href="/terms-of-service" onClick={(e) => handleLinkClick(e, '/terms-of-service')} style={{ color: 'inherit', textDecoration: 'none' }}><strong>TERMS</strong></a> AND <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')} style={{ color: 'inherit', textDecoration: 'none' }}><strong>PRIVACY POLICY</strong></a>.
                </div>
                <div className="contact-legal-right">
                  WE ARE BASED IN <strong>SURAT</strong>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Direct Contact Info Meta Row */}
        <div className="footer-meta-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} aria-label="VAMIX Home">
              <VamixLogo />
            </a>
          </div>
          <div>
            <a href="tel:+916359198825" style={{ display: 'block', fontSize: '11px', color: 'var(--text-dark-subtle)', textDecoration: 'none' }}>+91 63591 98825</a>
            <a href="mailto:hi@vamix.com" style={{ fontWeight: 700, fontSize: '1.2rem' }}>HI@VAMIX.COM</a>
          </div>
          <div className="footer-social-links">
            <a href="https://www.linkedin.com/in/jsrattey/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LI</a>
            <a href="https://www.instagram.com/vamix/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-social-link">IG</a>
          </div>
          <button onClick={scrollToTop} className="back-to-top-btn" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
            BACK TO TOP
          </button>
        </div>
      </div>
    </section>
  );
}
