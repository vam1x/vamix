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
    <footer className="footer-bottom-black">
      {/* 5-Line Blueprint Grid matching upper section exactly */}
      <SectionGrid 
        theme="dark" 
        showTopLine={true} 
        showBottomLine={false} 
        crosshairPositions={[0, 1, 2, 3, 4]} 
      />

      <div className="footer-inner-container">
        <div className="footer-grid-4col">
          {/* Column 1: Privacy Policy */}
          <div className="footer-col footer-col-1">
            <a 
              href="/privacy-policy" 
              onClick={(e) => handleLegalClick(e, '/privacy-policy')}
              className="footer-legal-link"
            >
              PRIVACY POLICY
            </a>
          </div>

          {/* Column 2: Terms of Service */}
          <div className="footer-col footer-col-2">
            <a 
              href="/terms-of-service" 
              onClick={(e) => handleLegalClick(e, '/terms-of-service')}
              className="footer-legal-link"
            >
              TERMS OF SERVICE
            </a>
          </div>

          {/* Column 3: Spacer */}
          <div className="footer-col footer-col-3" aria-hidden="true" />

          {/* Column 4: Copyright Notice */}
          <div className="footer-col footer-col-4 footer-copyright-wrap">
            <span className="footer-copyright-text">
              © 2023 VAMIX® ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}