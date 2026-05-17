import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-200 via-neutral-100 to-transparent blur-3xl opacity-50 pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-medium text-neutral-700 mb-8 animate-fade-in">
            <Sparkles size={14} className="text-blue-600" />
            <span>Conversion Websites für Bau & Handwerk</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-tight text-neutral-900 leading-[1.05]">
            Ihre Website sollte<br />
            nicht nur gut aussehen.<br />
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent">
              Sondern Kunden bringen.
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Wir entwickeln hochwertige Websites für Bau- & Handwerksunternehmen, die Vertrauen
            aufbauen, überzeugen – und messbar mehr Anfragen generieren.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('analysis')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02] shadow-lg shadow-neutral-900/10"
            >
              Kostenlose Website-Analyse starten
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            >
              Projekt anfragen
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 lg:mt-20 grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl border-t border-neutral-200 pt-10">
            <div>
              <div className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight">100+</div>
              <div className="text-xs lg:text-sm text-neutral-500 mt-1">Projekte umgesetzt</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight">3×</div>
              <div className="text-xs lg:text-sm text-neutral-500 mt-1">Höhere Conversion Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight">98%</div>
              <div className="text-xs lg:text-sm text-neutral-500 mt-1">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
