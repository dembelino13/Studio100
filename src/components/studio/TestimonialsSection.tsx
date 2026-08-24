import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Markus Brunner',
    role: 'Geschäftsführer',
    company: 'Brunner Bau GmbH',
    metric: '+184% Anfragen',
    quote:
      'Vor Studio100 hatten wir eine Website, die niemand fand. Heute bekommen wir wöchentlich qualifizierte Anfragen – und das System läuft praktisch von alleine.',
    initials: 'MB',
  },
  {
    name: 'Sandra Hofer',
    role: 'Inhaberin',
    company: 'Hofer Sanitär',
    metric: '3,2× Conversion',
    quote:
      'Endlich eine Agentur, die nicht über Farben diskutiert, sondern über Ergebnisse. Die neue Website hat unsere Conversion-Rate mehr als verdreifacht.',
    initials: 'SH',
  },
  {
    name: 'Thomas Reiter',
    role: 'Inhaber',
    company: 'Reiter Dachdeckermeister',
    metric: '+47.000€/Monat',
    quote:
      'Die Investition hat sich nach 6 Wochen amortisiert. Wir generieren heute über 47.000€ zusätzlichen Monatsumsatz nur über unsere neue Website.',
    initials: 'TR',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Referenzen
            </div>
            <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Was unsere Kunden sagen.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:gap-2 transition-all flex-shrink-0"
          >
            Alle Case Studies ansehen
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-neutral-900 fill-neutral-900" />
                ))}
              </div>

              <div className="inline-flex items-center self-start px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6">
                {t.metric}
              </div>

              <blockquote className="text-lg text-neutral-800 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
