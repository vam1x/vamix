import React, { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import Hero from './components/Hero';
import Approach from './components/Approach';
import WhyUs from './components/WhyUs';
import HowWeDoIt from './components/HowWeDoIt';
import Results from './components/Results';
import MoreProjects from './components/MoreProjects';
import Team from './components/Team';
import Timeline from './components/Timeline';
import Insights from './components/Insights';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LenisScrollLock({ isDrawerOpen }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (isDrawerOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isDrawerOpen, lenis]);

  return null;
}

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, 
        duration: 1.2, 
        smoothWheel: true, 
        wheelMultiplier: 1,
        touchMultiplier: 1.8 
      }}
    >
      <LenisScrollLock isDrawerOpen={isDrawerOpen} />

      <div className="app-root">
        {/* Sticky Adaptive Header */}
        <Header 
          isDrawerOpen={isDrawerOpen} 
          setIsDrawerOpen={setIsDrawerOpen} 
        />

        {/* Fullscreen Navigation Modal Drawer */}
        <NavDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
        />

        {/* Main Page Flow */}
        <main>
          {/* Section 01: Hero */}
          <Hero />

          {/* Section 02: Our Approach & Services */}
          <Approach />

          {/* Section 03: Why Companies Choose Webus */}
          <WhyUs />

          {/* Section 04: The Fast Track & Cost of Delay Matrix */}
          <HowWeDoIt />

          {/* Section 05: Results & Bitfront Success Story */}
          <Results />

          {/* Section 06: More Projects Showcase */}
          <MoreProjects />

          {/* Section 07: The Team */}
          <Team />

          {/* Section 08 & 09: Milestones & Studio Beliefs */}
          <Timeline />

          {/* Section 10: Editorial Insights */}
          <Insights />

          {/* Section 11: Help & Info FAQ */}
          <Faq />

          {/* Section 12: Get In Touch */}
          <Contact />
        </main>

        {/* Sub-Footer Legal Bar */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
