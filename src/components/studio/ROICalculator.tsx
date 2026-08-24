import React, { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Euro } from 'lucide-react';

const formatEuro = (n: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

const ROICalculator: React.FC = () => {
  const [visitors, setVisitors] = useState(1500);
  const [conversionRate, setConversionRate] = useState(1.2); // %
  const [avgValue, setAvgValue] = useState(2500);

  const { current, potential, lost } = useMemo(() => {
    const current = visitors * (conversionRate / 100) * avgValue;
    // Studio100 promises 3x conversion → potential
    const potential = visitors * ((conversionRate * 3) / 100) * avgValue;
    const lost = potential - current;
    return { current, potential, lost };
  }, [visitors, conversionRate, avgValue]);

  const lostYearly = lost * 12;
  const barFill = Math.min((current / potential) * 100, 100);

  return (
    <section id="calculator" className="py-28 lg:py-36 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
            ROI-Rechner
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Wie viel Umsatz verlieren Sie<br />
            <span className="text-neutral-500">jeden Monat?</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Geben Sie Ihre Zahlen ein – wir zeigen Ihnen, was eine optimierte Website
            realistisch zusätzlich generieren könnte.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="p-8 lg:p-10 rounded-3xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-8">
              Ihre Zahlen
            </h3>

            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm text-neutral-300">Monatliche Besucher</label>
                  <span className="text-2xl font-semibold tracking-tight">
                    {visitors.toLocaleString('de-DE')}
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={10000}
                  step={100}
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>100</span>
                  <span>10.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm text-neutral-300">Conversion Rate</label>
                  <span className="text-2xl font-semibold tracking-tight">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={0.1}
                  max={5}
                  step={0.1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>0,1%</span>
                  <span>5%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm text-neutral-300">Ø Auftragswert</label>
                  <span className="text-2xl font-semibold tracking-tight">{formatEuro(avgValue)}</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={20000}
                  step={100}
                  value={avgValue}
                  onChange={(e) => setAvgValue(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>500 €</span>
                  <span>20.000 €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 flex flex-col">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-8">
              Ihr Ergebnis pro Monat
            </h3>

            <div className="space-y-6 flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                  <Euro size={12} /> Aktueller Umsatz
                </div>
                <div className="text-4xl lg:text-5xl font-semibold tracking-tight">
                  {formatEuro(current)}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-blue-400 mb-2">
                  <TrendingUp size={12} /> Potenzieller Umsatz (3× Conversion)
                </div>
                <div className="text-4xl lg:text-5xl font-semibold tracking-tight text-blue-400">
                  {formatEuro(potential)}
                </div>
              </div>

              {/* Bar */}
              <div className="pt-2">
                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-500"
                    style={{ width: `${barFill}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                  <span>Heute</span>
                  <span>Potenzial</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-red-400 mb-2">
                  <TrendingDown size={12} /> Verlorener Umsatz pro Monat
                </div>
                <div className="text-4xl lg:text-5xl font-semibold tracking-tight text-red-400">
                  -{formatEuro(lost)}
                </div>
                <div className="text-sm text-neutral-500 mt-2">
                  Das entspricht {formatEuro(lostYearly)} pro Jahr.
                </div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 w-full px-6 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all"
            >
              Jetzt kostenlose Analyse anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
