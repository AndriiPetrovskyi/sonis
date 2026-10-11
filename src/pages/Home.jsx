import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { sections } from '../sections.js';
import { partners } from '../partners.js';

const BRAND = 'SONIS';
const BRAND_SUB = 'MANAGEMENT GROUP';

export default function Home() {
  return (
    <section style={{
      position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(150px, 20vh, 210px) clamp(16px, 4vw, 56px) clamp(24px, 4vh, 48px)',
    }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <img
          src="/images/esat.jpg"
          alt="Будинок з облаштованою територією та вечірнім освітленням"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 45%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(20,19,22,0.35) 0%, rgba(20,19,22,0.08) 35%, rgba(20,19,22,0.62) 70%, rgba(20,19,22,0.92) 100%)',
        }} />
      </div>

      <header style={{
        position: 'absolute', top: 'clamp(16px, 3vw, 32px)', left: 'clamp(16px, 4vw, 56px)', right: 'clamp(16px, 4vw, 56px)',
        display: 'flex', alignItems: 'center',
      }}>
        <Link to="/" className="brand" aria-label={`${BRAND} ${BRAND_SUB}`}>
          <img src="/images/logo-white.png" alt="" className="brand-icon" />
          <span className="brand-name">{BRAND}</span>
          <span className="brand-sub">{BRAND_SUB}</span>
        </Link>
      </header>

      <div className="shell" style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(18px, 3vh, 32px)' }}>
        <Reveal immediate style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: '60ch' }}>
          <div className="kicker">Будівництво · Матеріали</div>
          <h1 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, min(6vw, 8vh), 76px)',
            lineHeight: 1.02, fontWeight: 500, color: '#fff', textWrap: 'balance',
          }}>
            Модульні будинки та будівельні матеріали
          </h1>
          <p style={{ margin: 0, fontSize: 'clamp(15px, 1.7vw, 19px)', lineHeight: 1.55, fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}>
            Оберіть напрям, що вас цікавить.
          </p>
        </Reveal>

        <Reveal immediate delay={0.1} style={{
          display: 'grid', gap: 'clamp(12px, 1.6vw, 18px)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
        }}>
          {sections.map((s) => (
            <Link key={s.to} to={s.to} className="glass home-card">
              <span className="kicker">{s.n}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}>
                {s.title}
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 300, color: 'rgba(255,255,255,0.75)' }}>
                {s.text}
              </span>
              <span className="home-card-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </Reveal>

        <Reveal immediate delay={0.2} className="partners">
          <span className="kicker">Наші партнери</span>
          {partners.map((p) => (
            <div key={p.name} className="partner">
              <img src={p.logo} alt={p.name} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
