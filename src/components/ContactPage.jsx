import RevealHeading from './RevealHeading';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RollingText from './RollingText';
import AboutBooking from './about/AboutBooking';
import Contact from './Contact';
import useSeo from '../hooks/useSeo';
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

  useSeo('contact');

  useEffect(() => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activationNotice, setActivationNotice] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }
    if (!isCaptchaVerified) {
      alert("Please verify that you are human before sending.");
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
          company: formData.company?.trim() || "Not specified",
          projectScope: formData.toImprove?.trim() || "Not specified",
          budget: formData.budget?.trim() || "Not specified",
          _subject: `New Detailed Project Inquiry from ${formData.name.trim()} (VAMIX Contact Page)`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setIsSubmitted(true);
        setActivationNotice(false);
        setFormData({
          name: '',
          company: '',
          toImprove: '',
          budget: '',
          email: ''
        });
        setIsCaptchaVerified(false);
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
      console.error("Contact page form error:", err);
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

      {/* JSON-LD Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact VAMIX",
            "description": "Get in touch with VAMIX Digital Product Studio. Start with a simple step - schedule a free 30-minute product consultation.",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://vamix.in/#organization",
              "name": "VAMIX",
              "url": "https://vamix.in/",
              "telephone": "+916359198825",
              "email": "vamixlabs@gmail.com",
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
                  "email": "vamixlabs@gmail.com",
                  "availableLanguage": ["English", "Hindi", "Gujarati"]
                }
              ]
            }
          })
        }}
      />

      {/* ==========================================================================
          01. HERO / HEADING SECTION
          ========================================================================== */}
      <section className="contact-section contact-hero" id="contact-hero" aria-labelledby="contact-hero-heading">
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
            <h1 id="contact-hero-heading">
              <RevealHeading text="LET’S BUILD YOUR NEXT PRODUCT" />
            </h1>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          02. INTERACTIVE CONVERSATIONAL MADLIB FORM SECTION ("HI, WEBUS TEAM!")
          ========================================================================== */}
      <section className="contact-section contact-form-section" id="contact-form" aria-labelledby="contact-form-heading">
        <div className="page-grid-lines contact-grid-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="page-container page-container--grid contact-container contact-form-grid">
          {/* Column 1: Grid alignment filler */}
          <div className="contact-form-filler" aria-hidden="true" />

          {/* Columns 2-4: Madlib Interactive Form */}
          <div className="contact-form-wrap">
            <form className="madlib-form" onSubmit={handleSubmit} noValidate>
              <h2 id="contact-form-heading" className="form-heading visually-hidden">Contact Form</h2>
              <p className="form-heading" aria-hidden="true">HI, VAMIX TEAM!</p>

              {/* Line 1: My name is [NAME] from [COMPANY] . */}
              <div className="madlib-line madlib-line--pair">
                <div className="madlib-group">
                  <span>My name is</span>
                  <div className="madlib-field madlib-field--name">
                    <label htmlFor="madlib-name" className="visually-hidden">My name is</label>
                    <input
                      type="text"
                      id="madlib-name"
                      required
                      name="Name"
                      placeholder="YOUR NAME"
                      autoComplete="name"
                      aria-label="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="madlib-group">
                  <span>from</span>
                  <div className="madlib-field madlib-field--company">
                    <label htmlFor="madlib-company" className="visually-hidden">Company name (optional)</label>
                    <input
                      type="text"
                      id="madlib-company"
                      name="Company name"
                      placeholder="COMPANY NAME/ OPTIONAL"
                      autoComplete="organization"
                      aria-label="Company name"
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
                    <label htmlFor="madlib-improve" className="visually-hidden">What you want to improve</label>
                    <input
                      type="text"
                      id="madlib-improve"
                      required
                      name="To improve"
                      placeholder="DESCRIBE YOUR WORKFLOW CHALLENGE"
                      aria-label="Workflow challenge description"
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
                    <label htmlFor="madlib-budget" className="visually-hidden">Budget</label>
                    <input
                      type="text"
                      id="madlib-budget"
                      name="Budget"
                      placeholder="ENTER BUDGET"
                      aria-label="Project budget"
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
                    <label htmlFor="madlib-email" className="visually-hidden">Contact email</label>
                    <input
                      type="email"
                      id="madlib-email"
                      required
                      name="Email"
                      placeholder="YOUR EMAIL"
                      autoComplete="email"
                      aria-label="Contact email address"
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
                    aria-pressed={isCaptchaVerified}
                  >
                    <i className="corner-mark corner-mark--top-left" aria-hidden="true" />
                    <span className="webus-captcha__indicator" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>
                      {isCaptchaVerified ? "VERIFIED" : isVerifying ? "VERIFYING..." : "Verify you&rsquo;re human"}
                    </span>
                  </button>

                  <div className="webus-captcha__details">
                    <p className="webus-captcha__status" role="status" aria-live="polite">
                      {isCaptchaVerified
                        ? "Verification complete."
                        : "Select to verify before sending."}
                    </p>
                    <p className="webus-captcha__disclosure">
                      Protected by hCaptcha. <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> &middot; <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                    </p>
                  </div>
                </div>

                {/* Send Request Button */}
                <button
                  className={`contact-submit ${isSubmitted ? 'is-sent' : ''} ${isSubmitting ? 'is-loading' : ''}`}
                  disabled={isSubmitting || isSubmitted}
                  type="submit"
                  aria-label={isSubmitted ? "Request sent successfully" : "Send Request"}
                >
                  <span>
                    {isSubmitting ? (
                      "SENDING INQUIRY..."
                    ) : isSubmitted ? (
                      "REQUEST SENT! WE WILL REPLY SHORTLY"
                    ) : (
                      <RollingText text="Send Request" />
                    )}
                  </span>
                  <span className="contact-submit-arrow" aria-hidden="true">
                    <svg className="cta-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M 0 0 L 8 8 L 0 16" transform="translate(8 4)" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
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
                        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nScope: ${formData.toImprove}\nBudget: ${formData.budget}\n`
                      )}`}
                      className="contact-error-link"
                    >
                      Email directly: vamixlabs@gmail.com
                    </a>
                  </div>
                )}

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
          03. "LET&rsquo;S KEEP IT SIMPLE" & STUDIO PHOTO SECTION
          ========================================================================== */}
      <section className="contact-section contact-info-section" id="contact-info" aria-labelledby="contact-info-heading">
        <div className="page-grid-lines contact-grid-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <div className="page-container page-container--grid contact-container contact-info-grid">
          {/* Column 1: Eyebrow Badge */}
          <div className="page-eyebrow contact-eyebrow">
            <span className="page-eyebrow__dot" aria-hidden="true" />
            <span>Let&rsquo;s keep it simple</span>
          </div>

          {/* Columns 2-4: Lead Statement, Studio Image & Contacts */}
          <div className="contact-info-content">
            <div className="contact-info-copy">
              <p className="contact-lead">
                You don&rsquo;t need to prepare slides or technical notes, just share what&rsquo;s on your mind. Whether it&rsquo;s a quick question or a bigger project idea, we&rsquo;ll get back to you with a clear next step.
              </p>
              <p className="contact-detail-copy">
                Every message that comes through this form is read by a real person on our team. No chatbots, no outsourced support. Most of the time, it&rsquo;s Ruby or Jaspal who will see it first and make sure it reaches the right designer or engineer.
              </p>
            </div>

            <figure>
              <img
                src="https://framerusercontent.com/images/c67C5n6mfhTUQv7UYjH3n7xbSvk.jpg?width=1184&height=864"
                alt="VAMIX studio workspace showing design team collaboration area"
                loading="lazy"
                decoding="async"
                width="1184"
                height="864"
                className="office-image"
              />
              <figcaption className="visually-hidden">VAMIX studio workspace</figcaption>
            </figure>

            <div className="contact-info-details">
              <div className="contact-phone-email">
                <a className="contact-phone" href="tel:+916359198825">
                  +91 63591 98825
                </a>
                <a className="contact-email" href="mailto:vamixlabs@gmail.com">
                  VAMIXLABS@GMAIL.COM
                </a>
              </div>

              <nav className="contact-socials" aria-label="Social media links" role="list">
                <a href="https://www.linkedin.com/company/vamix" target="_blank" rel="noopener noreferrer" role="listitem">LI</a>
                <a href="https://www.instagram.com/vamix" target="_blank" rel="noopener noreferrer" role="listitem">IG</a>
              </nav>
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