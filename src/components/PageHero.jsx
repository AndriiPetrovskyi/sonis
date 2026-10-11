export default function PageHero({ section, title, children }) {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: section.image ? 'flex-end' : 'center' }}>
      {section.image && (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={section.image}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: section.imagePosition || '50% 40%' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(20,19,22,0.25) 0%, rgba(20,19,22,0.1) 35%, rgba(20,19,22,0.7) 72%, rgba(20,19,22,0.94) 100%)',
          }} />
        </div>
      )}

      <div className="shell" style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="kicker">{section.n} · {title ? section.title : 'Розділ'}</div>
        <h1 className="h2">{title || section.title}</h1>
        {children}
      </div>
    </section>
  );
}
