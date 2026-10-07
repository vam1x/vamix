import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { src: "/projects/real/dv-logo.png", alt: "DV Jewellery Designer", height: 38, filter: "brightness(0)" },
    { src: "/projects/real/seogram-logo-black.svg", alt: "SEOGram", height: 34 },
    { src: "/projects/real/konsept-logo-black.svg", alt: "Konsept", height: 26 },
    { src: "/projects/real/fintecc-logo-black.svg", alt: "Fintecc", height: 36 },
    { src: "/projects/real/shreeji-logo-black.svg", alt: "Shreeji Fashion", height: 38 },
    { src: "/projects/real/nexode-logo-black.svg", alt: "Nexode", height: 26 }
  ];

  // Repeat twice for seamless infinite scrolling
  const fullList = [...logos, ...logos, ...logos];

  return (
    <div className="trust-marquee-wrapper" aria-label="Trusted by industry leaders">
      <div className="trust-marquee-track">
        {fullList.map((logo, idx) => {
          const isDuplicate = idx >= logos.length;
          return (
            <img 
              key={idx} 
              src={logo.src} 
              alt={isDuplicate ? "" : logo.alt}
              aria-hidden={isDuplicate ? "true" : undefined}
              height={logo.height || 24}
              loading="lazy"
              decoding="async"
              className="trust-brand-logo" 
              style={{ height: `${logo.height || 24}px`, width: 'auto', filter: logo.filter || 'none' }}
            />
          );
        })}
      </div>
    </div>
  );
}
