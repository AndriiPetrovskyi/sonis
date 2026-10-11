import Reveal from './Reveal.jsx';
import { salesContacts } from '../contacts.js';

export default function PriceList({ id, title, subtitle, date, file, groups, formatPrice }) {
  return (
    <section id={id} className="section">
      <div className="shell" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 32px)' }}>
        <Reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="kicker">Прайс-лист від {date}</div>
            <h2 className="h2">{title}</h2>
            <p className="body" style={{ margin: 0 }}>{subtitle}</p>
          </div>
          <a href={file} download className="pill">Завантажити прайс (PDF)</a>
        </Reveal>

        {groups.map((group) => (
          <Reveal key={group.title} className="glass price-group">
            <div className="price-group-head">
              <h3>{group.title}</h3>
              {group.note && <span>{group.note}</span>}
            </div>
            {group.items.map((item) => (
              <div key={item.n} className="price-row">
                <span className="price-n">{item.n}</span>
                <span className="price-name">
                  {item.name}
                  {item.meta && <span className="price-meta">{item.meta}</span>}
                </span>
                <span className={`price-value tnum${item.price === null ? ' price-value-muted' : ''}`}>
                  {item.price === null ? 'під замовлення' : formatPrice(item.price)}
                </span>
              </div>
            ))}
          </Reveal>
        ))}

        <Reveal className="body" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
          <span>Для замовлення:</span>
          <a href={`tel:${salesContacts.phone.replace(/\s/g, '')}`}>{salesContacts.phone}</a>
          <a href={`mailto:${salesContacts.email}`}>{salesContacts.email}</a>
        </Reveal>
      </div>
    </section>
  );
}
