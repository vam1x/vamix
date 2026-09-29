import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RollingText from './RollingText';
import AboutBooking from './about/AboutBooking';
import Contact from './Contact';
import '../contact-reference.css';

export default function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    toImprove: '',
    budget: '',
    email: ''
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Webus | Start Your Next Product";
    window.scrollTo(0, 0);
  }, []);

  const handleCaptchaClick = () => {
    if (isCaptchaVerified || isVerifying) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsCaptchaVerified(true);
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      alert("Please verify that you are human before sending.");
      return;
    }
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
      setIsCaptchaVerified(false);
    }, 4000);
  };

  const handleLegalClick = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="contact-page-root">
      {/* Noise Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true">
        <div className="film-grain__clip">
          <div className="film-grain__tile" />
        </div>
      </div>

      {/* ==========================================================================
          01. HERO / HEADING SECTION
          ========================================================================== */}
      <section className="contact-section contact-hero" id="contact-hero">
        {/* Continuous 5-Line Blueprint Grid */}
        <div className="page-grid-lines contact-grid-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="page-container page-container--grid contact-container contact-hero-grid">
          {/* Column 1: Eyebrow Badge */}
          <div className="page-eyebrow contact-eyebrow">
            <span className="page-eyebrow__dot" aria-hidden="true" />
            <span>START WITH A SIMPLE STEP</span>
          </div>

          {/* Columns 2-4: Main Headline */}
          <div className="contact-hero-copy">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              LET’S BUILD YOUR NEXT PRODUCT
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          02. INTERACTIVE CONVERSATIONAL MADLIB FORM SECTION ("HI, WEBUS TEAM!")
          ========================================================================== */}
      <section className="contact-section contact-form-section" id="contact-form">
        <div className="page-grid-lines contact-grid-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="page-container page-container--grid contact-container contact-form-grid">
          {/* Column 1: Grid alignment filler */}
          <div className="contact-form-filler" aria-hidden="true" />

          {/* Columns 2-4: Madlib Interactive Form */}
          <div className="contact-form-wrap">
            <form className="madlib-form" onSubmit={handleSubmit}>
              <p className="form-heading">HI, WEBUS TEAM!</p>

              {/* Line 1: My name is [NAME] from [COMPANY] . */}
              <div className="madlib-line madlib-line--pair">
                <div className="madlib-group">
                  <span>My name is</span>
                  <div className="madlib-field madlib-field--name">
                    <input
                      type="text"
                      required
                      name="Name"
                      placeholder="YOUR NAME"
                      autoComplete="name"
                      aria-label="My name is"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="madlib-group">
                  <span>from</span>
                  <div className="madlib-field madlib-field--company">
                    <input
                      type="text"
                      name="Company name"
                      placeholder="COMPANY NAME/ OPTIONAL"
                      autoComplete="organization"
                      aria-label="from"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <span className="madlib-punctuation">.</span>
                </div>
              </div>

              {/* Line 2: I want to improve: [CHALLENGE] . */}
              <div className="madlib-line madlib-line--fill">
                <span>I want to improve:</span>
                <div className="madlib-group madlib-group--fill">
                  <div className="madlib-field madlib-field--improve">
                    <input
                      type="text"
                      required
                      name="To improve"
                      placeholder="DESCRIBE YOUR WORKFLOW CHALLENGE"
                      aria-label="I want to improve"
                      value={formData.toImprove}
                      onChange={(e) => setFormData({ ...formData, toImprove: e.target.value })}
                    />
                  </div>
                  <span className="madlib-punctuation">.</span>
                </div>
              </div>

              {/* Line 3: Budget: [BUDGET] $ */}
              <div className="madlib-line">
                <span>Budget:</span>
                <div className="madlib-group">
                  <div className="madlib-field madlib-field--budget">
                    <input
                      type="text"
                      name="Budget"
                      placeholder="ENTER BUDGET"
                      aria-label="Budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>
                  <span className="madlib-punctuation">$</span>
                </div>
              </div>

              {/* Line 4: Contact me at: [EMAIL] . */}
              <div className="madlib-line">
                <span>Contact me at:</span>
                <div className="madlib-group">
                  <div className="madlib-field madlib-field--email">
                    <input
                      type="email"
                      required
                      name="Email"
                      placeholder="YOUR EMAIL"
                      autoComplete="email"
                      aria-label="Contact me at"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <span className="madlib-punctuation">.</span>
                </div>
              </div>

              {/* Action Area: Captcha, Send Request button & Terms note */}
              <div className="contact-submit-area">
                {/* 1:1 Webus Human Verification Captcha Box */}
                <div 
                  className="webus-captcha" 
                  data-hcaptcha-phase={isCaptchaVerified ? "verified" : isVerifying ? "verifying" : "ready"}
                >
                  <button
                    className="webus-captcha__verify"
                    type="button"
                    onClick={handleCaptchaClick}
                    aria-label="Verify you're human"
                  >
                    <i className="corner-mark corner-mark--top-left" aria-hidden="true" />
                    <span className="webus-captcha__indicator" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      {isCaptchaVerified ? "VERIFIED" : isVerifying ? "VERIFYING..." : "Verify you’re human"}
                    </span>
                  </button>

                  <div className="webus-captcha__details">
                    <p className="webus-captcha__status" role="status">
                      {isCaptchaVerified 
                        ? "Verification complete." 
                        : "Select to verify before sending."}
                    </p>
                    <p className="webus-captcha__disclosure">
                      Protected by hCaptcha. <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> · <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                    </p>
                  </div>
                </div>

                {/* Send Request Button */}
                <button
                  className="contact-submit"
                  type="submit"
                  aria-label="Send Request"
                >
                  <span>
                    {isSubmitted ? "REQUEST SENT! WE WILL REPLY SHORTLY" : <RollingText text="Send Request" />}
                  </span>
                  <span className="contact-submit-arrow" aria-hidden="true">
                    <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M 0 0 L 8 8 L 0 16" transform="translate(8 4)" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Legal Policy Text */}
                <div className="contact-legal">
                  <p className="form-legal">
                    By submitting, you agree to our{' '}
                    <a href="/terms-of-service" onClick={(e) => handleLegalClick(e, '/terms-of-service')}>
                      Terms
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" onClick={(e) => handleLegalClick(e, '/privacy-policy')}>
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          03. "LET’S KEEP IT SIMPLE" & STUDIO PHOTO SECTION
          ========================================================================== */}
      <section className="contact-section contact-info-section" id="contact-info">
        <div className="page-grid-lines contact-grid-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="page-container page-container--grid contact-container contact-info-grid">
          {/* Column 1: Eyebrow Badge */}
          <div className="page-eyebrow contact-eyebrow">
            <span className="page-eyebrow__dot" aria-hidden="true" />
            <span>Let’s keep it simple</span>
          </div>

          {/* Columns 2-4: Lead Statement, Studio Image & Contacts */}
          <div className="contact-info-content">
            <div className="contact-info-copy">
              <p className="contact-lead">
                You don’t need to prepare slides or technical notes, just share what’s on your mind. Whether it’s a quick question or a bigger project idea, we’ll get back to you with a clear next step.
              </p>
              <p className="contact-detail-copy">
                Every message that comes through this form is read by a real person on our team. No chatbots, no outsourced support. Most of the time, it’s Ruby or Jaspal who will see it first and make sure it reaches the right designer or engineer.
              </p>
            </div>

            <img
              src="https://framerusercontent.com/images/c67C5n6mfhTUQv7UYjH3n7xbSvk.jpg?width=1184&height=864"
              alt="Webus office space"
              loading="lazy"
              className="office-image"
            />

            <div className="contact-info-details">
              <div className="contact-phone-email">
                <a className="contact-phone" href="tel:+916359198825">
                  +91 63591 98825
                </a>
                <a className="contact-email" href="mailto:hi@webus.in">
                  HI@WEBUS.IN
                </a>
              </div>

              <div className="contact-socials">
                <span>LI</span>
                <span>ig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          04. BOOKING BAND ("YOUR FIRST STEP" - 30-MINUTE CALL BOOKING)
          ========================================================================== */}
      <div id="swup-booking">
        <AboutBooking navigate={navigate} />
      </div>

      {/* ==========================================================================
          05. BOTTOM CONTACT ("12 READY TO START? / GET IN TOUCH")
          ========================================================================== */}
      <Contact navigate={navigate} />
    </div>
  );
}
