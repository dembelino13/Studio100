import React from 'react';
import { PhoneOff, UserX, Smartphone } from 'lucide-react';

const problems = [
  {
    icon: PhoneOff,
    title: 'Anfragen gehen an die Konkurrenz',
    desc: 'Wer einen Elektriker, Sanitär oder Maler sucht, googelt – und ruft den Betrieb an, dessen Website auf dem Handy in Sekunden überzeugt.',
  },
  {
    icon: UserX,
    title: 'Fachkräfte finden Sie nicht',
    desc: 'Gute Leute schauen sich Ihren Betrieb online an, bevor sie sich bewerben. Ohne Stellenseite und Einblick ins Team bewerben sie sich woanders.',
  },
  {
    icon: Smartphone,
    title: 'Die Website ist veraltet',
    desc: 'Selbst gebastelt, vor Jahren erstellt oder gar nicht vorhanden: Das kostet Vertrauen – auch wenn Ihre Arbeit auf der Baustelle top ist.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Das kenne ich aus dem Alltag</div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Gute Arbeit allein reicht online nicht.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Viele Handwerksbetriebe leben von Empfehlungen. Das funktioniert – bis Kunden und Bewerbende
            Sie online suchen und dort nichts Überzeugendes finden.
          </p>
        </div>
        <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="p-7 lg:p-9 rounded-3xl bg-neutral-50 border border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-8">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
