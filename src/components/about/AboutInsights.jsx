import React from 'react';
import { motion } from 'framer-motion';
import RollingText from '../RollingText';

export default function AboutInsights() {
  const articles = [
    {
      date: "SEPTEMBER 18, 2025",
      title: "The Silent Killers: 5 Signs Your Product Needs a UX Overhaul Slug: 5-signs-product-needs-ux-overhaul",
      img: "https://framerusercontent.com/images/UzIYF9nzfNkoawT6KbDmzWRDsY.png?width=2816&height=1536",
      link: "./blog"
    },
    {
      date: "SEPTEMBER 18, 2025",
      title: "The Ugly Phase: How to Know When Your Startup Actually Needs a Designer",
      img: "https://framerusercontent.com/images/iYEBZQSgQluLq0A3bfvixSCdxBY.png?width=1024&height=1024",
      link: "./blog"
    },
    {
      date: "SEPTEMBER 3, 2025",
      title: "The 60% Drop: How We Silenced a Noisy Support Queue with Better UX",
      img: "https://framerusercontent.com/images/6evMkPDiKjWtN5mXZdbdOIlIBM.png?width=1024&height=1024",
      link: "./blog"
    },
    {
      date: "AUGUST 6, 2025",
      title: "The New Rules: 10 UX Principles That Define Product Survival in 2025",
      img: "https://framerusercontent.com/images/LMWEGj6tGdvuCUhjHT6ZcfZEzc.png?width=1024&height=1024",
      link: "./blog"
    }
  ];

  return (
    <section className="about-insights-section" id="about-insights">
      <div className="about-insights-container">
        
        {/* Top Header Row */}
        <div className="about-insights-header-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">
              <span className="section-badge-dot"></span>
              <span>10 LATEST</span>
            </div>
            <h2 className="about-insights-title">INSIGHTS</h2>
          </motion.div>

          <motion.a 
            href="./blog" 
            className="about-all-articles-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <RollingText text="All articles ↗" />
          </motion.a>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="about-articles-grid">
          {articles.map((art, idx) => (
            <motion.article 
              key={idx} 
              className="about-article-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="corner-cross tl">+</span>
              <span className="corner-cross tr">+</span>
              <span className="corner-cross bl">+</span>
              <span className="corner-cross br">+</span>

              <a href={art.link} className="about-article-link">
                {/* Article Header Date */}
                <div className="about-article-date-row">
                  <span className="about-date-bullet">•</span>
                  <span className="about-article-date">{art.date}</span>
                </div>

                {/* Article Image Container */}
                <div className="about-article-img-frame">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="about-article-photo" 
                    loading="lazy" 
                  />
                </div>

                {/* Title */}
                <h3 className="about-article-heading">{art.title}</h3>
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
