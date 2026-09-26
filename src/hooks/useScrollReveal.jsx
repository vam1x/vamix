import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useLenis } from 'lenis/react';

/**
 * Custom React Hook for fluid continuous character illumination on scroll
 * Synchronized with Lenis smooth scrolling engine (used by Webus.in)
 */
export function useScrollReveal() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Element-height adaptive scroll progress calculation
    const elementHeight = rect.height;
    const start = windowHeight * 0.85;
    const total = (windowHeight * 0.55) + elementHeight;
    const current = start - rect.top;

    let p = current / total;
    p = Math.max(0, Math.min(1, p));
    setProgress(p);
  };

  // Synchronize directly with Lenis RAF frame loop
  useLenis(() => {
    calculateProgress();
  });

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { containerRef, progress };
}

/**
 * RevealText Component: Renders character-by-character continuous illumination
 * Exactly like Webus.in manifesto paragraphs
 */
export function RevealText({ text, className = '', theme = 'dark', style = {} }) {
  const { containerRef, progress } = useScrollReveal();
  
  // Split into words, each word split into characters to preserve word wrapping
  const words = useMemo(() => text.split(' '), [text]);
  const totalChars = useMemo(() => text.length, [text]);

  // Track global character index across words
  let globalCharIdx = 0;

  const baseColor = theme === 'dark' ? 'rgba(245, 245, 245, 0.25)' : 'rgba(23, 23, 23, 0.2)';
  const activeColor = theme === 'dark' ? 'rgb(245, 245, 245)' : 'rgb(23, 23, 23)';

  return (
    <div 
      ref={containerRef} 
      className={`reveal-text-block ${className}`}
      style={style}
    >
      {words.map((word, wIdx) => {
        const chars = Array.from(word);
        const wordElements = (
          <span 
            key={wIdx} 
            className="reveal-word-wrapper" 
            style={{ 
              display: 'inline-block', 
              whiteSpace: 'nowrap',
              marginRight: wIdx < words.length - 1 ? '0.28em' : 0 
            }}
          >
            {chars.map((char, cIdx) => {
              const charIndex = globalCharIdx++;
              const charThreshold = charIndex / totalChars;
              const isIlluminated = progress >= charThreshold;

              return (
                <span
                  key={cIdx}
                  className="reveal-char"
                  style={{
                    color: isIlluminated ? activeColor : baseColor,
                    willChange: 'color',
                    transition: 'color 0.18s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
        // Count the space in global index
        globalCharIdx++;
        return wordElements;
      })}
    </div>
  );
}
