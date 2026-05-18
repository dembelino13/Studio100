import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

const WebsiteHandwerker: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Website für Handwerker erstellen lassen: Der komplette Guide 2026 | Studio100"
        description="Was macht eine erfolgreiche Handwerker-Website aus? Welche Elemente sind Pflicht, welche Fehler sollten Sie vermeiden – und was kostet eine professionelle Umsetzung?"
        canonical="/blog/website-handwerker-erstellen-lassen"
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
                  Handwerk & Bau
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                Website für Handwerker erstellen lassen: Der komplette Guide 2026
              </h1>
              <div className="mt-6 flex items-center gap-5 text-sm text-neutral-400">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> 5. Mai 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> 8 Min. Lesezeit</span>
                <span>Von Studio100, Zug</span>
              </div>
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                Handwerksbetriebe verlieren täglich Aufträge, weil ihre Website Interessenten
                nicht überzeugt. Was eine gute Handwerker-Website ausmacht – und was sie
                kosten sollte.
              </p>
            </div>
          </header>

          <div className="py-12 lg:py-16">
            <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-10 text-[16px] text-neutral-700 leading-[1.8]">

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Warum Handwerksbetriebe eine professionelle Website brauchen
                </h2>
                <p>
                  Über 70 % der Konsumenten suchen einen Handwerksbetrieb zuerst online, bevor
                  sie eine Anfrage stellen. Das gilt für Klempner in Zürich genauso wie für
                  Elektriker in München oder Dachdecker in Wien. Wer hier mit einer schwachen
                  Website auftritt, verliert den Auftrag – meistens an den Konkurrenten mit der
                  besseren Online-Präsenz.
                </p>
                <p className="mt-4">
                  Das Problem: Die meisten Handwerker-Websites sind entweder veraltet, technisch
                  mangelhaft oder schlicht nicht darauf ausgelegt, Besucher in Anfragen
                  umzuwandeln. Eine schöne Bildergalerie allein reicht nicht.
                </p>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Was eine gute Handwerker-Website auszeichnet
                </h2>
                <p>
                  Eine erfolgreiche Website für Handwerksbetriebe ist nicht bloss eine
                  digitale Visitenkarte – sie ist ein aktives Akquise-Instrument. Sie beantwortet
                  die Fragen des Besuchers schnell, baut Vertrauen auf und macht es so einfach
                  wie möglich, eine Anfrage zu stellen.
                </p>
                <p className="mt-4">
                  Die wichtigsten Erfolgsfaktoren:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { label: 'Klares Leistungsversprechen', desc: 'Der Besucher muss in 5 Sekunden verstehen, was Sie anbieten, für wen und in welcher Region. Kein generisches "Qualität aus einer Hand".' },
                    { label: 'Vertrauenssignale', desc: 'Kundenbewertungen, Referenzprojekte mit Fotos, Zertifikate, Mitgliedschaften in Berufsverbänden – das schafft Vertrauen bei Erstbesuchern.' },
                    { label: 'Klare Handlungsaufforderungen', desc: 'Ein prominentes Kontaktformular, eine gut sichtbare Telefonnummer und idealerweise ein Online-Terminbuchungssystem senken die Hemmschwelle zur Anfrage erheblich.' },
                    { label: 'Mobile-Optimierung', desc: 'Über 60 % aller Handwerker-Suchanfragen erfolgen über Smartphones. Wer hier mit einer nicht mobiloptimierten Website auftritt, verliert mehr als die Hälfte seiner potenziellen Kunden.' },
                    { label: 'Schnelle Ladezeiten', desc: 'Mehr als 3 Sekunden Ladezeit und Besucher springen ab. Komprimierte Bilder, schnelles Hosting und technische Optimierung sind Pflicht.' },
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
                  Die häufigsten Fehler auf Handwerker-Websites
                </h2>
                <div className="space-y-4">
                  {[
                    { title: 'Zu viel Text, zu wenig Struktur', desc: 'Lange Textwände ohne Überschriften, Aufzählungen oder visuelle Hierarchie überfordern Besucher. Klare Struktur führt zu mehr Anfragen.' },
                    { title: 'Fehlendes lokales SEO', desc: 'Ohne lokale Suchmaschinenoptimierung erscheinen Sie nicht in den Google-Ergebnissen für "[Leistung] + [Ort]". Das kostet täglich qualifizierte Anfragen.' },
                    { title: 'Kein klares Alleinstellungsmerkmal', desc: 'Warum sollte jemand Sie und nicht Ihren Konkurrenten beauftragen? Wenn die Antwort auf Ihrer Website fehlt, wird die Entscheidung oft durch den Preis getroffen.' },
                    { title: 'Veraltete Referenzfotos', desc: 'Schlechte oder veraltete Projekt-Fotos wirken unprofessionell. Professionelle Fotos aktueller Projekte sind eine der wirkungsvollsten Investitionen.' },
                  ].map((err, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <h3 className="text-base font-semibold text-neutral-900 mb-2">{err.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{err.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Kosten und Zeitrahmen
                </h2>
                <p>
                  Eine professionelle Website für einen Handwerksbetrieb in der DACH-Region
                  kostet zwischen CHF 3.000 und CHF 8.000 – je nach Umfang, Anzahl der Seiten
                  und ob Copywriting inbegriffen ist. Der Zeitraum vom ersten Gespräch bis zum
                  Launch liegt typischerweise bei 4–8 Wochen.
                </p>
                <p className="mt-4">
                  Wichtig: Achten Sie darauf, dass die Agentur nicht nur eine schöne Website
                  liefert, sondern auch Conversion-Tracking, Grundlagen-SEO und eine
                  Performance-Messung nach Launch einrichtet. Nur so wissen Sie, ob die
                  Investition sich lohnt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                  Fazit: Was Sie als Handwerker von einer neuen Website erwarten dürfen
                </h2>
                <p>
                  Eine strategisch aufgebaute, conversion-optimierte Website ist für
                  Handwerksbetriebe die effizienteste Wachstumsinvestition. Unsere Kunden in
                  der Bau- und Handwerksbranche sehen nach dem Launch durchschnittlich
                  +184 % mehr Anfragen – bei gleichem oder sogar reduziertem Marketingbudget.
                </p>
                <p className="mt-4">
                  Der Schlüssel: Die Website muss nicht nur gut aussehen, sondern strategisch
                  aufgebaut sein. Jede Sektion, jeder Text, jede Schaltfläche hat einen Zweck –
                  Besucher zur Anfrage zu führen.
                </p>
              </section>

            </div>
          </div>
        </article>

        <section className="py-20 lg:py-24 bg-neutral-900 text-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Bereit für eine Website, die Aufträge bringt?
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              Starten Sie mit einer kostenlosen Analyse Ihrer bestehenden Website.
              Wir zeigen Ihnen, wo Sie aktuell Aufträge verlieren – und wie Sie das ändern.
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

export default WebsiteHandwerker;
