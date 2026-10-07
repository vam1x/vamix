import React, { useState, useEffect, useCallback } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import ConsultSlot from './components/ConsultSlot';
import Hero from './components/Hero';
import Approach from './components/Approach';
import WhyUs from './components/WhyUs';
import HowWeDoIt from './components/HowWeDoIt';
import Results from './components/Results';
import MoreProjects from './components/MoreProjects';
import Timeline from './components/Timeline';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useSeo from './hooks/useSeo';

const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const ContactPage = React.lazy(() => import('./components/ContactPage'));

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const full = `${path}${hash}${search}`;
    if (full.includes('privacy-policy') || full.includes('privacy')) return 'privacy-policy';
    if (full.includes('terms-of-service') || full.includes('terms')) return 'terms-of-service';
    if (full.includes('case-studies')) return 'case-studies';
    if (path.includes('services') || hash.includes('services') || search.includes('services')) {
      return 'services';
    }
    if (path.includes('about') || hash.includes('about') || search.includes('about')) {
      return 'about';
    }
    if (path.includes('contact') || hash.includes('contact') || search.includes('contact')) {
      return 'contact';
    }
    if (path === '/' || path === '' || hash === '#/' || hash === '' || hash === '#') {
      return 'home';
    }
    return 'not-found';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const navigate = useCallback((route) => {
    const cleanRoute = route.replace(/^\.?\//, '').toLowerCase();
    if (cleanRoute.includes('privacy-policy') || cleanRoute.includes('privacy')) {
      setCurrentRoute('privacy-policy');
      window.history.pushState({ route: 'privacy-policy' }, '', '/privacy-policy');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (cleanRoute.includes('terms-of-service') || cleanRoute.includes('terms')) {
      setCurrentRoute('terms-of-service');
      window.history.pushState({ route: 'terms-of-service' }, '', '/terms-of-service');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (cleanRoute.includes('case-studies')) {
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
    } else if (cleanRoute === '' || cleanRoute === 'home' || cleanRoute === '/') {
      setCurrentRoute((prev) => {
        if (prev !== 'home') {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        return 'home';
      });
      window.history.pushState({ route: 'home' }, '', '/');
    } else if (cleanRoute.includes('404') || cleanRoute === 'not-found') {
      setCurrentRoute('not-found');
      window.history.pushState({ route: 'not-found' }, '', '/404');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setCurrentRoute('not-found');
      window.history.pushState({ route: 'not-found' }, '', '/' + cleanRoute);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setIsDrawerOpen(false);
  }, []);

  // Manage all SEO metadata, canonicals, OG, Twitter, and breadcrumbs dynamically
  useSeo(currentRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('privacy-policy') || hash.includes('privacy-policy') || path.includes('privacy') || hash.includes('privacy')) {
        setCurrentRoute('privacy-policy');
      } else if (path.includes('terms-of-service') || hash.includes('terms-of-service') || path.includes('terms') || hash.includes('terms')) {
        setCurrentRoute('terms-of-service');
      } else if (path.includes('case-studies') || hash.includes('case-studies')) {
        setCurrentRoute('case-studies');
      } else if (path.includes('services') || hash.includes('services')) {
        setCurrentRoute('services');
      } else if (path.includes('about') || hash.includes('about')) {
        setCurrentRoute('about');
      } else if (path.includes('contact') || hash.includes('contact')) {
        setCurrentRoute('contact');
      } else if (path === '/' || path === '' || hash === '#/' || hash === '' || hash === '#') {
        setCurrentRoute('home');
      } else {
        setCurrentRoute('not-found');
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


      <div className={`app-root ${currentRoute === 'case-studies' ? 'case-studies-route' : ''} ${currentRoute === 'home' ? 'home-route' : ''} ${currentRoute === 'not-found' ? 'not-found-route' : ''} ${currentRoute === 'contact' ? 'contact-route' : ''}`}>
        {/* Skip to Main Content Link for Accessibility (SEO & A11y) */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Sticky Adaptive Header */}
        <Header 
          isDrawerOpen={isDrawerOpen} 
          setIsDrawerOpen={setIsDrawerOpen}
          currentRoute={currentRoute}
          navigate={navigate}
        />

        {/* Quick Consult Slot (Flows naturally with page scroll on all routes) */}
        <ConsultSlot navigate={navigate} />

        {/* Fullscreen Navigation Modal Drawer */}
        <NavDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)}
          currentRoute={currentRoute}
          navigate={navigate}
        />

        {/* Main Content Area */}
        <main id="main-content" tabIndex={-1}>
          <React.Suspense fallback={null}>
            {currentRoute === 'privacy-policy' ? (
              <PrivacyPolicyPage navigate={navigate} />
            ) : currentRoute === 'terms-of-service' ? (
              <TermsOfServicePage navigate={navigate} />
            ) : currentRoute === 'case-studies' ? (
              <CaseStudiesPage navigate={navigate} />
            ) : currentRoute === 'services' ? (
              <ServicesPage navigate={navigate} />
            ) : currentRoute === 'about' ? (
              <AboutPage navigate={navigate} />
            ) : currentRoute === 'contact' ? (
              <ContactPage navigate={navigate} />
            ) : currentRoute === 'not-found' ? (
              <NotFoundPage navigate={navigate} />
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

                {/* Section 05: Results & DV Jewellery Designer Success Story */}
                <Results navigate={navigate} />

                {/* Section 06: More Projects Showcase */}
                <MoreProjects navigate={navigate} />


                {/* Section 08 & 09: Milestones & Studio Beliefs */}
                <Timeline navigate={navigate} />

                {/* Section 11: Help & Info FAQ */}
                <Faq navigate={navigate} />

                {/* Section 12: Get In Touch */}
                <Contact navigate={navigate} />
              </>
            )}
          </React.Suspense>
        </main>

        {/* Sub-Footer Legal Bar */}
        <Footer navigate={navigate} />
      </div>
      {typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' && <Analytics />}
    </ReactLenis>
  );
}
