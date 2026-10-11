import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import { sections } from '../sections.js';

export default function ComingSoon({ path }) {
  const section = sections.find((s) => s.to === path);

  return (
    <PageHero section={section} title={section.heroTitle}>
      <p className="body" style={{ margin: 0, maxWidth: '50ch', color: 'rgba(255,255,255,0.85)' }}>
        Сторінка в розробці — незабаром тут з’явиться асортимент і ціни.
      </p>
      <div>
        <Link to="/" className="pill pill-ghost">← На головну</Link>
      </div>
    </PageHero>
  );
}
