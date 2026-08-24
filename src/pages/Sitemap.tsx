import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/studio/Navbar';
import Footer from '@/components/studio/Footer';
import SEO from '@/components/SEO';

interface SiteLink {
  label: string;
  href: string;
  desc: string;
}

interface SiteSection {
  title: string;
  links: SiteLink[];
}

const sections: SiteSection[] = [
  {
    title: 'Hauptseiten',
    links: [
      { label: 'Startseite', href: '/', desc: 'Übersicht, ROI-Rechner, Leistungen, Referenzen und Angebot' },
      { label: 'Case Studies', href: '/case-studies', desc: 'Alle Kundenprojekte mit messbaren Ergebnissen' },
      { label: 'Über uns', href: '/ueber-uns', desc: 'Mission, Werte und das Team hinter Studio100' },
    ],
  },
  {
    title: 'Leistungen',
    links: [
      { label: 'Webdesign für KMU', href: '/webdesign-kmu', desc: 'Hochkonvertierende Websites für kleine und mittlere Unternehmen in der DACH-Region' },
      { label: 'Landing Pages', href: '/landing-page', desc: 'Fokussierte Landing Pages für maximale Conversion-Raten' },
      { label: 'Conversion-Optimierung', href: '/conversion-optimierung', desc: 'Mehr Anfragen aus bestehendem Traffic durch datenbasierte Optimierung' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'Blog-Übersicht', href: '/blog', desc: 'Alle Artikel zu Webdesign, Conversion und digitalem Wachstum für KMUs' },
      { label: 'Webdesign Kosten Schweiz 2026', href: '/blog/webdesign-kosten-schweiz-2026', desc: 'Was kostet eine professionelle Website in der Schweiz?' },
      { label: 'Website für Handwerker erstellen lassen', href: '/blog/website-handwerker-erstellen-lassen', desc: 'Der komplette Guide für Handwerksbetriebe' },
      { label: 'Conversion Rate optimieren für KMUs', href: '/blog/conversion-rate-optimieren-kmu', desc: '7 bewährte Strategien für mehr Anfragen' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '/impressum', desc: 'Rechtliche Angaben zu Studio100 / Rosiello Solutions GmbH' },
      { label: 'Datenschutzerklärung', href: '/datenschutz', desc: 'Informationen zur Datenverarbeitung gemäss DSGVO und revDSG' },
    ],
  },
];

const Sitemap: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <SEO
        title="Sitemap | Studio100 Webdesign"
        description="Übersicht aller Seiten von Studio100 – Webdesign Agentur aus Zug, Schweiz. Leistungen, Blog, Case Studies und mehr."
        canonical="/sitemap"
        noindex={true}
      />
      <Navbar />

      <main className="flex-1 pt-32 lg:pt-40 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-4">
            Sitemap
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
            Alle Seiten auf einen Blick
          </h1>
          <p className="mt-4 text-neutral-500 text-base">
            Vollständige Übersicht aller Inhalte auf{' '}
            <span className="text-neutral-900 font-medium">www.studio-100.de</span>
          </p>

          <div className="mt-14 space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-5 pb-3 border-b border-neutral-100">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="group flex items-start justify-between gap-4 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200"
                      >
                        <div>
                          <div className="text-base font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {link.label}
                          </div>
                          <div className="text-sm text-neutral-500 mt-0.5">{link.desc}</div>
                          <div className="text-xs text-neutral-400 mt-1 font-mono">
                            studio-100.de{link.href}
                          </div>
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="text-neutral-300 group-hover:text-blue-600 flex-shrink-0 mt-0.5 transition-colors"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
