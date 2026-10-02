import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RollingText from '../RollingText';

export default function ServiceRow({ service, index, navigate }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const isActive = isHovered || isToggled;

  const handleClick = (e) => {
    // If clicking on mobile or tapping, toggle active state
    if (window.innerWidth <= 809) {
      setIsToggled(prev => !prev);
      return;
    }

    if (e.target.closest('.service-read-more') || e.target.closest('a')) {
      e.preventDefault();
      if (navigate) {
        navigate('/contact');
      } else {
        window.location.href = '/contact';
      }
    }
  };

  const handleActionClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigate) {
      navigate('/contact');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <article
      className={`service-row ${isActive ? 'is-expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleActionClick(e);
        }
      }}
      aria-label={`${service.title} - Read more and contact`}
    >
      {/* Left Column Area: Title, Expanded Detail & Action Link */}
      <div className="service-row-copy">
        <h3 className="service-row-title">{service.title}</h3>

        <motion.div
          className="service-row-detail"
          initial={false}
          animate={{
            height: isActive ? 'auto' : 0,
            opacity: isActive ? 1 : 0
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <p className="service-row-desc">{service.desc}</p>
          {service.tags && (
            <p className="service-row-tags">{service.tags}</p>
          )}
        </motion.div>

        <span
          className={`service-read-more ${isActive ? 'is-visible' : ''}`}
          onClick={handleActionClick}
        >
          <span><RollingText text="Read more" /></span>
          <svg
            className="arrow-container"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <rect width="14" height="14" rx="2" fill="#D7D7D7"></rect>
            <path
              d="M9.96873 4.5V8.5625C9.96873 8.68682 9.91935 8.80605 9.83144 8.89396C9.74353 8.98186 9.6243 9.03125 9.49998 9.03125C9.37566 9.03125 9.25643 8.98186 9.16853 8.89396C9.08062 8.80605 9.03123 8.68682 9.03123 8.5625V5.63281L4.83162 9.83164C4.74356 9.9197 4.62413 9.96917 4.49959 9.96917C4.37506 9.96917 4.25562 9.9197 4.16756 9.83164C4.0795 9.74358 4.03003 9.62415 4.03003 9.49961C4.03003 9.37507 4.0795 9.25564 4.16756 9.16758L8.36717 4.96875H5.43748C5.31316 4.96875 5.19393 4.91936 5.10603 4.83146C5.01812 4.74355 4.96873 4.62432 4.96873 4.5C4.96873 4.37568 5.01812 4.25645 5.10603 4.16854C5.19393 4.08064 5.31316 4.03125 5.43748 4.03125H9.49998C9.6243 4.03125 9.74353 4.08064 9.83144 4.16854C9.91935 4.25645 9.96873 4.37568 9.96873 4.5Z"
              fill="#171717"
            ></path>
          </svg>
        </span>
      </div>

      {/* Right Column Area: Visual Art Card with Hatch Overlay */}
      <div className={`service-visual ${isActive ? 'is-visible' : ''}`} aria-hidden="true">
        <div className="service-visual-group">
          <span className="service-visual-logo" />
          <img
            src={service.img}
            alt=""
            loading="lazy"
            className="service-visual-photo"
          />
        </div>
      </div>
    </article>
  );
}
