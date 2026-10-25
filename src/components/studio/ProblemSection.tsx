import React from 'react';
import { MessageSquareWarning, LayoutDashboard, ShieldOff } from 'lucide-react';

const problems = [
  {
    icon: MessageSquareWarning,
    title: 'Unklare Botschaft',
    desc: 'Besucher verstehen in den ersten Sekunden nicht, was Sie anbieten – und springen ab.',
    beispiel: '«Meier AG – Ihr Partner» sagt nichts. «Elektroinstallationen und Photovoltaik im Raum Thun» schon.',
  },
  {
    icon: LayoutDashboard,
    title: 'Schwache Struktur',
    desc: 'Ohne klare Nutzerführung wissen potenzielle Kunden nicht, was als nächster Schritt zu tun ist.',
    beispiel: 'Telefonnummer nur im Impressum, kein Offertformular – auf dem Handy ruft dann niemand an.',
  },
  {
    icon: ShieldOff,
    title: 'Fehlendes Vertrauen',
    desc: 'Keine Referenzen, keine Beweise, keine Garantien – Interessenten entscheiden sich für die Konkurrenz.',
    beispiel: 'Keine Fotos von echten Baustellen, kein Team, Copyright 2016 – das wirkt, als gäbe es den Betrieb nicht mehr.',
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 lg:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Das eigentliche Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            Die meisten Websites verlieren Kunden – nicht wegen schlechtem Design.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Sie verlieren Kunden, weil drei entscheidende Hebel ignoriert werden. Jeder dieser
            Punkte kostet Sie messbar Anfragen – Monat für Monat.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-8 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                  <Icon size={20} className="text-neutral-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{p.desc}</p>
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-2">Typisch im Handwerk</div>
                  <div className="text-sm text-neutral-700 leading-relaxed">{p.beispiel}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
