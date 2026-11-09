import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { models, terms } from '../data.js';

export default function Prices() {
  return (
    <section id="prices" className="section">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 4vw, 42px)' }}>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="kicker">03 · Моделі та ціни</div>
            <h2 className="h2">Дев’ять базових моделей</h2>
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
            <span>Базова ціна</span>
            <span style={{ color: 'var(--accent-soft)' }}>З теплоізоляцією підлоги</span>
          </div>
        </Reveal>

        <div className="grid-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {models.map((m, i) => (
            <Reveal key={m.model + m.size} delay={(i % 3) * 0.06}>
              <motion.article
                className={m.featured ? 'glass-accent' : 'glass'}
                style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 'clamp(20px, 2.4vw, 28px)', height: '100%' }}
                whileHover={{ y: -6, borderColor: 'rgba(250,203,141,0.55)' }}
                transition={{ duration: 0.32 }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                  <h3 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: '#fff' }}>{m.model}</h3>
                  <span className="tnum" style={{ fontSize: 13, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.68)' }}>{m.size}</span>
                </div>
                <p className="body" style={{ margin: 0 }}>{m.features}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>Базова</div>
                    <div className="tnum" style={{ fontSize: 19, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{m.base}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent-soft)' }}>З ізоляцією</div>
                    <div className="tnum" style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: '#fff' }}>{m.insulated}</div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ display: 'grid', gap: 'clamp(14px, 2vw, 20px)', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <div className="glass" style={{ padding: '22px 24px', borderRadius: 18, borderLeft: '2px solid var(--accent)' }}>
            <p className="body" style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>
              Усі моделі: оцинкована стальна конструкція, теплозвукоізоляція, кольори панелей — білий, антрацит або під дерево, швидкий монтаж. Включено підготовку під кондиціонер.
            </p>
          </div>
          {terms.map((t) => (
            <div key={t.label} className="glass" style={{ padding: '22px 24px', borderRadius: 18 }}>
              <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-soft)', fontWeight: 600 }}>{t.label}</div>
              <div style={{ marginTop: 6, fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: '#fff' }}>{t.value}</div>
              <div style={{ marginTop: 4, fontSize: 13.5, fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>{t.note}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
