import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function RevealHeading({ text, className = '' }) {
  const reducedMotion = useReducedMotion();
  return <motion.span className={`hero-reveal ${className}`} aria-label={text} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ staggerChildren: reducedMotion ? 0 : 0.018 }}>
    {text.split(' ').map((word, i) => <span className="hero-reveal-word" aria-hidden="true" key={i}>{[...word].map((char, j) => <motion.span key={j} variants={{ hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : '105%' }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}>{char}</motion.span>)}{'\u00a0'}</span>)}
  </motion.span>;
}

