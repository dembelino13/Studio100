import React from 'react';
import { Check, Wrench } from 'lucide-react';

const points = [
  'Ich spreche Ihre Sprache – keine Agentur-Floskeln, kein Fachchinesisch',
  'Texte, die zeigen, was Ihren Betrieb ausmacht: Qualität, Termintreue, Region',
  'Eine Stellenseite, die Fachkräfte und Lernende anspricht',
  'Klare Wege zur Anfrage: anrufen, Offerte anfragen oder Formular ausfüllen',
];

const ElektrikerSection: React.FC = () => {
  return (
    <section id="ueber" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Vom Handwerk fürs Handwerk</div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Gebaut von einem Elektriker.<br />
              <span className="text-neutral-400">Nicht von einer Werbeagentur.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Ich kenne Baustellen, Offerten am Feierabend und den Kampf um gute Leute. Genau deshalb
              weiss ich, was auf die Website eines Handwerksbetriebs gehört – und was nicht.
            </p>
            <ul className="mt-10 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
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
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                    <Wrench size={20} className="text-blue-400" />
                  </div>
                  <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">So läuft es ab</div>
                  <ol className="space-y-5 text-[15px]">
                    {[
                      ['1', 'Kostenloser Digital-Check', 'Sie sehen schwarz auf weiss, wo Ihre Website heute steht.'],
                      ['2', 'Gespräch (30 Min.)', 'Wir klären Ziele, Inhalte und Zeitplan – unverbindlich.'],
                      ['3', 'Offerte zum Fixpreis', 'Online annehmen, ohne Papierkram.'],
                      ['4', 'Go-Live', 'Innert 20 Tagen nach Erhalt aller Inhalte – garantiert.'],
                    ].map(([n, t, d]) => (
                      <li key={n} className="flex gap-4">
                        <span className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-semibold flex-shrink-0">{n}</span>
                        <span><b className="font-semibold">{t}</b><br /><span className="text-neutral-400">{d}</span></span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElektrikerSection;
