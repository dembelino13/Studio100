import React, { useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });

      if (!response.ok) throw new Error('Send failed');

      setSuccess(true);
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setError('Etwas ist schiefgelaufen. Bitte erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Projekt starten
            </div>
            <h2 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Lassen Sie uns ein System bauen, das Kunden bringt.
            </h2>
            <p className="mt-6 text-lg text-neutral-400 max-w-lg leading-relaxed">
              Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns innerhalb von 24 Stunden mit
              einer ehrlichen Einschätzung.
            </p>

            <div className="mt-12 space-y-4 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Check size={14} className="text-blue-400" />
                </div>
                Persönliches Strategie-Gespräch
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Check size={14} className="text-blue-400" />
                </div>
                Ehrliche Einschätzung Ihres Potenzials
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Check size={14} className="text-blue-400" />
                </div>
                Konkretes Angebot mit Performance-Garantie
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="p-8 lg:p-10 rounded-3xl bg-neutral-900 border border-neutral-800"
            >
              {success ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                    <Check className="text-green-400" size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-semibold">Danke für Ihre Anfrage.</h3>
                  <p className="mt-3 text-neutral-400">
                    Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ihr Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">
                        Unternehmen
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Firma GmbH"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">
                      E-Mail
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@unternehmen.de"
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2 block">
                      Worum geht's?
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 transition resize-none"
                    />
                  </div>

                  {error && <div className="text-sm text-red-400">{error}</div>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Wird gesendet...
                      </>
                    ) : (
                      <>
                        Projekt starten
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
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