import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import RollingText from '../RollingText';

export default function ServiceRow({ service, index, navigate }) {
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const active = hovered || toggled || focused;
  return (
    <motion.article className={`service-row ${active ? 'is-expanded' : ''}`}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      onFocus={(event) => { if (event.target.matches(':focus-visible')) setFocused(true); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) { setFocused(false); setToggled(false); } }}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover)').matches) setHovered(true); }}
      onPointerLeave={(event) => { if (event.pointerType === 'mouse') setHovered(false); }}
      >
      <div className="service-row-copy">
        <h3 className="service-row-title"><button type="button" className="service-row-toggle" aria-expanded={active} aria-controls={`${service.id}-detail`} onClick={(event) => { if (event.detail === 0 || !window.matchMedia('(hover: hover)').matches) setToggled(value => !value); }}>{service.title}</button></h3>
        <motion.div id={`${service.id}-detail`} className="service-row-detail" initial={false}
          animate={{ height: active ? 'auto' : 1, opacity: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <motion.p className="service-row-desc" initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.35, delay: active && !reducedMotion ? 0.12 : 0, ease: [0.16, 1, 0.3, 1] }}>{service.desc}</motion.p>
          <motion.p className="service-row-tags" initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.35, delay: active && !reducedMotion ? 0.18 : 0, ease: [0.16, 1, 0.3, 1] }}>{service.tags}</motion.p>
        </motion.div>
      </div>
      <a className={`service-read-more ${active ? 'is-visible' : ''}`} href="/contact" tabIndex={active ? 0 : -1} aria-label={`Discuss ${service.title}`} onClick={(event) => {
        if (navigate && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); navigate('/contact'); }
      }}><RollingText text="Read more" /><span className="arrow-container" aria-hidden="true">↗</span></a>
      <div className={`service-visual ${active ? 'is-visible' : ''}`} aria-hidden="true">
        <motion.div className="service-visual-group" initial={false}
          animate={{ opacity: active ? 1 : 0, scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.58, delay: active && !reducedMotion ? 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}>
          <span className="service-visual-logo" /><img src={service.img} alt="" width="480" height="320" loading="lazy" decoding="async" className="service-visual-photo" />
        </motion.div>
      </div>
    </motion.article>
  );
}
