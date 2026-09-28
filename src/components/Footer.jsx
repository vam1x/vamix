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
      {/* 5-Line Blueprint Grid matching exactly upper section */}
      <SectionGrid 
        theme="dark" 
        showTopLine={false} 
        showBottomLine={false} 
        crosshairPositions={[]} 
      />

      <div className="footer-inner-container">
        <div className="footer-grid-4col">
          <div className="footer-legal-links">
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
          </div>
          <div className="footer-copyright-wrap">
            <span>© 2023 VAMIX® ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

