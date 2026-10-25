import React from 'react';
import { ArrowRight, CalendarDays, Zap } from 'lucide-react';
import { LINKS, KERNPAKET, GARANTIE, MWST_HINWEIS, chf } from '@/data/angebot';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-200 via-neutral-100 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-medium text-neutral-700 mb-8 animate-fade-in">
            <Zap size={14} className="text-blue-600" />
            <span>Websites für Handwerksbetriebe – gebaut von einem Elektriker</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-semibold tracking-tight text-neutral-900 leading-[1.05]">
            Eine Website, die<br />
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent">
              Aufträge und Fachkräfte bringt.
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Ich bin Elektriker und weiss, wie ein Handwerksbetrieb funktioniert: wenig Zeit,
            volle Auftragsbücher – und trotzdem fehlen gute Leute. Darum baue ich Websites, die neue
            Kunden überzeugen und Bewerbende anziehen. Zum Fixpreis, ohne Fachchinesisch.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={LINKS.digitalCheck}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02] shadow-lg shadow-neutral-900/10"
            >
              Kostenloser Digital-Check
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={LINKS.gespraech}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            >
              <CalendarDays size={16} />
              Gespräch buchen
            </a>
          </div>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 max-w-3xl border-t border-neutral-200 pt-10">
            <div>
              <div className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight">CHF {chf(KERNPAKET.preis)}</div>
              <div className="text-xs lg:text-sm text-neutral-500 mt-1">Fixpreis, {MWST_HINWEIS} – oder CHF {KERNPAKET.abo.preis}/Monat</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight">20 Tage</div>
              <div className="text-xs lg:text-sm text-neutral-500 mt-1">{GARANTIE.titel} nach Erhalt aller Inhalte</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight">Ihr Eigentum</div>
              <div className="text-xs lg:text-sm text-neutral-500 mt-1">Domain, Hosting und Code laufen auf Ihren Namen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
