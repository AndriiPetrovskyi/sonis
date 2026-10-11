import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PriceList from '../components/PriceList.jsx';
import { sections } from '../sections.js';
import { cementPrices, cementPriceDate, cementPriceFile } from '../cementData.js';

const section = sections.find((s) => s.to === '/cement');

const formatPrice = (price) => `${price.toLocaleString('uk-UA')} грн/т`;

export default function Cement() {
  return (
    <>
      <PageHero section={section} title="IFCEM — реально найкращий цемент">
        <p className="body" style={{ margin: 0, maxWidth: '52ch', color: 'rgba(255,255,255,0.85)' }}>
          Портландцемент і сульфатостійкий цемент у мішках по 25 кг та насипом. Ціни з ПДВ.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a href="#cement-prices" className="pill">Дивитись ціни</a>
          <a href={cementPriceFile} download className="pill pill-ghost">Завантажити прайс (PDF)</a>
          <Link to="/" className="pill pill-ghost">← На головну</Link>
        </div>
      </PageHero>

      <PriceList
        id="cement-prices"
        title="Ціни на цемент"
        subtitle="Ціна в гривнях за тонну, з ПДВ."
        date={cementPriceDate}
        file={cementPriceFile}
        groups={cementPrices}
        formatPrice={formatPrice}
      />
    </>
  );
}
