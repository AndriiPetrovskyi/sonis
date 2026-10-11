export const gypsumPriceDate = '28.09.2026';
export const gypsumPriceFile = '/docs/gypsum-price-list.pdf';

const bag = (kg, pallet) => `Мішок ${kg} кг · піддон ${pallet} кг`;

export const gypsumPrices = [
  {
    title: 'Штукатурки та шпаклівки',
    note: 'Мішки 25–30 кг',
    items: [
      { n: 1, name: 'KM Start 25kg штукатурка', meta: bag(25, '1 125'), price: 239.46 },
      { n: 2, name: 'KM Start 30kg штукатурка', meta: bag(30, '1 200'), price: 287.35 },
      { n: 3, name: 'KM Universal 30kg штукатурка легка', meta: bag(30, '1 200'), price: 372.06 },
      { n: 4, name: 'KM Finish 25kg шпаклівка', meta: bag(25, '1 125'), price: 265.2 },
      { n: 5, name: 'KM MultiFinish 25kg шпаклівка старт + фініш', meta: bag(25, '1 125'), price: 456.69 },
      { n: 6, name: 'KM Saten 25kg шпаклівка фінішна', meta: bag(25, '1 125'), price: 280.8 },
      { n: 7, name: 'KM Polyfin 20kg шпаклівка фінішна полімерна', meta: bag(20, '1 280'), price: 548.5 },
      { n: 8, name: 'KM Filler 25kg шпаклівка для швів', meta: bag(25, '1 125'), price: 362.7 },
      { n: 9, name: 'KM Filler Plus 25kg армуюча шпаклівка для швів', meta: bag(25, '1 125'), price: 983.97 },
      { n: 10, name: 'KM MontageFIX 30kg клей для ГКЛ', meta: bag(30, '1 200'), price: 293.9 },
    ],
  },
  {
    title: 'Штукатурки та клей',
    note: 'Мішки 15 кг',
    items: [
      { n: 11, name: 'KM Start 15kg штукатурка', meta: bag(15, '1 200'), price: 175.03 },
      { n: 12, name: 'KM Universal 15kg штукатурка легка', meta: bag(15, '1 200'), price: 218.79 },
      { n: 13, name: 'KM MontageFIX 15kg клей для ГКЛ', meta: bag(15, '1 200'), price: 153.97 },
    ],
  },
  {
    title: 'Шпаклівки та штукатурки',
    note: 'Мішки 5 кг',
    items: [
      { n: 14, name: 'KM MultiFinish 5kg шпаклівка старт + фініш', meta: bag(5, '1 260'), price: 112.79 },
      { n: 15, name: 'KM Finish 5kg шпаклівка гіпсова', meta: bag(5, '1 260'), price: 101.71 },
      { n: 16, name: 'KM Saten 5kg шпаклівка фінішна', meta: bag(5, '1 260'), price: 101.71 },
      { n: 17, name: 'KM Filler 5kg шпаклівка для швів', meta: bag(5, '1 260'), price: 109.2 },
      { n: 18, name: 'KM Filler Plus 5kg армуюча шпаклівка для швів', meta: bag(5, '1 260'), price: 202.25 },
      { n: 19, name: 'KM Polyfin 5kg шпаклівка фінішна полімерна', meta: bag(5, '1 100'), price: 152.18 },
      { n: 20, name: 'KM Start 5kg штукатурка', meta: bag(5, '1 260'), price: 69.89 },
    ],
  },
  {
    title: 'Машинна штукатурка',
    note: 'КМ-75',
    items: [
      { n: 21, name: 'КМ-75 25kg штукатурка гіпсова машинна', meta: bag(25, '1 125'), price: 290.55 },
      { n: 22, name: 'КМ-75 30kg штукатурка гіпсова машинна', meta: bag(30, '1 200'), price: 348.66 },
      { n: 23, name: 'КМ-75 штукатурка гіпсова машинна насип', meta: 'Насип · 1 000 кг', price: 8.58 },
      { n: 24, name: 'КМ-75 штукатурка гіпсова машинна бігбеґ', meta: 'Бігбеґ · 1 100 кг', price: 8.58 },
    ],
  },
  {
    title: 'Ґрунтовка',
    items: [
      { n: 25, name: 'KM Grunt Block 10 ґрунтовка-концентрат', meta: 'Тара 10 кг · піддон 480 кг', price: 1065.01 },
    ],
  },
  {
    title: 'Гіпс будівельний',
    note: 'Г-5 Н ІІ',
    items: [
      { n: 26, name: 'Г-5 Н ІІ будівельний 40 кг', meta: bag(40, '1 200'), price: 330.1 },
      { n: 27, name: 'Г-5 Н ІІ будівельний 20 кг', meta: bag(20, '1 280'), price: 168.17 },
      { n: 28, name: 'Г-5 Н ІІ будівельний 5 кг', meta: bag(5, '1 260'), price: 52.26 },
      { n: 29, name: 'Г-5 Н ІІ будівельний 2 кг', meta: bag(2, '1 100'), price: 23.96 },
    ],
  },
  {
    title: 'Гіпсокартон (ГКЛ)',
    note: '2500 × 1200 × 12,5 мм',
    items: [
      { n: 30, name: 'Гіпсокартонна плита А — 2500/1200/12.5', meta: '51 лист у стопі · 153 м²', price: 146.7 },
      { n: 31, name: 'Гіпсокартонна плита Н2 — 2500/1200/12.5', meta: '51 лист у стопі · 153 м²', price: 170.1 },
    ],
  },
];
