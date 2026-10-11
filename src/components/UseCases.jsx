import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { useCases } from '../data.js';

export default function UseCases() {
  return (
    <section id="use" className="section">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(26px, 4vw, 48px)' }}>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="kicker">01 · Застосування</div>
            <h2 className="h2">Де це можна використовувати</h2>
          </div>
          <p className="body" style={{ margin: 0, maxWidth: '38ch' }}>
            Один модуль ставиться за день, кілька — з’єднуються в блок потрібної площі.
          </p>
        </Reveal>

        <div className="grid-auto">
          {useCases.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.06}>
              <motion.article
                className="glass"
                style={{ padding: 'clamp(22px, 2.6vw, 32px)', height: '100%' }}
                whileHover={{ y: -6, borderColor: 'rgba(250,203,141,0.45)', background: 'rgba(255,255,255,0.1)' }}
                transition={{ duration: 0.32 }}
              >
                <div className="tnum" style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 500, color: 'var(--accent-soft)', lineHeight: 1 }}>{c.n}</div>
                <h3 style={{ margin: '14px 0 8px', fontSize: 20, fontWeight: 600, color: '#fff' }}>{c.title}</h3>
                <p className="body" style={{ margin: 0 }}>{c.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
