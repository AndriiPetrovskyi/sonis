import { salesContacts } from './contacts.js';

export const CONSULTATION_ENDPOINT = `https://formsubmit.co/ajax/${salesContacts.email}`;

export async function sendConsultation(data) {
  const res = await fetch(CONSULTATION_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      'Телефон': data.phone,
      'Пошта': data.email || '—',
      'Питання': data.message || '—',
      _subject: 'Нова заявка на консультацію — sonismg.com',
      _template: 'table',
      _captcha: 'false',
    }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || String(json.success) !== 'true') {
    throw new Error(json.message || `Request failed: ${res.status}`);
  }
}
