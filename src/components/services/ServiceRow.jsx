import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RollingText from '../RollingText';

export default function ServiceRow({ service, index, navigate }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('/contact');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div
      className={`service-row ${isHovered ? 'is-expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e);
        }
      }}
      aria-label={`${service.title} - Click to book consultation`}
    >
      <div className="service-row-inner">
        {/* Left Column: Title, Description, and Read More Action */}
        <div className="service-row-content">
          <div className="service-row-title-wrap">
            <h3 className="service-row-title">
              {service.title}
            </h3>
          </div>

          <motion.div
            className="service-row-details"
            initial={false}
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{
              duration: 0.38,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="service-row-desc">
              {service.desc}
            </p>

            <div className="service-row-action">
              <span className="service-read-more-btn">
                <span className="service-btn-text">
                  <RollingText text="Read more" />
                </span>
                <span className="service-btn-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 11L11 3M11 3H5M11 3V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Mockup Art with Pattern Background */}
        <div className="service-row-visual-wrap">
          <motion.div
            className="service-row-visual"
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.96,
              y: isHovered ? 0 : 8
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1]
            }}
            aria-hidden="true"
          >
            {/* Diagonal Hatch Overlay Pattern */}
            <div className="service-visual-hatch-pattern" />

            {/* Mockup Screen Image */}
            <img
              src={service.img}
              alt=""
              className="service-visual-img"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {/* Row Separator Hairline */}
      <div className="service-row-separator" />
    </div>
  );
}
