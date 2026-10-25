import React from 'react';
import { PenTool, Type, Code2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Webdesign mit Strategie',
    desc: 'Ein Auftritt, der zu Ihrem Betrieb passt und Besucher gezielt zur Anfrage oder Bewerbung führt.',
    items: ['Klare Wege zur Anfrage', 'Fotos Ihrer echten Arbeiten', 'Zuerst fürs Handy gebaut', 'Hochwertiger Studio100-Stil'],
  },
  {
    icon: Type,
    title: 'Texte, die verkaufen',
    desc: 'Wir schreiben so, wie Ihre Kundschaft redet – aus Ihren Stichworten oder komplett von uns.',
    items: ['Klares Leistungsversprechen', 'Region und Gewerk im Fokus', 'Vertrauen durch Fakten', 'Stellentexte für Fachkräfte'],
  },
  {
    icon: Code2,
    title: 'Saubere Technik',
    desc: 'Schnell, sicher und bei Google gut lesbar – und alles läuft auf Ihren Namen.',
    items: ['Kurze Ladezeiten', 'SEO-Grundlagen', 'SSL und sichere Formulare', 'Google-Unternehmensprofil'],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Leistungen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Drei Disziplinen.<br />
            <span className="text-neutral-400">Ein integriertes System.</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Eine wirksame Website entsteht nur, wenn Strategie, Sprache und Technik zusammenspielen.
            Wir liefern alle drei – aus einer Hand und zum Fixpreis.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-xs font-mono text-neutral-400">0{i + 1}</div>
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{s.desc}</p>

                <ul className="mt-8 space-y-2.5 text-sm text-neutral-700">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-neutral-400" />
                      {it}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 group-hover:gap-2 transition-all"
                >
                  Zum Paket <ArrowUpRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
