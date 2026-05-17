import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Shield } from 'lucide-react';

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
  cookies: { name: string; provider: string; purpose: string; duration: string }[];
}

const defaultCategories: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Notwendig',
    description: 'Diese Cookies sind für die grundlegende Funktion der Website erforderlich und können nicht deaktiviert werden.',
    required: true,
    enabled: true,
    cookies: [
      { name: 'cookie-consent', provider: 'Studio100', purpose: 'Speichert Ihre Cookie-Einstellungen', duration: '1 Jahr' },
    ],
  },
  {
    id: 'analytics',
    name: 'Analyse',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
    required: false,
    enabled: false,
    cookies: [
      { name: '_ga, _gid', provider: 'Google Analytics', purpose: 'Analyse des Nutzerverhaltens', duration: '2 Jahre' },
      { name: 'va_*', provider: 'Vercel Analytics', purpose: 'Performance-Messung der Website', duration: 'Session' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen.',
    required: false,
    enabled: false,
    cookies: [
      { name: '_fbp', provider: 'Meta/Facebook', purpose: 'Remarketing und Conversion-Tracking', duration: '3 Monate' },
    ],
  },
];

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState<CookieCategory[]>(defaultCategories);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const saveConsent = (cats: CookieCategory[]) => {
    const consent = cats.reduce((acc, cat) => ({ ...acc, [cat.id]: cat.enabled }), {});
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setVisible(false);
  };

  const acceptAll = () => {
    const updated = categories.map(c => ({ ...c, enabled: true }));
    setCategories(updated);
    saveConsent(updated);
  };

  const declineAll = () => {
    const updated = categories.map(c => ({ ...c, enabled: c.required }));
    setCategories(updated);
    saveConsent(updated);
  };

  const saveSelected = () => saveConsent(categories);

  const toggleCategory = (id: string) => {
    setCategories(prev =>
      prev.map(c => (c.id === id && !c.required ? { ...c, enabled: !c.enabled } : c))
    );
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {!showSettings ? (
          /* Banner View */
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center">
                <Shield size={16} className="text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Cookie-Einstellungen</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Traffic zu analysieren.
              Sie können Ihre Einstellungen jederzeit anpassen.{' '}
              <a href="/datenschutz" className="text-blue-400 hover:underline">
                Datenschutzerklärung
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={declineAll}
                className="flex-1 px-5 py-3 rounded-xl border border-neutral-700 text-neutral-400 text-sm hover:border-neutral-500 hover:text-white transition"
              >
                Ablehnen
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 px-5 py-3 rounded-xl border border-neutral-700 text-neutral-300 text-sm hover:border-neutral-500 hover:text-white transition"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          /* Settings View */
          <div className="flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center">
                  <Shield size={16} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Cookie-Einstellungen</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-6 space-y-3">
              {categories.map(cat => (
                <div key={cat.id} className="border border-neutral-800 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3 flex-1">
                      <button
                        onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                        className="flex items-center gap-2 text-left flex-1"
                      >
                        <span className="text-white text-sm font-medium">{cat.name}</span>
                        {expandedCategory === cat.id
                          ? <ChevronUp size={14} className="text-neutral-500" />
                          : <ChevronDown size={14} className="text-neutral-500" />
                        }
                      </button>
                      {cat.required && (
                        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-full">
                          Erforderlich
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      disabled={cat.required}
                      className={`relative w-10 h-6 rounded-full transition-colors ml-4 ${
                        cat.enabled ? 'bg-blue-600' : 'bg-neutral-700'
                      } ${cat.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                          cat.enabled ? 'translate-x-5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {expandedCategory === cat.id && (
                    <div className="px-4 pb-4 border-t border-neutral-800 pt-3">
                      <p className="text-neutral-400 text-xs leading-relaxed mb-3">{cat.description}</p>
                      <div className="space-y-2">
                        {cat.cookies.map((cookie, i) => (
                          <div key={i} className="bg-neutral-950 rounded-lg p-3 grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-neutral-500">Name:</span>{' '}
                              <span className="text-neutral-300">{cookie.name}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500">Anbieter:</span>{' '}
                              <span className="text-neutral-300">{cookie.provider}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500">Zweck:</span>{' '}
                              <span className="text-neutral-300">{cookie.purpose}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500">Dauer:</span>{' '}
                              <span className="text-neutral-300">{cookie.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={declineAll}
                className="flex-1 px-5 py-3 rounded-xl border border-neutral-700 text-neutral-400 text-sm hover:border-neutral-500 hover:text-white transition"
              >
                Alle ablehnen
              </button>
              <button
                onClick={saveSelected}
                className="flex-1 px-5 py-3 rounded-xl border border-blue-600/50 text-blue-400 text-sm hover:bg-blue-600/10 transition"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;