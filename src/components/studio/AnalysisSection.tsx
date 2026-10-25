import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Loader2,
  Globe,
  Sparkles,
  Search,
  Smartphone,
  MessageSquare,
  Users,
  Shield,
  FileText,
  Lightbulb,
  CheckCircle2,
  Check,
} from 'lucide-react';
import { LINKS } from '@/data/angebot';

// Website-Check „Was verschenkt Ihre Website gerade?“ (von der alten Seite).
// Die Prüfung läuft wirklich: das CRM (check.studio-100.de/api/website-check) ruft die Website ab und bewertet
// sie nach denselben Regeln wie der Digital-Check. Jede Prüfung landet als Lead im CRM (Herkunft „Website-Check“),
// mit Kontaktdaten zusätzlich als Anfrage mit Aufgabe.

type Stage = 'idle' | 'loading' | 'result';
type Ampel = 'rot' | 'gelb' | 'gruen' | 'grau';
interface Bereich { bereich: string; label: string; ampel: Ampel; fakt: string }
interface Ergebnis { website: string | null; erreichbar: boolean | null; punkte: number | null; bereiche: Bereich[]; hebel: string[] }

const STATUS_STEPS = [
  'Website wird abgerufen…',
  'Unterseiten werden geprüft…',
  'Kontaktwege und Stellenseite werden gesucht…',
  'Ladezeit auf dem Handy wird gemessen…',
  'Ergebnis wird erstellt…',
];

const ICON: Record<string, React.ReactNode> = {
  auffindbarkeit: <Search size={16} />,
  handy_tempo: <Smartphone size={16} />,
  anfragen: <MessageSquare size={16} />,
  recruiting: <Users size={16} />,
  vertrauen: <Shield size={16} />,
  pflichtangaben: <FileText size={16} />,
};
const AMPEL: Record<Ampel, { text: string; dot: string; bar: string; width: number }> = {
  gruen: { text: 'gut', dot: 'bg-green-500', bar: 'bg-green-500', width: 100 },
  gelb: { text: 'ausbaufähig', dot: 'bg-amber-500', bar: 'bg-amber-500', width: 60 },
  rot: { text: 'verschenkt Anfragen', dot: 'bg-red-500', bar: 'bg-red-500', width: 25 },
  grau: { text: 'nicht geprüft', dot: 'bg-neutral-300', bar: 'bg-neutral-300', width: 0 },
};

const ScoreRing: React.FC<{ value: number }> = ({ value }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color = value >= 80 ? '#16a34a' : value >= 55 ? '#2563eb' : '#f59e0b';
  return (
    <div className="relative w-32 h-32 shrink-0">
      <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} stroke="#e5e5e5" strokeWidth="8" fill="none" />
        <circle cx="60" cy="60" r={radius} stroke={color} strokeWidth="8" fill="none" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: 'stroke-dashoffset 1.2s ease-out' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-semibold text-neutral-900">{value}</div>
        <div className="text-[10px] uppercase tracking-widest text-neutral-500">/ 100</div>
      </div>
    </div>
  );
};

const inputCls = 'w-full px-4 py-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition';

const AnalysisSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [stage, setStage] = useState<Stage>('idle');
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<Ergebnis | null>(null);
  const [error, setError] = useState('');
  const [kontakt, setKontakt] = useState({ firma: '', name: '', email: '', telefon: '', einverstanden: false, fax: '' });
  const [kStatus, setKStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [kError, setKError] = useState('');
  const resultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stage !== 'loading') return;
    const interval = setInterval(() => setStepIndex((i) => Math.min(i + 1, STATUS_STEPS.length - 1)), 4000);
    return () => clearInterval(interval);
  }, [stage]);

  useEffect(() => {
    if (stage === 'result' && resultRef.current) resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [stage]);

  const normalizeUrl = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return '';
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  };
  const isValidUrl = (raw: string) => {
    try {
      const u = new URL(normalizeUrl(raw));
      return !!u.hostname && u.hostname.includes('.');
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!url.trim()) return setError('Bitte eine Website-URL eingeben.');
    if (!isValidUrl(url)) return setError('Bitte eine gültige Website-URL eingeben (z. B. ihre-firma.ch).');
    setStage('loading');
    setStepIndex(0);
    try {
      const r = await fetch(LINKS.websiteCheckApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ schritt: 'analyse', url: normalizeUrl(url) }),
      });
      const j = await r.json().catch(() => null);
      if (!r.ok || !j?.ok) throw new Error(j?.error ?? 'Die Prüfung hat nicht geklappt. Bitte versuchen Sie es nochmals.');
      setResult(j as Ergebnis);
      setStage('result');
    } catch (err) {
      setError(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : 'Die Prüfung hat nicht geklappt. Bitte versuchen Sie es nochmals.');
      setStage('idle');
    }
  };

  const sendKontakt = async (e: React.FormEvent) => {
    e.preventDefault();
    setKError('');
    if (kontakt.name.trim().length < 2) return setKError('Bitte Ihren Namen angeben.');
    if (!kontakt.email.trim() && !kontakt.telefon.trim()) return setKError('Bitte Telefon oder E-Mail angeben.');
    if (!kontakt.einverstanden) return setKError('Bitte die Datenschutzhinweise bestätigen.');
    setKStatus('sending');
    try {
      const zusammenfassung = (result?.bereiche ?? []).map((b) => `${b.label}: ${AMPEL[b.ampel].text} (${b.fakt})`).join('; ');
      const r = await fetch(LINKS.websiteCheckApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ schritt: 'kontakt', url: result?.website ?? normalizeUrl(url), ...kontakt, zusammenfassung }),
      });
      const j = await r.json().catch(() => null);
      if (!r.ok || !j?.ok) throw new Error(j?.error ?? 'Senden fehlgeschlagen.');
      setKStatus('done');
    } catch (err) {
      setKError(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : 'Senden fehlgeschlagen. Bitte nochmals versuchen.');
      setKStatus('idle');
    }
  };

  const handleReset = () => {
    setStage('idle');
    setResult(null);
    setUrl('');
    setStepIndex(0);
    setKStatus('idle');
  };

  const geprueft = (result?.bereiche ?? []).filter((b) => b.ampel !== 'grau').length;

  return (
    <section id="analysis" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Kostenloser Website-Check</div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Was verschenkt Ihre<br />
            <span className="text-neutral-400">Website gerade?</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Geben Sie Ihre Adresse ein – wir prüfen Ihre Website live: Kontaktwege, Stellenseite, Handy-Tempo,
            Sicherheit und Pflichtangaben. Kostenlos. Unverbindlich.
          </p>
        </div>

        {stage === 'idle' && (
          <form onSubmit={handleSubmit} className="mt-12 sm:mt-14 max-w-2xl mx-auto p-2 rounded-3xl bg-neutral-50 border border-neutral-200">
            <div className="bg-white rounded-2xl p-5 sm:p-8 space-y-4">
              <label htmlFor="wc-url" className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">Ihre Website</label>
              <div className="relative">
                <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input id="wc-url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="ihre-firma.ch"
                  inputMode="url" autoComplete="url" className={`${inputCls} pl-11`} />
              </div>
              {error && <div className="text-sm text-red-600">{error}</div>}
              <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all">
                Website kostenlos prüfen
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-neutral-500">
                <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-600" /> 100% kostenlos</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-600" /> Keine Anmeldung</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-600" /> Ergebnis in ca. 30 Sekunden</div>
              </div>
              <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
                Die Adresse und das Ergebnis speichern wir, um Sie bei Interesse beraten zu können. Mehr in der{' '}
                <a href="/datenschutz" className="underline hover:text-neutral-600">Datenschutzerklärung</a>.
              </p>
            </div>
          </form>
        )}

        {stage === 'loading' && (
          <div className="mt-12 sm:mt-14 max-w-2xl mx-auto p-2 rounded-3xl bg-neutral-50 border border-neutral-200">
            <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-14 text-center">
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-neutral-100" />
                <div className="absolute inset-0 rounded-full border-2 border-neutral-900 border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center"><Sparkles size={20} className="text-neutral-900" /></div>
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Prüfung läuft</div>
              <div className="h-7"><p key={stepIndex} className="text-lg font-medium text-neutral-900 animate-fade-in">{STATUS_STEPS[stepIndex]}</p></div>
              <div className="mt-8 max-w-sm mx-auto space-y-2">
                {STATUS_STEPS.map((step, i) => (
                  <div key={step} className={`flex items-center gap-2 text-xs transition-colors ${i <= stepIndex ? 'text-neutral-900' : 'text-neutral-300'}`}>
                    {i < stepIndex ? <CheckCircle2 size={14} className="text-green-600 shrink-0" />
                      : i === stepIndex ? <Loader2 size={14} className="animate-spin text-blue-600 shrink-0" />
                      : <div className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0" />}
                    <span className="text-left">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {stage === 'result' && result && (
          <div ref={resultRef} className="mt-12 sm:mt-14 max-w-4xl mx-auto">
            <div className="p-2 rounded-3xl bg-neutral-50 border border-neutral-200">
              <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 border-b border-neutral-100">
                  {result.punkte != null && <ScoreRing value={result.punkte} />}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-2">Ergebnis für</div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 leading-tight break-words">{result.website ?? url}</h3>
                    <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                      {result.erreichbar === false
                        ? 'Die Website war bei unserer Prüfung nicht erreichbar.'
                        : `Live geprüft: ${geprueft} von ${result.bereiche.length} Bereichen. Die Punkte sind eine grobe Einschätzung aus den Ampeln.`}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-8">
                  {result.bereiche.map((b) => (
                    <div key={b.bereich} className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">{ICON[b.bereich]}</div>
                          <span className="text-sm font-medium text-neutral-900">{b.label}</span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 whitespace-nowrap">
                          <span className={`w-2 h-2 rounded-full ${AMPEL[b.ampel].dot}`} />{AMPEL[b.ampel].text}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-neutral-200 overflow-hidden">
                        <div className={`h-full ${AMPEL[b.ampel].bar} rounded-full`} style={{ width: `${AMPEL[b.ampel].width}%`, transition: 'width 1s ease-out' }} />
                      </div>
                      <p className="mt-3 text-xs text-neutral-600 leading-relaxed">{b.fakt.charAt(0).toUpperCase() + b.fakt.slice(1)}.</p>
                    </div>
                  ))}
                </div>

                {result.hebel.length > 0 && (
                  <div className="mt-8 p-6 rounded-2xl bg-neutral-900 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb size={16} className="text-amber-400" />
                      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">Die grössten Hebel</span>
                    </div>
                    <ul className="space-y-3">
                      {result.hebel.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-200 leading-relaxed">
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-semibold text-white shrink-0">{i + 1}</div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 p-5 sm:p-6 lg:p-8 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
                  {kStatus === 'done' ? (
                    <div className="text-center py-4">
                      <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4"><Check className="text-green-600" size={22} /></div>
                      <h4 className="text-xl font-semibold text-neutral-900">Danke – wir melden uns persönlich.</h4>
                      <p className="mt-2 text-sm text-neutral-600">Sie erhalten Ihren ausführlichen Digital-Check mit konkreten Vorschlägen für Ihren Betrieb.</p>
                    </div>
                  ) : (
                    <form onSubmit={sendKontakt} className="space-y-4">
                      <div className="text-center">
                        <h4 className="text-xl lg:text-2xl font-semibold text-neutral-900 leading-snug max-w-2xl mx-auto">Ausführlichen Digital-Check erhalten?</h4>
                        <p className="mt-2 text-sm text-neutral-600 max-w-xl mx-auto">Wir schauen Ihre Website persönlich an und zeigen Ihnen, welche Hebel für Ihren Betrieb am meisten bringen – kostenlos.</p>
                      </div>
                      <input type="text" name="fax" value={kontakt.fax} onChange={(e) => setKontakt({ ...kontakt, fax: e.target.value })} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input aria-label="Firma" placeholder="Firma" value={kontakt.firma} onChange={(e) => setKontakt({ ...kontakt, firma: e.target.value })} className={inputCls} />
                        <input aria-label="Name" placeholder="Ihr Name" value={kontakt.name} onChange={(e) => setKontakt({ ...kontakt, name: e.target.value })} className={inputCls} />
                        <input aria-label="E-Mail" type="email" placeholder="E-Mail" value={kontakt.email} onChange={(e) => setKontakt({ ...kontakt, email: e.target.value })} className={inputCls} />
                        <input aria-label="Telefon" type="tel" placeholder="Telefon" value={kontakt.telefon} onChange={(e) => setKontakt({ ...kontakt, telefon: e.target.value })} className={inputCls} />
                      </div>
                      <label className="flex items-start gap-2 text-xs text-neutral-600 leading-relaxed">
                        <input type="checkbox" checked={kontakt.einverstanden} onChange={(e) => setKontakt({ ...kontakt, einverstanden: e.target.checked })} className="mt-0.5" />
                        <span>Ich bin einverstanden, dass Studio100 (Rosiello Solutions GmbH) meine Angaben speichert, um mich zum Digital-Check zu kontaktieren. <a href="/datenschutz" className="underline">Datenschutz</a></span>
                      </label>
                      {kError && <div className="text-sm text-red-600">{kError}</div>}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button type="submit" disabled={kStatus === 'sending'} className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all disabled:opacity-60">
                          {kStatus === 'sending' ? <Loader2 size={16} className="animate-spin" /> : null}
                          Digital-Check anfordern
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button type="button" onClick={handleReset} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition px-4 py-3">Andere Website prüfen</button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalysisSection;
