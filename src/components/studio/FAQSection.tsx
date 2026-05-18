import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Was kostet eine professionelle Website in der Schweiz?',
    answer:
      'Die Kosten für eine professionelle Website in der Schweiz liegen je nach Umfang zwischen CHF 3.000 und CHF 15.000+. Bei Studio100 beginnen unsere Pakete bei CHF 3.000 für fokussierte Projekte und reichen bis CHF 10.000+ für vollständige Conversion-Website-Systeme inkl. Strategie, Copywriting, Design und Entwicklung. Im Vergleich zu Baukastenlösungen wie Wix oder WordPress investieren Sie in eine strategisch entwickelte Website, die messbar mehr Anfragen generiert. Die einmalige Investition amortisiert sich bei unseren Kunden typischerweise innerhalb von 2–3 Monaten.',
  },
  {
    question: 'Was macht eine gute Webdesign-Agentur in Zug aus?',
    answer:
      'Eine gute Webdesign-Agentur in Zug denkt nicht in Designs, sondern in Ergebnissen. Studio100 unterscheidet sich durch drei Merkmale: Fokus ausschliesslich auf KMUs in der DACH-Region, Erfolgsmessung an Conversion-Rate und Anfragen statt Ästhetik, und direkte Zusammenarbeit ohne wechselnde Junior-Mitarbeitende. Unser Standort in Zug ermöglicht kurze Kommunikationswege und ein tiefes Verständnis des Schweizer Marktes und seiner Anforderungen.',
  },
  {
    question: 'Für welche KMUs in der DACH-Region ist Studio100 geeignet?',
    answer:
      'Studio100 ist ideal für etablierte KMUs in der DACH-Region (Schweiz, Deutschland, Österreich), die über ihre Website zu wenig qualifizierte Anfragen erhalten. Typische Branchen: Bau, Sanitär, Elektro, Dach sowie lokale Dienstleister und Handwerksbetriebe mit 5–50 Mitarbeitenden. Nicht geeignet für E-Commerce-Shops, Start-ups ohne Umsatz oder Unternehmen, die primär über Social Media oder Marktplätze vertreiben. Entscheidend: Sie haben ein funktionierendes Geschäft und wollen über Ihre Website deutlich mehr Wachstum erzielen.',
  },
  {
    question: 'Wie lange dauert die Erstellung einer professionellen Website?',
    answer:
      'Von der ersten Besprechung bis zum Launch dauert es bei Studio100 zwischen 4 und 8 Wochen. Die Phasen: Strategie & Briefing (Woche 1), Design & Konzept (Woche 2–3), Entwicklung & Copywriting (Woche 3–6), Review & Launch (Woche 7–8). Unser strukturierter Prozess vermeidet endlose Feedback-Schleifen – Sie wissen von Anfang an, was wann geliefert wird.',
  },
  {
    question: 'Was unterscheidet eine Conversion-Website von einer normalen Website?',
    answer:
      'Eine normale Website zeigt, wer Sie sind. Eine Conversion-Website überzeugt Besucher aktiv, Sie zu kontaktieren. Der Unterschied liegt im strategischen Aufbau: Jede Sektion hat einen definierten Zweck im Entscheidungsprozess des Besuchers. Conversion-Websites nutzen verkaufspsychologisch optimierte Texte, klare Handlungsaufforderungen, aktives Vertrauensmanagement (Referenzen, Garantien, Zahlen) sowie datenbasiertes UX-Design. Bei unseren Kunden führt das durchschnittlich zu +184 % mehr Anfragen gegenüber der Vorgängerwebsite.',
  },
  {
    question: 'Kann ich meine bestehende Website überarbeiten lassen?',
    answer:
      'Ja. Wir starten jedes Projekt mit einer kostenfreien Website-Analyse, bei der wir Ihre bestehende Seite auf Conversion-Schwachstellen untersuchen. In vielen Fällen ist ein gezielter Umbau effizienter als ein kompletter Neuaufbau. Wir empfehlen immer das, was Ihnen den grössten ROI bringt – unabhängig davon, was für uns das lukrativere Projekt wäre.',
  },
  {
    question: 'Wie garantiert Studio100 den Erfolg meiner neuen Website?',
    answer:
      'Studio100 bietet eine Performance-Garantie: Sollte Ihre neue Website nach dem Launch keine messbar besseren Ergebnisse als vorher erzielen, optimieren wir kostenlos weiter, bis die Ziele erreicht sind. Diese Garantie können wir geben, weil unser System auf über 100 realisierten Projekten basiert – die Muster sind bekannt und die Ergebnisse gut vorhersagbar. Klare KPIs werden gemeinsam vor dem Launch definiert.',
  },
  {
    question: 'Warum lohnt sich eine professionelle Website für mein KMU?',
    answer:
      'Eine conversion-optimierte Website ist die kosteneffizienteste Wachstumsinvestition für KMUs. Sie arbeitet 24/7 ohne laufende Werbekosten. Im Gegensatz zu Google Ads, die sofort aufhören zu wirken wenn das Budget stoppt, generiert eine gute Website dauerhaft qualifizierte Anfragen. Unsere Kunden erzielen durchschnittlich +183 % mehr Umsatz über ihre neue Website – bei einmaliger Investition ohne Monatsgebühren.',
  },
  {
    question: 'Welche Ergebnisse kann ich in den ersten 90 Tagen erwarten?',
    answer:
      'Basierend auf 100+ realisierten Projekten sehen unsere Kunden innerhalb von 30–90 Tagen nach Launch: +184 % mehr qualifizierte Anfragen, +211 % höhere Conversion-Rate und +183 % mehr Umsatz über die Website. Die konkreten Zahlen hängen von Branche, Region und aktuellem Traffic ab. Den genauen ROI für Ihr Unternehmen kalkulieren Sie mit unserem interaktiven Rechner auf der Startseite.',
  },
  {
    question: 'Welche technischen Voraussetzungen brauche ich?',
    answer:
      'Keine besonderen technischen Vorkenntnisse erforderlich. Wir kümmern uns um Hosting-Empfehlungen, Domain-Setup, SSL-Zertifikate, CMS-Integration und alle technischen Aspekte. Nach dem Launch erhalten Sie eine persönliche Einführung in Ihr CMS, sodass Sie Texte und Bilder selbst aktualisieren können. Eine eigene IT-Abteilung ist nicht notwendig – wir erklären alles verständlich.',
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Alles, was Sie über Webdesign für KMUs in der DACH-Region wissen müssen.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border bg-white overflow-hidden transition-colors ${
                  open === i ? 'border-neutral-300' : 'border-neutral-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-neutral-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-base font-medium text-neutral-900">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-neutral-400 transition-transform duration-200 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-7 pb-6 pt-4 text-[15px] text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
