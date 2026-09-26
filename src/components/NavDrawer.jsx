import React, { useEffect } from 'react';
import RollingText from './RollingText';

export default function NavDrawer({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`nav-drawer ${isOpen ? 'open' : ''}`} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Main Navigation"
    >
      <nav className="nav-drawer-links">
        <a href="./" className="nav-drawer-link" onClick={onClose}>
          <RollingText text="HOME" />
        </a>
        <a href="./about" className="nav-drawer-link" onClick={onClose}>
          <RollingText text="ABOUT" />
        </a>
        <a href="./case-studies" className="nav-drawer-link" onClick={onClose}>
          <RollingText text="CASE STUDIES" />
        </a>
        <a href="./blog" className="nav-drawer-link" onClick={onClose}>
          <RollingText text="INSIGHTS" />
        </a>
        <a href="./careers" className="nav-drawer-link" onClick={onClose}>
          <RollingText text="CAREERS" />
        </a>
        <a href="./contact" className="nav-drawer-link" onClick={onClose}>
          <RollingText text="CONTACT" />
        </a>
      </nav>

      <div className="nav-drawer-footer">
        <span>NEW DELHI, INDIA</span>
        <span>TENNESSEE, USA</span>
        <span>HI@WEBUS.IN</span>
      </div>
    </div>
  );
}
