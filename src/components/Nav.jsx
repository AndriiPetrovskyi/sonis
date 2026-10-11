import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  ['#use', 'Застосування'],
  ['#gallery', 'Галерея'],
  ['#prices', 'Ціни'],
  ['#build', 'Конструкція'],
];

export default function Nav() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact((window.scrollY || 0) > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30, display: 'flex', flexWrap: 'wrap', alignItems: 'center',
      justifyContent: 'space-between', gap: '14px 28px',
      padding: `${compact ? 10 : 16}px clamp(16px, 4vw, 56px)`,
      background: compact ? 'rgba(20,19,22,0.78)' : 'rgba(23,22,26,0.55)',
      backdropFilter: 'blur(var(--glass)) saturate(150%)',
      WebkitBackdropFilter: 'blur(var(--glass)) saturate(150%)',
      borderBottom: '1px solid rgba(255,255,255,0.10)',
      transition: 'padding 320ms ease, background 320ms ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 20px)' }}>
      <Link to="/" className="back-btn" aria-label="Назад на головну">
        <span aria-hidden="true">←</span> Назад
      </Link>
      <Link to="/" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 10px', color: '#fff' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px, 2.2vw, 24px)', fontWeight: 600 }}>
          Контейнерні будиночки
        </span>
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-soft)', fontWeight: 500 }}>
          Туреччина · ЄС
        </span>
      </Link>
      </div>
      <nav className="nav-menu" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 22px', fontSize: 14 }}>
        {links.map(([href, label]) => (
          <a key={href} href={href} style={{ color: 'rgba(255,255,255,0.78)', padding: '6px 0' }}>{label}</a>
        ))}
        <a href="#contact" className="pill" style={{ padding: '10px 18px', fontSize: 14 }}>Консультація</a>
      </nav>
    </header>
  );
}
