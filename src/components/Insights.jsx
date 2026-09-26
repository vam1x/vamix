import React from 'react';
import RollingText from './RollingText';

export default function Insights() {
  const articles = [
    {
      date: "SEPTEMBER 18, 2025",
      title: "The Silent Killers: 5 Signs Your Product Needs a UX Overhaul",
      link: "./blog"
    },
    {
      date: "SEPTEMBER 18, 2025",
      title: "The Ugly Phase: How to Know When Your Startup Actually Needs a Designer",
      link: "./blog"
    },
    {
      date: "SEPTEMBER 3, 2025",
      title: "The 60% Drop: How We Silenced a Noisy Support Queue with Better UX",
      link: "./blog"
    },
    {
      date: "AUGUST 6, 2025",
      title: "The New Rules: 10 UX Principles That Define Product Survival in 2025",
      link: "./blog"
    }
  ];

  return (
    <section className="section insights-section" id="insights">
      <div className="section-container">
        
        <div className="insights-header-row">
          <div>
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>10 LATEST</span>
            </div>
            <h2 className="section-title-huge" style={{ marginBottom: 0 }}>INSIGHTS</h2>
          </div>
          <a href="./blog" className="btn-pill btn-pill-light">
            <RollingText text="ALL ARTICLES ↗" />
          </a>
        </div>

        <div className="articles-grid">
          {articles.map((art, idx) => (
            <article key={idx} className="article-card">
              <div>
                <div className="article-date">{art.date}</div>
                <h3 className="article-title">{art.title}</h3>
              </div>
              <a href={art.link} className="article-read-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <RollingText text="READ ARTICLE" /> <span>→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
