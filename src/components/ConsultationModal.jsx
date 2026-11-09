import { useEffect, useRef, useState } from 'react';
import { sendConsultation } from '../consultation.js';

export default function ConsultationModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) {
      setStatus('idle');
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    try {
      await sendConsultation(data);
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      data-lenis-prevent
      aria-labelledby="consultation-title"
      onClose={onClose}
      onClick={(e) => { if (e.target === dialogRef.current) onClose(); }}
    >
      <button type="button" className="modal-close" onClick={onClose} aria-label="Закрити">×</button>

      {status === 'success' ? (
        <div className="modal-body">
          <h2 id="consultation-title" className="modal-title">Дякуємо!</h2>
          <p className="body" style={{ margin: 0 }}>Заявку отримано — ми зв’яжемося з вами найближчим часом.</p>
          <button type="button" className="pill" onClick={onClose}>Закрити</button>
        </div>
      ) : (
        <form className="modal-body" onSubmit={handleSubmit}>
          <h2 id="consultation-title" className="modal-title">Замовити консультацію</h2>
          <p className="body" style={{ margin: 0 }}>Залиште контакти — підберемо рішення та відповімо на питання.</p>

          <label className="field">
            <span>Номер телефону *</span>
            <input type="tel" name="phone" required autoComplete="tel" inputMode="tel" placeholder="+38 0__ ___ __ __" />
          </label>
          <label className="field">
            <span>Пошта</span>
            <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
          </label>
          <label className="field">
            <span>Ваше питання</span>
            <textarea name="message" rows={4} placeholder="Яка модель вас цікавить, куди доставка…" />
          </label>

          {status === 'error' && (
            <p className="field-error">Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.</p>
          )}

          <button type="submit" className="pill" disabled={status === 'sending'} style={{ justifyContent: 'center' }}>
            {status === 'sending' ? 'Надсилаємо…' : 'Надіслати'}
          </button>
        </form>
      )}
    </dialog>
  );
}
