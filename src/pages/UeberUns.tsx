import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Zap } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const values = [
  {
    icon: Target,
    title: 'Ergebnisse vor Ästhetik',
    desc: 'Wir messen unseren Erfolg nicht in Designpreisen, sondern in Ihren Anfragen und Ihrem Umsatz. Eine Website, die gut aussieht aber nicht konvertiert, ist für uns kein Erfolg.',
  },
  {
    icon: Eye,
    title: 'Fokus statt Fullservice',
    desc: 'Wir machen eine Sache und machen sie aussergewöhnlich gut: hochkonvertierende Websites für KMUs. Kein Social Media, kein Performance Marketing, keine App-Entwicklung.',
  },
  {
    icon: Heart,
    title: 'Ehrlichkeit über alles',
    desc: 'Wenn wir nicht der richtige Partner für Ihr Projekt sind, sagen wir das klar. Wir empfehlen immer das, was Ihnen den besten ROI bringt – nicht das, was für uns das lukrativste Projekt wäre.',
  },
  {
    icon: Zap,
    title: 'Partnerschaft, nicht Auftrag',
    desc: 'Wir denken nicht in Projektabschlüssen, sondern in Ihrem Wachstum. Unsere Performance-Garantie ist kein Marketing-Versprechen – sie ist unser Qualitätsstandard.',
  },
];

const UeberUns: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Über uns – Studio100 Webdesign Agentur Zug | Schweiz"
        description="Studio100 ist eine spezialisierte Webdesign-Agentur in Zug, Schweiz. Wir entwickeln hochkonvertierende Websites für KMUs in der DACH-Region. Mission, Werte und Team."
        canonical="/ueber-uns"
      />
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Über Studio100
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] max-w-4xl">
              Wir bauen Websites,<br />
              <span className="text-neutral-400">die für Sie arbeiten.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Studio100 ist eine auf KMUs spezialisierte Webdesign-Agentur mit Sitz in Zug,
              Schweiz. Unser einziges Ziel: Websites, die messbar mehr Anfragen und Umsatz
              für kleine und mittlere Unternehmen in der DACH-Region generieren.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                  Unsere Mission
                </div>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                  Jedes KMU verdient<br />
                  <span className="text-neutral-400">eine Website, die wirkt.</span>
                </h2>
                <div className="mt-6 space-y-4 text-[15px] text-neutral-600 leading-relaxed">
                  <p>
                    Wir glauben, dass zu viele gute Unternehmen zu wenig Kunden gewinnen – nicht
                    weil ihr Angebot schlecht ist, sondern weil ihre Website sie nicht gut genug
                    repräsentiert. Eine veraltete, unstrukturierte oder konversationsschwache Website
                    kostet täglich Aufträge, ohne dass der Inhaber es merkt.
                  </p>
                  <p>
                    Studio100 entstand aus der Überzeugung, dass Webdesign für KMUs grundlegend
                    anders gedacht werden muss: nicht als Designprojekt, sondern als strategisches
                    Wachstumsinstrument. Jede Entscheidung – vom ersten Text bis zur letzten
                    Schaltfläche – folgt einem Ziel: mehr qualifizierte Anfragen für unsere Kunden.
                  </p>
                  <p>
                    Wir sind kein Fullservice-Anbieter, der alles für jeden macht. Wir sind
                    Spezialisten für ein klar definiertes Problem – und wir lösen es aussergewöhnlich gut.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-neutral-100 rounded-[2rem] rotate-1" />
                  <div className="relative bg-neutral-900 rounded-[2rem] p-10 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                    <div className="relative">
                      <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-8">
                        Studio100 in Zahlen
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { value: '100+', label: 'Projekte realisiert' },
                          { value: '+184 %', label: 'Mehr Anfragen im Schnitt' },
                          { value: '98 %', label: 'Kundenzufriedenheit' },
                          { value: '3×', label: 'Höhere Conversion-Rate' },
                        ].map((s, i) => (
                          <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                            <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
                            <div className="text-xs text-neutral-400 mt-1">{s.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-6 border-t border-white/10 text-sm text-neutral-400">
                        Durchschnittliche Ergebnisse unserer Kundenprojekte nach 90 Tagen.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                Unsere Werte
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Prinzipien, nach denen<br />
                <span className="text-neutral-400">wir arbeiten.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{v.title}</h3>
                    <p className="text-[15px] text-neutral-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
                Gründer
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Ein Team mit<br />
                <span className="text-neutral-400">klarem Fokus.</span>
              </h2>
            </div>
            <div className="max-w-2xl">
              <div className="p-8 lg:p-10 rounded-3xl border border-neutral-200 bg-neutral-50/50">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    D
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-neutral-900">Demian Schläpfer</div>
                    <div className="text-sm text-blue-600 mt-0.5">Gründer & Inhaber</div>
                    <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
                      Demian Schläpfer gründete Studio100 mit einer klaren These: KMUs in der
                      DACH-Region erhalten von den meisten Webdesign-Agenturen das Falsche –
                      aufwendige Designs ohne Conversion-Strategie. Studio100 ist die Antwort:
                      ein fokussiertes System, das Ergebnisse über Ästhetik stellt und
                      Wachstum für seine Kunden messbar macht.
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href="mailto:schlaepfer.demian@gmail.com"
                        className="text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-2 transition"
                      >
                        schlaepfer.demian@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
                  Standort
                </div>
                <div className="text-2xl font-semibold text-neutral-900">Zug, Schweiz</div>
                <div className="text-neutral-500 mt-1 text-sm">
                  Gotthardstrasse 14 · 6300 Zug · Rosiello Solutions GmbH
                </div>
                <div className="mt-2 text-sm text-neutral-500">
                  Projekte in der Schweiz, Deutschland und Österreich
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/#analysis"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all"
                >
                  Projekt anfragen
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
                >
                  Unsere Projekte
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
