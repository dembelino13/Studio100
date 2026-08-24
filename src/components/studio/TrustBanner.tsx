import React from 'react';

const technologies = [
  { name: 'React', color: 'text-[#61DAFB]', bg: 'bg-[#61DAFB]/10' },
  { name: 'TypeScript', color: 'text-[#3178C6]', bg: 'bg-[#3178C6]/10' },
  { name: 'Vite', color: 'text-[#646CFF]', bg: 'bg-[#646CFF]/10' },
  { name: 'Tailwind CSS', color: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/10' },
  { name: 'Vercel', color: 'text-neutral-900', bg: 'bg-neutral-100' },
  { name: 'Google Analytics', color: 'text-[#E37400]', bg: 'bg-[#E37400]/10' },
  { name: 'Resend', color: 'text-neutral-900', bg: 'bg-neutral-100' },
  { name: 'Lighthouse 100', color: 'text-[#16A34A]', bg: 'bg-[#16A34A]/10' },
  { name: 'Schema.org', color: 'text-[#2563EB]', bg: 'bg-[#2563EB]/10' },
  { name: 'DSGVO-konform', color: 'text-neutral-700', bg: 'bg-neutral-100' },
];

const TrustBanner: React.FC = () => {
  return (
    <section className="py-14 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-8">
          Gebaut mit bewährten Technologien
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold border border-transparent ${tech.color} ${tech.bg}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
