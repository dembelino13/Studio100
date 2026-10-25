import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Kontaktformular der Startseite -> Mail an Studio100.
// Eingaben werden gekürzt und HTML-escaped (kein HTML aus dem Formular in der Mail), Honeypot "fax".
const esc = (v: unknown, max = 500) =>
  (typeof v === 'string' ? v.trim().slice(0, max) : '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const b = (req.body ?? {}) as Record<string, unknown>;
  if (typeof b.fax === 'string' && b.fax.trim()) return res.status(200).json({ success: true }); // Honeypot

  const name = esc(b.name, 100);
  const email = esc(b.email, 200);
  if (name.length < 2 || !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) {
    return res.status(400).json({ error: 'Bitte Name und gültige E-Mail angeben.' });
  }
  const company = esc(b.company, 120);
  const phone = esc(b.phone, 40);
  const website = esc(b.website, 200);
  const startzeit = esc(b.startzeit ?? b.startDate, 40);
  const message = esc(b.message, 3000).replace(/\n/g, '<br>');

  try {
    await resend.emails.send({
      from: 'Studio100 <noreply@studio-100.de>',
      to: 'demian@studio-100.de',
      replyTo: email.replace(/&amp;/g, '&'),
      subject: `Neue Projektanfrage von ${name.replace(/&[a-z#0-9]+;/gi, '')}`,
      html: `
        <h2>Neue Projektanfrage – Studio100</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company || '-'}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Website:</strong> ${website || '-'}</p>
        <p><strong>Startzeitpunkt:</strong> ${startzeit || '-'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message || '-'}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Fehler beim Senden' });
  }
}
