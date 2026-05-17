import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 lg:pt-40 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition mb-10"
          >
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>

          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Rechtliches
          </div>
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Datenschutz
          </h1>

          <div className="mt-12 p-8 lg:p-10 rounded-3xl border border-neutral-200 bg-neutral-50/50">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Schutz Ihrer Daten
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  Stand: {new Date().toLocaleDateString('de-CH')}
                </p>
              </div>
            </div>

            <div className="space-y-5 text-[15px] text-neutral-700 leading-relaxed">
              <p>
                Wir nehmen den Schutz persönlicher Daten ernst. Über Formulare
                übermittelte Daten wie Name, E-Mail, Telefonnummer, Website-Link
                und Projektdetails werden ausschliesslich zur Bearbeitung der
                Anfrage und zur Kontaktaufnahme verwendet.
              </p>
              <p>
                Die Daten werden nicht ohne Zustimmung an Dritte weitergegeben.
              </p>
              <p>
                Nutzer können jederzeit Auskunft, Korrektur oder Löschung ihrer
                Daten anfordern unter:{' '}
                <a
                  href="mailto:schlaepfer.demian@gmail.com"
                  className="text-neutral-900 underline hover:no-underline"
                >
                  schlaepfer.demian@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">Hinweis:</strong> Dieser
              Datenschutztext ist eine einfache Standardvorlage und ersetzt
              keine rechtliche Beratung.
            </p>
          </div>

          <div className="mt-10 text-sm text-neutral-500">
            <Link to="/impressum" className="underline hover:text-neutral-900">
              Impressum ansehen
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
