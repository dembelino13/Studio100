import React from 'react';
import { Check, ArrowRight, CalendarDays, Star, Plus } from 'lucide-react';
import { BETREUUNG, KERNPAKET, LINKS, MWST_HINWEIS, UPSELLS, chf, wertGesamt } from '@/data/angebot';

const OfferSection: React.FC = () => {
  return (
    <>
      {/* Kernpaket */}
      <section id="offer" className="py-20 sm:py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Das Angebot</div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Ein Paket. Alles drin.<br />
              <span className="text-neutral-400">Zum Fixpreis.</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Keine Stundenabrechnung, keine Überraschungen: Sie wissen von Anfang an, was Sie bekommen und was es kostet.
            </p>
          </div>

          <div className="mt-14 lg:mt-20 max-w-4xl mx-auto">
            <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-neutral-200 to-transparent">
              <div className="relative bg-white rounded-[1.875rem] p-6 sm:p-10 lg:p-14 border border-neutral-100 shadow-xl shadow-neutral-900/5">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10 border-b border-neutral-100">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium mb-4">Kernpaket</div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">{KERNPAKET.name}</h3>
                    <p className="mt-3 text-neutral-600 max-w-md">Die komplette Website für Ihren Handwerksbetrieb – für neue Aufträge und neue Mitarbeitende.</p>
                  </div>
                  <div className="text-left lg:text-right flex-shrink-0">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">CHF {chf(KERNPAKET.preis)}</div>
                    <div className="text-xs text-neutral-500 mt-1">einmalig · {MWST_HINWEIS}</div>
                    <div className="mt-3 text-sm text-neutral-700 lg:max-w-[260px]">
                      oder monatlich zahlbar: <b>CHF {chf(KERNPAKET.abo.preis)}/Monat</b> ({KERNPAKET.abo.laufzeitMonate} Monate, {KERNPAKET.abo.hinweis}) · {MWST_HINWEIS}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 py-10">
                  {KERNPAKET.leistungen.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-neutral-700">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Wertstapel */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5 sm:p-7 mb-8">
                  <div className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-4">Was das einzeln kosten würde</div>
                  <ul className="space-y-2 text-[15px]">
                    {KERNPAKET.wertstapel.map((w) => (
                      <li key={w.bezeichnung} className="flex justify-between gap-4">
                        <span className="text-neutral-700">{w.bezeichnung}</span>
                        <span className="text-neutral-500 whitespace-nowrap">CHF {chf(w.wert)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between gap-4 text-[15px]">
                    <span className="font-semibold text-neutral-900">Gesamtwert</span>
                    <span className="text-neutral-500 line-through whitespace-nowrap">CHF {chf(wertGesamt())}</span>
                  </div>
                  <div className="mt-2 flex justify-between gap-4 text-lg">
                    <span className="font-semibold text-neutral-900">Ihr Preis</span>
                    <span className="font-semibold text-neutral-900 whitespace-nowrap">CHF {chf(KERNPAKET.preis)} <span className="text-xs font-normal text-neutral-500">{MWST_HINWEIS}</span></span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer"
                    className="group flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all">
                    <CalendarDays size={16} /> Gespräch buchen
                  </a>
                  <a href={LINKS.digitalCheck}
                    className="group flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-all">
                    Kostenloser Digital-Check <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Betreuung */}
      <section id="betreuung" className="py-20 sm:py-28 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Betreuung</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Nach dem Go-Live sind Sie nicht allein.
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Wählen Sie, wie viel wir uns um Ihre Website kümmern. Mindestlaufzeit {BETREUUNG.mindestlaufzeitMonate} Monate, danach mit einem Monat Frist kündbar.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BETREUUNG.stufen.map((s) => (
              <div key={s.name} className={`relative p-7 lg:p-9 rounded-3xl bg-white border ${s.empfohlen ? 'border-neutral-900 shadow-xl shadow-neutral-900/10' : 'border-neutral-200'}`}>
                {s.empfohlen && (
                  <div className="absolute -top-3 left-7 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-medium">
                    <Star size={12} /> empfohlen
                  </div>
                )}
                <h3 className="text-xl font-semibold text-neutral-900">{s.name}</h3>
                <div className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">CHF {chf(s.preis)}<span className="text-base font-normal text-neutral-500">/Monat</span></div>
                <div className="text-xs text-neutral-500 mt-1">{MWST_HINWEIS}</div>
                <p className="mt-5 text-[15px] text-neutral-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-500">Beim Website-Abo (CHF {chf(KERNPAKET.abo.preis)}/Monat) ist die Betreuung Basis bereits inklusive.</p>
        </div>
      </section>

      {/* Zusatzleistungen */}
      <section id="zusatz" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Zusatzleistungen</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">Bei Bedarf dazu</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UPSELLS.map((u) => (
              <div key={u.name} className="p-6 rounded-2xl border border-neutral-200 bg-white">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold"><Plus size={16} className="text-blue-600" />{u.name}</div>
                <p className="mt-2 text-sm text-neutral-600">{u.text}</p>
                <div className="mt-4 text-lg font-semibold text-neutral-900">CHF {chf(u.preis)} <span className="text-xs font-normal text-neutral-500">{u.einheit} · {MWST_HINWEIS}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferSection;
