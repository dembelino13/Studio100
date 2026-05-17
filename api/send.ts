import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, phone, website, message, budget, startDate } = req.body;

  try {
    await resend.emails.send({
      from: 'Studio100 <noreply@studio-100.de>',
      to: 'schlaepfer.demian@gmail.com',
      subject: `Neue Projektanfrage von ${name}`,
      html: `
        <h2>Neue Projektanfrage – Studio100</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company || '-'}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>
        <p><strong>Website:</strong> ${website || '-'}</p>
        <p><strong>Budget:</strong> ${budget || '-'}</p>
        <p><strong>Startzeitpunkt:</strong> ${startDate || '-'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message || '-'}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Fehler beim Senden' });
  }
}