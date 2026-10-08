import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FaqAnswer({ isOpen, id, labelledBy, children }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      id={id}
      aria-labelledby={labelledBy}
      aria-hidden={!isOpen}
      className="faq-answer-motion"
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="about-faq-answer-wrapper"
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.18, delay: reducedMotion || !isOpen ? 0 : 0.08 }}
      >
        <p className="about-faq-answer-text">{children}</p>
      </motion.div>
    </motion.div>
  );
}
