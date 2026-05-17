import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, User } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';

const Impressum: React.FC = () => {
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
            Impressum
          </h1>

          <div className="mt-12 p-8 lg:p-10 rounded-3xl border border-neutral-200 bg-neutral-50/50 space-y-6">
            <Row icon={<User size={16} />} label="Inhaber">
              Demian Schläpfer
            </Row>
            <Row icon={<span className="font-bold text-sm">S</span>} label="Firma">
              Studio100
            </Row>
            <Row icon={<Mail size={16} />} label="E-Mail">
              <a
                href="mailto:schlaepfer.demian@gmail.com"
                className="text-neutral-900 hover:underline"
              >
                schlaepfer.demian@gmail.com
              </a>
            </Row>
            <Row icon={<MapPin size={16} />} label="Standort">
              Schweiz
            </Row>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-100">
            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">Hinweis:</strong> Dies ist ein
              vorläufiges Impressum. Rechtliche Angaben müssen bei Bedarf final
              geprüft und ergänzt werden.
            </p>
          </div>

          <div className="mt-10 text-sm text-neutral-500">
            <Link to="/datenschutz" className="underline hover:text-neutral-900">
              Datenschutzerklärung ansehen
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Row: React.FC<{
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}> = ({ icon, label, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-9 h-9 shrink-0 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">
      {icon}
    </div>
    <div>
      <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="text-base text-neutral-900">{children}</div>
    </div>
  </div>
);

export default Impressum;
