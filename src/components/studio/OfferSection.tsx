import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const features = [
  'Strategische Positionierung & Marktanalyse',
  'Conversion Copywriting für alle Seiten',
  'Premium Webdesign mit Custom-Komponenten',
  'Technische Entwicklung & CMS-Integration',
  'Performance- & SEO-Optimierung (100/100)',
  'Tracking-Setup & Conversion-Messung',
  'DSGVO-konforme Implementierung',
  'Performance-Garantie nach Launch',
];

const OfferSection: React.FC = () => {
  return (
    <section id="offer" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Unser Angebot
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Ein Produkt.<br />
            <span className="text-neutral-400">Maximal fokussiert.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Wir konzentrieren uns auf eine einzige Sache, die wir besser machen als alle anderen.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-neutral-200 to-transparent">
            <div className="relative bg-white rounded-[1.875rem] p-10 lg:p-14 border border-neutral-100 shadow-xl shadow-neutral-900/5">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10 border-b border-neutral-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium mb-4">
                    Hauptangebot
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
                    Conversion Website System
                  </h3>
                  <p className="mt-3 text-neutral-600 max-w-md">
                    Das vollständige System für Bau- & Handwerksunternehmen, die online messbar
                    mehr qualifizierte Anfragen generieren wollen.
                  </p>
                </div>
                <div className="text-left lg:text-right flex-shrink-0">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Ab</div>
                  <div className="text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
                    5.000€
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">einmalig · zzgl. MwSt.</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-blue-600" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-neutral-700">{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all"
              >
                Projekt anfragen
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
