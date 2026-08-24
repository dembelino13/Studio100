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

  const isActive = (path: string) =>
    path === '/blog'
      ? location.pathname.startsWith('/blog')
      : location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== '/'
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">

        {/* Logo */}
        <button onClick={goHome} className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 text-lg">Studio100</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-600 font-medium">
          <button onClick={() => goToSection('services')} className="hover:text-neutral-900 transition">
            Leistungen
          </button>
          <Link
            to="/case-studies"
            className={`hover:text-neutral-900 transition ${isActive('/case-studies') ? 'text-neutral-900' : ''}`}
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            className={`hover:text-neutral-900 transition ${isActive('/blog') ? 'text-neutral-900' : ''}`}
          >
            Blog
          </Link>
          <Link
            to="/ueber-uns"
            className={`hover:text-neutral-900 transition ${isActive('/ueber-uns') ? 'text-neutral-900' : ''}`}
          >
            Über uns
          </Link>
          <button onClick={() => goToSection('offer')} className="hover:text-neutral-900 transition">
            Angebot
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => goToSection('analysis')}
            className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all hover:scale-[1.02]"
          >
            Analyse starten
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 flex flex-col gap-1 text-neutral-700">
          <button
            onClick={() => goToSection('services')}
            className="text-left px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium"
          >
            Leistungen
          </button>
          <Link
            to="/case-studies"
            onClick={() => setOpen(false)}
            className={`px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium ${isActive('/case-studies') ? 'text-neutral-900 bg-neutral-50' : ''}`}
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className={`px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium ${isActive('/blog') ? 'text-neutral-900 bg-neutral-50' : ''}`}
          >
            Blog
          </Link>
          <Link
            to="/ueber-uns"
            onClick={() => setOpen(false)}
            className={`px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium ${isActive('/ueber-uns') ? 'text-neutral-900 bg-neutral-50' : ''}`}
          >
            Über uns
          </Link>
          <button
            onClick={() => goToSection('offer')}
            className="text-left px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition text-sm font-medium"
          >
            Angebot
          </button>
          <div className="pt-3 border-t border-neutral-100 mt-2">
            <button
              onClick={() => goToSection('analysis')}
              className="w-full px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition"
            >
              Analyse starten
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
