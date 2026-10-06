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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const lenis = useLenis();

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }
    if (!isVerified) {
      alert("Please verify that you're human before sending.");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    setActivationNotice(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vamixlabs@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _subject: `New Project Inquiry from ${formData.name.trim()} (VAMIX Website)`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setIsSubmitted(true);
        setActivationNotice(false);
        setFormData({ name: '', email: '' });
        setIsVerified(false);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        setActivationNotice(true);
        setSubmitError(null);
      } else {
        throw new Error(data.message || "Failed to deliver inquiry");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      if (err.message && err.message.toLowerCase().includes("activation")) {
        setActivationNotice(true);
        setSubmitError(null);
      } else {
        setSubmitError(err.message || "Could not send automatically. Click here to open email directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
    if (href === '/') {
      window.dispatchEvent(new CustomEvent('vamix:hero-activate'));
      const activeLenis = lenis || window.__vamixLenis;
      const heroEl = document.getElementById('hero');
      if (activeLenis) {
        activeLenis.scrollTo(heroEl || 0, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (navigate) navigate('/');
      return;
    }
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
        {/* ROW 1: Header Row (4-column grid) */}
        <div className="contact-head-row">
          {/* Col 1: Section Badge */}
          <div className="contact-marker">
            <span className="contact-badge__dot" />
            <span className="contact-badge__num">12</span>
            <span className="contact-badge__label">READY TO START?</span>
          </div>

          {/* Col 2–3: Title & Subtitle */}
          <div className="contact-heading">
            <h2 className="contact-title">GET IN TOUCH</h2>
            <p className="contact-sub">
              Whether you have questions or just want to explore options, we're here.
            </p>
          </div>

          {/* Col 4: Navigation Links */}
          <nav className="contact-nav" aria-label="Footer navigation">
            <a href="/" onClick={(e) => handleNav(e, '/')}><RollingText text="HOME" /></a>
            <a href="/about" onClick={(e) => handleNav(e, '/about')}><RollingText text="ABOUT" /></a>
            <a href="/case-studies" onClick={(e) => handleNav(e, '/case-studies')}><RollingText text="CASE STUDIES" /></a>
            <a href="/services" onClick={(e) => handleNav(e, '/services')}><RollingText text="SERVICES" /></a>
            <a href="/contact" onClick={(e) => handleNav(e, '/contact')}><RollingText text="CONTACT" /></a>
          </nav>
        </div>

        {/* ROW 2: Form Area (4-column grid: Col 1 empty, Col 2-4 form) */}
        <div className="contact-form-area">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Step 1: NAME (Col 1 of 3 = Col 2 of 4) */}
            <div className="contact-row contact-row--name">
              <div className="contact-field">
                <label className="contact-field__label" htmlFor="contact-name">NAME</label>
                <div className="contact-field__row">
                  <input
                    id="contact-name"
                    type="text"
                    className="contact-field__input"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoComplete="name"
                    autoCapitalize="words"
                    required
                  />
                  <DragDotsIcon />
                </div>
                <span className="contact-field__cross contact-field__cross--left" aria-hidden="true">+</span>
              </div>
            </div>

            {/* Step 2: EMAIL (Col 2 of 3 = Col 3 of 4) */}
            <div className="contact-row contact-row--email">
              <div className="contact-field">
                <label className="contact-field__label" htmlFor="contact-email">EMAIL ADDRESS</label>
                <div className="contact-field__row">
                  <input
                    id="contact-email"
                    type="email"
                    className="contact-field__input"
                    placeholder="EMAIL@ADDRESS.COM"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email"
                    autoCapitalize="none"
                    required
                  />
                  <DragDotsIcon />
                </div>
                <span className="contact-field__cross contact-field__cross--left" aria-hidden="true">+</span>
                <span className="contact-field__cross contact-field__cross--right" aria-hidden="true">+</span>
              </div>
            </div>

            {/* Step 3: SUBMIT / CAPTCHA (Col 3 of 3 = Col 4 of 4) */}
            <div className="contact-row contact-row--submit">
              <div className="contact-submit-area">
                {/* Captcha */}
                <div className="contact-captcha">
                  <button
                    type="button"
                    className={`contact-captcha__btn ${isVerified ? 'is-verified' : ''}`}
                    onClick={() => setIsVerified(!isVerified)}
                    aria-label="Human verification"
                  >
                    <span className="contact-captcha__check">
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

                {/* Submit button */}
                <button
                  type="submit"
                  className={`contact-submit ${isSubmitted ? 'is-sent' : ''} ${isSubmitting ? 'is-loading' : ''}`}
                  disabled={isSubmitting || isSubmitted}
                  aria-label="Send contact inquiry"
                >
                  <span className="contact-submit__text">
                    {isSubmitting ? (
                      'SENDING INQUIRY...'
                    ) : isSubmitted ? (
                      'REQUEST SENT! WE WILL REPLY SHORTLY'
                    ) : (
                      <RollingText text="LET'S TALK" />
                    )}
                  </span>
                  <span className="contact-submit__arrow" aria-hidden="true">›</span>
                  <div className="contact-submit__rainbow" aria-hidden="true" />
                </button>

                {activationNotice && (
                  <div className="contact-activation-notice">
                    <div className="contact-activation-header">
                      <strong>⚠️ ONE-TIME ACTIVATION REQUIRED</strong>
                    </div>
                    <p>
                      FormSubmit has sent a confirmation email to <strong>vamixlabs@gmail.com</strong>.
                    </p>
                    <p>
                      Please check your inbox (or Spam folder) and click <strong>"Activate Form"</strong> to permanently enable live inquiries.
                    </p>
                    <button
                      type="button"
                      className="contact-activation-retry"
                      onClick={(e) => handleSubmit(e)}
                    >
                      I have clicked Activate — verify now
                    </button>
                  </div>
                )}

                {submitError && (
                  <div className="contact-error-notice">
                    <span>{submitError} </span>
                    <a
                      href={`mailto:vamixlabs@gmail.com?subject=${encodeURIComponent(
                        'Project Inquiry from ' + (formData.name || 'Website Visitor')
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\nHi VAMIX Team,\n`
                      )}`}
                      className="contact-error-link"
                    >
                      Email directly: vamixlabs@gmail.com
                    </a>
                  </div>
                )}

                {/* Legal & Location */}
                <div className="contact-legal">
                  <span className="contact-legal__left">
                    BY SUBMITTING, YOU AGREE TO OUR{' '}
                    <a href="/terms-of-service" onClick={(e) => handleNav(e, '/terms-of-service')}><strong>TERMS</strong></a>
                    {' '}AND{' '}
                    <a href="/privacy-policy" onClick={(e) => handleNav(e, '/privacy-policy')}><strong>PRIVACY POLICY</strong></a>.
                  </span>
                  <span className="contact-legal__right">
                    WE ARE BASED IN <strong>SURAT</strong>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* ROW 3: Footer Meta Row */}
        <div className="contact-meta">
          <div className="contact-meta__logo">
            <a 
              href="/" 
              onClick={(e) => handleNav(e, '/')} 
              className="contact-footer-logo-link"
              aria-label="VAMIX Home"
            >
              <VamixLogo />
            </a>
          </div>
          <div className="contact-meta__empty" aria-hidden="true" />
          <div className="contact-meta__direct">
            <a href="tel:+916359198825" className="contact-meta__phone">+91 63591 98825</a>
            <a href="mailto:vamixlabs@gmail.com" className="contact-meta__email">VAMIXLABS@GMAIL.COM</a>
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