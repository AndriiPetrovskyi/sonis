import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import PriceList from '../components/PriceList.jsx';
import { sections } from '../sections.js';
import { gypsumPrices, gypsumPriceDate, gypsumPriceFile } from '../gypsumData.js';

const section = sections.find((s) => s.to === '/gypsum');

const formatPrice = (price) =>
  `${price.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} грн`;

export default function Gypsum() {
  return (
    <>
      <PageHero section={section} title={section.heroTitle}>
        <p className="body" style={{ margin: 0, maxWidth: '52ch', color: 'rgba(255,255,255,0.85)' }}>
          Штукатурки, шпаклівки, клей для ГКЛ, будівельний гіпс і гіпсокартонні плити. Ціни з ПДВ.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a href="#gypsum-prices" className="pill">Дивитись ціни</a>
          <a href={gypsumPriceFile} download className="pill pill-ghost">Завантажити прайс (PDF)</a>
          <Link to="/" className="pill pill-ghost">← На головну</Link>
        </div>
      </PageHero>

      <PriceList
        id="gypsum-prices"
        title="Ціни на гіпс і гіпсокартон"
        subtitle="Ціни в гривнях, з ПДВ."
        date={gypsumPriceDate}
        file={gypsumPriceFile}
        groups={gypsumPrices}
        formatPrice={formatPrice}
      />
    </>
  );
}
