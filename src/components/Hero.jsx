import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionGrid from './SectionGrid';

export default function Hero() {
  const panelRef = useRef(null);
  const h1ContainerRef = useRef(null);
  const [splitX, setSplitX] = useState('calc(41vw - 40px)');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSplit = () => {
      if (panelRef.current && h1ContainerRef.current) {
        const pRect = panelRef.current.getBoundingClientRect();
        const hRect = h1ContainerRef.current.getBoundingClientRect();
        const mobile = window.matchMedia('(max-width: 809.98px)').matches;
        setIsMobile(mobile);
        const diff = (mobile ? pRect.left : pRect.right) - hRect.left;
        setSplitX(`${diff}px`);
      }
    };
    updateSplit();
    window.addEventListener('resize', updateSplit);
    return () => window.removeEventListener('resize', updateSplit);
  }, []);

  const avatars = [
    "https://framerusercontent.com/images/G3S93NVRBOPBVRHvuiD7v8mUec.jpg?width=75&height=75",
    "https://framerusercontent.com/images/AxkRNnDGOBIp7ssXlvfLRssOBsI.jpg?width=75&height=75",
    "https://framerusercontent.com/images/rIoYytoloWw5l32qBj1FRQtOUI.jpg?width=75&height=75",
    "https://framerusercontent.com/images/KWxDguvOOnQPeXxMf68OhIFwLY.jpg?width=75&height=75",
    "https://framerusercontent.com/images/AZyCsbeyJ3cYlMEBl91DwbIRc.jpg?width=75&height=75"
  ];

  const clientLogos = [
    { src: "https://framerusercontent.com/images/m5HT2ppV4zfDQ2RIEnbrqzcTbTI.png?width=314&height=63", alt: "Client Partner 1", width: 118, height: 24 },
    { src: "https://framerusercontent.com/images/ZTkFsn8sQMWf7fJpW4OcY7czpO4.png?width=1644&height=546", alt: "Client Partner 2", width: 70, height: 26 },
    { src: "https://framerusercontent.com/images/JO3wXdZKZ1thatZAQ9b18Zyds.png?width=229&height=58", alt: "Client Partner 3", width: 104, height: 26 },
    { src: "https://framerusercontent.com/images/LSWkiD8W5wCmRusdoafvq97Wg50.webp?width=960&height=388", alt: "Client Partner 4", width: 69, height: 28 },
    { src: "https://framerusercontent.com/images/pb8djO63KL3oEQ6SBbIiNIZqEE.png?width=2569&height=1088", alt: "Client Partner 5", width: 72, height: 25 }
  ];

  // Repeat logos for smooth continuous infinite marquee
  const tickerLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="webus-hero" id="hero" data-framer-name="Hero">
      {/* Background Blueprint Grid Guides (5 Lines / 4 Columns with Crosshairs) */}
      <SectionGrid
        theme="light"
        showTopLine={false}
      />

      {/* Left Material Art Backdrop Panel (41% Desktop / 28% Mobile Right) */}
      <div className="hero-art-panel" ref={panelRef} aria-hidden="true" data-framer-name="Image container">
        <motion.div
          className="hero-art-img-wrapper"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://framerusercontent.com/images/cx9DzPrXWjEIHDWlLpzDmBWYZI.png?width=1024&height=1536"
            alt="Macro material abstraction"
            className="hero-art-img"
            loading="eager"
            fetchpriority="high"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                  <span className="hero-rating-dim">Based on </span>23 verified reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tier 2: H1 Full-Width Headline (with Dual Split Clip-Path matching Image 4) */}
          <div className="hero-tier-h1" ref={h1ContainerRef} data-framer-name="H1">
            <motion.div
              className="hero-h1-dual-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* White Layer over Dark Leather */}
              <div 
                className="hero-h1-split-layer hero-h1-layer-white"
                style={{
                  clipPath: isMobile ? `polygon(${splitX} 0, 100% 0, 100% 100%, ${splitX} 100%)` : `polygon(0 0, ${splitX} 0, ${splitX} 100%, 0 100%)`,
                  WebkitClipPath: isMobile ? `polygon(${splitX} 0, 100% 0, 100% 100%, ${splitX} 100%)` : `polygon(0 0, ${splitX} 0, ${splitX} 100%, 0 100%)`
                }}
                aria-hidden="true"
              >
                <h1 className="hero-h1-title-text hero-h1-text-white">
                  DESIGN THAT CONVERTS
                </h1>
              </div>

              {/* Black Layer over Light Paper */}
              <div 
                className="hero-h1-split-layer hero-h1-layer-black"
                style={{
                  clipPath: isMobile ? `polygon(0 0, ${splitX} 0, ${splitX} 100%, 0 100%)` : `polygon(${splitX} 0, 100% 0, 100% 100%, ${splitX} 100%)`,
                  WebkitClipPath: isMobile ? `polygon(0 0, ${splitX} 0, ${splitX} 100%, 0 100%)` : `polygon(${splitX} 0, 100% 0, 100% 100%, ${splitX} 100%)`
                }}
              >
                <h1 className="hero-h1-title-text hero-h1-text-black">
                  DESIGN THAT CONVERTS
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Tier 3: Bottom Text (Filler Left, Code That Ships + Subhead Right) */}
          <div className="hero-tier-bottom-text" data-framer-name="Bottom">
            <div className="hero-filler" data-framer-name="Filler"></div>
            <div className="hero-secondary-content" data-framer-name="Text">
              <motion.div
                className="hero-code-ships-wrap"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="hero-code-ships-title">
                  CODE THAT SHIPS
                </p>
              </motion.div>

              <motion.p
                className="hero-statement"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
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
              href="#contact"
              className="hero-pill-btn hero-pill-black"
              data-framer-name="Desktop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
              href="#projects"
              className="hero-pill-btn hero-pill-white"
              data-framer-name="Desktop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="hero-ticker-mask">
                <div className="hero-ticker-track">
                  {tickerLogos.map((logo, idx) => (
                    <div key={idx} className="hero-ticker-item">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="hero-ticker-img"
                        style={{ height: `${logo.height}px`, width: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
