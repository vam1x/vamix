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
  const [isVerified, setIsVerified] = useState(false);
  const lenis = useLenis();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify that you're human before sending.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsVerified(false);
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
      {/* Blueprint Grid Lines & Top Boundary with Corner Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
        showBottomLine={false}
        crosshairPositions={[0, 4]}
      />

      <div className="section-container contact-inner-container">
        <div className="contact-grid-4col">
          {/* Column 1: Marker • 12 READY TO START? */}
          <div className="contact-col-1">
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
                      autoComplete="name"
                      autoCapitalize="words"
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
                    autoComplete="email"
                    autoCapitalize="none"
                    required
                  />
                  <div className="contact-dots-wrap" aria-hidden="true">
                    <DragDotsIcon />
                  </div>
                </div>
                <div className="contact-line-crosshair" aria-hidden="true">+</div>
              </div>
            </div>

            {/* Column 4: Nav Links, Captcha, Submit Button, Legal Info */}
            <div className="contact-col-4">
              <nav className="contact-mega-links">
                <a href="/" onClick={(e) => handleLinkClick(e, '/')}><RollingText text="HOME" /></a>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}><RollingText text="ABOUT" /></a>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')}><RollingText text="SERVICES" /></a>
                <a href="/case-studies" onClick={(e) => handleLinkClick(e, '/case-studies')}><RollingText text="CASE STUDIES" /></a>
                <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}><RollingText text="CONTACT" /></a>
              </nav>

              {/* Human Verification Widget matching webus.in */}
              <div className="contact-captcha-box">
                <button
                  type="button"
                  className={`contact-captcha-btn ${isVerified ? 'verified' : ''}`}
                  onClick={() => setIsVerified(!isVerified)}
                  aria-label="Human verification"
                >
                  <span className="captcha-checkbox-indicator">
                    {isVerified && (
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                        <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="captcha-checkbox-label">
                    {isVerified ? "YOU ARE VERIFIED" : "VERIFY YOU'RE HUMAN"}
                  </span>
                </button>
                <div className="contact-captcha-meta">
                  <span className="contact-captcha-status">Select to verify before sending.</span>
                  <span className="contact-captcha-disclosure">
                    Protected by hCaptcha. <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> · <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="contact-submit-card"
                aria-label="Send contact inquiry"
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
          <div className="footer-meta-col footer-meta-logo">
            <a href="/" onClick={(e) => handleLinkClick(e, '/')} aria-label="VAMIX Home">
              <VamixLogo />
            </a>
          </div>
          <div className="footer-meta-col footer-meta-direct">
            <a href="tel:+916359198825" className="footer-phone-link">+91 63591 98825</a>
            <a href="mailto:hi@vamix.com" className="footer-email-link">HI@VAMIX.COM</a>
          </div>
          <div className="footer-meta-bottom-row">
            <div className="footer-meta-col footer-social-links">
              <span className="footer-social-link">LI</span>
              <span className="footer-social-link">IG</span>
            </div>
            <div className="footer-meta-col footer-meta-action">
              <button onClick={scrollToTop} className="back-to-top-btn" type="button" aria-label="Back to top">
                BACK TO TOP ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
