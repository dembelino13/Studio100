import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import CaseStudyCard from '@/components/studio/CaseStudyCard';
import { caseStudies, industries, type Industry } from '@/data/caseStudies';

const CaseStudiesPage: React.FC = () => {
  const [filter, setFilter] = useState<Industry | 'Alle'>('Alle');

  const filtered = useMemo(() => {
    if (filter === 'Alle') return caseStudies;
    return caseStudies.filter((c) => c.industry === filter);
  }, [filter]);

  // Aggregate stats across all case studies
  const stats = useMemo(() => {
    const total = caseStudies.length;
    const avgConvLift = Math.round(
      caseStudies.reduce((acc, c) => {
        const m = c.metrics.find((x) => x.label.includes('Conversion'));
        return acc + (m ? parseFloat(m.delta.replace(/[^0-9.-]/g, '')) : 0);
      }, 0) / total
    );
    const avgRevLift = Math.round(
      caseStudies.reduce((acc, c) => {
        const m = c.metrics.find((x) => x.label.includes('Umsatz'));
        return acc + (m ? parseFloat(m.delta.replace(/[^0-9.-]/g, '')) : 0);
      }, 0) / total
    );
    return { total, avgConvLift, avgRevLift };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition mb-8"
          >
            <ArrowLeft size={14} /> Zurück zur Startseite
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-medium text-neutral-700 mb-8">
              <Sparkles size={14} className="text-blue-600" />
              <span>Case Studies · Reale Ergebnisse</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
              Wenn Websites zu<br />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent">
                messbaren Verkaufssystemen werden.
              </span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Sechs ausgewählte Projekte aus dem Bau- und Handwerk – mit nachvollziehbaren
              Vorher/Nachher-Zahlen, dem strategischen Ansatz dahinter und ehrlichen
              Kundenstimmen.
            </p>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 lg:gap-12 max-w-2xl border-t border-neutral-200 pt-10">
              <div>
                <div className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight">
                  {stats.total}
                </div>
                <div className="text-xs lg:text-sm text-neutral-500 mt-1">Dokumentierte Projekte</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight">
                  +{stats.avgConvLift}%
                </div>
                <div className="text-xs lg:text-sm text-neutral-500 mt-1">Ø Conversion-Steigerung</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight">
                  +{stats.avgRevLift}%
                </div>
                <div className="text-xs lg:text-sm text-neutral-500 mt-1">Ø Umsatz-Steigerung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 pb-6 border-b border-neutral-200">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-2">
                Filter
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Nach Branche filtern
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => {
                const active = filter === ind;
                const count =
                  ind === 'Alle'
                    ? caseStudies.length
                    : caseStudies.filter((c) => c.industry === ind).length;
                return (
                  <button
                    key={ind}
                    onClick={() => setFilter(ind)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all ${
                      active
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-900'
                    }`}
                  >
                    {ind}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        active ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-neutral-500">
              Keine Projekte in dieser Branche gefunden.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {filtered.map((study, i) => (
                <CaseStudyCard key={study.slug} study={study} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA back to contact */}
      <section className="py-24 lg:py-32 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase mb-4">
            Ihr Projekt als nächste Case Study
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            Bereit für messbare Ergebnisse?
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns über Ihr Vorhaben sprechen. Wir prüfen unverbindlich, welches Potenzial
            in Ihrer aktuellen Website steckt – und wie wir es freischalten.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all"
            >
              Projekt anfragen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#analysis"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              Kostenlose Website-Analyse
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
