import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, LineChart, Search, TestTube, Gauge } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const steps = [
  {
    num: '01',
    title: 'Analyse & Diagnose',
    desc: 'Wir beginnen mit einer gründlichen Analyse Ihrer bestehenden Website: Heatmaps, Session-Recordings, Funnel-Analyse und User-Interviews zeigen uns exakt, wo Besucher abspringen und warum.',
  },
  {
    num: '02',
    title: 'Hypothesen & Priorisierung',
    desc: 'Basierend auf den Daten formulieren wir konkrete Optimierungshypothesen. Diese werden nach potenziellem Impact, Aufwand und Konfidenz priorisiert – damit wir zuerst die grössten Hebel angehen.',
  },
  {
    num: '03',
    title: 'Implementierung & Testing',
    desc: 'Wir setzen die Optimierungen um und testen sie mit A/B-Tests. Keine Bauchgefühl-Entscheidungen, sondern statistisch validierte Verbesserungen, die dauerhaft wirken.',
  },
  {
    num: '04',
    title: 'Messen & Iterieren',
    desc: 'Conversion-Optimierung ist kein Einmalprojekt. Wir messen die Ergebnisse, lernen daraus und iterieren – so verbessern sich Ihre Zahlen kontinuierlich über Zeit.',
  },
];

const metrics = [
  { icon: LineChart, label: 'Conversion-Rate', desc: 'Anteil der Besucher, die eine Anfrage senden' },
  { icon: Search, label: 'Bounce Rate', desc: 'Besucher, die sofort wieder abspringen' },
  { icon: TestTube, label: 'Formular-Abschlüsse', desc: 'Anzahl ausgefüllter Kontaktformulare' },
  { icon: Gauge, label: 'Seitengeschwindigkeit', desc: 'Ladezeit und Core Web Vitals' },
];

const included = [
  'Vollständige Website-Analyse (Heatmaps, Funnel)',
  'Nutzerverhalten-Auswertung',
  'Priorisierte Optimierungsstrategie',
  'A/B-Test-Konzept und Umsetzung',
  'Copywriting-Optimierung',
  'UX/Design-Anpassungen',
  'Tracking-Setup & Dashboard',
  'Monatliches Reporting',
];

const ConversionOptimierung: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Conversion Rate Optimierung für KMUs in der DACH-Region | Studio100"
        description="Studio100 optimiert die Conversion Rate Ihrer Website durch datenbasierte Analyse, A/B-Tests und strategisches UX-Design. Mehr Anfragen aus bestehendem Traffic."
        canonical="/conversion-optimierung"
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition mb-10">
              <ArrowLeft size={14} /> Zurück zur Startseite
            </Link>
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Leistung
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] max-w-4xl">
              Mehr Anfragen aus<br />
              <span className="text-neutral-400">gleichem Traffic.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Conversion Rate Optimierung (CRO) ist der effizienteste Hebel für mehr Umsatz:
              Kein zusätzliches Werbebudget nötig – stattdessen holen Sie mehr aus den Besuchern,
              die bereits auf Ihrer Website sind.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/#analysis"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02] shadow-lg shadow-neutral-900/10"
              >
                Kostenlose Analyse anfordern
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
              >
                Referenzprojekte ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* What we measure */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-6">
                <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                  Was wir messen
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                  Daten statt<br />
                  <span className="text-neutral-400">Bauchgefühl.</span>
                </h2>
                <div className="mt-6 space-y-4 text-[15px] text-neutral-600 leading-relaxed">
                  <p>
                    Die meisten Webdesign-Agenturen optimieren nach Ästhetik-Urteilen. Wir
                    optimieren nach Daten. Mit Heatmaps, Session-Recordings und Funnel-Analysen
                    verstehen wir genau, wie Ihre Besucher sich verhalten – und wo sie abspringen.
                  </p>
                  <p>
                    Conversion Rate Optimierung heisst: Wir erhöhen den Anteil der Besucher,
                    die auf Ihrer Website eine gewünschte Aktion ausführen – eine Anfrage senden,
                    ein Formular ausfüllen, Sie anrufen. Ohne mehr Traffic kaufen zu müssen.
                  </p>
                  <p>
                    Bei einem typischen KMU mit 1.000 monatlichen Besuchern und einer
                    Conversion-Rate von 1 % sind das 10 Anfragen. Steigern wir die Rate auf 3 %,
                    sind es 30 Anfragen – dreimal mehr Umsatz, gleicher Traffic.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {metrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <div key={i} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <Icon size={18} className="text-blue-600 mb-3" />
                        <div className="text-sm font-semibold text-neutral-900">{m.label}</div>
                        <div className="text-xs text-neutral-500 mt-1">{m.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="p-1 rounded-[2rem] bg-gradient-to-b from-neutral-200 to-transparent">
                  <div className="bg-neutral-900 rounded-[1.875rem] p-10 text-white">
                    <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-6">
                      Im Lieferumfang enthalten
                    </div>
                    <ul className="space-y-3">
                      {included.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="text-blue-400" strokeWidth={3} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/10 text-sm text-neutral-400">
                      Preis auf Anfrage · nach Projektumfang
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                Unser Prozess
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Vier Schritte zu<br />
                <span className="text-neutral-400">mehr Conversions.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300"
                >
                  <div className="text-xs font-mono text-neutral-400 mb-6">{s.num}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
                  <p className="text-[15px] text-neutral-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="py-16 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6">
              Weiterführende Artikel
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { label: 'Conversion Rate optimieren für KMUs', href: '/blog/conversion-rate-optimieren-kmu', desc: '7 bewährte Strategien mit Branchen-Benchmarks' },
                { label: 'Webdesign Kosten Schweiz 2026', href: '/blog/webdesign-kosten-schweiz-2026', desc: 'Preisübersicht und ROI-Berechnung für KMUs' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group p-5 rounded-2xl border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
                >
                  <div className="text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors mb-1">{item.label}</div>
                  <div className="text-xs text-neutral-500">{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
              Jetzt starten
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
              Wie viel Umsatz<br />verschenkt Ihre Website gerade?
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              Starten Sie mit einer kostenlosen Analyse. Wir zeigen Ihnen in 24 Stunden,
              wo Ihre Website Conversion-Potenzial verschenkt – und wie viel das in Umsatz bedeutet.
            </p>
            <div className="mt-10">
              <Link
                to="/#analysis"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
              >
                Kostenlose Analyse starten
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConversionOptimierung;
