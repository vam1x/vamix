import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { src: "/projects/real/dv-logo.png", alt: "DV Jewellery Designer", height: 46, filter: "brightness(0)" },
    { src: "/projects/real/seogram-logo-black.svg", alt: "SEOGram", height: 40 },
    { src: "/projects/real/konsept-logo-black.svg", alt: "Konsept", height: 32 },
    { src: "/projects/real/fintecc-logo-black.svg", alt: "Fintecc", height: 42 },
    { src: "/projects/real/shreeji-logo-black.svg", alt: "Shreeji Fashion", height: 46 },
    { src: "/projects/real/nexode-logo-black.svg", alt: "Nexode", height: 34 }
  ];

  // Repeat twice for seamless infinite scrolling
  const fullList = [...logos, ...logos, ...logos];

  return (
    <div className="trust-marquee-wrapper" aria-label="Trusted by industry leaders">
      <div className="trust-marquee-track">
        {fullList.map((logo, idx) => (
          <img 
            key={idx} 
            src={logo.src} 
            alt={logo.alt} 
            className="trust-brand-logo" 
            style={{ height: `${logo.height || 24}px`, width: 'auto', filter: logo.filter || 'none' }}
          />
        ))}
      </div>
    </div>
  );
}
