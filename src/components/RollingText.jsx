import React, { useState } from 'react';

/**
 * Split-flap mechanical rolling text hover component
 * Matches the exact Framer downward rolling motion on Webus.in
 */
export default function RollingText({ text, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const chars = Array.from(text);

  return (
    <span 
      className={`roll-text-container ${isHovered ? 'is-active' : ''} ${className}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={text}
    >
      {chars.map((char, idx) => {
        const displayChar = char === ' ' ? '\u00A0' : char;
        return (
          <span key={idx} className="roll-slot">
            <span 
              className="roll-char roll-main"
              style={{ transitionDelay: `${idx * 22}ms` }}
            >
              {displayChar}
            </span>
            <span 
              className="roll-char roll-clone"
              style={{ transitionDelay: `${idx * 22}ms` }}
            >
              {displayChar}
            </span>
          </span>
        );
      })}
    </span>
  );
}
