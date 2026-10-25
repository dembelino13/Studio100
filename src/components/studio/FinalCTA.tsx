import React from 'react';
import { ArrowRight, CalendarDays, Mail } from 'lucide-react';
import { LINKS } from '@/data/angebot';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">Nächster Schritt</div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
          Wo steht Ihr Betrieb online?<br />
          <span className="text-neutral-500">Finden Sie es in 2 Minuten heraus.</span>
        </h2>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Starten Sie mit dem kostenlosen Digital-Check – oder buchen Sie direkt ein 30-minütiges Gespräch. Unverbindlich.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={LINKS.digitalCheck} className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all">
            Kostenloser Digital-Check <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all">
            <CalendarDays size={16} /> Gespräch buchen
          </a>
        </div>
        <a href={`mailto:${LINKS.email}`} className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition">
          <Mail size={14} /> {LINKS.email}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
