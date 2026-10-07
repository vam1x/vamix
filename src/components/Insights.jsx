import React from 'react';
import { motion } from 'framer-motion';
import SectionGrid from './SectionGrid';
import articles from '../pages/insightsData.json';

export default function Insights({ navigate }) {
  return (
    <section className="insights-section" id="insights" aria-labelledby="insights-title">
      {/* 4-Column Blueprint Grid Lines */}
      <SectionGrid
        theme="light"
        showTopLine={true}
      />

      <div className="insights-section__inner">
        {/* Section Header */}
        <div className="insights-section__heading">
          <div className="insights-section__heading-copy">
            <div className="section-kicker section-kicker--dark">
              <span>10</span>
              <span>LATEST</span>
            </div>
            <h2 id="insights-title">Insights</h2>
          </div>

          <a
            className="text-link"
            href="/insights"
            onClick={(e) => {
              e.preventDefault();
              if (navigate) navigate('/insights');
            }}
          >
            <span>All articles</span>
            <svg
              className="arrow-container"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <rect width="14" height="14" fill="#D7D7D7" />
              <path
                d="M9.96873 4.5V8.5625C9.96873 8.68682 9.91935 8.80605 9.83144 8.89396C9.74353 8.98186 9.6243 9.03125 9.49998 9.03125C9.37566 9.03125 9.25643 8.98186 9.16853 8.89396C9.08062 8.80605 9.03123 8.68682 9.03123 8.5625V5.63281L4.83162 9.83164C4.74356 9.9197 4.62413 9.96917 4.49959 9.96917C4.37506 9.96917 4.25562 9.9197 4.16756 9.83164C4.0795 9.74358 4.03003 9.62415 4.03003 9.49961C4.03003 9.37507 4.0795 9.25564 4.16756 9.16758L8.36717 4.96875H5.43748C5.31316 4.96875 5.19393 4.91936 5.10603 4.83146C5.01812 4.74355 4.96873 4.62432 4.96873 4.5C4.96873 4.37568 5.01812 4.25645 5.10603 4.16854C5.19393 4.08064 5.31316 4.03125 5.43748 4.03125H9.49998C9.6243 4.03125 9.74353 4.08064 9.83144 4.16854C9.91935 4.25645 9.96873 4.37568 9.96873 4.5Z"
                fill="#171717"
              />
            </svg>
          </a>
        </div>

        {/* 4-Card Column Insights Grid */}
        <div className="insights-grid">
          {articles.map((item, idx) => (
            <motion.article
              key={idx}
              className="insight-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                className="insight-card__link"
                href={`/insights#${item.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (navigate) navigate('/insights');
                }}
              >
                <div className="insight-card__body">
                  <span className="insight-card__date mono-label">{item.date}</span>
                </div>
                <div className="insight-card__image">
                  <img
                    src={item.image || item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="460"
                    height="306"
                  />
                </div>
                <div className="insight-card__copy">
                  <h3>{item.title}</h3>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
