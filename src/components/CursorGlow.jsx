import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Світлова пляма, що плавно слідує за курсором (тільки на пристроях з мишею). */
export default function CursorGlow() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover)').matches) return;
    const el = ref.current;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;

    const loop = () => {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = Math.abs(x - cx) + Math.abs(y - cy) > 0.6 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      el.style.opacity = '1';
      if (!raf) raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-14vw', left: '-8vw', width: '52vw', height: '52vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(182,130,53,0.28) 0%, rgba(182,130,53,0) 68%)',
        filter: 'blur(10px)', animation: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-18vw', right: '-10vw', width: '58vw', height: '58vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(120,150,190,0.22) 0%, rgba(120,150,190,0) 70%)',
        filter: 'blur(10px)',
      }} />
      <div ref={ref} style={{
        position: 'absolute', top: 0, left: 0, width: 520, height: 520, margin: '-260px 0 0 -260px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(250,203,141,0.16) 0%, rgba(250,203,141,0) 65%)',
        opacity: 0, transition: 'opacity 600ms ease',
      }} />
    </div>
  );
}
