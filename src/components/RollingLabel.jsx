import React from 'react';

/**
 * RollingLabel
 * Flips/rolls label vertically on hover, exactly matching Webus.in CTA buttons
 */
export default function RollingLabel({ text, className = '' }) {
  return (
    <span className={`rolling-label ${className}`} aria-hidden="true">
      <span className="rolling-label__copy">{text}</span>
      <span className="rolling-label__copy rolling-label__copy--ghost">{text}</span>
    </span>
  );
}
