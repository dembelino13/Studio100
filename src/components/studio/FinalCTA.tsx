import React, { useState } from 'react';
import { ArrowRight, Loader2, Check, CalendarDays, Mail } from 'lucide-react';
import { LINKS } from '@/data/angebot';


const FinalCTA: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', website: '', message: '', startzeit: '', fax: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email) {
      setError('Bitte Name und E-Mail eingeben.');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Send failed');
      setSuccess(true);
      setForm({ name: '', email: '', company: '', phone: '', website: '', message: '', startzeit: '', fax: '' });
    } catch {
      setError('Etwas ist schiefgelaufen. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Projekt starten
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Lassen Sie uns ein System bauen, das Kunden bringt.
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-lg leading-relaxed">
              Starten Sie mit dem kostenlosen Digital-Check, buchen Sie direkt ein Gespräch – oder schreiben Sie uns
              kurz. Wir melden uns persönlich mit einer ehrlichen Einschätzung.
            </p>
            <div className="mt-12 space-y-4 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Check size={14} className="text-blue-400" />
                </div>
                Persönliches Gespräch (30 Minuten, unverbindlich)
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Check size={14} className="text-blue-400" />
                </div>
                Ehrliche Einschätzung Ihrer heutigen Website
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Check size={14} className="text-blue-400" />
                </div>
                Offerte zum Fixpreis mit Termin-Garantie
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href={LINKS.digitalCheck} className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all">
                Kostenloser Digital-Check <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all">
                <CalendarDays size={16} /> Gespräch buchen
              </a>
            </div>
            <a href={`mailto:${LINKS.email}`} className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
              <Mail size={14} /> {LINKS.email}
            </a>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-900 border border-neutral-800"
            >
              {success ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                    <Check className="text-green-400" size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-semibold">Danke für Ihre Anfrage.</h3>
                  <p className="mt-3 text-neutral-400">
                    Wir melden uns persönlich bei Ihnen – in der Regel am nächsten Arbeitstag.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <input type="text" name="fax" value={form.fax} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">Name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Ihr Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">Unternehmen</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Firma GmbH"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">E-Mail</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@unternehmen.ch"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">Telefonnummer</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+41 79 000 00 00"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">Website-Link</label>
                    <input name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://ihre-website.ch"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">Projektbeschreibung</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition resize-none" />
                  </div>

                  {/* Startzeitpunkt */}
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">Gewünschter Startzeitpunkt</label>
                    <select name="startzeit" value={form.startzeit} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-neutral-600 transition appearance-none">
                      <option value="">Bitte auswählen</option>
                      <option value="sofort">Sofort</option>
                      <option value="1-2 Monate">In 1–2 Monaten</option>
                      <option value="3+ Monate">In 3+ Monaten</option>
                    </select>
                  </div>

                  {error && <div className="text-sm text-red-400">{error}</div>}

                  <button type="submit" disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all disabled:opacity-60">
                    {loading ? (
                      <><Loader2 size={16} className="animate-spin" /> Wird gesendet...</>
                    ) : (
                      <>Anfrage senden <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    Mit dem Absenden stimmen Sie unseren{' '}
                    <a href="/datenschutz" className="text-neutral-400 underline hover:text-white transition">
                      Datenschutzbestimmungen
                    </a>{' '}
                    zu.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;