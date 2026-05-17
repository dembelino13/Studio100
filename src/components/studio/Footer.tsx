import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white text-neutral-900 flex items-center justify-center font-bold">
                S
              </div>
              <span className="font-semibold tracking-tight text-white text-xl">Studio100</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Wir entwickeln digitale Verkaufssysteme für Bau- und Handwerksunternehmen, die
              messbar mehr Kunden gewinnen wollen.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Kontakt
            </div>
            <a
              href="mailto:schlaepfer.demian@gmail.com"
              className="flex items-center gap-2 text-sm hover:text-white transition"
            >
              <Mail size={14} />
              schlaepfer.demian@gmail.com
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">
              Navigation
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition"
                >
                  Angebot
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>


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
            </ul>

          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} Studio100. Alle Rechte vorbehalten.</div>
          <div>Premium Conversion Websites · Schweiz & DACH</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
