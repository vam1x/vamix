import React from 'react';
import LogoMarquee from './LogoMarquee';
import RollingText from './RollingText';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background Split Screen */}
      <div className="hero-split-grid" aria-hidden="true">
        <div className="hero-left-art">
          <img 
            src="https://framerusercontent.com/images/cx9DzPrXWjEIHDWlLpzDmBWYZI.png?width=1024&height=1536" 
            alt="Macro Material Abstraction" 
            className="hero-texture-img" 
          />
          <div className="hero-aurora-glow"></div>
        </div>
        <div className="hero-right-canvas"></div>
      </div>

      {/* Floating Foreground Layer */}
      <div className="hero-content-layer">
        {/* Social Proof Rating Badge */}
        <div className="hero-social-proof">
          <div className="hero-avatars-group">
            <img src="https://framerusercontent.com/images/G3S93NVRBOPBVRHvuiD7v8mUec.jpg?width=75&height=75" alt="Verified Client" className="hero-avatar-circle" />
            <img src="https://framerusercontent.com/images/AxkRNnDGOBIp7ssXlvfLRssOBsI.jpg?width=75&height=75" alt="Verified Client" className="hero-avatar-circle" />
            <img src="https://framerusercontent.com/images/rIoYytoloWw5l32qBj1FRQtOUI.jpg?width=75&height=75" alt="Verified Client" className="hero-avatar-circle" />
            <img src="https://framerusercontent.com/images/KWxDguvOOnQPeXxMf68OhIFwLY.jpg?width=75&height=75" alt="Verified Client" className="hero-avatar-circle" />
            <img src="https://framerusercontent.com/images/AZyCsbeyJ3cYlMEBl91DwbIRc.jpg?width=75&height=75" alt="Verified Client" className="hero-avatar-circle" />
          </div>
          <div className="hero-rating-info">
            <span className="hero-rating-score"><span className="hero-rating-dots">•••••</span> 4.9/5</span>
            <span className="hero-rating-label">BASED ON 23 VERIFIED REVIEWS</span>
          </div>
        </div>

        {/* Hero Headings Banner */}
        <div className="hero-headings-wrap">
          <h1 className="hero-headline-1">DESIGN THAT CONVERTS</h1>
          <h2 className="hero-headline-2">CODE THAT SHIPS</h2>
          <p className="hero-sub-statement">
            One team designs your product and builds it. No handoffs, no lost intent.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#contact" className="btn-pill btn-pill-dark">
              <RollingText text="SCHEDULE A FREE ASSESSMENT" />
            </a>
            <a href="#projects" className="btn-pill btn-pill-white">
              <RollingText text="OUR CASE STUDIES" />
            </a>
          </div>
        </div>
      </div>

      {/* Brand Marquee Ticker */}
      <LogoMarquee />
    </section>
  );
}
