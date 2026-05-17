import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="relative p-10 lg:p-16 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="w-24 h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
                <ShieldCheck size={40} className="text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:col-span-9">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">
                Performance-Garantie
              </div>
              <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
                Sollte Ihre Website nach Launch nicht messbar besser performen,<br />
                <span className="text-neutral-400">optimieren wir kostenfrei weiter – bis Ergebnisse sichtbar sind.</span>
              </h2>
              <p className="mt-6 text-neutral-400 max-w-2xl leading-relaxed">
                Wir arbeiten ergebnisorientiert. Das bedeutet: Wir hören nicht beim Launch auf,
                sondern erst, wenn Ihre Website tatsächlich Resultate liefert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
