import React, { useEffect } from 'react';
import AboutBooking from '../components/about/AboutBooking';
import Contact from '../components/Contact';
import useSeo from '../hooks/useSeo';
import './legal.css';

export default function TermsOfServicePage({ navigate }) {
  useSeo('terms-of-service');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-page__text" aria-labelledby="legal-page-title">
        {/* 5 Vertical Blueprint Grid Lines */}
        <div className="legal-grid-lines" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="legal-page__container">
          {/* Column 1: Date & Metadata */}
          <div className="legal-page__date">
            <div className="legal-date-badge">
              <span className="legal-date-dot" aria-hidden="true"></span>
              <time dateTime="2025-09-17">SEP 17, 2025</time>
            </div>
          </div>

          {/* Column 2-4: Legal Content */}
          <div className="legal-page__items">
            <h1 id="legal-page-title" className="legal-page-title">
              Terms of service
            </h1>

            <div className="legal-page__content">
              {/* Section 1 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">1. USE OF THE SITE</h2>
                <p className="legal-paragraph">
                  Welcome to VAMIX. By accessing or using our website, you agree to comply with and be bound by these Terms of Service. You agree to use the Site only for lawful purposes and in compliance with these Terms. You may not:
                </p>
                <ul className="legal-list">
                  <li className="legal-list-item">
                    Violate any applicable local, national, or international laws or regulations
                  </li>
                  <li className="legal-list-item">
                    Engage in unauthorized access, automated data extraction, web crawling, scraping, or harvesting of our digital assets
                  </li>
                  <li className="legal-list-item">
                    Disrupt, impair, or interfere with the Site's security, server infrastructure, or overall technical functionality
                  </li>
                  <li className="legal-list-item">
                    Impersonate any person, business entity, or falsely claim affiliation with VAMIX or its partners
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">2. INTELLECTUAL PROPERTY</h2>
                <p className="legal-paragraph">
                  All content published on this Site—including typography, graphic elements, UX blueprints, code showcases, video animations, brand identities, and layout designs—is the proprietary intellectual property of VAMIX and is protected under applicable copyright and trademark laws. You may not copy, reproduce, republish, or distribute any part of our site without express written consent.
                </p>
                <p className="legal-paragraph">
                  For formal client partnerships, all project deliverables, software architecture, UI kits, design systems, and source code generated during the engagement are transferred 100% to the client upon full milestone sign-off and payment completion, as stipulated in our Master Services Agreement.
                </p>
              </div>

              {/* Section 3 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">3. SERVICE AVAILABILITY</h2>
                <p className="legal-paragraph">
                  We strive to maintain continuous uptime and exceptional performance across our website. However, we do not guarantee that the site will always be available without disruption or error-free. We reserve the right to revise, update, suspend, or discontinue any feature or content at our discretion without prior notice.
                </p>
              </div>

              {/* Section 4 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">4. LIMITATION OF LIABILITY</h2>
                <p className="legal-paragraph">
                  To the fullest extent permitted by applicable law, VAMIX and its founders, employees, and affiliates will not be liable for any direct, indirect, incidental, or consequential damages arising from your access to or use of the Site, including but not limited to:
                </p>
                <ul className="legal-list">
                  <li className="legal-list-item">
                    Loss of profits, revenue, data, or anticipated business opportunities
                  </li>
                  <li className="legal-list-item">
                    Temporary service interruptions, latency, or server downtime
                  </li>
                  <li className="legal-list-item">
                    Actions, statements, or content of third-party platforms linked from or integrated into the Site
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">5. THIRD-PARTY SERVICES</h2>
                <p className="legal-paragraph">
                  Our Site may feature case studies containing links to external third-party applications, client production domains, or design references. We do not endorse or take responsibility for the terms, security practices, or content of any third-party websites.
                </p>
              </div>

              {/* Section 6 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">6. INDEMNIFICATION</h2>
                <p className="legal-paragraph">
                  You agree to defend, indemnify, and hold harmless VAMIX, its directors, officers, employees, and agents from any claims, liabilities, costs, damages, or expenses (including reasonable legal fees) resulting from your breach of these Terms or misuse of the Site.
                </p>
              </div>

              {/* Section 7 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">7. GOVERNING LAW</h2>
                <p className="legal-paragraph">
                  These Terms of Service are governed by and construed in accordance with the laws of India. Any dispute or claim arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts of Surat, Gujarat, India.
                </p>
              </div>

              {/* Section 8 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">8. CHANGES TO THESE TERMS</h2>
                <p className="legal-paragraph">
                  We reserve the right to amend or replace these Terms at any time. When modifications are made, the revised date at the top of this page will be updated. Your continued use of the Site following any changes indicates your agreement to the new Terms.
                </p>
              </div>

              {/* Section 9 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">9. CONTACT US</h2>
                <p className="legal-paragraph">
                  If you have any questions or require clarification regarding these Terms of Service, please reach out to us:
                </p>
                <div className="legal-contact-card">
                  <div className="legal-contact-name">VAMIX DIGITAL PRODUCT STUDIO</div>
                  <div className="legal-contact-detail">Surat, Gujarat, India</div>
                  <div className="legal-contact-detail">
                    Phone: <a href="tel:+916359198825">+91 63591 98825</a>
                  </div>
                  <div className="legal-contact-detail">
                    Email: <a href="mailto:vamixlabs@gmail.com">vamixlabs@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <AboutBooking navigate={navigate} />

      {/* Global Interactive Contact Section */}
      <Contact navigate={navigate} />
    </div>
  );
}
