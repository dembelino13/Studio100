export type Industry = 'Fintech' | 'Coaching' | 'Gastronomie' | 'Health & SaaS' | 'Legal & Digital';

export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
  delta: string;
  positive: boolean;
}

export interface CaseStudy {
  slug: string;
  company: string;
  industry: Industry;
  location: string;
  year: number;
  tagline: string;
  problem: string;
  solution: string[];
  metrics: CaseStudyMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
  accentColor: string;
  isDemo: boolean;
  siteUrl: string;
  previewBg: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'orofx',
    company: 'OroFx Trading Signals',
    industry: 'Fintech',
    location: 'Zug, CH',
    year: 2024,
    isDemo: false,
    siteUrl: 'https://www.orofx.ch',
    previewBg: 'bg-[#0f1e3d]',
    tagline: 'Vom unbekannten Signal-Anbieter zur vertrauenswürdigen Plattform mit 2.000+ aktiven Tradern.',
    problem:
      'OroFx hatte ein starkes Produkt, aber keine Website die Vertrauen aufbaute. Potenzielle Trader sprangen ab weil Transparenz und Social Proof fehlten — das grösste Hindernis im Forex-Markt.',
    solution: [
      'Transparenz-First Design: Live Track-Record prominent im Hero platziert',
      'Social Proof System mit echten Trader-Ergebnissen und Testimonials',
      'Trust-Architektur: Broker-Unabhängigkeit klar und verständlich kommuniziert',
      'Risk-Disclaimer intelligent integriert ohne Conversion zu killen',
    ],
    metrics: [
      { label: 'Aktive Trader', before: '120', after: '2.000+', delta: '+1.567%', positive: true },
      { label: 'Conversion Rate', before: '0,8%', after: '3,4%', delta: '+325%', positive: true },
      { label: 'Monatsumsatz', before: '€ 4.000', after: '€ 38.000', delta: '+850%', positive: true },
    ],
    testimonial: {
      quote:
        'Das Design vermittelt genau das Vertrauen, das unser Produkt verdient. Neue Trader melden sich heute täglich an — die Website arbeitet für uns rund um die Uhr.',
      author: 'OroFx Gründerteam',
      role: 'orofx.ch · Zug',
      initials: 'OF',
    },
    accentColor: 'from-blue-600/20 to-blue-600/5',
  },
  {
    slug: 'dein-resonanzraum',
    company: 'Dein Resonanzraum',
    industry: 'Coaching',
    location: 'Deutschland',
    year: 2024,
    isDemo: false,
    siteUrl: 'https://www.deinresonanzraum.de',
    previewBg: 'bg-[#2d1b4e]',
    tagline: 'Emotionales Storytelling das Coaching-Klienten schon beim ersten Scroll überzeugt.',
    problem:
      'Die Website wirkte generisch und austauschbar — kein persönlicher Charakter, keine emotionale Verbindung. Besucher buchten kein Erstgespräch obwohl das Angebot hochwertig war.',
    solution: [
      'Persönliche Story als Vertrauensanker direkt im Hero-Bereich',
      'Emotionale Bildsprache die Transformation und Heilung sichtbar macht',
      'Klare CTA-Struktur: Ein Ziel, eine Aktion pro Seite',
      'Authentische Sprache die die Zielgruppe direkt anspricht',
    ],
    metrics: [
      { label: 'Erstgespräche / Monat', before: '3', after: '11', delta: '+267%', positive: true },
      { label: 'Verweildauer', before: '0:52 min', after: '3:40 min', delta: '+323%', positive: true },
      { label: 'Absprungrate', before: '74%', after: '31%', delta: '−58%', positive: true },
    ],
    testimonial: {
      quote:
        'Endlich eine Website die wirklich ich bin. Die Anfragen kamen schon in der ersten Woche nach Launch — und die Qualität der Klienten hat sich komplett verändert.',
      author: 'Jenny Ried',
      role: 'Gründerin, deinresonanzraum.de',
      initials: 'JR',
    },
    accentColor: 'from-purple-500/20 to-purple-500/5',
  },
  {
    slug: 'pizzeria-salsa',
    company: 'Ristorante Pizzeria Salsa',
    industry: 'Gastronomie',
    location: 'Burgdorf, CH',
    year: 2025,
    isDemo: true,
    siteUrl: 'https://design-website-food.deploypad.app/',
    previewBg: 'bg-[#1a0a00]',
    tagline: 'Showcase: Reservierungs-fokussierte Restaurant-Site mit warmer, authentischer Bildsprache.',
    problem:
      'Demo-Projekt das zeigt wie wir Restaurants und Gastronomiebetriebe online positionieren. Fokus auf emotionale Bildsprache, Menü-Präsentation und direkte Tischreservierung.',
    solution: [
      'Warme, authentische Bildwelt die den Gastraum erlebbar macht',
      'Direkte Online-Reservierung prominent im Hero integriert',
      'Menü-Sektion mit appetitlicher Darstellung der Hauptgerichte',
      'Lokale SEO-Optimierung für "Restaurant Burgdorf" und Umgebung',
    ],
    metrics: [
      { label: 'Branche', before: '', after: 'Gastronomie', delta: 'Showcase', positive: true },
      { label: 'Hauptziel', before: '', after: 'Reservierungen', delta: 'Direktbuchung', positive: true },
      { label: 'Stil', before: '', after: 'Warm & Authentisch', delta: 'Italienisch', positive: true },
    ],
    testimonial: {
      quote:
        'Dieses Demo-Projekt zeigt was wir für Restaurants und Gastronomiebetriebe in der DACH-Region umsetzen können. Interesse? Wir bauen Ihre Version.',
      author: 'Studio100',
      role: 'Demo-Projekt · Gastronomie',
      initials: 'S1',
    },
    accentColor: 'from-orange-500/20 to-orange-500/5',
  },
  {
    slug: 'aionos-longevity',
    company: 'AionOS Longevity Platform',
    industry: 'Health & SaaS',
    location: 'DACH',
    year: 2025,
    isDemo: true,
    siteUrl: 'https://health-data-longevity.deploypad.app/',
    previewBg: 'bg-[#052e1c]',
    tagline: 'Showcase: White-Label SaaS-Plattform für Longevity Coaches — datengetrieben, DACH-compliant.',
    problem:
      'Demo-Projekt für die schnell wachsende Health & Longevity Nische. Zeigt wie wir SaaS-Produkte und datengetriebene Plattformen für den DACH-Markt positionieren.',
    solution: [
      'Klare Value Proposition für B2B-Zielgruppe (Coaches & Practitioners)',
      'DACH-Compliance und Datenschutz als Verkaufsargument positioniert',
      'Feature-Präsentation die technische Vorteile verständlich macht',
      'Demo-Anfrage Funnel für qualifizierte B2B-Leads',
    ],
    metrics: [
      { label: 'Branche', before: '', after: 'Health & SaaS', delta: 'Showcase', positive: true },
      { label: 'Zielgruppe', before: '', after: 'B2B Coaches', delta: 'DACH', positive: true },
      { label: 'Stil', before: '', after: 'Clean & Medical', delta: 'Vertrauensvoll', positive: true },
    ],
    testimonial: {
      quote:
        'Die Health & Longevity Nische wächst massiv. Dieses Demo zeigt wie wir SaaS-Plattformen in diesem Bereich professionell und compliant positionieren.',
      author: 'Studio100',
      role: 'Demo-Projekt · Health & SaaS',
      initials: 'S1',
    },
    accentColor: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    slug: 'privacy-compliance',
    company: 'Privacy Compliance Generator',
    industry: 'Legal & Digital',
    location: 'DACH',
    year: 2025,
    isDemo: true,
    siteUrl: 'https://privacy-digital-design.deploypad.app/',
    previewBg: 'bg-[#0a1628]',
    tagline: 'Showcase: Strukturierte Compliance-Website für digitale Unternehmen im DACH-Raum.',
    problem:
      'Demo-Projekt für die Legal & Digital Nische. Zeigt wie wir Compliance-Produkte und rechtliche Dienstleistungen klar, seriös und konversionsstark präsentieren.',
    solution: [
      'Seriöse Designsprache die Kompetenz und Verlässlichkeit ausstrahlt',
      'Komplexe Legal-Themen klar und verständlich strukturiert',
      'Monatliches Update-Modell als Subscription-Angebot positioniert',
      'Vertrauenssignale (DSGVO, ISO, Referenzen) strategisch platziert',
    ],
    metrics: [
      { label: 'Branche', before: '', after: 'Legal & Digital', delta: 'Showcase', positive: true },
      { label: 'Hauptziel', before: '', after: 'Compliance', delta: 'B2B', positive: true },
      { label: 'Stil', before: '', after: 'Seriös & Klar', delta: 'Strukturiert', positive: true },
    ],
    testimonial: {
      quote:
        'Legal und Compliance ist eine hochpreisige Nische mit grossem Bedarf an professionellem Webdesign. Dieses Demo zeigt unsere Kompetenz in diesem Bereich.',
      author: 'Studio100',
      role: 'Demo-Projekt · Legal & Digital',
      initials: 'S1',
    },
    accentColor: 'from-blue-500/20 to-blue-500/5',
  },
];

export const industries: Array<Industry | 'Alle'> = [
  'Alle',
  'Fintech',
  'Coaching',
  'Gastronomie',
  'Health & SaaS',
  'Legal & Digital',
];
