# webus.in — Complete Website Tree Structure & Architectural Analysis

> **Analyzed via:** Playwright MCP Live Inspection  
> **Target Domain:** [https://webus.in](https://www.webus.in/)  
> **Platform & Framework:** Framer (React SSR / Motion Engine)  
> **Brand & Business Identity:** Webus® — Product Studio & Digital Agency (Delhi, India & US presence)  
> **Primary Offering:** UI/UX Strategy, Digital Product Design, Web & Mobile App Engineering, AI Products  

---

## 1. Executive Summary & Tech Stack Overview

- **Host Domain:** `https://www.webus.in/`
- **CMS / Site Generator:** Framer (`Framer 80f113d`)
- **Rendering Architecture:** Server-Side Rendered (SSR) static React markup with client-side hydration (`ssr-variant` blocks)
- **Primary Typography:** `Sora` (Google Font) + Sans-serif system fallback
- **Design System Style:** High-contrast editorial / brutalist tech aesthetic, numbered section badges (`01` through `12`), heavy typographic scaling, animated letter-spacing hover states (`M E N U`), interactive accordion modules, client quote carousels.
- **Responsive Breakpoints:**
  - Desktop: `(min-width: 1200px)`
  - Tablet: `(min-width: 810px) and (max-width: 1199px)`
  - Mobile: `(max-width: 809px)`

---

## 2. Complete Information Architecture (Sitemap Tree)

```text
webus.in/ (Root)
│
├── 404 (Not Found Error Page)
│
├── /about (About Webus — Studio History, Philosophy & Leadership)
│
├── /services (Services Overview — Design & Development Dual-Track)
│   ├── #development-services (Anchor for Technical Engineering)
│
├── /case-studies (Client Work Catalog & Project Showcase)
│   ├── /bitfront-crypto-exchange-ui (Fintech / Web3 Exchange UI)
│   ├── /formfunction-marketplace-design (Solana 1/1 NFT Art Marketplace)
│   ├── /rbc-data-fabric (Enterprise Global Data Fabric Portal)
│   ├── /coride-mobile-app (Urban Ride-sharing Mobile Application)
│   ├── /uspeak-ai-public-speaking-coach (AI Real-time Speaking Feedback Coach)
│   ├── /tscx-digital-transformation (Engineering Firm Brand & Platform)
│   ├── /discover-india-rebrand (Tourism & Destination Identity System)
│   └── /dragatron-digital-fitness-platform (Remote Fitness Coaching Platform)
│
├── /blog (Insights & Product Articles)
│   ├── /5-signs-product-needs-ux-overhaul
│   ├── /startup-hiring-first-designer
│   ├── /cut-support-tickets-better-ux
│   ├── /10-ux-principles-product-team-2025
│   ├── /lessons-redesigning-50-saas-dashboards
│   ├── /real-cost-bad-design-ignoring-data
│   ├── /mvp-vs-full-product-design-guide
│   └── /why-design-systems-fail-fix
│
├── /careers (Studio Roles, Culture & Open Positions)
│   ├── Senior Product Designer (UX/UI)
│   ├── Forward Deployed Engineer (Senior)
│   ├── Design Systems Lead
│   └── User Researcher
│
├── /contact (Interactive Project Inquiry Form & Direct Booking)
│
└── /legal (Compliance & Policies)
    ├── /privacy-policy (Data collection & handling terms)
    └── /terms-of-service (Service usage agreements)
```

---

## 3. Global Layout & Navigation Tree

Across all pages, the site maintains a cohesive framing system:

```text
<BODY>
├── <div id="main">
│   ├── <header class="framer-cln9yz"> (Sticky Top Header)
│   │   ├── Brand Link: [Logo / Home Icon] -> "/"
│   │   └── Interactive Menu Button: ["M E N U"] (Expands Drawer / Mobile Overlay)
│   │
│   ├── <main> (Dynamic Page View Content)
│   │   └── [Page-Specific Sections]
│   │
│   ├── <nav class="framer-1e4365o"> (Global Mega-Nav Anchor Bar)
│   │   ├── [H O M E] -> "/"
│   │   ├── [A B O U T] -> "/about"
│   │   ├── [C A S E  S T U D I E S] -> "/case-studies"
│   │   ├── [I N S I G H T S] -> "/blog"
│   │   ├── [C A R E E R S] -> "/careers"
│   │   └── [C O N T A C T] -> "/contact"
│   │
│   └── <footer class="framer-WJ4r0"> (Global Footer)
│       ├── Legal Links:
│       │   ├── "TERMS OF SERVICE" -> "/legal/terms-of-service"
│       │   └── "PRIVACY POLICY" -> "/legal/privacy-policy"
│       ├── Direct Contact Info:
│       │   ├── Phone: "+91 96547 30419" (tel:)
│       │   └── Email: "hi@webus.in" (mailto:)
│       ├── Social Network Links:
│       │   ├── LinkedIn: "https://www.linkedin.com/in/jsrattey/"
│       │   └── Instagram: "https://www.instagram.com/webus.in/?hl=en"
│       └── Copyright Notice: "© 2025 WEBUS® ALL RIGHTS RESERVED."
│
├── <div id="overlay"> (Modal dialogs / dynamic flyouts)
└── <div id="template-overlay">
```

---

## 4. Detailed Component & Section Tree: Homepage (`/`)

The homepage is organized into numbered editorial sections:

```text
Homepage (https://www.webus.in/)
│
├── [Section 01] HERO BANNER
│   ├── Social Proof Rating: "4.9/5 | Based on 23 verified reviews"
│   ├── Main H1 Headline: "DESIGN THAT CONVERTS | CODE THAT SHIPS"
│   ├── Sub-statement: "One team designs your product and builds it. No handoffs, no lost intent."
│   ├── CTA Group:
│   │   ├── Primary CTA: "SCHEDULE A FREE ASSESSMENT" -> "/contact"
│   │   └── Secondary CTA: "OUR CASE STUDIES" -> "/case-studies"
│   └── Client Trust Carousel / Logo Ticker (High-profile brand logos)
│
├── [Section 02] OUR APPROACH & CAPABILITIES
│   ├── Lead In: "OUR APPROACH — HOW WE BUILD WHAT WE DESIGN"
│   ├── Manifesto: "WE SOLVE HARD PRODUCT PROBLEMS THROUGH DESIGN, ENGINEERING, AND TESTING WITH USERS..."
│   ├── Sub-module 01: [Who we are]
│   │   ├── Summary: "We're a product studio that designs and builds. We don't chase trends..."
│   │   └── Founder Badge: "Jaspal S Rattey — Founder & Product Director"
│   └── Sub-module 02: [Services Grid]
│       ├── /01 Product Discovery & Design (UX research, wireframing, architecture)
│       ├── /02 Design System (Scalable component libraries, design tokens)
│       ├── /03 Web & Mobile Apps (Native and responsive web applications)
│       ├── /04 Design Ops (Team workflows, governance, handoff pipelines)
│       ├── /05 Websites & Landing Pages (Conversion-focused digital marketing platforms)
│       ├── /06 AI Products (Applied AI interfaces, conversational tools, LLM UI)
│       └── CTA Link: "ALL SERVICES" -> "/services"
│
├── [Section 03] WHY US? (Value Proposition & Proof)
│   ├── H1 Title: "WHY COMPANIES CHOOSE WEBUS®"
│   ├── Four Advantage Pillars:
│   │   ├── 01: User-First Design Approach
│   │   ├── 02: Proven Results Across Industries
│   │   ├── 03: Collaborative Process, No Surprises
│   │   └── 04: 12+ Years of Design and Build
│   ├── Performance Metric Cards:
│   │   ├── "85% CLIENT RETENTION"
│   │   ├── "12+ YEARS EXPERIENCE"
│   │   └── "5X FASTER DELIVERY"
│   └── Partnership Callout: "Partnership, not handoffs — your team works with our leads directly."
│
├── [Section 04] HOW WE DO IT (#path — Delivery Methodology)
│   ├── H2 Title: "THE FAST TRACK TO LIVE PRODUCTS"
│   ├── 3-Phase Execution Model:
│   │   ├── 01/ Empathy Mapping: Learn user needs through field research
│   │   ├── 02/ Rapid Prototyping: Validate ideas before full development
│   │   └── 03/ User Testing: Gather live feedback to refine the work
│   ├── CTA Box: "START YOUR PROJECT" -> "/contact" ("Improved task completion by up to 98%")
│   └── Cost of Delay Matrix ("Why Delay Hurts — The longer you wait, the more it costs"):
│       ├── 01/ User Frustration Drives Churn (+83%)
│       ├── 02/ Competitors Capture Your Market (+55%)
│       ├── 03/ Technical Debt Accumulates (+66%)
│       └── 04/ Redesign Costs Climb Over Time (+45%)
│
├── [Section 05] RESULTS & FEATURED CASE STUDY
│   ├── Feature Case: "Bitfront Crypto Exchange Redesign"
│   ├── Quantitative Results:
│   │   ├── Onboarding Time Cut: -71%
│   │   └── User Retention Improved: +43%
│   ├── Client Testimonial:
│   │   ├── Quote: "THEY DIDN'T JUST MAKE IT PRETTY. THEY MADE IT WORK."
│   │   └── Author: "James Rodriguez — Founder & CEO DataView"
│   └── Link: "SEE HOW WE DID IT" -> "/case-studies/bitfront-crypto-exchange-ui"
│
├── [Section 06] MORE PROJECTS (Selected Work Carousel)
│   ├── Formfunction (Solana 1/1 NFT Marketplace UI)
│   ├── RBC Data Fabric Portal (Enterprise Data Architecture)
│   ├── CoRide (Safety-first Ride Sharing Mobile App)
│   ├── Bitfront (Simplified Crypto Trading Platform)
│   ├── USpeak Inc (AI Real-time Public Speaking Assistant)
│   └── TSCx (Digital Transformation for Engineering Agency)
│
├── [Section 07] WHO WE ARE — THE TEAM
│   ├── H2 Title: "THE TEAM"
│   ├── Philosophy: "No middlemen. No reps. You work with designers and engineers directly."
│   └── Leadership Cards:
│       ├── Jaspal Singh — Founder & Product Director (12+ Years building digital experiences)
│       ├── Rahul Rohilla — Product Design Head & Senior UI/UX Designer
│       ├── Ahmar Khan — UI/UX Designer (Design Systems & Micro-interactions)
│       └── Anurag Sethi — US Sales Lead (Dedicated point of contact for US clients)
│
├── [Section 08 / 09] WHAT WE BELIEVE & STUDIO TIMELINE
│   ├── Headline: "WE DIDN'T BUILD THIS STUDIO TO FOLLOW TRENDS"
│   └── Studio Milestones:
│       ├── 2012: Founded in Delhi to solve real design problems
│       ├── 2017: Opened Tennessee office to serve US enterprise & startup clients
│       ├── 2020: Crossed 50 successful client projects milestone
│       └── 2025: Over a decade building digital products people actually use
│
├── [Section 10] LATEST INSIGHTS (Editorial & Thought Leadership)
│   ├── H2 Title: "INSIGHTS"
│   ├── Featured Article Cards (Top 4 articles with dates & excerpts)
│   └── Link: "ALL ARTICLES" -> "/blog"
│
├── [Section 11] HELP & INFO — FAQ (Interactive Accordions)
│   ├── H2 Title: "FAQ"
│   ├── Q1: "How far in advance should I book a project?"
│   ├── Q2: "How much does a typical project cost?"
│   ├── Q3: "Do you handle both design and coding?"
│   ├── Q4: "How does remote collaboration work across timezones?"
│   └── Direct Inquiry Box: "STILL UNSURE? ASK A QUESTION" -> "/contact"
│
└── [Section 12] GET IN TOUCH (Conversion Footer Section)
    ├── H2 Title: "GET IN TOUCH — READY TO START?"
    ├── Supporting copy & booking trigger
    └── CTA Link: "START YOUR PROJECT" -> "/contact"
```

---

## 5. Detailed Component & Section Tree: Sub-Pages

### 5.1. Services Page (`/services`)
- **Header:** Sticky Navigation (`M E N U` + Logo)
- **Hero:**
  - Tag: `2 TRACKS UNDER ONE ROOF`
  - H1 Headline: `WE DESIGN IT, THEN WE BUILD IT`
  - Subhead: Two unified tracks—Design works out what to make, Development ships it as working code.
- **Track 01: DESIGN (`section: 01 DESIGN`)**
  - `Product Discovery & Design`: User journeys, competitive benchmarking, wireframing.
  - `Design System`: Reusable UI libraries, tokens, typography rules, accessibility audits.
  - `Web & Mobile Apps`: High-fidelity interaction design, native iOS/Android guidelines.
  - `Design Ops`: Workflow integration with Figma, GitHub, Jira.
  - `Websites & Landing Pages`: High-converting marketing landing pages.
- **Track 02: DEVELOPMENT (`section#development-services: 02 DEVELOPMENT`)**
  - `AI Product Development`: Agentic interfaces, prompt engineering pipelines, LLM integration.
  - `Web Application Development`: Next.js, React, Node.js, enterprise TypeScript apps.
  - `Mobile App Development`: Cross-platform Flutter/React Native solutions.
  - `Full-Stack Engineering`: Scalable backend architectures, Postgres/Redis caching.
  - `API & Integrations`: Third-party SaaS, Stripe, Supabase, internal APIs.
- **In-House Validation Banner:** "WANT PROOF? SEE THE PRODUCTS WE BUILT IN-HOUSE"
- **Bottom Mega-Nav & Footer**

---

### 5.2. About Page (`/about`)
- **Hero:**
  - Tag: `13+ YEARS OF EXCELLENCE`
  - H1 Headline: `WHO WE ARE: BUILDING DIGITAL PRODUCTS THAT SCALE`
  - Copy: Focused on user utility, business outcomes, and clean execution over transient design fads.
- **Key Studio Metrics:**
  - Client Retention Rate: `85%`
  - Completed Client Projects: `66+`
  - Faster Project Delivery: `5X`
- **The Team Section:** Detailed bios and roles for Jaspal Singh, Rahul Rohilla, Ahmar Khan, Anurag Sethi.
- **Studio Beliefs:** "Good design should be invisible. It shouldn't draw attention to itself—it should simply solve the problem."
- **Help & Info FAQ Section:** Project scoping and client partnership details.
- **Bottom Mega-Nav & Footer**

---

### 5.3. Case Studies Catalog (`/case-studies`) & Individual Detail Pages
- **Catalog Header:** "CLIENT STORIES — REAL PROJECTS WHERE DESIGN SOLVED ACTUAL BUSINESS PROBLEMS"
- **8 Project Cards:**
  1. **Bitfront** (`/case-studies/bitfront-crypto-exchange-ui`)
     - Industry: Fintech / Web3
     - Challenge: Lower barrier to entry for retail traders without alienating pro traders.
     - Solution: Light, welcoming illustration style replacing dark-mode crypto clichés.
  2. **Formfunction** (`/case-studies/formfunction-marketplace-design`)
     - Industry: Web3 / 1/1 Art
     - Challenge: NFT platforms felt like financial spreadsheets.
     - Solution: Fine-art gallery aesthetic highlighting creator portfolios.
  3. **RBC Data Fabric Portal** (`/case-studies/rbc-data-fabric`)
     - Industry: Banking / Enterprise Data Governance
     - Challenge: Fragmented multinational database discovery.
     - Solution: Unified discovery portal reducing query time and enforcing data compliance.
  4. **CoRide** (`/case-studies/coride-mobile-app`)
     - Industry: Transportation / Mobility
     - Challenge: App clutter causing booking abandonment.
     - Solution: Streamlined single-screen booking flow focused on rider safety.
  5. **USpeak Inc** (`/case-studies/uspeak-ai-public-speaking-coach`)
     - Industry: AI EdTech / Communication
     - Challenge: Stage fright and unstructured speech feedback.
     - Solution: Conversational AI coaching interface with real-time vocal metrics.
  6. **TSCx** (`/case-studies/tscx-digital-transformation`)
     - Industry: Engineering & Technical Consulting
     - Challenge: Technical sophistication outpaced dated corporate identity.
     - Solution: Modern technical branding and interactive platform.
  7. **Discover India** (`/case-studies/discover-india-rebrand`)
     - Industry: Hospitality & Destination Management
     - Challenge: Legacy brand needing international contemporary appeal.
     - Solution: Dynamic cultural design system and multi-device booking portal.
  8. **Dragatron** (`/case-studies/dragatron-digital-fitness-platform`)
     - Industry: Connected Fitness / Tele-health
     - Challenge: High churn in isolated workout regimens.
     - Solution: Trainer-to-client video sync and telemetry dashboard.
- **Persistent CTA Section:** "YOUR FIRST STEP: BOOK A FREE 30-MINUTE CALL" featuring Ruby Rattey (Client Success Manager).

---

### 5.4. Blog / Insights (`/blog`)
- **Header:** "INSIGHTS & UPDATES — REAL TALK ABOUT DESIGN, ENGINEERING, AND PRODUCTS WITHOUT THE BUZZWORDS"
- **Published Article Catalog:**
  1. *The Silent Killers: 5 Signs Your Product Needs a UX Overhaul* (`/blog/5-signs-product-needs-ux-overhaul`)
  2. *The Ugly Phase: How to Know When Your Startup Actually Needs a Designer* (`/blog/startup-hiring-first-designer`)
  3. *The 60% Drop: How We Silenced a Noisy Support Queue with Better UX* (`/blog/cut-support-tickets-better-ux`)
  4. *The New Rules: 10 UX Principles That Define Product Survival in 2025* (`/blog/10-ux-principles-product-team-2025`)
  5. *The Dashboard Trap: Hard Truths from Redesigning 50+ SaaS Interfaces* (`/blog/lessons-redesigning-50-saas-dashboards`)
  6. *The Ostrich Effect: Why Smart Teams Ignore Screaming UX Data* (`/blog/real-cost-bad-design-ignoring-data`)
  7. *The MVP Trap: Why "Fail Fast" is Terrible Advice for Some Products* (`/blog/mvp-vs-full-product-design-guide`)
  8. *The Museum Effect: Why Your Expensive Design System is Gathering Dust* (`/blog/why-design-systems-fail-fix`)
- **Direct Advisor Booking CTA:** Ruby Rattey 30-min consultation card.

---

### 5.5. Careers Page (`/careers`)
- **Header:** "WE'RE HIRING — CAREERS AT WEBUS"
- **Open Positions:**
  1. `Senior Product Designer (UX/UI)` (#PRODUCT, #SYSTEMS, #UIUX)
  2. `Forward Deployed Engineer (Senior)` (#FDE, #BACKEND, #INFRA)
  3. `Design Systems Lead` (#SYSTEMS, #TOKENS, #DOCS)
  4. `User Researcher` (#RESEARCH, #TESTING, #DATA)
- **Hiring Process Workflow:**
  - `01 Quick application` (Simple questions and portfolio link)
  - `02 Intro call (30 min)` (Fit, culture, and mutual expectations, no unpaid tests)
  - `03 Offer & onboarding` (Transparent scope, compensation, and start date)
- **Studio Culture Principles:** Data-backed design decisions, honest peer reviews, rapid prototyping over endless slide decks.

---

### 5.6. Contact Page (`/contact`)
- **Header:** "START WITH A SIMPLE STEP — LET'S BUILD YOUR NEXT PRODUCT"
- **Conversational Mad-Libs Style Form:**
  - Name: `"My name is [   ]"`
  - Organization: `"from [   ]"`
  - Objective: `"I want to improve: [   ]"`
  - Budget: `"Budget: $[   ]"`
  - Email / Phone: `"Contact me at: [   ]"`
  - Submission Action: `"SEND REQUEST"`
- **Human Touch Statement:** "Every message is read by a real person (Ruby or Jaspal). No chatbots or outsourced tiers."
- **Direct Channels:**
  - Phone: `+91 96547 30419`
  - Email: `hi@webus.in`
  - Cal / Booking: 30-minute introductory strategy session with Ruby Rattey.

---

### 5.7. Legal Pages
- **Privacy Policy (`/legal/privacy-policy`)**:
  - Outlines minimal data collection (Name, Email, Phone, Company, Project Brief) collected exclusively via contact and calendar forms.
  - Zero third-party data selling or tracking ad-network cookies.
- **Terms of Service (`/legal/terms-of-service`)**:
  - Engagement terms, intellectual property ownership (100% transferred upon project sign-off and payment completion), liability limitations.

---

## 6. Technical Architecture & DOM Summary Table

| Category | Implementation Details |
| :--- | :--- |
| **Hosting & CDN** | Framer Cloud Infrastructure (`events.framer.com`, AWS CloudFront edge) |
| **Rendering Strategy** | Server-Side Static Generation (SSG) with React 18 hydration |
| **Layout Model** | Flexbox & CSS Grid with dynamic sticky/pinned containers |
| **Interactive States** | Motion primitives, spring animations, staggered letter typography reveals |
| **Forms & Ingestion** | Native Framer form endpoint with real-time client-side validation |
| **SEO & Social Cards** | Custom OpenGraph tags, canonical tags, automated `sitemap.xml` |
| **Accessibility (a11y)** | Semantic `<header>`, `<main>`, `<nav>`, `<footer>`, ARIA role labels on interactive overlays |

---
*Structure generated via Playwright MCP Automated Site Inspection.*
