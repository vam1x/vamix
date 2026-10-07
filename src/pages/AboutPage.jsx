import React, { useEffect } from 'react';
import AboutHeading from '../components/about/AboutHeading';
import AboutStats from '../components/about/AboutStats';
import AboutTeam from '../components/about/AboutTeam';
import AboutSteps from '../components/about/AboutSteps';
import AboutBelief from '../components/about/AboutBelief';
import AboutFaq from '../components/about/AboutFaq';
import AboutBooking from '../components/about/AboutBooking';
import Contact from '../components/Contact';
import useSeo from '../hooks/useSeo';

export default function AboutPage({ navigate }) {
  useSeo('about');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* JSON-LD Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About VAMIX",
            "description": "Meet VAMIX, a digital product studio in Surat, India. We partner with founders and enterprise teams to design and engineer intuitive digital products.",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://vamix.in/#organization",
              "name": "VAMIX",
              "legalName": "VAMIX Digital Product Studio",
              "url": "https://vamix.in/",
              "foundingDate": "2023",
              "numberOfEmployees": 10,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "knowsAbout": [
                "Product Design",
                "UI/UX Design",
                "Full-Stack Development",
                "Mobile App Development",
                "AI Product Development",
                "Design Systems",
                "Design Operations"
              ],
              "areaServed": ["India", "United States", "United Kingdom", "Worldwide"]
            }
          })
        }}
      />

      {/* 01: Top Heading / Hero (3+ Years & Social Proof) */}
      <AboutHeading />

      {/* 02: Studio Office Showcase & Metrics Bar */}
      <AboutStats />

      {/* 03: The Team Behind The Work (10 Members) */}
      <AboutTeam />

      {/* 04: Why Us & What Makes Us Different */}
      <AboutSteps navigate={navigate} />

      {/* 05: What We Believe (Founder Quote & Milestones) */}
      <AboutBelief />

      {/* 06: Help & Info FAQ */}
      <AboutFaq />

      {/* A first step from the reference Case Studies page, placed before contact. */}
      <AboutBooking navigate={navigate} />

      {/* 07: Ready To Start? Get In Touch Form */}
      <Contact navigate={navigate} />
    </div>
  );
}