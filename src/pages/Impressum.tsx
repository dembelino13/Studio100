import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, User, Globe } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

interface RowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ icon, label, children }) => (
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

const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Impressum | Studio100 Webdesign"
        description="Impressum von Studio100 – Rosiello Solutions GmbH, Gotthardstrasse 14, 6300 Zug, Schweiz. Rechtliche Angaben gemäss § 5 TMG und ECG."
        canonical="/impressum"
        noindex={true}
      />
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

          <div className="mt-12 space-y-8 text-[15px] text-neutral-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                Angaben gemäss § 5 TMG / ECG
              </h2>
              <div className="p-8 rounded-3xl border border-neutral-200 bg-neutral-50/50 space-y-6">
                <Row icon={<User size={16} />} label="Inhaber">
                  Rosiello Solutions GmbH
                </Row>
                <Row icon={<span className="font-bold text-sm">S</span>} label="Firma">
                  Studio100
                </Row>
                <Row icon={<MapPin size={16} />} label="Adresse">
                  Gotthardstrasse 14<br />
                  6300 Zug<br />
                  Schweiz
                </Row>
                <Row icon={<Mail size={16} />} label="E-Mail">
                  <a
                    href="mailto:schlaepfer.demian@gmail.com"
                    className="text-neutral-900 hover:underline"
                  >
                    schlaepfer.demian@gmail.com
                  </a>
                </Row>
                <Row icon={<Globe size={16} />} label="Website">
                  <a
                    href="https://www.studio-100.de"
                    className="text-neutral-900 hover:underline"
                  >
                    www.studio-100.de
                  </a>
                </Row>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                Gewähr übernehmen. Als Diensteanbieter sind wir gemäss § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen und schweizerischen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des
                Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

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

export default Impressum;
