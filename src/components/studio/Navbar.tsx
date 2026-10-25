import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LINKS } from '@/data/angebot';

const SECTIONS: [string, string][] = [['calculator', 'Rechner'], ['analysis', 'Website-Check'], ['offer', 'Angebot'], ['betreuung', 'Betreuung'], ['garantie', 'Garantie'], ['faq', 'FAQ']];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [location]);

  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== '/') navigate(`/#${id}`);
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const goHome = () => {
    setOpen(false);
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const isActive = (path: string) => (path === '/blog' ? location.pathname.startsWith('/blog') : location.pathname === path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/' || open ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
        <button onClick={goHome} className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">S</div>
          <span className="font-semibold tracking-tight text-neutral-900 text-lg">Studio100</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-neutral-600 font-medium">
          {SECTIONS.map(([id, label]) => (
            <button key={id} onClick={() => goToSection(id)} className="hover:text-neutral-900 transition">{label}</button>
          ))}
          <Link to="/blog" className={`hover:text-neutral-900 transition ${isActive('/blog') ? 'text-neutral-900' : ''}`}>Blog</Link>
          <Link to="/ueber-uns" className={`hover:text-neutral-900 transition ${isActive('/ueber-uns') ? 'text-neutral-900' : ''}`}>Über mich</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-neutral-200 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition">
            Gespräch buchen
          </a>
          <a href={LINKS.digitalCheck} className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02]">
            Kostenloser Digital-Check
          </a>
        </div>

        <button className="lg:hidden text-neutral-900 p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-4 sm:px-6 py-5 flex flex-col gap-1 text-neutral-700">
          {SECTIONS.map(([id, label]) => (
            <button key={id} onClick={() => goToSection(id)} className="text-left px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium">{label}</button>
          ))}
          <Link to="/blog" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium">Blog</Link>
          <Link to="/ueber-uns" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium">Über mich</Link>
          <div className="pt-3 border-t border-neutral-100 mt-2 grid gap-2">
            <a href={LINKS.digitalCheck} className="w-full text-center px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium">Kostenloser Digital-Check</a>
            <a href={LINKS.gespraech} target="_blank" rel="noopener noreferrer" className="w-full text-center px-5 py-3 rounded-full border border-neutral-200 text-neutral-900 text-sm font-medium">Gespräch buchen</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
