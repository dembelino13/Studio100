import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FIRMA, LINKS } from '@/data/angebot';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-white text-neutral-900 flex items-center justify-center font-bold">S</div>
              <span className="font-semibold tracking-tight text-white text-xl">Studio100</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">Websites für Handwerksbetriebe, die Aufträge und Fachkräfte bringen – gebaut von einem Elektriker.</p>
            <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 text-sm mt-5 hover:text-white transition">
              <Mail size={13} /> {LINKS.email}
            </a>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">Angebot</div>
            <ul className="space-y-3 text-sm">
              <li><a href={LINKS.digitalCheck} className="hover:text-white transition">Kostenloser Digital-Check</a></li>
              <li><a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Gespräch buchen</a></li>
              <li><Link to="/#offer" className="hover:text-white transition">Preise</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">Über</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/ueber-uns" className="hover:text-white transition">Über mich</Link></li>
              <li><a href="https://check.studio-100.de/kunden/login" className="hover:text-white transition">Kundenportal</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-5">Rechtliches</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/impressum" className="hover:text-white transition">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} {FIRMA.name} · {FIRMA.strasse} · {FIRMA.plzOrt}</div>
          <div>{FIRMA.markenZusatz}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
