import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionGrid from '../components/SectionGrid';
import AboutBooking from '../components/about/AboutBooking';
import Contact from '../components/Contact';
import articles from './insightsData.json';
import useSeo from '../hooks/useSeo';
import './insights.css';

export default function InsightsPage({ navigate }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useSeo('insights');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['ALL', 'UI/UX & Product Design', 'Design Systems & Web Engineering', 'Web Performance & Engineering', 'AI & Modern Product Engineering'];

  const filteredArticles = selectedCategory === 'ALL'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="insights-page-wrapper">
      {/* JSON-LD Structured Data for Insights Articles & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://vamix.in/insights#webpage",
                "url": "https://vamix.in/insights",
                "name": "Insights & Tech Perspectives | VAMIX Product Studio",
                "description": "Practical insights on digital product design, web engineering, UI/UX systems, and AI development from VAMIX.",
                "isPartOf": {
                  "@id": "https://vamix.in/#website"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://vamix.in/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Insights",
                      "item": "https://vamix.in/insights"
                    }
                  ]
                }
              },
              ...articles.map((art) => ({
                "@type": "BlogPosting",
                "@id": `https://vamix.in/insights#${art.slug}`,
                "headline": art.title,
                "description": art.excerpt,
                "url": `https://vamix.in/insights#${art.slug}`,
                "image": `https://vamix.in${art.image}`,
                "datePublished": "2025-02-01",
                "dateModified": "2025-03-07",
                "author": {
                  "@type": "Organization",
                  "@id": "https://vamix.in/#organization",
                  "name": "VAMIX"
                },
                "publisher": {
                  "@id": "https://vamix.in/#organization"
                },
                "articleSection": art.category
              }))
            ]
          })
        }}
      />

      {/* 01. Hero Section */}
      <section className="insights-hero-section" id="insights-hero" aria-labelledby="insights-hero-title">
        <SectionGrid theme="light" showTopLine={false} showBottomLine={true} />
        <div className="insights-hero-container">
          <div className="insights-hero-badge">
            <span className="insights-hero-dot" aria-hidden="true" />
            <span>EDITORIAL &amp; INSIGHTS</span>
          </div>

          <div className="insights-hero-content">
            <h1 id="insights-hero-title">INSIGHTS &amp; PERSPECTIVES</h1>
            <p className="insights-hero-subhead">
              Real talk about software architecture, product design, design systems, and engineering without buzzwords.
            </p>

            {/* Filter buttons */}
            <div className="insights-filters" role="group" aria-label="Filter articles by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`insights-filter-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Articles Feed */}
      <section className="insights-feed-section" id="insights-feed" aria-label="Articles Feed">
        <div className="insights-feed-container">
          <div className="insights-feed-sidebar">
            <span>SHOWING {filteredArticles.length} ARTICLES</span>
          </div>

          <div className="insights-feed-grid">
            {filteredArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                id={article.slug}
                className="insights-article-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="insights-card-media">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="insights-card-img"
                    loading="lazy"
                    decoding="async"
                    width="460"
                    height="306"
                  />
                </div>

                <div className="insights-card-body">
                  <div className="insights-card-meta">
                    <span className="insights-card-cat">{article.category}</span>
                    <span>&bull;</span>
                    <time dateTime={article.date}>{article.date}</time>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="insights-card-title">{article.title}</h2>
                  <p className="insights-card-excerpt">{article.excerpt}</p>

                  {article.keyTakeaways && (
                    <ul className="insights-card-takeaways">
                      {article.keyTakeaways.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <div className="insights-card-footer">
                    <a
                      href={article.relatedService}
                      className="insights-service-ref"
                      onClick={(e) => {
                        e.preventDefault();
                        if (navigate) navigate(article.relatedService);
                      }}
                    >
                      Explore Related Service: {article.relatedServiceName} &rarr;
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Booking Band */}
      <AboutBooking navigate={navigate} />

      {/* 04. Contact Section */}
      <Contact navigate={navigate} />
    </div>
  );
}
