import React, { useState, useEffect, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import Hero from './components/Hero';
import Approach from './components/Approach';
import WhyUs from './components/WhyUs';
import HowWeDoIt from './components/HowWeDoIt';
import Results from './components/Results';
import MoreProjects from './components/MoreProjects';
import Timeline from './components/Timeline';
import Faq from './components/Faq';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ServicesPage from './pages/ServicesPage';

function LenisScrollLock({ isDrawerOpen }) {
  // Navigation is now a compact dropdown card (Image 2), so scroll lock is not needed
  return null;
}

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    if (`${path}${hash}${search}`.includes('case-studies')) return 'case-studies';
    if (path.includes('services') || hash.includes('services') || search.includes('services')) {
      return 'services';
    }
    if (path.includes('about') || hash.includes('about') || search.includes('about')) {
      return 'about';
    }
    if (path.includes('contact') || hash.includes('contact') || search.includes('contact')) {
      return 'contact';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const navigate = useCallback((route) => {
    const cleanRoute = route.replace(/^\.?\//, '').toLowerCase();
    if (cleanRoute.includes('case-studies')) {
      setCurrentRoute('case-studies');
      window.history.pushState({ route: 'case-studies' }, '', '/case-studies');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (cleanRoute.includes('services')) {
      setCurrentRoute('services');
      window.history.pushState({ route: 'services' }, '', '/services');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (cleanRoute.includes('about')) {
      setCurrentRoute('about');
      window.history.pushState({ route: 'about' }, '', '/about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (cleanRoute.includes('contact')) {
      setCurrentRoute('contact');
      window.history.pushState({ route: 'contact' }, '', '/contact');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setCurrentRoute('home');
      window.history.pushState({ route: 'home' }, '', '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setIsDrawerOpen(false);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('case-studies') || hash.includes('case-studies')) {
        setCurrentRoute('case-studies');
      } else if (path.includes('services') || hash.includes('services')) {
        setCurrentRoute('services');
      } else if (path.includes('about') || hash.includes('about')) {
        setCurrentRoute('about');
      } else if (path.includes('contact') || hash.includes('contact')) {
        setCurrentRoute('contact');
      } else {
        setCurrentRoute('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

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

      <div className={`app-root ${currentRoute === 'case-studies' ? 'case-studies-route' : ''} ${currentRoute === 'home' ? 'home-route' : ''}`}>
        {/* Sticky Adaptive Header */}
        <Header 
          isDrawerOpen={isDrawerOpen} 
          setIsDrawerOpen={setIsDrawerOpen}
          currentRoute={currentRoute}
          navigate={navigate}
        />

        {/* Fullscreen Navigation Modal Drawer */}
        <NavDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)}
          currentRoute={currentRoute}
          navigate={navigate}
        />

        {/* Main Content Area */}
        <main>
          {currentRoute === 'case-studies' ? (
            <CaseStudiesPage navigate={navigate} />
          ) : currentRoute === 'services' ? (
            <ServicesPage navigate={navigate} />
          ) : currentRoute === 'about' ? (
            <AboutPage navigate={navigate} />
          ) : currentRoute === 'contact' ? (
            <ContactPage navigate={navigate} />
          ) : (
            <>
              {/* Section 01: Hero */}
              <Hero navigate={navigate} />

              {/* Section 02: Our Approach & Services */}
              <Approach navigate={navigate} />

              {/* Section 03: Why Companies Choose VAMIX */}
              <WhyUs navigate={navigate} />

              {/* Section 04: The Fast Track & Cost of Delay Matrix */}
              <HowWeDoIt navigate={navigate} />

              {/* Section 05: Results & Bitfront Success Story */}
              <Results navigate={navigate} />

              {/* Section 06: More Projects Showcase */}
              <MoreProjects navigate={navigate} />


              {/* Section 08 & 09: Milestones & Studio Beliefs */}
              <Timeline navigate={navigate} />

              {/* Section 10: Help & Info FAQ */}
              <Faq navigate={navigate} />

              {/* Section 12: Get In Touch */}
              <Contact navigate={navigate} />
            </>
          )}
        </main>

        {/* Sub-Footer Legal Bar */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
