import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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

  // If user navigates to / with a hash, scroll there once mounted
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location]);

  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/'
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <button onClick={goHome} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 text-lg">Studio100</span>
        </button>

        <nav className="hidden md:flex items-center gap-9 text-sm text-neutral-600 font-medium">
          <button onClick={() => goToSection('problem')} className="hover:text-neutral-900 transition">
            Problem
          </button>
          <button onClick={() => goToSection('calculator')} className="hover:text-neutral-900 transition">
            ROI-Rechner
          </button>
          <button onClick={() => goToSection('services')} className="hover:text-neutral-900 transition">
            Leistungen
          </button>
          <Link
            to="/case-studies"
            className={`hover:text-neutral-900 transition ${
              location.pathname === '/case-studies' ? 'text-neutral-900' : ''
            }`}
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            className={`hover:text-neutral-900 transition ${
              location.pathname.startsWith('/blog') ? 'text-neutral-900' : ''
            }`}
          >
            Blog
          </Link>
          <button onClick={() => goToSection('offer')} className="hover:text-neutral-900 transition">
            Angebot
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => goToSection('analysis')}
            className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02]"
          >
            Analyse starten
          </button>
        </div>

        <button className="md:hidden text-neutral-900" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 flex flex-col gap-4 text-neutral-700">
          <button onClick={() => goToSection('problem')} className="text-left">
            Problem
          </button>
          <button onClick={() => goToSection('calculator')} className="text-left">
            ROI-Rechner
          </button>
          <button onClick={() => goToSection('services')} className="text-left">
            Leistungen
          </button>
          <Link to="/case-studies" onClick={() => setOpen(false)} className="text-left">
            Case Studies
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="text-left">
            Blog
          </Link>
          <button onClick={() => goToSection('offer')} className="text-left">
            Angebot
          </button>
          <button
            onClick={() => goToSection('analysis')}
            className="mt-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium"
          >
            Analyse starten
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
