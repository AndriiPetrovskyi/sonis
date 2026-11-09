import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ConsultationModal from './ConsultationModal.jsx';
import { salesContacts } from '../contacts.js';

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="section" style={{ paddingBottom: 'clamp(30px, 5vw, 60px)' }}>
      <Reveal className="glass" style={{ position: 'relative', overflow: 'hidden', borderRadius: 28, maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 120% at 15% 0%, rgba(182,130,53,0.22) 0%, rgba(182,130,53,0) 60%)' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, padding: 'clamp(26px, 4.5vw, 56px)' }}>
          <div className="kicker">05 · Контакти</div>
          <h2 className="h2" style={{ fontSize: 'clamp(28px, 4.6vw, 54px)' }}>Залишились питання?</h2>
          <p style={{ margin: 0, maxWidth: '44ch', fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.6, fontWeight: 300, color: '#fff' }}>
            Замовте безкоштовну консультацію — підберемо модель під ваше завдання, розрахуємо доставку та монтаж.
          </p>
          <p style={{ margin: 0, fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.6, fontWeight: 300, color: '#fff' }}>
            По всіх питаннях звертайтесь за номером телефону{' '}
            <a href={`tel:${salesContacts.phone.replace(/\s/g, '')}`} style={{ fontWeight: 500, whiteSpace: 'nowrap' }}>
              {salesContacts.phone}
            </a>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 6 }}>
            <button type="button" className="pill" onClick={() => setModalOpen(true)}>Замовити консультацію</button>
            <a href="/docs/price-list.pdf" download className="pill pill-ghost">Прайс-лист</a>
          </div>
        </div>
      </Reveal>

      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
