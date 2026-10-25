import React from 'react';
import { ShieldCheck, KeyRound, LifeBuoy } from 'lucide-react';
import { GARANTIE } from '@/data/angebot';

const GuaranteeSection: React.FC = () => {
  return (
    <section id="garantie" className="py-20 sm:py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative p-8 sm:p-10 lg:p-16 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-800 text-white overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center">
                <ShieldCheck size={40} className="text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
            <div className="lg:col-span-9">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-3">{GARANTIE.titel}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15]">{GARANTIE.text}</h2>
              <p className="mt-6 text-neutral-400 max-w-2xl leading-relaxed">
                Sie liefern Logo, Fotos und Stichworte – wir kümmern uns um den Rest. Ist die Website nicht rechtzeitig online, tragen wir das Risiko.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-neutral-200">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6"><KeyRound size={20} className="text-white" /></div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Ihr Eigentum</h3>
            <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
              Domain, Hosting und Code laufen auf Ihren Namen. Sie sind an nichts gebunden und können die Website jederzeit mitnehmen.
            </p>
          </div>
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-neutral-200">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6"><LifeBuoy size={20} className="text-white" /></div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Nach dem Go-Live sind wir dabei</h3>
            <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
              Updates, Sicherheit und Anpassungen übernehmen wir in der Betreuung – Sie konzentrieren sich auf Ihre Aufträge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
