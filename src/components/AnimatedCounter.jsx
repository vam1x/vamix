import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter
 * Smooth requestAnimationFrame numeric counter triggered on viewport intersection.
 * Supports prefixes (+, -) and suffixes (%, +, X) matching Webus.in stats animations.
 */
export default function AnimatedCounter({
  to = 0,
  from = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
  className = ''
}) {
  const [val, setVal] = useState(from);
  const elRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const animate = (time) => {
            if (!startTime) startTime = time;
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out cubic: 1 - (1 - t)^3
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(from + (to - from) * ease);
            setVal(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setVal(to);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [from, to, duration]);

  return (
    <span ref={elRef} className={`counter-number ${className}`}>
      {prefix}{val}{suffix}
    </span>
  );
}
