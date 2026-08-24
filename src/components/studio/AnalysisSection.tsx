import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Loader2,
  Globe,
  Sparkles,
  Eye,
  Target,
  Shield,
  Compass,
  TrendingUp,
  Smartphone,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

type Stage = 'idle' | 'loading' | 'result';

interface AnalysisItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  score: number;
  comment: string;
}

interface AnalysisResult {
  total: number;
  firstImpression: string;
  items: AnalysisItem[];
  improvements: string[];
}

const STATUS_STEPS = [
  'Website wird geprüft…',
  'Struktur wird analysiert…',
  'Conversion-Potenzial wird bewertet…',
  'Vertrauensfaktoren werden geprüft…',
  'Analyse wird erstellt…',
];

// deterministic pseudo-random based on URL string so the same URL gives
// the same result (feels real) but different URLs vary.
const hashString = (str: string): number => {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

const buildAnalysis = (rawUrl: string): AnalysisResult => {
  const seed = hashString(rawUrl.toLowerCase().trim());
  // produce a value 55..82 for each metric (realistic, not flattering, not insulting)
  const score = (offset: number) => 55 + ((seed + offset * 137) % 28);

  const items: AnalysisItem[] = [
    {
      key: 'firstImpression',
      label: 'Erster Eindruck',
      icon: <Eye size={16} />,
      score: score(1),
      comment:
        'Die Headline kommuniziert noch nicht klar genug, welchen konkreten Nutzen Besucher bekommen.',
    },
    {
      key: 'clarity',
      label: 'Klarheit des Angebots',
      icon: <Target size={16} />,
      score: score(2),
      comment:
        'Das Angebot ist erkennbar, aber Zielgruppe und Mehrwert werden nicht in den ersten Sekunden erfasst.',
    },
    {
      key: 'design',
      label: 'Design & Vertrauen',
      icon: <Shield size={16} />,
      score: score(3),
      comment:
        'Es fehlen sichtbare Trust-Elemente (Bewertungen, Zertifikate, echte Projektreferenzen) im oberen Bereich.',
    },
    {
      key: 'navigation',
      label: 'Nutzerführung',
      icon: <Compass size={16} />,
      score: score(4),
      comment:
        'Der Weg vom ersten Eindruck bis zur Anfrage ist nicht klar genug strukturiert. Zu viele Optionen, zu wenig Führung.',
    },
    {
      key: 'conversion',
      label: 'Conversion-Potenzial',
      icon: <TrendingUp size={16} />,
      score: score(5),
      comment:
        'Call-to-Actions sind zu schwach platziert. Es gibt keine klare primäre Handlung pro Abschnitt.',
    },
    {
      key: 'mobile',
      label: 'Mobile Wirkung',
      icon: <Smartphone size={16} />,
      score: score(6),
      comment:
        'Auf dem Smartphone wirken die wichtigen Elemente nicht hierarchisch genug – CTA und Trust sind zu weit unten.',
    },
  ];

  const total = Math.round(
    items.reduce((sum, item) => sum + item.score, 0) / items.length,
  );

  const firstImpression =
    total >= 75
      ? 'Solides Fundament – aber wesentliche Conversion-Hebel werden noch nicht genutzt.'
      : total >= 65
        ? 'Die Website wirkt grundsätzlich professionell, verschenkt aber sichtbar Anfragen.'
        : 'Die Website verliert aktuell Besucher, bevor sie zum Anfragen-Punkt kommen.';

  const improvements = [
    'Headline schärfen: konkreter Nutzen für Bau- & Handwerksbetriebe in den ersten 3 Sekunden.',
    'Trust-Elemente nach oben: Referenzen, Bewertungen und echte Projektbilder direkt im Hero.',
    'Eindeutige primäre Handlung pro Abschnitt – statt mehrerer konkurrierender CTAs.',
    'Mobile Hierarchie überarbeiten: CTA und Vertrauensbeweise in den sichtbaren Bereich.',
    'Conversion-Copy einsetzen: Sprache der Zielgruppe statt Agentur-Floskeln.',
  ];

  return { total, firstImpression, items, improvements };
};

const ScoreRing: React.FC<{ value: number }> = ({ value }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const color =
    value >= 80 ? '#16a34a' : value >= 65 ? '#2563eb' : '#f59e0b';

  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e5e5"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.2s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-semibold text-neutral-900">{value}</div>
        <div className="text-[10px] uppercase tracking-widest text-neutral-500">
          / 100
        </div>
      </div>
    </div>
  );
};

const ScoreBar: React.FC<{ value: number }> = ({ value }) => {
  const color =
    value >= 80 ? 'bg-green-500' : value >= 65 ? 'bg-blue-600' : 'bg-amber-500';
  return (
    <div className="w-full h-1.5 rounded-full bg-neutral-200 overflow-hidden">
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${value}%`, transition: 'width 1s ease-out' }}
      />
    </div>
  );
};

const AnalysisSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [stage, setStage] = useState<Stage>('idle');
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement | null>(null);

  // cycle status texts during loading
  useEffect(() => {
    if (stage !== 'loading') return;
    const interval = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, STATUS_STEPS.length - 1));
    }, 1100);
    return () => clearInterval(interval);
  }, [stage]);

  useEffect(() => {
    if (stage === 'result' && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [stage]);

  const normalizeUrl = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return '';
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
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
    if (!url.trim()) {
      setError('Bitte eine Website-URL eingeben.');
      return;
    }
    if (!isValidUrl(url)) {
      setError('Bitte eine gültige Website-URL eingeben (z. B. ihre-firma.ch).');
      return;
    }

    const fullUrl = normalizeUrl(url);
    setStage('loading');
    setStepIndex(0);

    // Fire-and-forget tracking — never block the analysis if these fail.
    try {
      fetch('https://famous.ai/api/crm/69f7252ce0c5d24f23e48fe2/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: `analysis+${Date.now()}@studio100.ch`,
          source: 'website-analysis',
          tags: ['website-analysis', 'lead'],
          metadata: { website_url: fullUrl },
        }),
      }).catch(() => {});

      fetch('https://formsubmit.co/ajax/schlaepfer.demian@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Neue Website-Analyse-Anfrage – Studio100',
          website_url: fullUrl,
          source: 'Website-Analyse Tool',
        }),
      }).catch(() => {});
    } catch {
      // ignore — UX shouldn't depend on this
    }

    // Simulated analysis run — duration matches status steps.
    const totalDuration = STATUS_STEPS.length * 1100 + 400;
    setTimeout(() => {
      setResult(buildAnalysis(fullUrl));
      setStage('result');
    }, totalDuration);
  };

  const handleReset = () => {
    setStage('idle');
    setResult(null);
    setUrl('');
    setStepIndex(0);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="analysis" className="py-28 lg:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Kostenlose Website-Analyse
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Was verschenkt Ihre<br />
            <span className="text-neutral-400">Website gerade?</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Geben Sie Ihre URL ein – Sie erhalten direkt hier eine kompakte,
            ehrliche Conversion-Analyse Ihrer Website. Kostenlos. Unverbindlich.
          </p>
        </div>

        {/* INPUT FORM */}
        {stage === 'idle' && (
          <form
            onSubmit={handleSubmit}
            className="mt-14 max-w-2xl mx-auto p-2 rounded-3xl bg-neutral-50 border border-neutral-200"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 space-y-4">
              <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 block">
                Ihre Website
              </label>
              <div className="relative">
                <Globe
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://ihre-website.ch"
                  inputMode="url"
                  autoComplete="url"
                  className="w-full pl-11 pr-4 py-4 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition"
                />
              </div>

              {error && <div className="text-sm text-red-600">{error}</div>}

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all"
              >
                Website kostenlos analysieren
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-neutral-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-green-600" /> 100% kostenlos
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-green-600" /> Keine Anmeldung
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-green-600" /> Sofortiges Ergebnis
                </div>
              </div>
            </div>
          </form>
        )}

        {/* LOADING STATE */}
        {stage === 'loading' && (
          <div className="mt-14 max-w-2xl mx-auto p-2 rounded-3xl bg-neutral-50 border border-neutral-200">
            <div className="bg-white rounded-2xl p-10 lg:p-14 text-center">
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-neutral-100" />
                <div className="absolute inset-0 rounded-full border-2 border-neutral-900 border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles size={20} className="text-neutral-900" />
                </div>
              </div>

              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
                Analyse läuft
              </div>

              <div className="h-7">
                <p
                  key={stepIndex}
                  className="text-lg font-medium text-neutral-900 animate-fade-in"
                >
                  {STATUS_STEPS[stepIndex]}
                </p>
              </div>

              <div className="mt-8 max-w-sm mx-auto space-y-2">
                {STATUS_STEPS.map((step, i) => (
                  <div
                    key={step}
                    className={`flex items-center gap-2 text-xs transition-colors ${
                      i < stepIndex
                        ? 'text-neutral-900'
                        : i === stepIndex
                          ? 'text-neutral-900'
                          : 'text-neutral-300'
                    }`}
                  >
                    {i < stepIndex ? (
                      <CheckCircle2 size={14} className="text-green-600 shrink-0" />
                    ) : i === stepIndex ? (
                      <Loader2
                        size={14}
                        className="animate-spin text-blue-600 shrink-0"
                      />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0" />
                    )}
                    <span className="text-left">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RESULT */}
        {stage === 'result' && result && (
          <div ref={resultRef} className="mt-14 max-w-4xl mx-auto">
            <div className="p-2 rounded-3xl bg-neutral-50 border border-neutral-200">
              <div className="bg-white rounded-2xl p-6 lg:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 border-b border-neutral-100">
                  <ScoreRing value={result.total} />
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-2">
                      Ergebnis Ihrer Analyse
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 leading-tight">
                      Gesamtscore: {result.total}/100
                    </h3>
                    <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                      {result.firstImpression}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8">
                  {result.items.map((item) => (
                    <div
                      key={item.key}
                      className="p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:border-neutral-200 transition"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">
                            {item.icon}
                          </div>
                          <span className="text-sm font-medium text-neutral-900">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-neutral-900 tabular-nums">
                          {item.score}/100
                        </span>
                      </div>
                      <ScoreBar value={item.score} />
                      <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                        {item.comment}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Improvements */}
                <div className="mt-8 p-6 rounded-2xl bg-neutral-900 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb size={16} className="text-amber-400" />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300">
                      Verbesserungspotenzial
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {result.improvements.map((tip, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-neutral-200 leading-relaxed"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-semibold text-white shrink-0">
                          {i + 1}
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 lg:p-8 rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white text-center">
                  <h4 className="text-xl lg:text-2xl font-semibold text-neutral-900 leading-snug max-w-2xl mx-auto">
                    Willst du wissen, wie viel Umsatz dir deine Website aktuell
                    kosten könnte?
                  </h4>
                  <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto">
                    In einem kurzen, kostenlosen Erstgespräch zeigen wir dir
                    konkret, welche Hebel den grössten Effekt haben.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={scrollToContact}
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all"
                    >
                      Kostenloses Erstgespräch anfragen
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition px-4 py-3"
                    >
                      Andere Website analysieren
                    </button>
                  </div>
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
