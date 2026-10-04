import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import RollingText from './RollingText';
import SectionGrid from './SectionGrid';
import VamixLogo from './VamixLogo';

/* 6-dot drag handle icon — matches reference input fields */
const DragDotsIcon = () => (
  <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-drag-dots" aria-hidden="true">
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

  const handleNav = (e, href) => {
    e.preventDefault();
    if (navigate) navigate(href);
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      {/* Blueprint Grid Lines & Top Boundary with Corner Crosshairs */}
      <SectionGrid
        theme="light"
        showTopLine={true}
        showBottomLine={false}
        crosshairPositions={[0, 4]}
      />

      {/* JSON-LD Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact VAMIX",
            "description": "Get in touch with VAMIX Digital Product Studio for your next project. Free 30-minute consultation available.",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://vamix.vercel.app/#organization",
              "name": "VAMIX",
              "url": "https://vamix.vercel.app/",
              "telephone": "+916359198825",
              "email": "hi@vamix.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+916359198825",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi", "Gujarati"],
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00",
                    "timeZone": "Asia/Kolkata"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "hi@vamix.com",
                  "availableLanguage": ["English", "Hindi", "Gujarati"]
                }
              ]
            }
          })
        }}
      />

      {/* Aurora Gradient Blob — bottom-left */}
      <div className="contact-aurora" aria-hidden="true" />

      <div className="section-container contact-inner">
        {/* ===== 4-Column Contact Grid ===== */}
        <div className="contact-grid">

          {/* ── Col 1: Section Badge ── */}
          <div className="contact-col contact-col--badge">
            <div className="contact-badge">
              <span className="contact-badge__dot" aria-hidden="true" />
              <span className="contact-badge__num">12</span>
              <span className="contact-badge__label">READY TO START?</span>
            </div>
          </div>

          {/* ── Col 2–4: Form ── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {/* Col 2: Title + Subhead + NAME */}
            <div className="contact-col contact-col--title">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 id="contact-title" className="contact-title">GET IN TOUCH</h2>
                <p className="contact-sub">
                  Whether you have questions or just want to explore options, we're here.
                </p>

                {/* NAME field */}
                <div className="contact-field">
                  <label htmlFor="contact-name" className="contact-field__label">NAME</label>
                  <div className="contact-field__row">
                    <input
                      type="text"
                      id="contact-name"
                      className="contact-field__input"
                      placeholder="YOUR NAME"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      autoComplete="name"
                      autoCapitalize="words"
                      required
                      aria-required="true"
                    />
                    <DragDotsIcon />
                  </div>
                  <span className="contact-field__cross contact-field__cross--left" aria-hidden="true">+</span>
                </div>
              </motion.div>
            </div>

            {/* Col 3: EMAIL */}
            <div className="contact-col contact-col--email">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="contact-field">
                  <label htmlFor="contact-email" className="contact-field__label">EMAIL ADDRESS</label>
                  <div className="contact-field__row">
                    <input
                      type="email"
                      id="contact-email"
                      className="contact-field__input"
                      placeholder="EMAIL@ADDRESS.COM"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      autoComplete="email"
                      autoCapitalize="none"
                      required
                      aria-required="true"
                    />
                    <DragDotsIcon />
                  </div>
                  <span className="contact-field__cross contact-field__cross--left" aria-hidden="true">+</span>
                  <span className="contact-field__cross contact-field__cross--right" aria-hidden="true">+</span>
                </div>
              </motion.div>
            </div>

            {/* Col 4: Nav + Captcha + Submit + Legal */}
            <div className="contact-col contact-col--action">

              {/* Navigation Links */}
              <nav className="contact-nav" aria-label="Footer navigation">
                <a href="/" onClick={(e) => handleNav(e, '/')}><RollingText text="HOME" /></a>
                <a href="/about" onClick={(e) => handleNav(e, '/about')}><RollingText text="ABOUT" /></a>
                <a href="/case-studies" onClick={(e) => handleNav(e, '/case-studies')}><RollingText text="CASE STUDIES" /></a>
                <a href="/services" onClick={(e) => handleNav(e, '/services')}><RollingText text="SERVICES" /></a>
                <a href="/contact" onClick={(e) => handleNav(e, '/contact')}><RollingText text="CONTACT" /></a>
              </nav>

              {/* Captcha */}
              <div className="contact-captcha">
                <button
                  type="button"
                  className={`contact-captcha__btn ${isVerified ? 'is-verified' : ''}`}
                  onClick={() => setIsVerified(!isVerified)}
                  aria-label="Human verification"
                  aria-pressed={isVerified}
                >
                  <span className="contact-captcha__check" aria-hidden="true">
                    {isVerified && (
                      <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
                        <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="contact-captcha__text">
                    {isVerified ? "YOU ARE VERIFIED" : "VERIFY YOU'RE HUMAN"}
                  </span>
                </button>
                <div className="contact-captcha__meta">
                  <span>SELECT TO VERIFY BEFORE SENDING.</span>
                  <span>
                    PROTECTED BY hCaptcha.{' '}
                    <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                    {' · '}
                    <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`contact-submit ${isSubmitted ? 'is-sent' : ''}`}
                aria-label={isSubmitted ? 'Request sent successfully' : 'Send contact inquiry'}
                disabled={isSubmitted}
              >
                <span className="contact-submit__text">
                  {isSubmitted ? 'REQUEST SENT! WE WILL REPLY SHORTLY' : <RollingText text="LET'S TALK" />}
                </span>
                <span className="contact-submit__arrow" aria-hidden="true">›</span>
                <div className="contact-submit__rainbow" aria-hidden="true" />
              </button>

              {/* Legal */}
              <div className="contact-legal">
                <span className="contact-legal__left">
                  BY SUBMITTING, YOU AGREE TO OUR{' '}
                  <a href="/terms-of-service" onClick={(e) => handleNav(e, '/terms-of-service')}>TERMS</a>
                  {' '}AND{' '}
                  <a href="/privacy-policy" onClick={(e) => handleNav(e, '/privacy-policy')}>PRIVACY POLICY</a>.
                </span>
                <span className="contact-legal__right">
                  WE ARE BASED IN <strong>SURAT</strong>
                </span>
              </div>
            </div>

          </form>
        </div>

        {/* ===== Footer Meta Row (1:1 Webus Reference) ===== */}
        <div className="contact-meta">
          <div className="contact-meta__logo">
            <a href="/" onClick={(e) => handleNav(e, '/')} aria-label="VAMIX Home">
              <VamixLogo />
            </a>
          </div>
          <div className="contact-meta__empty" aria-hidden="true" />
          <div className="contact-meta__direct">
            <a href="tel:+916359198825" className="contact-meta__phone">+91 63591 98825</a>
            <a href="mailto:hi@vamix.com" className="contact-meta__email">HI@VAMIX.COM</a>
          </div>
          <div className="contact-meta__col4">
            <div className="contact-meta__social" role="list" aria-label="Social media links">
              <a href="https://www.linkedin.com/company/vamix" target="_blank" rel="noopener noreferrer" className="contact-meta__social-link" role="listitem">LI</a>
              <a href="https://www.instagram.com/vamix" target="_blank" rel="noopener noreferrer" className="contact-meta__social-link" role="listitem">IG</a>
            </div>
            <button onClick={scrollToTop} className="contact-meta__top-btn" type="button" aria-label="Back to top">
              BACK TO TOP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}