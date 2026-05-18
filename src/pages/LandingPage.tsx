import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Target, BarChart2, Clock, MousePointer } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const benefits = [
  {
    icon: Target,
    title: 'Ein Ziel, eine Botschaft',
    desc: 'Eine Landing Page hat keine Ablenkungen: kein Menü, keine Nebenthemen, keine Links ins Nirgendwo. Nur eine klare Botschaft und eine Handlungsaufforderung. Das maximiert die Conversion.',
  },
  {
    icon: BarChart2,
    title: 'Messbar und testbar',
    desc: 'Landing Pages sind das perfekte Instrument für A/B-Tests. Wir integrieren von Anfang an ein vollständiges Tracking-Setup, damit Sie genau wissen, was funktioniert und was nicht.',
  },
  {
    icon: Clock,
    title: 'Schnell live – schnell wirksam',
    desc: 'Eine fokussierte Landing Page ist in 2–4 Wochen live. Ideal für Kampagnen, saisonale Angebote oder neue Dienstleistungen, die sofort Anfragen generieren sollen.',
  },
  {
    icon: MousePointer,
    title: 'Optimiert für Traffic-Quellen',
    desc: 'Ob Google Ads, SEO, Social Media oder E-Mail-Kampagnen – wir bauen Landing Pages, die zur jeweiligen Traffic-Quelle und Zielgruppe passen. Kein generischer Einheitsbrei.',
  },
];

const included = [
  'Strategisches Briefing & Zieldefinition',
  'Conversion Copywriting (Headline, Body, CTA)',
  'Custom Design passend zu Ihrer CI',
  'Mobile-optimierte Entwicklung',
  'Formular & CRM-Integration',
  'Google Analytics & Conversion-Tracking',
  'A/B-Test-Vorbereitung',
  'DSGVO-konforme Umsetzung',
];

const LandingPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Landing Pages erstellen lassen – Mehr Anfragen durch Fokus | Studio100"
        description="Studio100 entwickelt hochkonvertierende Landing Pages für KMUs in der DACH-Region. Klarer Fokus, messbare Ergebnisse, schnelle Umsetzung. Ab CHF 3.000."
        canonical="/landing-page"
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
              Landing Pages,<br />
              <span className="text-neutral-400">die konvertieren.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Eine gute Landing Page hat ein einziges Ziel: den Besucher zur Anfrage zu bewegen.
              Keine Ablenkungen, keine Kompromisse. Nur eine klare Botschaft – und messbare
              Ergebnisse.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/#analysis"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02] shadow-lg shadow-neutral-900/10"
              >
                Projekt anfragen
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

        {/* What & Why */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-6">
                <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                  Warum eine Landing Page?
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                  Weniger Seiten.<br />
                  <span className="text-neutral-400">Mehr Abschlüsse.</span>
                </h2>
                <div className="mt-6 space-y-4 text-[15px] text-neutral-600 leading-relaxed">
                  <p>
                    Die meisten Unternehmenswebsites leiden an einem grundlegenden Problem:
                    Sie versuchen, alles für alle zu sein. Das Ergebnis? Besucher finden nicht,
                    was sie suchen, und verlassen die Seite ohne Anfrage.
                  </p>
                  <p>
                    Eine fokussierte Landing Page löst dieses Problem. Sie spricht genau eine
                    Zielgruppe mit genau einem Angebot an – und führt Besucher mit einer
                    logischen, verkaufspsychologischen Struktur direkt zur Conversion.
                  </p>
                  <p>
                    Besonders wirkungsvoll für KMUs: Landing Pages eignen sich perfekt
                    als Zielseite für Google Ads, als eigenständige Kampagnenseite für
                    saisonale Angebote oder als Einstiegspunkt für neue Dienstleistungen –
                    ohne die bestehende Website umbauen zu müssen.
                  </p>
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

        {/* Benefits Grid */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                Vorteile
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Was eine Studio100<br />
                <span className="text-neutral-400">Landing Page leistet.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{b.title}</h3>
                    <p className="text-[15px] text-neutral-600 leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
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
              Ihre nächste Kampagne<br />verdient eine starke Landing Page.
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              Erzählen Sie uns von Ihrem Projekt. Wir zeigen Ihnen, wie eine fokussierte
              Landing Page Ihre Conversion-Rate und Ihren Umsatz steigert.
            </p>
            <div className="mt-10">
              <Link
                to="/#analysis"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
              >
                Projekt anfragen
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

export default LandingPage;
