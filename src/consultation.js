// TODO: replace '#' with the real endpoint once the email/service is provided.
export const CONSULTATION_ENDPOINT = '#';

export async function sendConsultation(data) {
  if (CONSULTATION_ENDPOINT === '#') return;

  const res = await fetch(CONSULTATION_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
}
