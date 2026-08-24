import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const strategies = [
  {
    num: '01',
    title: 'Headline und Wertversprechen schärfen',
    desc: 'Die Headline ist das wichtigste Element Ihrer Website. Wenn Besucher in 5 Sekunden nicht verstehen, was Sie anbieten und warum Sie die beste Wahl sind, springen sie ab. Testen Sie konkrete, leistungsbezogene Headlines statt generischer Slogans.',
  },
  {
    num: '02',
    title: 'Soziale Beweise prominent platzieren',
    desc: 'Kundenbewertungen, Referenzprojekte mit Fotos und konkreten Ergebnissen sowie Logos bekannter Auftraggeber sind die wirkungsvollsten Vertrauenssignale. Platzieren Sie diese nicht nur auf einer separaten Referenzseite, sondern direkt auf der Startseite.',
  },
  {
    num: '03',
    title: 'Kontaktformular vereinfachen',
    desc: 'Jedes zusätzliche Formularfeld reduziert die Abschlussquote. Fragen Sie initial nur das Notwendigste ab: Name, E-Mail, Anliegen. Weitere Details klären Sie im Gespräch. Ein einfaches Formular steigert die Conversion-Rate nachweislich um 20–40 %.',
  },
  {
    num: '04',
    title: 'Ladezeiten optimieren',
    desc: 'Jede Sekunde mehr Ladezeit kostet bis zu 20 % Conversion-Rate. Komprimieren Sie Bilder, aktivieren Sie Browser-Caching und wechseln Sie zu einem schnellen Hosting-Anbieter. Google PageSpeed Insights zeigt Ihnen die konkreten Probleme kostenlos.',
  },
  {
    num: '05',
    title: 'Klare Handlungsaufforderungen (CTAs) einsetzen',
    desc: 'Viele Websites haben zu schwache oder zu viele CTAs. Definieren Sie eine primäre Handlungsaufforderung pro Seite und machen Sie diese visuell dominant. "Jetzt anfragen" konvertiert besser als "Kontakt" – weil es eine Handlung beschreibt, keine Seite.',
  },
  {
    num: '06',
    title: 'Mobile-Erfahrung separat optimieren',
    desc: 'Über 60 % Ihrer Besucher kommen über Smartphones. Testen Sie Ihre Website auf verschiedenen Geräten und optimieren Sie speziell für mobile Nutzer: grosse Schaltflächen, gut lesbare Schrift, einfache Navigation und Click-to-Call-Buttons.',
  },
  {
    num: '07',
    title: 'A/B-Tests einführen',
    desc: 'Keine Optimierung ist vollständig ohne Testen. Ändern Sie immer nur eine Variable gleichzeitig – Headline, Button-Text, Formular-Platzierung – und messen Sie die Auswirkung auf die Conversion-Rate. Tools wie Google Optimize (kostenlos) machen das einfach.',
  },
];

const ConversionRateKMU: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Conversion Rate optimieren für KMUs: 7 bewährte Strategien | Studio100"
        description="7 datenbasierte Strategien zur Conversion-Optimierung für KMUs in der DACH-Region. Mehr Anfragen aus bestehendem Traffic – ohne mehr Werbebudget."
        canonical="/blog/conversion-rate-optimieren-kmu"
      />
      <Navbar />

      <main className="flex-1">
        <article>
          <header className="pt-36 pb-14 lg:pt-44 lg:pb-16 bg-gradient-to-b from-white via-neutral-50 to-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-10">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition mb-10">
                <ArrowLeft size={14} /> Zurück zum Blog
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  Conversion
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Conversion Rate optimieren für KMUs: 7 bewährte Strategien
              </h1>
              <div className="mt-6 flex items-center gap-5 text-sm text-neutral-400">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> 28. April 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> 7 Min. Lesezeit</span>
                <span>Von Studio100, Zug</span>
              </div>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                Die Conversion Rate entscheidet darüber, ob Ihre Website ein Kostenfaktor oder
                ein Umsatztreiber ist. 7 Strategien, die für KMUs in der DACH-Region
                messbar wirken.
              </p>
            </div>
          </header>

          <div className="py-12 lg:py-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-10 text-[16px] text-neutral-700 leading-[1.8]">

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Was ist die Conversion Rate – und warum ist sie so wichtig?
                </h2>
                <p>
                  Die Conversion Rate ist der Anteil Ihrer Website-Besucher, die eine gewünschte
                  Aktion ausführen – typischerweise eine Anfrage senden oder anrufen. Bei einem
                  KMU mit 1.000 monatlichen Besuchern und einer Conversion Rate von 1 % sind
                  das 10 Anfragen. Bei 3 % sind es 30 Anfragen – dreimal mehr Umsatz, ohne einen
                  Cent mehr für Werbung auszugeben.
                </p>
                <p className="mt-4">
                  Durchschnittliche Conversion Rates nach Branche in der DACH-Region:
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { industry: 'Bau & Handwerk', rate: '1,5 – 3,5 %' },
                    { industry: 'Sanitär & Heizung', rate: '2,0 – 4,0 %' },
                    { industry: 'Elektro & Energie', rate: '1,0 – 3,0 %' },
                    { industry: 'Lokale Dienstleister', rate: '2,0 – 5,0 %' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                      <div className="text-sm font-medium text-neutral-900">{item.industry}</div>
                      <div className="text-lg font-semibold text-blue-600 mt-1">{item.rate}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  Liegt Ihre Conversion Rate unter diesen Benchmarks, lassen Sie monatlich
                  erheblichen Umsatz auf dem Tisch.
                </p>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-6">
                  7 bewährte Strategien zur Conversion-Optimierung
                </h2>
                <div className="space-y-5">
                  {strategies.map((s) => (
                    <div key={s.num} className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <div className="flex items-start gap-4">
                        <span className="text-xs font-mono text-neutral-400 mt-1 flex-shrink-0">{s.num}</span>
                        <div>
                          <h3 className="text-base font-semibold text-neutral-900 mb-2">{s.title}</h3>
                          <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Fazit: Conversion-Optimierung ist kein Einmalprojekt
                </h2>
                <p>
                  Die wirkungsvollste Strategie ist eine Kombination: Beginnen Sie mit den
                  grössten Hebeln (Headline, CTA, Ladezeit), messen Sie die Auswirkungen und
                  iterieren Sie kontinuierlich. KMUs, die ihre Website als lebendiges System
                  behandeln, erzielen langfristig deutlich bessere Ergebnisse als solche, die
                  ihre Website einmal bauen lassen und dann vergessen.
                </p>
                <p className="mt-4">
                  Bei Studio100 integrieren wir Conversion-Optimierung von Anfang an in jedes
                  Projekt: Tracking-Setup, klare KPIs und eine Performance-Garantie nach Launch
                  sind Standard. So wissen Sie immer, ob Ihre Investition sich lohnt.
                </p>
              </section>

            </div>
          </div>
        </article>

        {/* Internal links */}
        <section className="py-12 bg-white border-t border-neutral-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-5">
              Passende Leistungen & Artikel
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Conversion-Optimierung', href: '/conversion-optimierung', desc: 'Unsere Leistung' },
                { label: 'Landing Pages erstellen', href: '/landing-page', desc: 'Unsere Leistung' },
                { label: 'Webdesign Kosten Schweiz', href: '/blog/webdesign-kosten-schweiz-2026', desc: 'Blog-Artikel' },
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
              Wie hoch ist die Conversion Rate Ihrer Website?
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Starten Sie mit einer kostenlosen Analyse. Wir zeigen Ihnen, wo Ihre Website
              Conversion-Potenzial verschenkt – und wie viel das monatlich an Umsatz bedeutet.
            </p>
            <div className="mt-8">
              <Link
                to="/#analysis"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
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

export default ConversionRateKMU;
