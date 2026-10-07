import { useEffect } from 'react';

const BASE_URL = 'https://vamix.in';

const SEO_MAP = {
  home: {
    title: 'Custom Website Development & Digital Tech Solutions | VAMIX',
    description: 'Custom websites, scalable digital systems, and full-stack tech solutions for startups and businesses. One team to engineer and launch your vision.',
    canonical: `${BASE_URL}/`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX - Design That Converts, Code That Ships',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` }
    ]
  },
  about: {
    title: 'About VAMIX | Digital Product Studio in Surat - 3+ Years Experience',
    description: 'Meet VAMIX, a digital product studio in Surat, India. We partner with founders and enterprise teams to design and engineer intuitive digital products.',
    canonical: `${BASE_URL}/about`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX Studio - Digital Product Studio in Surat',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: 'About', item: `${BASE_URL}/about` }
    ]
  },
  services: {
    title: 'Services: Digital Product Design & Engineering | VAMIX',
    description: 'Explore VAMIX services across Product Discovery, UI/UX Design Systems, AI Product Engineering, Web & Mobile Applications, and Internal Tools. Designed and built under one roof.',
    canonical: `${BASE_URL}/services`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX Services - Digital Product Design & Engineering',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: 'Services', item: `${BASE_URL}/services` }
    ]
  },
  'case-studies': {
    title: 'Case Studies & Client Results | VAMIX Product Studio',
    description: 'Explore how VAMIX designs and builds high-performing digital products for DV Jewellery Designer, Fintecc, SEOGram, Konsept, and more.',
    canonical: `${BASE_URL}/case-studies`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX Case Studies - Client Success Stories',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: 'Case Studies', item: `${BASE_URL}/case-studies` }
    ]
  },
  contact: {
    title: 'Contact VAMIX | Schedule a Free 30-Min Product Consultation',
    description: 'Reach out to VAMIX to start your next product. Schedule a free 30-minute discovery call with our team with zero sales pressure.',
    canonical: `${BASE_URL}/contact`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX Contact - Free Product Consultation',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: 'Contact', item: `${BASE_URL}/contact` }
    ]
  },
  'privacy-policy': {
    title: 'Privacy Policy | VAMIX Digital Product Studio',
    description: 'Read the Privacy Policy for VAMIX Digital Product Studio. Learn how your data is collected, protected, and handled.',
    canonical: `${BASE_URL}/privacy-policy`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX Privacy Policy',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: 'Privacy Policy', item: `${BASE_URL}/privacy-policy` }
    ]
  },
  'terms-of-service': {
    title: 'Terms of Service | VAMIX Digital Product Studio',
    description: 'Review the terms and conditions governing project engagement, design services, and development with VAMIX.',
    canonical: `${BASE_URL}/terms-of-service`,
    robots: 'index, follow, max-image-preview:large',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX Terms of Service',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: 'Terms of Service', item: `${BASE_URL}/terms-of-service` }
    ]
  },
  'not-found': {
    title: 'Page Not Found (404) | VAMIX Digital Product Studio',
    description: 'The page you requested could not be found. Navigate back to the VAMIX homepage.',
    canonical: `${BASE_URL}/404`,
    robots: 'noindex, nofollow',
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogImageAlt: 'VAMIX - Page Not Found',
    breadcrumb: [
      { name: 'Home', item: `${BASE_URL}/` },
      { name: '404', item: `${BASE_URL}/404` }
    ]
  }
};

function updateMetaTag(attribute, value, content) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateCanonical(url) {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function updateHreflang() {
  if (typeof document === 'undefined') return;
  // Ensure hreflang tags exist
  let enLink = document.querySelector('link[rel="alternate"][hreflang="en"]');
  if (!enLink) {
    enLink = document.createElement('link');
    enLink.setAttribute('rel', 'alternate');
    enLink.setAttribute('hreflang', 'en');
    document.head.appendChild(enLink);
  }
  enLink.setAttribute('href', BASE_URL + '/');

  let defaultLink = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
  if (!defaultLink) {
    defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    document.head.appendChild(defaultLink);
  }
  defaultLink.setAttribute('href', BASE_URL + '/');
}

function updateBreadcrumbJsonLd(items) {
  if (typeof document === 'undefined') return;
  let script = document.getElementById('vamix-breadcrumb-schema');
  if (!script) {
    script = document.createElement('script');
    script.id = 'vamix-breadcrumb-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.item
    }))
  };
  script.textContent = JSON.stringify(schema);
}

function removeBreadcrumbJsonLd() {
  if (typeof document === 'undefined') return;
  const script = document.getElementById('vamix-breadcrumb-schema');
  if (script) script.remove();
}

export function useSeo(currentRoute) {
  useEffect(() => {
    const config = SEO_MAP[currentRoute] || SEO_MAP.home;

    // Document Title
    document.title = config.title;

    // Meta Description
    updateMetaTag('name', 'description', config.description);

    // Robots Directive
    updateMetaTag('name', 'robots', config.robots);

    // Canonical Tag
    updateCanonical(config.canonical);

    // Hreflang
    updateHreflang();

    // Open Graph Tags
    updateMetaTag('property', 'og:title', config.title);
    updateMetaTag('property', 'og:description', config.description);
    updateMetaTag('property', 'og:url', config.canonical);
    updateMetaTag('property', 'og:image', config.ogImage);
    updateMetaTag('property', 'og:image:alt', config.ogImageAlt);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:site_name', 'VAMIX');
    updateMetaTag('property', 'og:locale', 'en_US');

    // Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', config.title);
    updateMetaTag('name', 'twitter:description', config.description);
    updateMetaTag('name', 'twitter:url', config.canonical);
    updateMetaTag('name', 'twitter:image', config.ogImage);
    updateMetaTag('name', 'twitter:image:alt', config.ogImageAlt);
    updateMetaTag('name', 'twitter:site', '@vamixstudio');
    updateMetaTag('name', 'twitter:creator', '@vamixstudio');

    // Schema.org microdata fallback
    updateMetaTag('itemprop', 'name', config.title);
    updateMetaTag('itemprop', 'description', config.description);
    updateMetaTag('itemprop', 'image', config.ogImage);

    // Breadcrumb Schema
    if (config.breadcrumb) {
      updateBreadcrumbJsonLd(config.breadcrumb);
    } else {
      removeBreadcrumbJsonLd();
    }

    // Cleanup on route change
    return () => {
      // Keep canonical, meta tags for SSR compatibility
    };
  }, [currentRoute]);
}

export default useSeo;