import React, { useEffect } from 'react';
import { ArrowRight, CalendarDays, HardHat, MessageCircle, BadgeCheck, KeyRound, Mail } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';
import { FIRMA, LINKS } from '@/data/angebot';

// "Über mich" (Neupositionierung 10/2026). Bewusst nur belegbare Aussagen – Lebenslauf/Details ergänzt Demian.
const werte = [
  { icon: HardHat, title: 'Aus dem Handwerk', desc: 'Ich bin Elektriker. Ich weiss, wie Ihr Alltag aussieht – und was Ihre Kunden und Bewerbenden wissen wollen.' },
  { icon: MessageCircle, title: 'Klartext', desc: 'Keine Agentur-Floskeln, kein Fachchinesisch. Sie wissen jederzeit, woran wir arbeiten und was es kostet.' },
  { icon: BadgeCheck, title: 'Fixpreis und Termin-Garantie', desc: 'Ein Paket zum Fixpreis. Ist Ihre Website nicht rechtzeitig online, erhalten Sie 3 Monate Betreuung kostenlos.' },
  { icon: KeyRound, title: 'Ihr Eigentum', desc: 'Domain, Hosting und Code laufen auf Ihren Namen. Sie sind nicht an uns gebunden.' },
];

const UeberUns: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col overflow-x-hidden">
      <SEO
        title="Über mich – Studio100 | Websites für Handwerksbetriebe"
        description="Studio100 baut Websites für Handwerksbetriebe – gegründet von Demian Schläpfer, Elektriker. Fixpreis, Termin-Garantie, Klartext."
        canonical="/ueber-uns"
      />
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent blur-3xl opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">Über mich</div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] max-w-4xl">
              Vom Elektriker<br />
              <span className="text-neutral-400">zum Website-Bauer fürs Handwerk.</span>
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed">
              Ich bin {FIRMA.inhaber}, Elektriker und Gründer von Studio100. Ich habe gesehen, wie viele gute Betriebe
              online kaum sichtbar sind – und wie schwer es ist, Fachkräfte zu finden. Darum baue ich Websites, die genau
              das ändern: mehr Anfragen, bessere Bewerbungen.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {werte.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="p-7 lg:p-9 rounded-3xl bg-neutral-50 border border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6"><Icon size={20} className="text-white" /></div>
                  <h2 className="text-xl font-semibold tracking-tight">{w.title}</h2>
                  <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-neutral-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Lernen wir uns kennen.</h2>
            <p className="mt-4 text-neutral-400">30 Minuten, unverbindlich – oder zuerst der kostenlose Digital-Check.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition">
                <CalendarDays size={16} /> Gespräch buchen
              </a>
              <a href={LINKS.digitalCheck} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition">
                Kostenloser Digital-Check <ArrowRight size={16} />
              </a>
            </div>
            <a href={`mailto:${LINKS.email}`} className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"><Mail size={14} /> {LINKS.email}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;
