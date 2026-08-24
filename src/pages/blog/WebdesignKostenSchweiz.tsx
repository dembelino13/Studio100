import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const WebdesignKostenSchweiz: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Webdesign Kosten Schweiz 2026: Was kostet eine professionelle Website? | Studio100"
        description="Was kostet eine professionelle Website in der Schweiz? Eine ehrliche Übersicht über Preise, Preistreiber und worauf KMUs wirklich achten sollten – von Studio100, Zug."
        canonical="/blog/webdesign-kosten-schweiz-2026"
      />
      <Navbar />

      <main className="flex-1">
        <article>
          {/* Article Header */}
          <header className="pt-36 pb-14 lg:pt-44 lg:pb-16 bg-gradient-to-b from-white via-neutral-50 to-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-10">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition mb-10">
                <ArrowLeft size={14} /> Zurück zum Blog
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  Webdesign
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Webdesign Kosten Schweiz 2026: Was kostet eine professionelle Website?
              </h1>
              <div className="mt-6 flex items-center gap-5 text-sm text-neutral-400">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> 12. Mai 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> 6 Min. Lesezeit</span>
                <span>Von Studio100, Zug</span>
              </div>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                Von CHF 500 bis CHF 50.000 – die Preisspanne für Websites ist enorm. Was steckt
                dahinter, was braucht Ihr KMU wirklich, und wo lohnt sich die Investition?
              </p>
            </div>
          </header>

          {/* Article Body */}
          <div className="py-12 lg:py-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-10 text-[16px] text-neutral-700 leading-[1.8]">

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Die ehrliche Wahrheit über Webdesign-Preise in der Schweiz
                </h2>
                <p>
                  Wenn Sie drei Webdesign-Agenturen in der Schweiz um ein Angebot bitten, erhalten
                  Sie wahrscheinlich drei völlig unterschiedliche Zahlen. Das liegt nicht an
                  Willkür, sondern an grundlegend unterschiedlichen Ansätzen: Baukastensysteme,
                  Template-basierte Agenturen und spezialisierte Conversion-Agenturen verfolgen
                  unterschiedliche Methoden – mit entsprechend unterschiedlichen Ergebnissen.
                </p>
                <p className="mt-4">
                  In diesem Artikel schlüsseln wir die wichtigsten Preiskategorien auf und erklären,
                  wann welche Lösung für KMUs in der DACH-Region sinnvoll ist.
                </p>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Preisübersicht: Was kostet eine Website in der Schweiz?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      range: 'CHF 0 – 500',
                      label: 'Do-it-yourself (Wix, Squarespace)',
                      desc: 'Baukastensysteme sind günstig, aber sie konvertieren schlecht. Für ein ernsthaftes KMU-Geschäft ungeeignet, da keine strategische Grundlage vorhanden ist.',
                    },
                    {
                      range: 'CHF 1.500 – 3.000',
                      label: 'Freelancer / Template-Websites',
                      desc: 'Ein erfahrener Freelancer oder eine Kleinstagenturer liefert ein angepasstes WordPress-Template. Optisch solide, aber meist ohne Conversion-Strategie und Copywriting.',
                    },
                    {
                      range: 'CHF 3.000 – 8.000',
                      label: 'Professionelle KMU-Website',
                      desc: 'In diesem Preisbereich erhalten Sie eine strategisch entwickelte Website mit professionellem Design, Copywriting und Conversion-Optimierung. Das ist der Sweet Spot für die meisten KMUs.',
                    },
                    {
                      range: 'CHF 8.000 – 20.000+',
                      label: 'Enterprise / Komplexe Systeme',
                      desc: 'Mehrsprachige Websites, komplexe Integrationen, E-Commerce oder aufwendige Web-Applikationen. Für die meisten KMUs überdimensioniert.',
                    },
                  ].map((tier, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <span className="text-base font-semibold text-neutral-900">{tier.label}</span>
                        <span className="text-sm font-medium text-blue-600 whitespace-nowrap">{tier.range}</span>
                      </div>
                      <p className="text-sm text-neutral-600 leading-relaxed">{tier.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Was beeinflusst den Preis einer Website?
                </h2>
                <p>
                  Der Preis einer professionellen Website hängt von mehreren Faktoren ab:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { label: 'Strategie & Konzept', desc: 'Wird vor dem Design eine fundierte Positionierung und Zielgruppenanalyse gemacht? Das kostet Zeit, ist aber der wichtigste Hebel für Ergebnisse.' },
                    { label: 'Copywriting', desc: 'Professionelle Website-Texte sind aufwendig und teuer – aber der grösste Unterschied zwischen einer Website, die konvertiert, und einer, die es nicht tut.' },
                    { label: 'Design-Individualisierung', desc: 'Ein angepasstes Template ist günstiger als ein vollständig individuelles Design. Für die meisten KMUs ist ein hochwertiges angepasstes Design die richtige Wahl.' },
                    { label: 'Technische Komplexität', desc: 'CMS-Integration, Buchungssysteme, mehrsprachige Seiten oder API-Anbindungen erhöhen den Aufwand erheblich.' },
                    { label: 'SEO & Performance', desc: 'Eine technisch saubere Website mit Lighthouse 100/100 ist aufwendiger zu bauen, zahlt sich aber mittel- bis langfristig durch bessere Rankings aus.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span><strong className="text-neutral-900">{item.label}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  ROI-Perspektive: Wann amortisiert sich die Investition?
                </h2>
                <p>
                  Eine Website ist keine Ausgabe, sondern eine Investition. Bei einem typischen
                  KMU mit einem durchschnittlichen Auftragswert von CHF 5.000 und einer
                  monatlichen Umsatzsteigerung durch die neue Website von nur 2–3 zusätzlichen
                  Aufträgen ist eine Investition von CHF 5.000–8.000 innerhalb von 1–2 Monaten
                  amortisiert.
                </p>
                <p className="mt-4">
                  Unsere Kunden bei Studio100 sehen durchschnittlich +184 % mehr Anfragen
                  nach dem Launch einer neuen Website – bei einer einmaligen Investition ohne
                  laufende Agenturgebühren.
                </p>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Fazit: Was sollte ein KMU in der Schweiz investieren?
                </h2>
                <p>
                  Für die meisten KMUs in der Schweiz ist ein Budget zwischen CHF 3.000 und
                  CHF 8.000 der richtige Rahmen für eine professionelle, conversion-optimierte
                  Website. Wichtiger als der Preis ist die Frage: Wird die Agentur nach
                  Ästhetik oder nach Ergebnissen optimiert?
                </p>
                <p className="mt-4">
                  Achten Sie darauf, dass Ihre Agentur klare KPIs definiert, Conversion-Tracking
                  einrichtet und eine Performance-Garantie anbietet. Eine Website, die keine
                  messbaren Ergebnisse liefert, ist zu teuer – egal zu welchem Preis.
                </p>
              </section>

            </div>
          </div>
        </article>

        {/* CTA */}
        {/* Internal links */}
        <section className="py-12 bg-white border-t border-neutral-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-5">
              Passende Leistungen & Artikel
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Webdesign für KMU', href: '/webdesign-kmu', desc: 'Unsere Leistung' },
                { label: 'Website für Handwerker', href: '/blog/website-handwerker-erstellen-lassen', desc: 'Blog-Artikel' },
                { label: 'Conversion Rate optimieren', href: '/blog/conversion-rate-optimieren-kmu', desc: 'Blog-Artikel' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group p-4 rounded-2xl border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
                >
                  <div className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-1">{item.desc}</div>
                  <div className="text-sm font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">{item.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Was würde eine neue Website für Ihr KMU kosten – und bringen?
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Starten Sie mit einer kostenlosen Analyse. Wir zeigen Ihnen konkret,
              wie viel Potenzial Ihre aktuelle Website verschenkt.
            </p>
            <div className="mt-8">
              <Link
                to="/#analysis"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
              >
                Kostenlose Website-Analyse
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

export default WebdesignKostenSchweiz;
