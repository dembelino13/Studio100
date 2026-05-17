import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import type { CaseStudy } from '@/data/caseStudies';

interface Props {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<Props> = ({ study, index }) => {
  return (
    <article className="group relative rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:border-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5">
      {/* Header */}
      <div className={`relative p-8 lg:p-10 bg-gradient-to-br ${study.accentColor} border-b border-neutral-100`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 mb-3">
              <span className="px-2.5 py-1 rounded-full bg-white border border-neutral-200">
                {study.industry}
              </span>
              <span>·</span>
              <span>{study.location}</span>
              <span>·</span>
              <span>{study.year}</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
              {study.company}
            </h3>
            <p className="mt-2 text-neutral-700 max-w-xl leading-relaxed">{study.tagline}</p>
          </div>
          <div className="text-xs font-mono text-neutral-400 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 divide-x divide-neutral-100 border-b border-neutral-100">
        {study.metrics.map((m, i) => (
          <div key={i} className="p-6 lg:p-8">
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium mb-3">
              {m.label}
            </div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xs text-neutral-400 line-through">{m.before}</span>
              <span className="text-xs text-neutral-400">→</span>
              <span className="text-lg lg:text-xl font-semibold text-neutral-900 tracking-tight">
                {m.after}
              </span>
            </div>
            <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp size={10} strokeWidth={3} />
              {m.delta}
            </div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
            Ausgangslage
          </div>
          <p className="text-[15px] text-neutral-700 leading-relaxed">{study.problem}</p>
        </div>
        <div>
          <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
            Unser Ansatz
          </div>
          <ul className="space-y-2.5">
            {study.solution.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[15px] text-neutral-700">
                <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0" />
                <span className="leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonial */}
      <div className="p-8 lg:p-10 bg-neutral-50 border-t border-neutral-100">
        <blockquote className="text-lg text-neutral-800 leading-relaxed">
          "{study.testimonial.quote}"
        </blockquote>
        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold">
              {study.testimonial.initials}
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                {study.testimonial.author}
              </div>
              <div className="text-xs text-neutral-500">{study.testimonial.role}</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 group-hover:gap-2 transition-all">
            Vollständige Case Study <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;
