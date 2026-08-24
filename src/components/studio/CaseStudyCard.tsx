import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';
import type { CaseStudy } from '@/data/caseStudies';

interface Props {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<Props> = ({ study, index }) => {
  return (
    <article className="group relative rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:border-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5">

      {/* Browser Preview */}
      <a href={study.siteUrl} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white rounded-full px-3 py-1 text-[11px] text-neutral-400 truncate border border-neutral-200">
            {study.siteUrl.replace('https://', '').replace('http://', '')}
          </div>
          {study.isDemo ? (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100 flex-shrink-0">
              Demo
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          )}
        </div>
        <div className={`relative h-48 ${study.previewBg} overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 blur-2xl bg-white" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-2 bg-white text-neutral-900 text-sm font-medium px-5 py-2.5 rounded-full shadow-lg">
              <ExternalLink size={14} />
              {study.isDemo ? 'Demo ansehen' : 'Live Website öffnen'}
            </span>
          </div>
        </div>
      </a>

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
              {study.isDemo && (
                <>
                  <span>·</span>
                  <span className="px-2.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600">
                    Showcase
                  </span>
                </>
              )}
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
              {m.before && (
                <>
                  <span className="text-xs text-neutral-400 line-through">{m.before}</span>
                  <span className="text-xs text-neutral-400">→</span>
                </>
              )}
              <span className="text-lg lg:text-xl font-semibold text-neutral-900 tracking-tight">
                {m.after}
              </span>
            </div>
            <div className={`mt-2 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
              study.isDemo ? 'text-purple-700 bg-purple-50' : 'text-emerald-700 bg-emerald-50'
            }`}>
              {!study.isDemo && <TrendingUp size={10} strokeWidth={3} />}
              {m.delta}
            </div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="text-[10px] font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
            {study.isDemo ? 'Über dieses Projekt' : 'Ausgangslage'}
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

      {/* Footer */}
      <div className="p-8 lg:p-10 bg-neutral-50 border-t border-neutral-100">
        <blockquote className="text-lg text-neutral-800 leading-relaxed">
          "{study.testimonial.quote}"
        </blockquote>
        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full text-white flex items-center justify-center text-sm font-semibold ${
              study.isDemo ? 'bg-purple-600' : 'bg-neutral-900'
            }`}>
              {study.testimonial.initials}
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">{study.testimonial.author}</div>
              <div className="text-xs text-neutral-500">{study.testimonial.role}</div>
            </div>
          </div>
          {study.isDemo ? (
            <a href={study.siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium hover:bg-purple-100 transition-all">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Demo ansehen
              <ExternalLink size={13} />
            </a>
          ) : (
            <a href={study.siteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Website
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

    </article>
  );
};

export default CaseStudyCard;
