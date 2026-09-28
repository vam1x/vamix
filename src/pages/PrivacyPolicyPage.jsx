import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import './legal.css';

export default function PrivacyPolicyPage({ navigate }) {
  useEffect(() => {
    document.title = "Privacy Policy - VAMIX Digital Product Studio";
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
              <time dateTime="2026-09-22">SEP 22, 2026</time>
            </div>
          </div>

          {/* Column 2-4: Legal Content */}
          <div className="legal-page__items">
            <h1 id="legal-page-title" className="legal-page-title">
              Privacy policy
            </h1>

            <div className="legal-page__content">
              {/* Section 1 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">1. WHO WE ARE AND WHAT THIS POLICY COVERS</h2>
                <p className="legal-paragraph">
                  VAMIX ("VAMIX", "we", "us") is a full-stack digital product design and development studio based in Surat, Gujarat, India.
                </p>
                <p className="legal-paragraph">
                  This policy covers personal information handled through the VAMIX website, including its enquiry and contact forms. It explains what information we collect, why we collect it, how it is handled, and your rights concerning your personal data.
                </p>
                <p className="legal-paragraph">
                  For any privacy questions or requests, please email{' '}
                  <a href="mailto:hi@vamix.com" className="legal-link">hi@vamix.com</a> or call us at{' '}
                  <a href="tel:+916359198825" className="legal-link">+91 63591 98825</a>.
                </p>
              </div>

              {/* Section 2 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">2. INFORMATION YOU GIVE US</h2>
                <p className="legal-paragraph">
                  When you use our enquiry or contact form, we receive your name and email address. The interactive contact workflow may also collect a company name, information about your product challenges, timeline, and an estimated project budget that you choose to provide.
                </p>
                <p className="legal-paragraph">
                  When you contact us regarding potential collaboration or hiring, we receive your name, email address, portfolio or project links, and any introduction or brief you provide. Please provide only information relevant to your enquiry and do not include passwords, payment card details, or unrelated sensitive information.
                </p>
                <p className="legal-paragraph">
                  We use enquiry information exclusively to respond to you, review your requirements, and discuss a potential engagement. We treat all client concepts, intellectual property, and project briefs under strict professional confidentiality and non-disclosure standards.
                </p>
              </div>

              {/* Section 3 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">3. WEBSITE USAGE AND TECHNICAL INFORMATION</h2>
                <p className="legal-paragraph">
                  We collect anonymized telemetry and website analytics to understand visits and interactions with our site. Default collection can include pages viewed, session duration, interaction depth, approximate geographic location, and device/browser technical specifications.
                </p>
                <p className="legal-paragraph">
                  Analytics systems use first-party cookies, including a pseudonymous client identifier, to distinguish individual sessions. IP addresses are utilized during initial network collection for packet routing and approximate location, and are anonymized or discarded before being permanently stored.
                </p>
                <p className="legal-paragraph">
                  After a successful enquiry submission, the site records an interaction event. These events never transmit your name, email address, or specific message payload to analytical engines.
                </p>
                <p className="legal-paragraph">
                  You can restrict or delete cookies through your browser settings at any time, although disabling cookies may alter minor interactive presentation features.
                </p>
                <p className="legal-paragraph">
                  Our hosting, DNS, and form delivery providers process technical request information necessary to serve web assets, handle forms reliably, diagnose performance bottlenecks, and prevent DDoS or automated abuse.
                </p>
              </div>

              {/* Section 4 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">4. PROVIDERS WE USE</h2>
                <ul className="legal-list">
                  <li className="legal-list-item">
                    <strong>Hosting & Edge Delivery:</strong> High-performance cloud hosting provides continuous global uptime, SSL/TLS certificate termination, and edge caching for our web applications.
                  </li>
                  <li className="legal-list-item">
                    <strong>Form & Notification Infrastructure:</strong> Form submissions are securely parsed and relayed via encrypted webhooks to our internal studio management systems.
                  </li>
                  <li className="legal-list-item">
                    <strong>Spam & Bot Mitigation:</strong> Automated bot-checking mechanisms verify user interaction signals to prevent malicious spam flooding without compromising human user experience.
                  </li>
                  <li className="legal-list-item">
                    <strong>Analytics:</strong> Aggregated analytical platforms monitor site speed, engagement metrics, and page conversion flows.
                  </li>
                  <li className="legal-list-item">
                    <strong>Studio Communications:</strong> Secure email servers maintain incoming project enquiries and communications.
                  </li>
                </ul>
                <p className="legal-paragraph">
                  These trusted providers maintain robust physical and digital security architectures complying with international standards.
                </p>
              </div>

              {/* Section 5 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">5. HOW LONG WE KEEP INFORMATION</h2>
                <p className="legal-paragraph">
                  Our standard retention policy is to remove routine enquiry emails from our active inbox 12 months after the last communication regarding that enquiry, unless an active client agreement is executed.
                </p>
                <p className="legal-paragraph">
                  When an active engagement commences, project records, contract agreements, invoices, and deliverables are retained in accordance with statutory commercial, accounting, and tax compliance regulations.
                </p>
              </div>

              {/* Section 6 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">6. YOUR REQUESTS</h2>
                <p className="legal-paragraph">
                  You may at any time email <a href="mailto:hi@vamix.com" className="legal-link">hi@vamix.com</a> to inquire what personal data you have shared with us, request corrections, or request deletion of your information from our communications channels.
                </p>
                <p className="legal-paragraph">
                  We will promptly verify your identity and address your request in good faith, subject to applicable statutory or contractual retention duties.
                </p>
              </div>

              {/* Section 7 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">7. SECURITY AND EXTERNAL LINKS</h2>
                <p className="legal-paragraph">
                  The VAMIX site operates strictly over HTTPS with end-to-end transport layer encryption. While we apply modern industry best practices across our digital infrastructure, no internet transmission is ever completely immune to threats; therefore, avoid transmitting highly sensitive financial or credentials data via web enquiry forms.
                </p>
                <p className="legal-paragraph">
                  Our website features case studies and external links pointing to live client platforms, design systems, and partner services. VAMIX is not responsible for the independent privacy policies or content of those external destinations.
                </p>
              </div>

              {/* Section 8 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">8. CHANGES TO THIS POLICY</h2>
                <p className="legal-paragraph">
                  We may revise this Privacy Policy periodically as our service offerings evolve or regulatory mandates change. The revised version and updated timestamp will always be published on this page.
                </p>
              </div>

              {/* Section 9 */}
              <div className="legal-section-block">
                <h2 className="legal-section-title">9. CONTACT</h2>
                <div className="legal-contact-card">
                  <div className="legal-contact-name">VAMIX DIGITAL PRODUCT STUDIO</div>
                  <div className="legal-contact-detail">Surat, Gujarat, India</div>
                  <div className="legal-contact-detail">
                    Phone: <a href="tel:+916359198825">+91 63591 98825</a>
                  </div>
                  <div className="legal-contact-detail">
                    Email: <a href="mailto:hi@vamix.com">hi@vamix.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Interactive Contact Section */}
      <Contact navigate={navigate} />
    </div>
  );
}
