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

const servicesTitle = 'Services: Digital Product Design & Engineering | VAMIX';
const servicesDescription = 'Explore VAMIX services across Product Discovery, UI/UX Design Systems, AI Product Engineering, Web & Mobile Applications, and Internal Tools. Designed and built under one roof.';
const servicesCanonical = 'https://vamix.in/services';

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
    desc: 'We build iOS and Android apps that feel native, load fast, and hold up in daily use. Designed and engineered under one roof, shipped store ready.',
    tags: '#REACTNATIVE #EXPO #FIREBASE'
  },
  {
    id: 'websites-landing-pages',
    title: 'Websites & Landing Pages',
    desc: 'We build websites and landing pages with a job to do: explain, convince, convert. Fast, responsive, and easy to update, with the motion and polish that make a brand look right online.',
    tags: '#NEXTJS #GSAP #SEO'
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools & Automation',
    desc: 'We build the admin panels, dashboards, and internal tools your team runs on every day. Custom fit to how you actually work, with the right access controls and no bloat.',
    tags: '#DASHBOARDS #RBAC #FASTAPI'
  }
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://vamix.in/services#webpage',
      'url': 'https://vamix.in/services',
      'name': servicesTitle,
      'description': servicesDescription,
      'isPartOf': {
        '@id': 'https://vamix.in/#website'
      },
      'breadcrumb': {
        '@id': 'https://vamix.in/services#breadcrumb'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://vamix.in/services#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://vamix.in/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': 'https://vamix.in/services'
        }
      ]
    },
    {
      '@type': 'ItemList',
      '@id': 'https://vamix.in/services#serviceslist',
      'name': 'VAMIX Digital Product Design & Engineering Services',
      'itemListElement': [...designServices, ...devServices].map((svc, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Service',
          'name': svc.title,
          'description': svc.desc,
          'provider': {
            '@id': 'https://vamix.in/#organization'
          },
          'areaServed': 'Worldwide',
          'serviceType': svc.title
        }
      }))
    }
  ]
};

// Generate static crawlable HTML content for /services
const servicesCrawlableHtml = `
<div class="app-root services-route">
  <a href="#main-content" class="skip-to-content">Skip to main content</a>
  <header class="site-header is-over-light" role="banner">
    <div class="header-inner-grid">
      <div class="header-col-logo">
        <a href="/" class="brand-logo-link is-over-light" aria-label="VAMIX Home">
          <span class="brand-logo-text" style="font-weight: 800; font-size: 24px; letter-spacing: -0.05em; color: #171717;">VAMIX</span>
        </a>
      </div>
      <nav class="header-sr-nav" aria-label="Main Navigation">
        <a href="/">Home</a>
        <a href="/services" aria-current="page">Services</a>
        <a href="/case-studies">Case Studies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div class="header-col-menu">
        <a href="/contact" class="menu-toggle-btn is-over-light" aria-label="Contact VAMIX">
          <span class="menu-btn-text">MENU</span>
        </a>
      </div>
    </div>
  </header>

  <main id="main-content" tabindex="-1">
    <div class="services-page-wrapper">
      <!-- 01: SERVICES HERO SECTION -->
      <section class="services-hero page-section" aria-labelledby="services-title">
        <div class="content-grid section-content hero-content">
          <aside class="section-aside">
            <span class="aside-number">2/</span>
            <span class="aside-label">TRACKS UNDER ONE ROOF</span>
          </aside>
          <div class="hero-copy section-span-three">
            <h1 id="services-title" class="display-heading">
              <span class="services-reveal">WE DESIGN IT, </span>
              <span class="display-heading__muted">THEN WE BUILD IT</span>
            </h1>
            <p class="hero-description">
              Two tracks under one roof. Design works out what to make. Development ships it as working software. One team runs both.
            </p>
          </div>
        </div>
      </section>

      <!-- 02: TRACK 01 — DESIGN -->
      <section id="design-services" class="track-section page-section" aria-labelledby="design-services-title">
        <div class="content-grid section-content track-content">
          <aside class="section-aside section-aside--inline">
            <span class="aside-number">01</span>
            <span class="aside-label">DESIGN</span>
          </aside>
          <div class="track-copy section-span-three">
            <h2 id="design-services-title" class="track-title">DESIGN</h2>
            <p class="track-description">
              We decide what to build and shape how it works, from first research to final screen.
            </p>
          </div>
          <div class="service-list section-span-three">
            ${designServices.map((svc) => `
              <article class="service-row" id="${svc.id}">
                <div class="service-row-copy">
                  <h3 class="service-row-title">${svc.title}</h3>
                  <div class="service-row-detail">
                    <p class="service-row-desc">${svc.desc}</p>
                    <p class="service-row-tags">${svc.tags}</p>
                  </div>
                </div>
                <a class="service-read-more is-visible" href="/contact" aria-label="Discuss ${svc.title}">
                  Read more <span class="arrow-container" aria-hidden="true">↗</span>
                </a>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 03: TRACK 02 — DEVELOPMENT -->
      <section id="development-services" class="track-section page-section" aria-labelledby="dev-services-title">
        <div class="content-grid section-content track-content">
          <aside class="section-aside section-aside--inline">
            <span class="aside-number">02</span>
            <span class="aside-label">DEVELOPMENT</span>
          </aside>
          <div class="track-copy section-span-three">
            <h2 id="dev-services-title" class="track-title">DEVELOPMENT</h2>
            <p class="track-description">
              We write the production code that turns the design into a product people can use. AI leads the way we build.
            </p>
          </div>
          <div class="service-list section-span-three">
            ${devServices.map((svc) => `
              <article class="service-row" id="${svc.id}">
                <div class="service-row-copy">
                  <h3 class="service-row-title">${svc.title}</h3>
                  <div class="service-row-detail">
                    <p class="service-row-desc">${svc.desc}</p>
                    <p class="service-row-tags">${svc.tags}</p>
                  </div>
                </div>
                <a class="service-read-more is-visible" href="/contact" aria-label="Discuss ${svc.title}">
                  Read more <span class="arrow-container" aria-hidden="true">↗</span>
                </a>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 04: PRODUCTS BRIDGE -->
      <section class="products-bridge page-section" aria-labelledby="products-title">
        <div class="content-grid section-content bridge-inner">
          <div class="bridge-copy section-span-three">
            <h2 id="products-title">WANT PROOF? SEE THE PRODUCTS WE BUILT IN-HOUSE.</h2>
            <a class="bridge-link" href="/case-studies" aria-label="View our case studies and products">
              <span>VIEW PRODUCTS</span>
            </a>
          </div>
        </div>
      </section>

      <!-- 05: YOUR FIRST STEP -->
      <section class="booking-band" aria-labelledby="booking-band-title">
        <div class="booking-inner">
          <div class="booking-marker">
            <span>YOUR FIRST STEP</span>
          </div>
          <div class="booking-content">
            <div class="booking-copy">
              <h2 class="booking-title" id="booking-band-title">Book a free 30-minute call.</h2>
              <a class="booking-button" href="/contact" aria-label="Book a call with VAMIX">
                <span>BOOK A CALL</span>
              </a>
            </div>
            <div class="booking-note">
              <p>My job is making sure you leave our first call with clarity and next steps.</p>
              <div class="booking-person">
                <div class="booking-person-copy">
                  <p>RUBY RATTEY</p>
                  <p>CLIENT SUCCESS MANAGER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 06: CONTACT SECTION -->
      <section class="section contact-section" id="contact" aria-labelledby="services-contact-title">
        <div class="section-container contact-inner">
          <div class="contact-head-row">
            <div class="contact-heading">
              <h2 class="contact-title" id="services-contact-title">GET IN TOUCH</h2>
              <p class="contact-sub">Whether you have questions or just want to explore options, we're here.</p>
            </div>
            <nav class="contact-nav" aria-label="Footer navigation">
              <a href="/">HOME</a>
              <a href="/about">ABOUT</a>
              <a href="/case-studies">CASE STUDIES</a>
              <a href="/services" aria-current="page">SERVICES</a>
              <a href="/contact">CONTACT</a>
            </nav>
          </div>
          <div class="contact-meta">
            <div class="contact-meta__direct">
              <a href="tel:+916359198825">+91 63591 98825</a>
              <a href="mailto:vamixlabs@gmail.com">VAMIXLABS@GMAIL.COM</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer class="footer-bottom-black">
    <div class="footer-inner-container">
      <div class="footer-grid-4col">
        <div class="footer-col footer-col-1">
          <a href="/privacy-policy" class="footer-legal-link">PRIVACY POLICY</a>
        </div>
        <div class="footer-col footer-col-2">
          <a href="/terms-of-service" class="footer-legal-link">TERMS OF SERVICE</a>
        </div>
        <div class="footer-col footer-col-3">
          <a href="/services" class="footer-legal-link" aria-current="page">SERVICES</a>
        </div>
        <div class="footer-col footer-col-4 footer-copyright-wrap">
          <span class="footer-copyright-text">© 2023 VAMIX® ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </div>
  </footer>
</div>
`.trim();

let servicesHtml = baseHtml;

// 1. Replace Title
servicesHtml = servicesHtml.replace(
  /<title>.*?<\/title>/i,
  `<title>${servicesTitle}</title>`
);

// 2. Replace Meta Description
servicesHtml = servicesHtml.replace(
  /<meta\s+name="description"\s+content="[^"]*">/i,
  `<meta name="description" content="${servicesDescription}">`
);

// 3. Replace Canonical
servicesHtml = servicesHtml.replace(
  /<link\s+rel="canonical"\s+href="[^"]*">/i,
  `<link rel="canonical" href="${servicesCanonical}">`
);

// 4. Replace OpenGraph
servicesHtml = servicesHtml.replace(
  /<meta\s+property="og:url"\s+content="[^"]*">/i,
  `<meta property="og:url" content="${servicesCanonical}">`
);
servicesHtml = servicesHtml.replace(
  /<meta\s+property="og:title"\s+content="[^"]*">/i,
  `<meta property="og:title" content="${servicesTitle}">`
);
servicesHtml = servicesHtml.replace(
  /<meta\s+property="og:description"\s+content="[^"]*">/i,
  `<meta property="og:description" content="${servicesDescription}">`
);

// 5. Replace Twitter
servicesHtml = servicesHtml.replace(
  /<meta\s+name="twitter:url"\s+content="[^"]*">/i,
  `<meta name="twitter:url" content="${servicesCanonical}">`
);
servicesHtml = servicesHtml.replace(
  /<meta\s+name="twitter:title"\s+content="[^"]*">/i,
  `<meta name="twitter:title" content="${servicesTitle}">`
);
servicesHtml = servicesHtml.replace(
  /<meta\s+name="twitter:description"\s+content="[^"]*">/i,
  `<meta name="twitter:description" content="${servicesDescription}">`
);

// 6. Replace Hreflang Alternates
servicesHtml = servicesHtml.replace(
  /<link\s+rel="alternate"\s+hreflang="en"\s+href="[^"]*">/i,
  `<link rel="alternate" hreflang="en" href="${servicesCanonical}">`
);
servicesHtml = servicesHtml.replace(
  /<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*">/i,
  `<link rel="alternate" hreflang="x-default" href="${servicesCanonical}">`
);

// 7. Replace Microdata Itemprops
servicesHtml = servicesHtml.replace(
  /<meta\s+itemprop="name"\s+content="[^"]*">/i,
  `<meta itemprop="name" content="${servicesTitle}">`
);
servicesHtml = servicesHtml.replace(
  /<meta\s+itemprop="description"\s+content="[^"]*">/i,
  `<meta itemprop="description" content="${servicesDescription}">`
);

// 8. Inject Services Schema before </head>
const schemaTag = `\n  <script type="application/ld+json" id="services-page-schema">\n${JSON.stringify(servicesSchema, null, 2)}\n  </script>\n</head>`;
servicesHtml = servicesHtml.replace(/<\/head>/i, schemaTag);

// 7. Inject crawlable HTML into <div id="root"></div>
servicesHtml = servicesHtml.replace(
  /<div id="root"><\/div>/i,
  `<div id="root">${servicesCrawlableHtml}</div>`
);

// Write to dist/services/index.html
const distServicesDir = path.join(rootDir, 'dist', 'services');
if (!fs.existsSync(distServicesDir)) {
  fs.mkdirSync(distServicesDir, { recursive: true });
}
const distServicesPath = path.join(distServicesDir, 'index.html');
fs.writeFileSync(distServicesPath, servicesHtml, 'utf-8');
console.log(`Generated ${distServicesPath} (${servicesHtml.length} bytes)`);

// Also save to public/services/index.html for persistence
const publicServicesDir = path.join(rootDir, 'public', 'services');
if (!fs.existsSync(publicServicesDir)) {
  fs.mkdirSync(publicServicesDir, { recursive: true });
}
const publicServicesPath = path.join(publicServicesDir, 'index.html');
fs.writeFileSync(publicServicesPath, servicesHtml, 'utf-8');
console.log(`Saved persistent copy to ${publicServicesPath}`);
