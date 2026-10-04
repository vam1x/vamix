import React from 'react';
import SectionGrid from './SectionGrid';

export default function Footer({ navigate }) {
  const handleLegalClick = (e, path) => {
    e.preventDefault();
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="footer-bottom-black" role="contentinfo">
      {/* 5-Line Blueprint Grid matching exactly upper section */}
      <SectionGrid
        theme="dark"
        showTopLine={false}
        showBottomLine={false}
        crosshairPositions={[]}
      />

      {/* JSON-LD Structured Data for Organization in Footer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://vamix.vercel.app/#organization",
            "name": "VAMIX",
            "legalName": "VAMIX Digital Product Studio",
            "url": "https://vamix.vercel.app/",
            "logo": {
              "@type": "ImageObject",
              "@id": "https://vamix.vercel.app/#logo",
              "url": "https://vamix.vercel.app/favicon.svg",
              "width": 85,
              "height": 26
            },
            "email": "hi@vamix.com",
            "telephone": "+916359198825",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "addressCountry": "IN",
              "postalCode": "395006"
            },
            "sameAs": [
              "https://www.linkedin.com/company/vamix",
              "https://www.instagram.com/vamix"
            ],
            "foundingDate": "2023"
          })
        }}
      />

      <div className="footer-inner-container">
        <div className="footer-grid-4col">
          <nav className="footer-legal-links" aria-label="Legal links">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLegalClick(e, '/privacy-policy')}
            >
              PRIVACY POLICY
            </a>
            <a
              href="/terms-of-service"
              onClick={(e) => handleLegalClick(e, '/terms-of-service')}
            >
              TERMS OF SERVICE
            </a>
          </nav>
          <div className="footer-copyright-wrap">
            <p>&copy; 2023 VAMIX&reg; ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}