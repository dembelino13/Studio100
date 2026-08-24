import React from 'react';
import { Check } from 'lucide-react';

const PositioningSection: React.FC = () => {
  const points = [
    'Strategische Positionierung gegenüber dem Wettbewerb',
    'Conversion-optimierte Nutzerführung & Copy',
    'Messbare Ergebnisse statt subjektiver Meinungen',
    'Technisches Fundament für nachhaltiges Wachstum',
  ];

  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Unsere Positionierung
            </div>
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Wir bauen keine Websites.<br />
              <span className="text-neutral-400">Wir bauen digitale Verkaufssysteme.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Eine Website ist kein Designprojekt. Sie ist ein Mitarbeiter, der 24/7 für Sie
              arbeitet – qualifiziert, überzeugt, und schließt Anfragen ab. Wir entwickeln
              Systeme, die genau das leisten.
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
              <div className="relative bg-neutral-900 rounded-[2rem] p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
                    Studio100 System
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-10">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-semibold tracking-tight">+184%</div>
                      <div className="text-xs text-neutral-400 mt-1">Mehr Anfragen</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-semibold tracking-tight">-62%</div>
                      <div className="text-xs text-neutral-400 mt-1">Absprungrate</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-semibold tracking-tight">2,8s</div>
                      <div className="text-xs text-neutral-400 mt-1">Ladezeit</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-semibold tracking-tight">100/100</div>
                      <div className="text-xs text-neutral-400 mt-1">Performance Score</div>
                    </div>
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
  );
};

export default PositioningSection;
