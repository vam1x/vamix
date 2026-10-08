import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroDescription({ children, className }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.p className={className}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.3 }}>
      {children}
    </motion.p>
  );
}
