import React, { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Banknote } from 'lucide-react';
import { chf } from '@/data/angebot';

// Umsatz-Rechner (von der alten Seite, Werte fürs Handwerk in CHF).
// Rechnung: Besucher × Anfragequote × Abschlussquote × Ø Auftragswert.
// Die Ziel-Anfragequote ist eine Annahme, die der Besucher selbst einstellt – kein Versprechen.
const fmt = (n: number) => `CHF ${chf(Math.round(n))}`;

type SliderProps = { label: string; value: number; display: string; min: number; max: number; step: number; minLabel: string; maxLabel: string; onChange: (v: number) => void };
const Slider: React.FC<SliderProps> = ({ label, value, display, min, max, step, minLabel, maxLabel, onChange }) => (
  <div>
    <div className="flex justify-between items-baseline gap-4 mb-3">
      <label className="text-sm text-neutral-300">{label}</label>
      <span className="text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap">{display}</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={value} aria-label={label}
      onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-blue-500" />
    <div className="flex justify-between text-xs text-neutral-500 mt-2">
      <span>{minLabel}</span>
      <span>{maxLabel}</span>
    </div>
  </div>
);

const ROICalculator: React.FC = () => {
  const [visitors, setVisitors] = useState(400);
  const [rate, setRate] = useState(1.0); // % der Besucher, die heute anfragen
  const [target, setTarget] = useState(2.5); // % mit optimierter Website (Annahme)
  const [closing, setClosing] = useState(30); // % der Anfragen, die zum Auftrag werden
  const [avgValue, setAvgValue] = useState(4000);

  const r = useMemo(() => {
    const ziel = Math.max(target, rate);
    const anfragenHeute = visitors * (rate / 100);
    const anfragenZiel = visitors * (ziel / 100);
    const current = anfragenHeute * (closing / 100) * avgValue;
    const potential = anfragenZiel * (closing / 100) * avgValue;
    return { anfragenHeute, anfragenZiel, current, potential, lost: potential - current };
  }, [visitors, rate, target, closing, avgValue]);

  const barFill = r.potential > 0 ? Math.min((r.current / r.potential) * 100, 100) : 100;
  const pct = (n: number) => `${n.toFixed(1).replace('.', ',')} %`;

  return (
    <section id="calculator" className="py-20 sm:py-28 lg:py-36 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">Umsatz-Rechner</div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Wie viel Umsatz verlieren Sie<br />
            <span className="text-neutral-500">jeden Monat?</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Geben Sie die Zahlen Ihres Betriebs ein – zum Beispiel für Elektro, Sanitär, Heizung, Maler oder Schreinerei.
            Der Rechner zeigt, was zusätzliche Anfragen über eine bessere Website wert wären.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-8">Ihre Zahlen</h3>
            <div className="space-y-9">
              <Slider label="Website-Besucher pro Monat" value={visitors} display={chf(visitors)} min={50} max={5000} step={50} minLabel="50" maxLabel="5'000" onChange={setVisitors} />
              <Slider label="Davon fragen heute an" value={rate} display={pct(rate)} min={0.1} max={5} step={0.1} minLabel="0,1 %" maxLabel="5 %" onChange={setRate} />
              <Slider label="Davon werden zum Auftrag" value={closing} display={`${closing} %`} min={5} max={80} step={5} minLabel="5 %" maxLabel="80 %" onChange={setClosing} />
              <Slider label="Ø Auftragswert" value={avgValue} display={fmt(avgValue)} min={500} max={50000} step={500} minLabel="CHF 500" maxLabel="CHF 50'000" onChange={setAvgValue} />
              <Slider label="Annahme: Anfragequote mit optimierter Website" value={target} display={pct(Math.max(target, rate))} min={0.5} max={6} step={0.1} minLabel="0,5 %" maxLabel="6 %" onChange={setTarget} />
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 flex flex-col">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-8">Ihr Ergebnis pro Monat</h3>
            <div className="space-y-6 flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2"><Banknote size={12} /> Umsatz über die Website heute</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{fmt(r.current)}</div>
                <div className="text-xs text-neutral-500 mt-1">{r.anfragenHeute.toFixed(1).replace('.', ',')} Anfragen pro Monat</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 mb-2"><TrendingUp size={12} /> Mit optimierter Website</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-blue-400">{fmt(r.potential)}</div>
                <div className="text-xs text-neutral-500 mt-1">{r.anfragenZiel.toFixed(1).replace('.', ',')} Anfragen pro Monat</div>
              </div>
              <div className="pt-2">
                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-500" style={{ width: `${barFill}%` }} />
                </div>
                <div className="flex justify-between text-xs text-neutral-500 mt-2"><span>Heute</span><span>Potenzial</span></div>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-red-400 mb-2"><TrendingDown size={12} /> Entgangener Umsatz pro Monat</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-red-400">-{fmt(r.lost)}</div>
                <div className="text-sm text-neutral-500 mt-2">Das entspricht {fmt(r.lost * 12)} pro Jahr.</div>
              </div>
            </div>
            <p className="mt-6 text-xs text-neutral-500 leading-relaxed">
              Rechenbeispiel mit Ihren eigenen Annahmen – keine Garantie. Wie viele Anfragen eine Website bringt, hängt von Region, Gewerk und Angebot ab.
            </p>
            <button
              onClick={() => document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 w-full px-6 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all"
            >
              Jetzt Ihre Website kostenlos prüfen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
