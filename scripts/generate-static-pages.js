import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distHtmlPath = path.join(rootDir, 'dist', 'index.html');

if (!fs.existsSync(distHtmlPath)) {
  console.error('dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(distHtmlPath, 'utf-8');

// Load structured project data
const caseStudies = JSON.parse(
  fs.readFileSync(path.join(rootDir, 'src', 'pages', 'caseStudiesData.json'), 'utf-8')
);

// Services definitions
const designServices = [
  {
    id: 'product-discovery',
    title: 'Product Discovery & Design',
    desc: 'We find what to build before you spend on building it. Research and MVP planning rank the features users want, then the same team turns them into interfaces, flows, and prototypes people understand on first use.',
    tags: '#DISCOVERY #UIUXDESIGN #PROTOTYPING'
  },
  {
    id: 'design-system',
    title: 'Design System',
    desc: 'We build reusable components, tokens and patterns that stay in step across design and code. Clear usage guidelines help designers and engineers create consistent screens as your product grows.',
    tags: '#COMPONENTLIBRARY #TOKENS #PATTERNS'
  },
  {
    id: 'web-mobile-apps-design',
    title: 'Web & Mobile Applications',
    desc: 'We design web and mobile apps that feel obvious to use. Every screen, state, and gesture is worked out before a line of code, so the build inherits a product that already makes sense.',
    tags: '#WEBAPPS #MOBILEAPPS #RESPONSIVE'
  },
  {
    id: 'design-ops',
    title: 'Design Ops',
    desc: 'We organise how design work gets done: clear briefs, shared priorities, useful reviews and smooth handoffs. Your team knows who owns each decision and how to move work from idea to delivery.',
    tags: '#WORKFLOWS #COLLABORATION #HANDOFFS'
  },
  {
    id: 'ux-strategy',
    title: 'UX Strategy',
    desc: 'We turn business goals into a product direction you can act on. Audits, user research, and journey mapping decide what to fix, what to build next, and what to leave alone.',
    tags: '#RESEARCH #AUDITS #JOURNEYMAPPING'
  }
];

const devServices = [
  {
    id: 'ai-products',
    title: 'AI Products',
    desc: 'We build products that run on AI: copilots, assistants, and search that understands your data. It all ships as one piece, designed and engineered by one team.',
    tags: '#LLM #RAG #VECTORDB'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    desc: 'We take repetitive, manual work off your team and hand it to AI. Document processing, support triage, data entry, and reporting run on their own, with people kept in the loop where judgment matters.',
    tags: '#AUTOMATION #WORKFLOWS #INTEGRATIONS'
  },
  {
    id: 'ai-harness',
    title: 'AI Harness',
    desc: 'We build the agentic systems behind serious AI work: custom agents, tool and MCP integrations, memory, and the control loop that keeps them reliable. The engine room for teams that need AI to do real tasks, not just chat.',
    tags: '#AGENTS #MCP #ORCHESTRATION'
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    desc: 'We build web apps that stay fast and stable under real load, from dashboards to full platforms. The same team that designed the product writes the code, so nothing gets lost between mockup and launch.',
    tags: '#REACT #NODEJS #POSTGRESQL'
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    desc: 'We engineer iOS and Android apps with high touch responsiveness, offline-first architectures, and smooth hardware integrations.',
    tags: '#REACTNATIVE #IOS #ANDROID'
  },
  {
    id: 'websites-landing-pages',
    title: 'Websites & Landing Pages',
    desc: 'We engineer bespoke marketing websites and high-converting landing pages that blend editorial design with sub-second performance.',
    tags: '#JAMSTACK #PERFORMANCE #SEO'
  },
  {
    id: 'internal-tools-automation',
    title: 'Internal Tools & Automation',
    desc: 'We build custom admin dashboards, internal CRUD portals, and back-office automations that replace sprawling spreadsheets.',
    tags: '#DASHBOARDS #INTERNALTOOLS #APIS'
  }
];

// Helper to replace metadata in base HTML
function injectPageData(base, config) {
  let html = base;

  // Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${config.title}</title>`);

  // Meta description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${config.description}">`
  );

  // Canonical
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${config.canonical}">`
  );

  // Open Graph
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${config.title}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${config.description}">`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${config.canonical}">`
  );

  // Twitter
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${config.title}">`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${config.description}">`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:url" content="${config.canonical}">`
  );

  // Inject JSON-LD schema before </head>
  if (config.schema) {
    const schemaTag = `\n  <script type="application/ld+json" id="${config.slug}-schema">\n${JSON.stringify(
      config.schema,
      null,
      2
    )}\n  </script>\n</head>`;
    html = html.replace(/<\/head>/i, schemaTag);
  }

  // Inject crawlable body inside <noscript> so crawlers can index it, while JS-enabled browsers never display raw unstyled HTML
  html = html.replace(
    /<div id=["']root["']>[\s\S]*?<\/div>(\s*<noscript>[\s\S]*?<\/noscript>)?/i,
    `<div id="root"></div>\n  <noscript>\n${config.bodyHtml}\n  </noscript>`
  );

  return html;
}

function writePage(slug, htmlContent) {
  const publicDir = path.join(rootDir, 'public', slug);
  const distDir = path.join(rootDir, 'dist', slug);

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf-8');
  console.log(`Generated static page: /${slug}`);
}

// =============================================================================
// 1. SERVICES PAGE
// =============================================================================
const servicesBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content" class="services-page-main">
    <div class="services-page-container">
      <section class="services-hero-section" aria-labelledby="services-hero-title">
        <div class="services-hero-content">
          <div class="services-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            <span>WHAT WE DO</span>
          </div>
          <h1 id="services-hero-title">SERVICES: DIGITAL PRODUCT DESIGN &amp; ENGINEERING</h1>
          <p class="services-hero-lead">
            We partner with ambitious startups and established companies to design, engineer, and scale high-performing digital products under one roof.
          </p>
          <div class="services-quick-links" aria-label="Quick jump to service categories">
            <a href="#design" class="services-anchor-pill">Product Design (${designServices.length})</a>
            <a href="#development" class="services-anchor-pill">Engineering &amp; AI (${devServices.length})</a>
            <a href="/case-studies" class="services-anchor-pill">View Case Studies ↗</a>
          </div>
        </div>
      </section>

      <section class="services-category-section" id="design" aria-labelledby="design-section-title">
        <div class="services-category-header">
          <span class="category-index">01</span>
          <h2 id="design-section-title">PRODUCT DESIGN &amp; UI/UX</h2>
          <p class="category-intro">From discovery research to comprehensive design systems that align teams and accelerate delivery.</p>
        </div>
        <div class="services-list" role="list">
          ${designServices
            .map(
              (svc) => `
            <article class="service-item" id="${svc.id}" role="listitem">
              <h3 class="service-title">${svc.title}</h3>
              <p class="service-description">${svc.desc}</p>
              <div class="service-tags"><span class="service-tag">${svc.tags}</span></div>
            </article>`
            )
            .join('')}
        </div>
      </section>

      <section class="services-category-section" id="development" aria-labelledby="dev-section-title">
        <div class="services-category-header">
          <span class="category-index">02</span>
          <h2 id="dev-section-title">FULL-STACK ENGINEERING &amp; AI SYSTEMS</h2>
          <p class="category-intro">Robust architectures, custom AI copilots, mobile applications, and resilient web platforms.</p>
        </div>
        <div class="services-list" role="list">
          ${devServices
            .map(
              (svc) => `
            <article class="service-item" id="${svc.id}" role="listitem">
              <h3 class="service-title">${svc.title}</h3>
              <p class="service-description">${svc.desc}</p>
              <div class="service-tags"><span class="service-tag">${svc.tags}</span></div>
            </article>`
            )
            .join('')}
        </div>
      </section>

      <section class="services-cta-section" aria-labelledby="services-cta-title">
        <h2 id="services-cta-title">READY TO ARCHITECT YOUR PRODUCT?</h2>
        <p>Schedule a 30-minute discovery consultation with our senior designers and engineers.</p>
        <div class="services-cta-actions">
          <a href="/contact" class="btn-primary">Schedule Consultation ↗</a>
          <a href="/case-studies" class="btn-secondary">Explore Client Case Studies</a>
        </div>
      </section>
    </div>
  </main>
`;

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://vamix.in/services#webpage',
      url: 'https://vamix.in/services',
      name: 'Services: Digital Product Design & Engineering | VAMIX',
      description: 'Explore VAMIX services across Product Discovery, UI/UX Design Systems, AI Product Engineering, Web & Mobile Applications, and Internal Tools.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamix.in/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vamix.in/services' }
        ]
      }
    },
    {
      '@type': 'ItemList',
      name: 'VAMIX Core Capabilities',
      itemListElement: [...designServices, ...devServices].map((svc, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Service',
          name: svc.title,
          description: svc.desc,
          provider: { '@id': 'https://vamix.in/#organization' },
          areaServed: 'Worldwide'
        }
      }))
    }
  ]
};

writePage('services', injectPageData(baseHtml, {
  slug: 'services',
  title: 'Services: Digital Product Design & Engineering | VAMIX',
  description: 'Explore VAMIX services across Product Discovery, UI/UX Design Systems, AI Product Engineering, Web & Mobile Applications, and Internal Tools. Designed and built under one roof.',
  canonical: 'https://vamix.in/services',
  schema: servicesSchema,
  bodyHtml: servicesBodyHtml
}));

// =============================================================================
// 2. CASE STUDIES PAGE
// =============================================================================
const caseStudiesBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content" class="case-studies-page">
    <div class="cs-content-grid">
      <section class="cs-hero-section" aria-labelledby="cs-main-title">
        <div class="cs-tag-col">
          <div class="cs-pill-badge">
            <span class="cs-badge-dot" aria-hidden="true"></span>
            <span>CLIENT STORIES</span>
          </div>
        </div>
        <div class="cs-heading-col">
          <h1 id="cs-main-title" class="cs-main-title">CASE STUDIES: DIGITAL PRODUCTS ENGINEERED TO SCALE</h1>
          <p class="cs-hero-desc">Explore how VAMIX designs and builds high-performing digital products for startups and enterprises across luxury retail, fintech, marketing, and design.</p>
        </div>
      </section>

      <section class="cs-projects-section" aria-label="Selected Client Projects">
        <div class="cs-projects-list" role="list">
          ${caseStudies
            .map(
              (p, idx) => `
            <article class="cs-project-row is-active" id="project-${idx}" role="listitem">
              <h2 class="cs-row-title-text">${p.title} &mdash; <span class="cs-cat-text">${p.industry || p.category}</span></h2>
              <div class="cs-row-body">
                <p class="cs-row-desc">${p.desc}</p>
                <div class="cs-project-details">
                  <div class="cs-detail-block">
                    <strong class="cs-detail-label">The Challenge:</strong>
                    <p>${p.challenge}</p>
                  </div>
                  <div class="cs-detail-block">
                    <strong class="cs-detail-label">Our Approach:</strong>
                    <p>${p.approach}</p>
                  </div>
                  <div class="cs-detail-block">
                    <strong class="cs-detail-label">Technology &amp; Stack:</strong>
                    <p>${Array.isArray(p.technology) ? p.technology.join(', ') : p.technology}</p>
                  </div>
                  <div class="cs-detail-block">
                    <strong class="cs-detail-label">Key Outcomes:</strong>
                    <p>${p.results}</p>
                  </div>
                  <div class="cs-detail-block">
                    <strong class="cs-detail-label">Related Service:</strong>
                    <a href="${p.serviceLink || '/services'}" class="cs-service-link">${p.serviceName || 'Engineering & Design'} ↗</a>
                  </div>
                </div>
                <div class="cs-row-actions">
                  <a href="${p.href}" target="_blank" rel="noopener noreferrer" class="cs-read-more-btn">View Live Project ↗</a>
                </div>
              </div>
            </article>`
            )
            .join('')}
        </div>
      </section>

      <section class="products-bridge page-section" aria-labelledby="cs-services-bridge-title">
        <h2 id="cs-services-bridge-title">READY TO BUILD? EXPLORE OUR COMPLETE SERVICE OFFERINGS.</h2>
        <a class="bridge-link" href="/services">VIEW ALL SERVICES ↗</a>
      </section>
    </div>
  </main>
`;

const caseStudiesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://vamix.in/case-studies#webpage',
      url: 'https://vamix.in/case-studies',
      name: 'Case Studies & Client Results | VAMIX Product Studio',
      description: 'Explore how VAMIX designs and builds high-performing digital products for DV Jewellery Designer, Fintecc, SEOGram, Konsept, and more.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamix.in/' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://vamix.in/case-studies' }
        ]
      }
    },
    {
      '@type': 'ItemList',
      name: 'VAMIX Selected Client Projects',
      itemListElement: caseStudies.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          headline: `${p.title} - ${p.category}`,
          description: p.desc,
          genre: p.industry || p.category,
          url: p.href,
          image: `https://vamix.in${p.images[1]}`,
          creator: { '@id': 'https://vamix.in/#organization' },
          publisher: { '@id': 'https://vamix.in/#organization' }
        }
      }))
    }
  ]
};

writePage('case-studies', injectPageData(baseHtml, {
  slug: 'case-studies',
  title: 'Case Studies & Client Results | VAMIX Product Studio',
  description: 'Explore how VAMIX designs and builds high-performing digital products for DV Jewellery Designer, Fintecc, SEOGram, Konsept, and more.',
  canonical: 'https://vamix.in/case-studies',
  schema: caseStudiesSchema,
  bodyHtml: caseStudiesBodyHtml
}));

// =============================================================================
// 3. ABOUT PAGE
// =============================================================================
const aboutBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content" class="about-page-wrapper">
    <section class="about-heading-section" id="about-heading" aria-labelledby="about-main-title">
      <div class="about-heading-container">
        <div class="about-side-badge">
          <span class="years-num">3+</span>
          <p class="years-label">YEARS OF EXCELLENCE</p>
        </div>
        <div class="about-heading-content">
          <h1 id="about-main-title" class="about-hero-title">WHO WE ARE: BUILDING DIGITAL PRODUCTS THAT SCALE</h1>
          <p class="about-hero-subhead">
            We don&rsquo;t chase trends or add unnecessary features. We focus on what users need, what businesses require, and what actually ships.
          </p>
        </div>
      </div>
    </section>

    <section class="about-stats-section" aria-labelledby="about-stats-title">
      <h2 id="about-stats-title" class="sr-only">Studio Facts &amp; Heritage</h2>
      <div class="about-stats-container">
        <p>VAMIX is an independent digital product studio based in Surat, Gujarat, India. Founded in 2023, our dedicated team of 10 senior designers and software engineers collaborates directly with founders, product teams, and scaling enterprises across India, North America, the UK, and worldwide.</p>
        <div class="stats-grid">
          <div class="stat-item"><strong>3+ Years</strong><span>Active studio operation</span></div>
          <div class="stat-item"><strong>10 Members</strong><span>Dedicated multidisciplinary team</span></div>
          <div class="stat-item"><strong>21+ Projects</strong><span>Shipped digital products</span></div>
          <div class="stat-item"><strong>Surat, India</strong><span>Headquarters &amp; studio base</span></div>
        </div>
      </div>
    </section>

    <section class="about-philosophy-section" aria-labelledby="about-philosophy-title">
      <h2 id="about-philosophy-title">OUR CORE DISCIPLINES</h2>
      <p>We work across the entire product lifecycle without outsourcing or handoff friction:</p>
      <ul>
        <li><a href="/services#design"><strong>Product Discovery &amp; UI/UX Design:</strong></a> User journey research, MVP scoping, interface design, interactive prototypes, and scalable design systems.</li>
        <li><a href="/services#development"><strong>Full-Stack Web &amp; Mobile Engineering:</strong></a> High-performance React web applications, native-grade mobile apps, internal tools, and robust backend APIs.</li>
        <li><a href="/services#development"><strong>AI Product Integration:</strong></a> Custom copilots, RAG architectures, and agentic workflows engineered for practical business operations.</li>
      </ul>
      <p>Explore our recent work in our <a href="/case-studies">client case studies</a>.</p>
    </section>

    <section class="about-cta-section" aria-labelledby="about-cta-title">
      <h2 id="about-cta-title">LOOKING FOR A DEDICATED PRODUCT PARTNER?</h2>
      <p>Schedule a free 30-minute consultation directly with our team.</p>
      <a href="/contact" class="btn-primary">Get in Touch ↗</a>
    </section>
  </main>
`;

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://vamix.in/about#webpage',
      url: 'https://vamix.in/about',
      name: 'About VAMIX | Digital Product Studio in Surat - 3+ Years Experience',
      description: 'Meet VAMIX, a digital product studio in Surat, India. We partner with founders and enterprise teams to design and engineer intuitive digital products.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamix.in/' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://vamix.in/about' }
        ]
      },
      mainEntity: {
        '@type': 'Organization',
        '@id': 'https://vamix.in/#organization',
        name: 'VAMIX',
        legalName: 'VAMIX Digital Product Studio',
        url: 'https://vamix.in/',
        email: 'vamixlabs@gmail.com',
        telephone: '+916359198825',
        foundingDate: '2023',
        numberOfEmployees: 10,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Surat',
          addressRegion: 'Gujarat',
          postalCode: '395006',
          addressCountry: 'IN'
        },
        knowsAbout: [
          'Product Design',
          'UI/UX Design',
          'Full-Stack Development',
          'Mobile App Development',
          'AI Product Development',
          'Design Systems'
        ],
        areaServed: ['India', 'United States', 'United Kingdom', 'Worldwide']
      }
    }
  ]
};

writePage('about', injectPageData(baseHtml, {
  slug: 'about',
  title: 'About VAMIX | Digital Product Studio in Surat - 3+ Years Experience',
  description: 'Meet VAMIX, a digital product studio in Surat, India. We partner with founders and enterprise teams to design and engineer intuitive digital products.',
  canonical: 'https://vamix.in/about',
  schema: aboutSchema,
  bodyHtml: aboutBodyHtml
}));

// =============================================================================
// 4. CONTACT PAGE
// =============================================================================
const contactBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content" class="contact-page-wrapper">
    <section class="contact-hero" aria-labelledby="contact-main-title">
      <div class="contact-hero-inner">
        <div class="contact-marker">
          <span class="contact-badge__dot"></span>
          <span>START A PROJECT</span>
        </div>
        <h1 id="contact-main-title">GET IN TOUCH: START YOUR NEXT DIGITAL PRODUCT</h1>
        <p class="contact-hero-lead">
          Schedule a free 30-minute discovery consultation. Zero sales pitch, just practical assessment of your product timeline, architecture, and scope.
        </p>
      </div>
    </section>

    <section class="contact-details-section" aria-labelledby="contact-details-title">
      <h2 id="contact-details-title">DIRECT STUDIO CONTACT</h2>
      <div class="contact-info-grid">
        <div class="contact-item">
          <strong>Email Address:</strong>
          <p><a href="mailto:vamixlabs@gmail.com">vamixlabs@gmail.com</a></p>
        </div>
        <div class="contact-item">
          <strong>Phone &amp; WhatsApp:</strong>
          <p><a href="tel:+916359198825">+91 63591 98825</a></p>
        </div>
        <div class="contact-item">
          <strong>Studio Location:</strong>
          <p>Surat, Gujarat, India (PIN: 395006)</p>
        </div>
        <div class="contact-item">
          <strong>Working Hours:</strong>
          <p>Monday &ndash; Friday, 09:00 &ndash; 18:00 IST (UTC+05:30)</p>
        </div>
        <div class="contact-item">
          <strong>Official Profiles:</strong>
          <p>
            <a href="https://www.linkedin.com/company/vamix" target="_blank" rel="noopener noreferrer">LinkedIn</a> &middot; 
            <a href="https://www.instagram.com/vamix" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
    </section>

    <section class="contact-form-notice" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title">PROJECT INQUIRY FORM</h2>
      <p>Use our interactive contact form on the live site or email us directly at <a href="mailto:vamixlabs@gmail.com">vamixlabs@gmail.com</a> with your project overview, timeline, and budget.</p>
    </section>
  </main>
`;

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://vamix.in/contact#webpage',
      url: 'https://vamix.in/contact',
      name: 'Contact VAMIX | Schedule a Free 30-Min Product Consultation',
      description: 'Reach out to VAMIX to start your next product. Schedule a free 30-minute discovery call with our team with zero sales pressure.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamix.in/' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://vamix.in/contact' }
        ]
      },
      mainEntity: {
        '@type': 'Organization',
        '@id': 'https://vamix.in/#organization',
        name: 'VAMIX',
        url: 'https://vamix.in/',
        email: 'vamixlabs@gmail.com',
        telephone: '+916359198825',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Surat',
          addressRegion: 'Gujarat',
          postalCode: '395006',
          addressCountry: 'IN'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+916359198825',
            email: 'vamixlabs@gmail.com',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi', 'Gujarati'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00'
            }
          }
        ]
      }
    }
  ]
};

writePage('contact', injectPageData(baseHtml, {
  slug: 'contact',
  title: 'Contact VAMIX | Schedule a Free 30-Min Product Consultation',
  description: 'Reach out to VAMIX to start your next product. Schedule a free 30-minute discovery call with our team with zero sales pressure.',
  canonical: 'https://vamix.in/contact',
  schema: contactSchema,
  bodyHtml: contactBodyHtml
}));



// =============================================================================
// 6. PRIVACY POLICY PAGE
// =============================================================================
const privacyPolicyBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
    </div>
  </header>

  <main id="main-content" class="legal-page">
    <section class="legal-page__text" aria-labelledby="legal-page-title">
      <div class="legal-page__container">
        <div class="legal-page__date">
          <div class="legal-date-badge">
            <span class="legal-date-dot" aria-hidden="true"></span>
            <time dateTime="2026-09-22">SEP 22, 2026</time>
          </div>
        </div>

        <div class="legal-page__items">
          <h1 id="legal-page-title" class="legal-page-title">Privacy policy</h1>

          <div class="legal-page__content">
            <div class="legal-section-block">
              <h2 class="legal-section-title">1. WHO WE ARE AND WHAT THIS POLICY COVERS</h2>
              <p class="legal-paragraph">
                VAMIX (&ldquo;VAMIX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a full-stack digital product design and development studio based in Surat, Gujarat, India.
              </p>
              <p class="legal-paragraph">
                This policy covers personal information handled through the VAMIX website, including its enquiry and contact forms. It explains what information we collect, why we collect it, how it is handled, and your rights concerning your personal data.
              </p>
              <p class="legal-paragraph">
                For any privacy questions or requests, please email <a href="mailto:vamixlabs@gmail.com" class="legal-link">vamixlabs@gmail.com</a> or call us at <a href="tel:+916359198825" class="legal-link">+91 63591 98825</a>.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">2. INFORMATION YOU GIVE US</h2>
              <p class="legal-paragraph">
                When you use our enquiry or contact form, we receive your name and email address. The interactive contact workflow may also collect a company name, information about your product challenges, timeline, and an estimated project budget that you choose to provide.
              </p>
              <p class="legal-paragraph">
                When you contact us regarding potential collaboration or hiring, we receive your name, email address, portfolio or project links, and any introduction or brief you provide. We treat all client concepts, intellectual property, and project briefs under strict professional confidentiality and non-disclosure standards.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">3. WEBSITE USAGE AND TECHNICAL INFORMATION</h2>
              <p class="legal-paragraph">
                We collect anonymized telemetry and website analytics to understand visits and interactions with our site. Default collection can include pages viewed, session duration, interaction depth, approximate geographic location, and device/browser technical specifications.
              </p>
              <p class="legal-paragraph">
                Analytics systems use first-party cookies, including a pseudonymous client identifier, to distinguish individual sessions. IP addresses are utilized during initial network collection for packet routing and approximate location, and are anonymized or discarded before being permanently stored.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">4. PROVIDERS WE USE</h2>
              <ul class="legal-list">
                <li class="legal-list-item"><strong>Hosting &amp; Edge Delivery:</strong> High-performance cloud hosting provides continuous global uptime, SSL/TLS certificate termination, and edge caching.</li>
                <li class="legal-list-item"><strong>Form &amp; Notification Infrastructure:</strong> Form submissions are securely parsed and relayed via encrypted webhooks to our internal studio management systems.</li>
                <li class="legal-list-item"><strong>Spam &amp; Bot Mitigation:</strong> Automated bot-checking mechanisms verify user interaction signals to prevent malicious spam flooding without compromising human experience.</li>
                <li class="legal-list-item"><strong>Analytics:</strong> Aggregated analytical platforms monitor site speed, engagement metrics, and page conversion flows.</li>
              </ul>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">5. HOW LONG WE KEEP INFORMATION</h2>
              <p class="legal-paragraph">
                Our standard retention policy is to remove routine enquiry emails from our active inbox 12 months after the last communication regarding that enquiry, unless an active client agreement is executed.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">6. YOUR REQUESTS</h2>
              <p class="legal-paragraph">
                You may at any time email <a href="mailto:vamixlabs@gmail.com" class="legal-link">vamixlabs@gmail.com</a> to inquire what personal data you have shared with us, request corrections, or request deletion of your information from our communications channels.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">7. SECURITY AND EXTERNAL LINKS</h2>
              <p class="legal-paragraph">
                The VAMIX site operates strictly over HTTPS with end-to-end transport layer encryption. While we apply modern industry best practices across our digital infrastructure, no internet transmission is ever completely immune to threats.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">8. CHANGES TO THIS POLICY</h2>
              <p class="legal-paragraph">
                We may revise this Privacy Policy periodically as our service offerings evolve or regulatory mandates change. The revised version and updated timestamp will always be published on this page.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">9. CONTACT</h2>
              <div class="legal-contact-card">
                <div class="legal-contact-name">VAMIX DIGITAL PRODUCT STUDIO</div>
                <div class="legal-contact-detail">Surat, Gujarat, India</div>
                <div class="legal-contact-detail">Phone: <a href="tel:+916359198825">+91 63591 98825</a></div>
                <div class="legal-contact-detail">Email: <a href="mailto:vamixlabs@gmail.com">vamixlabs@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

const privacyPolicySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://vamix.in/privacy-policy#webpage',
      url: 'https://vamix.in/privacy-policy',
      name: 'Privacy Policy | VAMIX Digital Product Studio',
      description: 'Read the Privacy Policy for VAMIX Digital Product Studio. Learn how your data is collected, protected, and handled.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamix.in/' },
          { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://vamix.in/privacy-policy' }
        ]
      },
      about: {
        '@id': 'https://vamix.in/#organization'
      }
    }
  ]
};

writePage('privacy-policy', injectPageData(baseHtml, {
  slug: 'privacy-policy',
  title: 'Privacy Policy | VAMIX Digital Product Studio',
  description: 'Read the Privacy Policy for VAMIX Digital Product Studio. Learn how your data is collected, protected, and handled.',
  canonical: 'https://vamix.in/privacy-policy',
  schema: privacyPolicySchema,
  bodyHtml: privacyPolicyBodyHtml
}));

// =============================================================================
// 7. TERMS OF SERVICE PAGE
// =============================================================================
const termsOfServiceBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
    </div>
  </header>

  <main id="main-content" class="legal-page">
    <section class="legal-page__text" aria-labelledby="legal-page-title">
      <div class="legal-page__container">
        <div class="legal-page__date">
          <div class="legal-date-badge">
            <span class="legal-date-dot" aria-hidden="true"></span>
            <time dateTime="2025-09-17">SEP 17, 2025</time>
          </div>
        </div>

        <div class="legal-page__items">
          <h1 id="legal-page-title" class="legal-page-title">Terms of service</h1>

          <div class="legal-page__content">
            <div class="legal-section-block">
              <h2 class="legal-section-title">1. USE OF THE SITE</h2>
              <p class="legal-paragraph">
                Welcome to VAMIX. By accessing or using our website, you agree to comply with and be bound by these Terms of Service. You agree to use the Site only for lawful purposes and in compliance with these Terms. You may not:
              </p>
              <ul class="legal-list">
                <li class="legal-list-item">Violate any applicable local, national, or international laws or regulations</li>
                <li class="legal-list-item">Engage in unauthorized access, automated data extraction, web crawling, scraping, or harvesting of our digital assets</li>
                <li class="legal-list-item">Disrupt, impair, or interfere with the Site's security, server infrastructure, or overall technical functionality</li>
                <li class="legal-list-item">Impersonate any person, business entity, or falsely claim affiliation with VAMIX or its partners</li>
              </ul>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">2. INTELLECTUAL PROPERTY</h2>
              <p class="legal-paragraph">
                All content published on this Site—including typography, graphic elements, UX blueprints, code showcases, video animations, brand identities, and layout designs—is the proprietary intellectual property of VAMIX and is protected under applicable copyright and trademark laws.
              </p>
              <p class="legal-paragraph">
                For formal client partnerships, all project deliverables, software architecture, UI kits, design systems, and source code generated during the engagement are transferred 100% to the client upon full milestone sign-off and payment completion, as stipulated in our Master Services Agreement.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">3. SERVICE AVAILABILITY</h2>
              <p class="legal-paragraph">
                We strive to maintain continuous uptime and exceptional performance across our website. However, we do not guarantee that the site will always be available without disruption or error-free. We reserve the right to revise, update, suspend, or discontinue any feature or content at our discretion without prior notice.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">4. LIMITATION OF LIABILITY</h2>
              <p class="legal-paragraph">
                To the fullest extent permitted by applicable law, VAMIX and its founders, employees, and affiliates will not be liable for any direct, indirect, incidental, or consequential damages arising from your access to or use of the Site.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">5. THIRD-PARTY SERVICES</h2>
              <p class="legal-paragraph">
                Our Site may feature case studies containing links to external third-party applications, client production domains, or design references. We do not endorse or take responsibility for the terms, security practices, or content of any third-party websites.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">6. INDEMNIFICATION</h2>
              <p class="legal-paragraph">
                You agree to defend, indemnify, and hold harmless VAMIX, its directors, officers, employees, and agents from any claims, liabilities, costs, damages, or expenses resulting from your breach of these Terms or misuse of the Site.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">7. GOVERNING LAW</h2>
              <p class="legal-paragraph">
                These Terms of Service are governed by and construed in accordance with the laws of India. Any dispute or claim arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts of Surat, Gujarat, India.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">8. CHANGES TO THESE TERMS</h2>
              <p class="legal-paragraph">
                We reserve the right to amend or replace these Terms at any time. When modifications are made, the revised date at the top of this page will be updated. Your continued use of the Site following any changes indicates your agreement to the new Terms.
              </p>
            </div>

            <div class="legal-section-block">
              <h2 class="legal-section-title">9. CONTACT US</h2>
              <div class="legal-contact-card">
                <div class="legal-contact-name">VAMIX DIGITAL PRODUCT STUDIO</div>
                <div class="legal-contact-detail">Surat, Gujarat, India</div>
                <div class="legal-contact-detail">Phone: <a href="tel:+916359198825">+91 63591 98825</a></div>
                <div class="legal-contact-detail">Email: <a href="mailto:vamixlabs@gmail.com">vamixlabs@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`;

const termsOfServiceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://vamix.in/terms-of-service#webpage',
      url: 'https://vamix.in/terms-of-service',
      name: 'Terms of Service | VAMIX Digital Product Studio',
      description: 'Review the terms and conditions governing project engagement, design services, and development with VAMIX.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamix.in/' },
          { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://vamix.in/terms-of-service' }
        ]
      },
      about: {
        '@id': 'https://vamix.in/#organization'
      }
    }
  ]
};

writePage('terms-of-service', injectPageData(baseHtml, {
  slug: 'terms-of-service',
  title: 'Terms of Service | VAMIX Digital Product Studio',
  description: 'Review the terms and conditions governing project engagement, design services, and development with VAMIX.',
  canonical: 'https://vamix.in/terms-of-service',
  schema: termsOfServiceSchema,
  bodyHtml: termsOfServiceBodyHtml
}));

// =============================================================================
// 8. HOMEPAGE ROOT PRE-RENDERING
// =============================================================================
const homeBodyHtml = `
  <header class="site-header" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link" aria-label="VAMIX Home">VAMIX</a>
      </div>
      <nav class="sr-only" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <section class="hero-section" id="hero" aria-labelledby="hero-main-title">
      <h1 id="hero-main-title" class="sr-only">DESIGN THAT CONVERTS, CODE THAT SHIPS &mdash; Custom Website Development &amp; Digital Tech Solutions</h1>
      <div class="hero-container">
        <p class="hero-tagline">Custom websites, scalable digital systems, and full-stack tech solutions for startups and businesses. One team to engineer and launch your vision.</p>
        <div class="hero-ctas">
          <a href="/contact" class="btn-primary">Schedule Consultation ↗</a>
          <a href="/services" class="btn-secondary">Explore Services</a>
          <a href="/case-studies" class="btn-secondary">View Case Studies</a>
        </div>
      </div>
    </section>

    <section class="company-section" id="approach" aria-labelledby="home-approach-title">
      <h2 id="home-approach-title">OUR APPROACH &amp; CORE DISCIPLINES</h2>
      <p>We blend design rigor with software engineering excellence under one roof.</p>
      <ul>
        <li><a href="/services#design"><strong>Digital Product Design &amp; UI/UX:</strong></a> Discovery, user research, wireframes, and design systems.</li>
        <li><a href="/services#development"><strong>Full-Stack Web &amp; Mobile Development:</strong></a> Robust React and native-grade application engineering.</li>
        <li><a href="/services#development"><strong>AI Product Integration:</strong></a> Practical copilots, automation, and agentic workflows.</li>
      </ul>
    </section>

    <section class="case-section" id="results" aria-labelledby="home-case-title">
      <h2 id="home-case-title">SELECTED CLIENT RESULTS &amp; CASE STUDIES</h2>
      <p>Explore our recent client deliverables across luxury e-commerce, fintech, SEO, and interior design:</p>
      <ul>
        ${caseStudies.map((p) => `<li><a href="/case-studies">${p.title} (${p.industry || p.category})</a>: ${p.desc}</li>`).join('')}
      </ul>
      <a href="/case-studies">Explore All Case Studies ↗</a>
    </section>

    <section class="belief-section" id="beliefs" aria-labelledby="home-belief-title">
      <h2 id="home-belief-title">STUDIO HERITAGE &amp; MILESTONES</h2>
      <p>Independent product studio based in Surat, Gujarat, India. 3+ years of operation, 10-person multidisciplinary team, and 21+ successful client project deliveries worldwide.</p>
      <a href="/about">Learn More About VAMIX ↗</a>
    </section>



    <section class="contact-section" id="contact" aria-labelledby="home-contact-title">
      <h2 id="home-contact-title">START YOUR NEXT PROJECT WITH VAMIX</h2>
      <p>Schedule a free 30-minute consultation directly with our founders and senior engineers.</p>
      <p>Direct Contact: <a href="mailto:vamixlabs@gmail.com">vamixlabs@gmail.com</a> | <a href="tel:+916359198825">+91 63591 98825</a></p>
      <a href="/contact">Get in Touch ↗</a>
    </section>
  </main>
`;

const updatedHomeHtml = baseHtml.replace(
  /<div id=["']root["']>[\s\S]*?<\/div>(\s*<noscript>[\s\S]*?<\/noscript>)?/i,
  `<div id="root"></div>\n  <noscript>\n${homeBodyHtml}\n  </noscript>`
);
fs.writeFileSync(distHtmlPath, updatedHomeHtml, 'utf-8');
console.log('Pre-rendered static HTML for homepage: /');

console.log('All static pages generated successfully!');
