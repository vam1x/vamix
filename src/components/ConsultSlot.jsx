import React from 'react';

export default function ConsultSlot({ navigate }) {
  const handleConsultClick = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('/contact');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <aside className="consult-region" aria-label="Design consult">
      <a 
        href="/contact" 
        className="consult-slot"
        onClick={handleConsultClick}
      >
        <p className="consult-slot__copy">
          <span>FREE 30-MIN DESIGN CONSULT.<br />NO PITCH. </span>JUST CLARITY.
        </p>
        <span className="consult-slot__mark" aria-hidden="true">
          <span className="consult-slot__avatar-frame">
            <img 
              src="/images/ruby-avatar.webp" 
              alt="" 
              className="consult-slot__avatar" 
              width="36"
              height="36"
            />
          </span>
          <span className="consult-slot__disc">
            <svg className="consult-slot__plus" width="26" height="26" viewBox="-1 -1 26 26" fill="none">
              <path d="M12.2792 0L12.2792 24M24 12.2792L0 12.2792" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </span>
      </a>
    </aside>
  );
}
