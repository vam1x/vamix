import React from 'react';

export default function VamixLogo({ className = '', style = {} }) {
  return (
    <span className={`vamix-logo-brand ${className}`} style={style} aria-label="VAMIX">
      <span className="vamix-logo-word">Vamix</span>
      <span className="vamix-logo-reg" aria-hidden="true">®</span>
    </span>
  );
}
