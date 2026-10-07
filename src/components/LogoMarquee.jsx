import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { src: "/projects/real/dv-logo.webp", srcSet: "/projects/real/dv-logo.webp 1x, /projects/real/dv-logo-2x.webp 2x", alt: "DV Jewellery Designer", width: 154, height: 38, filter: "brightness(0)" },
    { src: "/projects/real/seogram-logo-black.svg", alt: "SEOGram", width: 156, height: 34 },
    { src: "/projects/real/konsept-logo-black.svg", alt: "Konsept", width: 135, height: 26 },
    { src: "/projects/real/fintecc-logo-black.svg", alt: "Fintecc", width: 130, height: 36 },
    { src: "/projects/real/shreeji-logo-black.svg", alt: "Shreeji Fashion", width: 144, height: 38 },
    { src: "/projects/real/nexode-logo-black.svg", alt: "Nexode", width: 106, height: 26 }
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
              srcSet={logo.srcSet}
              alt={isDuplicate ? "" : logo.alt}
              aria-hidden={isDuplicate ? "true" : undefined}
              width={logo.width}
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
