import React from 'react';
import { Check } from 'lucide-react';

const SystemSection: React.FC = () => {
  const points = [
    'Klare Positionierung gegenüber anderen Betrieben in Ihrer Region',
    'Nutzerführung und Texte, die Besucher zur Anfrage führen',
    'Messbar: Sie sehen, wie viele Anfragen über die Website kommen',
    'Technisches Fundament, das schnell lädt und mitwächst',
  ];

  return (
    <section id="system" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Unsere Positionierung
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Wir bauen keine Websites.<br />
              <span className="text-neutral-400">Wir bauen digitale Verkaufssysteme.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Eine Website ist kein Designprojekt. Sie ist ein Mitarbeiter, der rund um die Uhr für Ihren
              Betrieb arbeitet – sie überzeugt, beantwortet Fragen und bringt Anfragen und Bewerbungen.
              Wir entwickeln Systeme, die genau das leisten.
            </p>

            <ul className="mt-10 space-y-4">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-neutral-100 rounded-[2rem] rotate-2" />
              <div className="relative bg-neutral-900 rounded-[2rem] p-8 sm:p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
                    Studio100 System
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-10">
                    {[
                      ['Offertanfrage', 'Formular, das die wichtigen Angaben gleich mitliefert'],
                      ['Klick-Telefon', 'Ein Tipp auf dem Handy – und es klingelt bei Ihnen'],
                      ['Stellenseite', 'Zeigt Fachkräften und Lernenden, warum sich Ihr Betrieb lohnt'],
                      ['Google-Profil', 'Damit Kunden aus der Region Sie finden'],
                    ].map(([t, d]) => (
                      <div key={t} className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-lg sm:text-xl font-semibold tracking-tight">{t}</div>
                        <div className="text-xs text-neutral-400 mt-1 leading-relaxed">{d}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 text-sm text-neutral-400">
                    Diese Bausteine gehören bei uns zu jeder Website – im Fixpreis inbegriffen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
