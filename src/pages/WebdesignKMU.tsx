import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const features = [
  {
    icon: TrendingUp,
    title: 'Conversion-First Design',
    desc: 'Jedes Element Ihrer Website hat einen strategischen Zweck: Besucher in qualifizierte Anfragen zu verwandeln. Wir denken nie in Ästhetik allein, sondern immer in messbaren Ergebnissen.',
  },
  {
    icon: Users,
    title: 'Spezialisiert auf KMUs',
    desc: 'Wir kennen die Budgets, Ziele und Herausforderungen kleiner und mittlerer Unternehmen in der DACH-Region. Keine überdimensionierten Agenturlösungen – sondern fokussierte Systeme, die wirken.',
  },
  {
    icon: Shield,
    title: 'DSGVO & revDSG konform',
    desc: 'Alle Websites, die wir entwickeln, entsprechen der europäischen DSGVO und dem schweizerischen Datenschutzgesetz. Sie starten rechtssicher, ohne Nacharbeit.',
  },
  {
    icon: Zap,
    title: 'Lighthouse 100/100',
    desc: 'Performance ist kein Nice-to-have. Schnelle Ladezeiten verbessern Ihre Google-Rankings und halten Besucher auf der Seite. Wir liefern technisch optimale Websites.',
  },
];

const deliverables = [
  'Strategische Positionierung & Wettbewerbsanalyse',
  'Verkaufspsychologisch optimiertes Copywriting',
  'Premium Webdesign mit Custom-Komponenten',
  'Technische Entwicklung & CMS-Integration',
  'Performance- & SEO-Optimierung (Lighthouse 100/100)',
  'Google Analytics & Conversion-Tracking Setup',
  'DSGVO-konforme Cookie-Lösung',
  'Performance-Garantie nach Launch',
];

const WebdesignKMU: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Webdesign für KMU in der DACH-Region | Studio100"
        description="Studio100 entwickelt hochkonvertierende Websites für KMUs in der Schweiz, Deutschland und Österreich. Mehr Anfragen, mehr Umsatz – ab CHF 3.000. Performance-Garantie inklusive."
        canonical="/webdesign-kmu"
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
              Webdesign für KMU<br />
              <span className="text-neutral-400">in der DACH-Region.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Kleine und mittlere Unternehmen in der Schweiz, Deutschland und Österreich brauchen keine
              aufwendige Fullservice-Agentur – sondern eine fokussierte Website, die Besucher in
              Kunden verwandelt. Genau das bauen wir.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/#analysis"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02] shadow-lg shadow-neutral-900/10"
              >
                Kostenlose Website-Analyse
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/#offer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
              >
                Pakete & Preise
              </Link>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-6">
                <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                  Warum KMU-Webdesign anders ist
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                  Nicht mehr Seiten.<br />
                  <span className="text-neutral-400">Mehr Anfragen.</span>
                </h2>
                <div className="mt-6 space-y-4 text-[15px] text-neutral-600 leading-relaxed">
                  <p>
                    Die meisten KMU-Websites werden von Agenturen gebaut, die primär Designs
                    verkaufen – nicht Ergebnisse. Das Resultat: optisch ansprechende Websites,
                    die kaum Anfragen generieren.
                  </p>
                  <p>
                    Studio100 verfolgt einen anderen Ansatz. Wir bauen Websites als digitale
                    Verkaufssysteme: Jede Sektion, jeder Text, jede Schaltfläche ist strategisch
                    positioniert, um Besucher durch den Entscheidungsprozess zu führen und zur
                    Anfrage zu bewegen.
                  </p>
                  <p>
                    Unsere Kunden sind KMUs in der DACH-Region – Handwerksbetriebe, Baufirmen,
                    lokale Dienstleister – die mit einer professionellen Website endlich das
                    Wachstum erzielen wollen, das ihr Unternehmen verdient.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-neutral-200 to-transparent">
                  <div className="bg-neutral-900 rounded-[1.875rem] p-10 text-white">
                    <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-6">
                      Im Lieferumfang enthalten
                    </div>
                    <ul className="space-y-3">
                      {deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="text-blue-400" strokeWidth={3} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="text-2xl font-semibold">ab CHF 3.000</div>
                      <div className="text-xs text-neutral-400 mt-1">einmalig · zzgl. MwSt.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                Was uns unterscheidet
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Vier Gründe, warum<br />
                <span className="text-neutral-400">KMUs uns wählen.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{f.title}</h3>
                    <p className="text-[15px] text-neutral-600 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-24 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '100+', label: 'KMU-Projekte umgesetzt' },
                { value: '+184 %', label: 'Mehr Anfragen im Schnitt' },
                { value: '+211 %', label: 'Höhere Conversion-Rate' },
                { value: '98 %', label: 'Kundenzufriedenheit' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl lg:text-5xl font-semibold text-neutral-900">{s.value}</div>
                  <div className="mt-2 text-sm text-neutral-500">{s.label}</div>
                </div>
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
              Bereit für eine Website,<br />die wirklich Kunden bringt?
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              Starten Sie mit einer kostenlosen Website-Analyse. Wir zeigen Ihnen in 24 Stunden,
              wo Ihre Website Potenzial verschenkt – und wie viel Umsatz Sie aktuell verlieren.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#analysis"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
              >
                Kostenlose Analyse starten
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-all"
              >
                Referenzprojekte ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebdesignKMU;
