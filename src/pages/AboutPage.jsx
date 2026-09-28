import React, { useEffect } from 'react';
import AboutHeading from '../components/about/AboutHeading';
import AboutStats from '../components/about/AboutStats';
import AboutTeam from '../components/about/AboutTeam';
import AboutSteps from '../components/about/AboutSteps';
import AboutBelief from '../components/about/AboutBelief';
import AboutFaq from '../components/about/AboutFaq';
import AboutBooking from '../components/about/AboutBooking';
import Contact from '../components/Contact';

export default function AboutPage({ navigate }) {
  useEffect(() => {
    document.title = "About VAMIX - Product Studio in Delhi | 12+ Years";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* 01: Top Heading / Hero (13+ Years & Social Proof) */}
      <AboutHeading />

      {/* 02: Studio Office Showcase & Metrics Bar */}
      <AboutStats />

      {/* 03: The Team Behind The Work (10 Members) */}
      <AboutTeam />

      {/* 04: Why Us & What Makes Us Different */}
      <AboutSteps />

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
