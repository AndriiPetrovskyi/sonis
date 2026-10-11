import { Fragment } from 'react';
import Reveal from './Reveal.jsx';
import { materials, specs, advantages } from '../data.js';

export default function Build() {
  return (
    <section id="build" className="section">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(26px, 4vw, 46px)' }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="kicker">04 · Конструкція</div>
          <h2 className="h2">З чого виготовлено</h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(16px, 2.4vw, 28px)', alignItems: 'start' }}>
          <Reveal className="glass" style={{ padding: 'clamp(22px, 2.6vw, 32px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(110px, auto) 1fr', gap: '14px 20px', fontSize: 14.5, lineHeight: 1.55 }}>
              {materials.map(([label, text], i) => (
                <Fragment key={label}>
                  <div style={{ fontWeight: 600, color: '#fff' }}>{label}</div>
                  <div style={{ fontWeight: 300, color: 'rgba(255,255,255,0.76)' }}>{text}</div>
                  {i < materials.length - 1 && (
                    <div style={{ gridColumn: '1 / -1', height: 1, background: 'rgba(255,255,255,0.1)' }} />
                  )}
                </Fragment>
              ))}
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 2vw, 20px)' }}>
            <Reveal delay={0.08} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14 }}>
              {specs.map((s) => (
                <div key={s.value} className="glass" style={{ padding: 20, borderRadius: 18 }}>
                  <div className="tnum" style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: '#fff' }}>{s.value}</div>
                  <div style={{ marginTop: 6, fontSize: 13, lineHeight: 1.5, fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>{s.text}</div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.14} className="glass-accent" style={{ padding: 'clamp(22px, 2.6vw, 30px)' }}>
              <h3 style={{ margin: '0 0 16px', fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: '#fff' }}>Чому обирають нас</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14.5, lineHeight: 1.55, fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}>
                {advantages.map((a) => (
                  <div key={a} style={{ display: 'flex', gap: 12 }}>
                    <span style={{ color: 'var(--accent-soft)' }}>—</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
