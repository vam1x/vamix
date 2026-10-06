import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionGrid from './SectionGrid';

export default function Hero({ navigate }) {
  const panelRef = useRef(null);
  const h1ContainerRef = useRef(null);
  const [isHeroPulsing, setIsHeroPulsing] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 809.98px)').matches;
    }
    return false;
  });

  useEffect(() => {
    let timeoutId;
    const handleHeroActivate = () => {
      setIsHeroPulsing(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsHeroPulsing(false);
      }, 1200);
    };

    window.addEventListener('vamix:hero-activate', handleHeroActivate);
    return () => {
      window.removeEventListener('vamix:hero-activate', handleHeroActivate);
      clearTimeout(timeoutId);
    };
  }, []);

  const [splitRatio, setSplitRatio] = useState(() => {
    if (typeof window !== 'undefined') {
      const mobile = window.matchMedia('(max-width: 809.98px)').matches;
      return mobile ? 0.715 : 0.40;
    }
    return 0.40;
  });

  useEffect(() => {
    const updateSplit = () => {
      if (panelRef.current && h1ContainerRef.current) {
        const pRect = panelRef.current.getBoundingClientRect();
        const hRect = h1ContainerRef.current.getBoundingClientRect();
        const mobile = window.matchMedia('(max-width: 809.98px)').matches;
        setIsMobile(mobile);
        if (hRect.width > 0) {
          const pxDiff = (mobile ? pRect.left : pRect.right) - hRect.left;
          const ratio = Math.max(0, Math.min(1, pxDiff / hRect.width));
          setSplitRatio(ratio);
        }
      }
    };
    updateSplit();
    window.addEventListener('resize', updateSplit);
    window.addEventListener('orientationchange', updateSplit);
    return () => {
      window.removeEventListener('resize', updateSplit);
      window.removeEventListener('orientationchange', updateSplit);
    };
  }, []);

  const avatars = [
    "/images/avatars/client-avatar-1.jpg",
    "/images/avatars/client-avatar-2.jpg",
    "/images/avatars/client-avatar-3.jpg",
    "/images/avatars/client-avatar-4.jpg",
    "/images/avatars/client-avatar-5.jpg"
  ];

  const clientLogos = [
    { src: "/projects/real/dv-logo.png", alt: "DV Jewellery Designer", height: 38, filter: "brightness(0)" },
    { src: "/projects/real/seogram-logo-black.svg", alt: "SEOGram", height: 34 },
    { src: "/projects/real/konsept-logo-black.svg", alt: "Konsept", height: 26 },
    { src: "/projects/real/fintecc-logo-black.svg", alt: "Fintecc", height: 36 },
    { src: "/projects/real/shreeji-logo-black.svg", alt: "Shreeji Fashion", height: 38 },
    { src: "/projects/real/nexode-logo-black.svg", alt: "Nexode", height: 26 }
  ];

  const springConfig = {
    type: "spring",
    stiffness: 219,
    damping: 27,
    mass: 0.3
  };

  const svgSplitX = splitRatio * 1120;
  const clipX = isMobile ? svgSplitX : 0;
  const clipWidth = isMobile ? Math.max(0, 1120 - svgSplitX) : svgSplitX;

  return (
    <section className={`webus-hero ${isHeroPulsing ? 'hero-is-activating' : ''}`} id="hero" data-framer-name="Hero">
      {/* Background Blueprint Grid Guides (5 Lines / 4 Columns with Crosshairs) */}
      <SectionGrid
        theme="light"
        showTopLine={false}
      />

      {/* Left Material Art Backdrop Panel (41% Desktop / 28% Mobile Right) */}
      <div className="hero-art-panel" ref={panelRef} aria-hidden="true" data-framer-name="Image container">
        <motion.div
          className="hero-art-img-wrapper"
          style={{ transformOrigin: 'center center' }}
          initial={{ opacity: 0.001, scale: 1.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 1.6,
            delay: 0,
            ease: [0.68, 0, 0, 1]
          }}
        >
          <img
            src="/images/hero-art.webp"
            alt="Macro material abstraction"
            className="hero-art-img"
            loading="eager"
            fetchpriority="high"
            width="1024"
            height="1536"
          />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="hero-container" data-framer-name="Content">

        {/* Top Text Block */}
        <div className="hero-text-block" data-framer-name="Text">

          {/* Tier 1: Top (Filler Left, Social Proof Right) */}
          <div className="hero-tier-top" data-framer-name="Top">
            <div className="hero-filler" data-framer-name="Filler"></div>
            <motion.div
              className="hero-social-proof"
              data-framer-name="Container"
              initial={{ opacity: 1, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springConfig,
                delay: isMobile ? 0.4 : 0.2
              }}
            >
              {/* Avatars */}
              <div className="hero-avatars" data-framer-name="Avatars">
                {avatars.map((url, i) => (
                  <div key={i} className="hero-avatar-shell" style={{ zIndex: 10 - i }}>
                    <img src={url} alt={`Verified Client ${i + 1}`} className="hero-avatar-photo" />
                  </div>
                ))}
              </div>

              {/* Rating Meta */}
              <div className="hero-rating-meta" data-framer-name="Container">
                <div className="hero-rating-score-row" data-framer-name="Rating">
                  <div className="hero-rating-dots" aria-hidden="true" data-framer-name="Rating Dots">
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <span className="hero-score-val">4.9/5</span>
                </div>
                <p className="hero-rating-sub">
                  <span className="hero-rating-dim">Based on </span>15 verified reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tier 2: H1 Full-Width Headline (Native SVG Text - Universally Scalable & Split across Viewports) */}
          <div className="hero-tier-h1" ref={h1ContainerRef} data-framer-name="H1">
            <h1 className="sr-only">DESIGN THAT CONVERTS</h1>
            <motion.div
              className="hero-h1-dual-container"
              initial={{ opacity: 0, y: isMobile ? 25 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springConfig,
                delay: isMobile ? 0.2 : 0.1
              }}
            >
              <svg 
                className="hero-fit-text hero-fit-text-title" 
                viewBox="0 0 1120 84" 
                preserveAspectRatio="none" 
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="hero-title-split-clip">
                    <rect x={clipX} y="-20" width={clipWidth} height="120" />
                  </clipPath>
                </defs>

                {/* Base Black Layer */}
                <text
                  x="0"
                  y="70"
                  className="hero-svg-title hero-svg-black"
                >
                  DESIGN THAT CONVERTS
                </text>

                {/* White Overlay Layer Clipped to Art Panel */}
                <text
                  x="0"
                  y="70"
                  className="hero-svg-title hero-svg-white"
                  clipPath="url(#hero-title-split-clip)"
                >
                  DESIGN THAT CONVERTS
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Tier 3: Bottom Text (Filler Left, Code That Ships + Subhead Right) */}
          <div className="hero-tier-bottom-text" data-framer-name="Bottom">
            <div className="hero-filler" data-framer-name="Filler"></div>
            <div className="hero-secondary-content" data-framer-name="Text">
              <motion.div
                className="hero-code-ships-wrap"
                initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...springConfig,
                  delay: isMobile ? 0.3 : 0.1
                }}
              >
                <svg 
                  className="hero-fit-text hero-fit-text-code" 
                  viewBox="0 0 482 54" 
                  preserveAspectRatio="none" 
                  aria-hidden="true"
                >
                  <text
                    x="0"
                    y="45"
                    className="hero-svg-code-text"
                  >
                    CODE THAT SHIPS
                  </text>
                </svg>
              </motion.div>

              <motion.p
                className="hero-statement"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...springConfig,
                  delay: isMobile ? 0.5 : 0.25
                }}
              >
                One team designs your product and builds it. No handoffs, no lost intent.
              </motion.p>
            </div>
          </div>

        </div>

        {/* Bottom Block (Buttons + Logo Ticker) */}
        <div className="hero-bottom-block" data-framer-name="Bottom">

          {/* Tier 4: Huge Action Pill Buttons */}
          <div className="hero-tier-buttons" data-framer-name="Buttons">
            <motion.a
              href="/contact"
              onClick={(e) => {
                if (navigate) {
                  e.preventDefault();
                  navigate('contact');
                }
              }}
              className="hero-pill-btn hero-pill-black"
              data-framer-name="Desktop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springConfig,
                delay: 0.6
              }}
            >
              <div className="hero-btn-roll-track" data-framer-name="Container">
                <span className="hero-btn-roll-text hero-btn-roll-top">
                  Schedule a free assessment
                </span>
                <span className="hero-btn-roll-text hero-btn-roll-bottom">
                  Schedule a free assessment
                </span>
              </div>
            </motion.a>

            <motion.a
              href="/case-studies"
              onClick={(e) => {
                if (navigate) {
                  e.preventDefault();
                  navigate('case-studies');
                }
              }}
              className="hero-pill-btn hero-pill-white"
              data-framer-name="Desktop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springConfig,
                delay: isMobile ? 0.7 : 0.65
              }}
            >
              <div className="hero-btn-roll-track" data-framer-name="Container">
                <span className="hero-btn-roll-text hero-btn-roll-top">
                  Our Case Studies
                </span>
                <span className="hero-btn-roll-text hero-btn-roll-bottom">
                  Our Case Studies
                </span>
              </div>
            </motion.a>
          </div>

          {/* Tier 5: Partner Logo Ticker (Filler Left, Ticker Right) */}
          <div className="hero-tier-ticker" data-framer-name="Logo">
            <div className="hero-filler" data-framer-name="Filler"></div>
            <motion.div
              className="hero-ticker-container"
              data-framer-name="Ticker"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springConfig,
                delay: 0.5
              }}
            >
              <div className="hero-ticker-mask">
                <div className="hero-ticker-track">
                  <div className="hero-ticker-group">
                    {clientLogos.map((logo, idx) => (
                      <div key={`logo-a-${idx}`} className="hero-ticker-item">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="hero-ticker-img"
                          style={{ height: `${logo.height}px`, width: 'auto', filter: logo.filter || 'none' }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="hero-ticker-group" aria-hidden="true">
                    {clientLogos.map((logo, idx) => (
                      <div key={`logo-b-${idx}`} className="hero-ticker-item">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="hero-ticker-img"
                          style={{ height: `${logo.height}px`, width: 'auto', filter: logo.filter || 'none' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
