import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { gallery } from '../data.js';

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 4vw, 44px)' }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="kicker">02 · Галерея</div>
          <h2 className="h2">Варіанти фасадів та інтер’єру</h2>
        </Reveal>

        <div className="grid-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(268px, 1fr))' }}>
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.05}>
              <motion.figure
                className="glass"
                style={{ margin: 0, padding: 10, height: '100%' }}
                whileHover={{ y: -6, borderColor: 'rgba(250,203,141,0.4)' }}
                transition={{ duration: 0.34 }}
              >
                <div style={{ overflow: 'hidden', borderRadius: 14, background: '#1f1e22' }}>
                  <motion.img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    style={{ display: 'block', width: '100%', aspectRatio: '4 / 3', objectFit: 'cover' }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                </div>
                <figcaption style={{ padding: '14px 8px 6px', fontSize: 14, lineHeight: 1.5, fontWeight: 300, color: 'rgba(255,255,255,0.78)' }}>
                  {g.caption}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
