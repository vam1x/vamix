import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { src: "https://framerusercontent.com/images/m5HT2ppV4zfDQ2RIEnbrqzcTbTI.png?width=314&height=63", alt: "Client Partner" },
    { src: "https://framerusercontent.com/images/ZTkFsn8sQMWf7fJpW4OcY7czpO4.png?width=1644&height=546", alt: "Client Partner" },
    { src: "https://framerusercontent.com/images/JO3wXdZKZ1thatZAQ9b18Zyds.png?width=229&height=58", alt: "Client Partner" },
    { src: "https://framerusercontent.com/images/LSWkiD8W5wCmRusdoafvq97Wg50.webp?width=960&height=388", alt: "Client Partner" },
    { src: "https://framerusercontent.com/images/pb8djO63KL3oEQ6SBbIiNIZqEE.png?width=2569&height=1088", alt: "Client Partner" }
  ];

  // Repeat twice for seamless infinite scrolling
  const fullList = [...logos, ...logos];

  return (
    <div className="trust-marquee-wrapper" aria-label="Trusted by industry leaders">
      <div className="trust-marquee-track">
        {fullList.map((logo, idx) => (
          <img 
            key={idx} 
            src={logo.src} 
            alt={logo.alt} 
            className="trust-brand-logo" 
          />
        ))}
      </div>
    </div>
  );
}
