import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white text-neutral-900 flex items-center justify-center font-bold">
                S
              </div>
              <span className="font-semibold tracking-tight text-white text-xl">Studio100</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Hochkonvertierende Websites für KMUs in der DACH-Region. Mehr Anfragen,
              mehr Umsatz – durch strategisches Webdesign aus Zug.
            </p>
            <a
              href="mailto:schlaepfer.demian@gmail.com"
              className="inline-flex items-center gap-2 text-sm mt-5 hover:text-white transition"
            >
              <Mail size={13} />
              schlaepfer.demian@gmail.com
            </a>
          </div>

          {/* Leistungen */}
          <div className="md:col-span-2 md:col-start-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Leistungen
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/webdesign-kmu" className="hover:text-white transition">
                  Webdesign für KMU
                </Link>
              </li>
              <li>
                <Link to="/landing-page" className="hover:text-white transition">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/conversion-optimierung" className="hover:text-white transition">
                  Conversion-Optimierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Unternehmen
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/ueber-uns" className="hover:text-white transition">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Rechtliches
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/datenschutz" className="hover:text-white transition">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-white transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-white transition">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} Studio100 · Rosiello Solutions GmbH · Zug, Schweiz</div>
          <div>Premium Conversion Websites · DACH-Region</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
