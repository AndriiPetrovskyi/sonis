import Reveal from './Reveal.jsx';
import { contacts } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: 'clamp(30px, 5vw, 60px)' }}>
      <Reveal className="glass" style={{ position: 'relative', overflow: 'hidden', borderRadius: 28, maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 15% 0%, rgba(182,130,53,0.22) 0%, rgba(182,130,53,0) 60%)' }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(22px, 4vw, 44px)', padding: 'clamp(26px, 4.5vw, 56px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="kicker">05 · Контакти</div>
            <h2 className="h2" style={{ fontSize: 'clamp(28px, 4.6vw, 54px)' }}>Залишились питання?</h2>
            <p style={{ margin: 0, maxWidth: '44ch', fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.6, fontWeight: 300, color: '#fff' }}>
              Замовте безкоштовну консультацію — підберемо модель під ваше завдання, розрахуємо доставку та монтаж.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 6 }}>
              <a href="#contact" className="pill">Замовити консультацію</a>
              <a href="/docs/price-list.pdf" download className="pill pill-ghost">Прайс-лист</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 14, alignContent: 'start' }}>
            {contacts.map((c) => (
              <div key={c.label} style={{ padding: 20, borderRadius: 18, border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-soft)', fontWeight: 600 }}>{c.label}</div>
                <div style={{ marginTop: 8, fontSize: 17, fontWeight: 500, color: 'rgba(255,255,255,0.55)' }}>{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
