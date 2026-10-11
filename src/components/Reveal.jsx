import { motion, useReducedMotion } from 'framer-motion';

/** Скрол-анімація появи: працює через framer-motion whileInView. */
export default function Reveal({ children, delay = 0, y = 26, as = 'div', className, style, id, immediate = false }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const trigger = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '0px 0px -8% 0px' } };
  return (
    <Tag
      id={id}
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
