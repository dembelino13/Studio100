import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BETREUUNG, GARANTIE, KERNPAKET, MWST_HINWEIS, chf } from '@/data/angebot';

// FAQ-Texte nutzen die zentralen Preise (src/data/angebot.ts). Schema.org-FAQ in SchemaOrg.tsx gleich halten.
export const faqs = [
  {
    question: 'Was kostet eine Website bei Studio100?',
    answer: `Das Kernpaket „${KERNPAKET.name}“ kostet einmalig CHF ${chf(KERNPAKET.preis)} (${MWST_HINWEIS}), zahlbar 50 % bei Auftrag und 50 % bei Go-Live. Alternativ gibt es das Website-Abo für CHF ${chf(KERNPAKET.abo.preis)} pro Monat über ${KERNPAKET.abo.laufzeitMonate} Monate, Betreuung Basis inklusive.`,
  },
  {
    question: 'Für wen ist das Angebot gedacht?',
    answer: 'Für Handwerksbetriebe in der Schweiz – zum Beispiel Elektro, Sanitär, Heizung, Maler, Schreiner oder Bau –, die über ihre Website mehr Aufträge und bessere Bewerbungen erhalten möchten.',
  },
  {
    question: 'Wie schnell ist meine Website online?',
    answer: `${GARANTIE.text} In der Regel rechnen wir mit rund vier Wochen vom Start bis zum Go-Live.`,
  },
  {
    question: 'Was muss ich selbst liefern?',
    answer: 'Logo, ein paar Fotos von Projekten und Team sowie Stichworte zu Ihren Leistungen. Alles laden Sie bequem im Kundenportal hoch. Die Texte schreiben wir auf Wunsch komplett für Sie.',
  },
  {
    question: 'Gehört mir die Website?',
    answer: 'Ja. Domain, Hosting und Code laufen auf Ihren Namen. Sie sind nicht an uns gebunden.',
  },
  {
    question: 'Brauche ich eine Betreuung?',
    answer: `Empfohlen, aber freiwillig. Die Betreuung gibt es ab CHF ${chf(BETREUUNG.stufen[0].preis)} pro Monat (${MWST_HINWEIS}), Mindestlaufzeit ${BETREUUNG.mindestlaufzeitMonate} Monate. Sie kümmert sich um Updates, Sicherheit und – je nach Stufe – laufende Anpassungen und Auswertungen.`,
  },
  {
    question: 'Was ist der kostenlose Digital-Check?',
    answer: 'Eine kurze Auswertung, wie Ihr Betrieb heute online dasteht: Website, Handy-Ansicht, Google-Profil und Auffindbarkeit. Sie erhalten das Ergebnis als PDF – kostenlos und unverbindlich.',
  },
  {
    question: 'Sind die Preise inklusive Mehrwertsteuer?',
    answer: 'Nein, alle Preise verstehen sich in CHF exklusive MWST (8.1 %).',
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">FAQ</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">Häufige Fragen</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={faq.question} className={`rounded-2xl border bg-white overflow-hidden transition-colors ${open === i ? 'border-neutral-300' : 'border-neutral-200'}`}>
                <button className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left hover:bg-neutral-50 transition-colors" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span className="text-base font-medium text-neutral-900">{faq.question}</span>
                  <ChevronDown size={18} className={`flex-shrink-0 text-neutral-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && <div className="px-5 sm:px-7 pb-6 pt-4 text-[15px] text-neutral-600 leading-relaxed border-t border-neutral-100">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
