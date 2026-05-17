export type Industry = 'Bau' | 'Sanitär' | 'Dachdecker' | 'Elektro';

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
  accentColor: string; // tailwind gradient stops
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'brunner-bau',
    company: 'Brunner Bau GmbH',
    industry: 'Bau',
    location: 'Zürich, CH',
    year: 2024,
    tagline: 'Vom unsichtbaren Familienbetrieb zur regionalen Marktautorität.',
    problem:
      'Brunner Bau hatte eine veraltete Website ohne klare Positionierung. Anfragen kamen ausschließlich über persönliche Empfehlungen – die Online-Sichtbarkeit war nahezu null und das Wachstum stagnierte trotz hoher Nachfrage in der Region.',
    solution: [
      'Strategische Neupositionierung als Premium-Anbieter für Hochbau im Großraum Zürich',
      'Conversion-optimierte Struktur mit klarem Pfad zur Anfrage in unter 30 Sekunden',
      'Trust-Architektur mit Referenzprojekten, Auszeichnungen und Mitarbeiterprofilen',
      'Technisches Fundament mit Lighthouse-Score 100 und vollständiger SEO-Optimierung',
    ],
    metrics: [
      { label: 'Anfragen / Monat', before: '6', after: '17', delta: '+184%', positive: true },
      { label: 'Conversion Rate', before: '0,8%', after: '3,1%', delta: '+288%', positive: true },
      { label: 'Umsatz / Monat', before: '€ 42.000', after: '€ 119.000', delta: '+183%', positive: true },
    ],
    testimonial: {
      quote:
        'Vor Studio100 hatten wir eine Website, die niemand fand. Heute bekommen wir wöchentlich qualifizierte Anfragen – und das System läuft praktisch von alleine.',
      author: 'Markus Brunner',
      role: 'Geschäftsführer, Brunner Bau GmbH',
      initials: 'MB',
    },
    accentColor: 'from-blue-500/20 to-blue-500/5',
  },
  {
    slug: 'hofer-sanitaer',
    company: 'Hofer Sanitär',
    industry: 'Sanitär',
    location: 'München, DE',
    year: 2024,
    tagline: '3,2× Conversion durch radikale Vereinfachung der Nutzerführung.',
    problem:
      'Die alte Website überforderte Besucher mit zu vielen Optionen, langen Texten und unklaren CTAs. Die meisten Besucher verließen die Seite ohne Aktion – obwohl der Traffic vorhanden war.',
    solution: [
      'Reduktion auf eine einzige, klare Konversionsachse pro Seite',
      'Verkaufspsychologisches Copywriting mit starkem Fokus auf Nutzen statt Features',
      'Notfall-CTA mit 24/7-Erreichbarkeit prominent platziert',
      'Online-Termin-Booking direkt in die Website integriert',
    ],
    metrics: [
      { label: 'Anfragen / Monat', before: '14', after: '41', delta: '+193%', positive: true },
      { label: 'Conversion Rate', before: '1,1%', after: '3,5%', delta: '+218%', positive: true },
      { label: 'Umsatz / Monat', before: '€ 28.000', after: '€ 86.000', delta: '+207%', positive: true },
    ],
    testimonial: {
      quote:
        'Endlich eine Agentur, die nicht über Farben diskutiert, sondern über Ergebnisse. Die neue Website hat unsere Conversion-Rate mehr als verdreifacht.',
      author: 'Sandra Hofer',
      role: 'Inhaberin, Hofer Sanitär',
      initials: 'SH',
    },
    accentColor: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    slug: 'reiter-dachdecker',
    company: 'Reiter Dachdeckermeister',
    industry: 'Dachdecker',
    location: 'Salzburg, AT',
    year: 2024,
    tagline: 'Investition amortisiert nach 6 Wochen – +47.000 € Mehrumsatz pro Monat.',
    problem:
      'Reiter wurde in Suchmaschinen kaum gefunden und konnte sich gegen größere Wettbewerber im DACH-Raum nicht durchsetzen. Hochpreisige Aufträge gingen regelmäßig an günstigere Konkurrenten verloren.',
    solution: [
      'Premium-Positionierung mit Fokus auf Qualität, Garantie und Handwerksmeister-Tradition',
      'Lokale SEO-Strategie für 12 Kernorte rund um Salzburg',
      'Kalkulator für Sofort-Richtpreise direkt auf der Website',
      'Conversion-Tracking & A/B-Testing der wichtigsten CTAs',
    ],
    metrics: [
      { label: 'Anfragen / Monat', before: '9', after: '28', delta: '+211%', positive: true },
      { label: 'Conversion Rate', before: '0,9%', after: '2,8%', delta: '+211%', positive: true },
      { label: 'Umsatz / Monat', before: '€ 21.000', after: '€ 68.000', delta: '+224%', positive: true },
    ],
    testimonial: {
      quote:
        'Die Investition hat sich nach 6 Wochen amortisiert. Wir generieren heute über 47.000€ zusätzlichen Monatsumsatz nur über unsere neue Website.',
      author: 'Thomas Reiter',
      role: 'Inhaber, Reiter Dachdeckermeister',
      initials: 'TR',
    },
    accentColor: 'from-orange-500/20 to-orange-500/5',
  },
  {
    slug: 'voltwerk-elektro',
    company: 'Voltwerk Elektrotechnik',
    industry: 'Elektro',
    location: 'Berlin, DE',
    year: 2024,
    tagline: 'Vom Unterauftragnehmer zum direkten B2B-Partner für Großkunden.',
    problem:
      'Voltwerk wollte vom Unterauftragsgeschäft hin zu eigenen Großprojekten. Die alte Website wirkte unprofessionell und schloss sie automatisch von hochwertigen Ausschreibungen aus.',
    solution: [
      'B2B-fokussierter Markenauftritt mit eigenständiger Designsprache',
      'Case-Study-System mit Projekten aus Industrie & Gewerbe',
      'Lead-qualifizierende Anfrageformulare mit Projekt-Volumen',
      'PDF-Datenblätter & Pitch-Decks direkt von der Website abrufbar',
    ],
    metrics: [
      { label: 'Anfragen / Monat', before: '4', after: '13', delta: '+225%', positive: true },
      { label: 'Conversion Rate', before: '0,6%', after: '2,2%', delta: '+267%', positive: true },
      { label: 'Umsatz / Monat', before: '€ 58.000', after: '€ 184.000', delta: '+217%', positive: true },
    ],
    testimonial: {
      quote:
        'Wir werden heute zu Ausschreibungen eingeladen, bei denen wir früher nicht einmal in Erwägung gezogen wurden. Studio100 hat unser komplettes Image neu definiert.',
      author: 'Daniel Vogt',
      role: 'Geschäftsführer, Voltwerk Elektrotechnik',
      initials: 'DV',
    },
    accentColor: 'from-yellow-500/20 to-yellow-500/5',
  },
  {
    slug: 'steinmann-bau',
    company: 'Steinmann Hochbau',
    industry: 'Bau',
    location: 'Bern, CH',
    year: 2023,
    tagline: 'Klarer Fokus auf Schlüsselfertig-Bau verdoppelt qualifizierte Leads.',
    problem:
      'Steinmann bot zu viele Leistungen gleichzeitig an, wodurch die Website-Botschaft verwässerte. Anfragen waren oft nicht passend, was viel Zeit in der Erstqualifikation kostete.',
    solution: [
      'Fokussierung auf Schlüsselfertig-Bau als zentrales Kernangebot',
      'Strukturiertes Anfrageformular mit Projekt-Disqualifikation',
      'Detaillierte Prozess-Visualisierung in 7 transparenten Schritten',
      'Integration eines Online-Kalenders für unverbindliche Erstgespräche',
    ],
    metrics: [
      { label: 'Anfragen / Monat', before: '11', after: '24', delta: '+118%', positive: true },
      { label: 'Conversion Rate', before: '1,3%', after: '2,9%', delta: '+123%', positive: true },
      { label: 'Umsatz / Monat', before: '€ 76.000', after: '€ 162.000', delta: '+113%', positive: true },
    ],
    testimonial: {
      quote:
        'Die Qualität unserer Anfragen hat sich komplett gewandelt. Statt 30 unpassender Mails haben wir heute 24 hochrelevante Projektgespräche pro Monat.',
      author: 'Lukas Steinmann',
      role: 'Geschäftsführer, Steinmann Hochbau',
      initials: 'LS',
    },
    accentColor: 'from-indigo-500/20 to-indigo-500/5',
  },
  {
    slug: 'meier-elektro',
    company: 'Meier Elektroinstallationen',
    industry: 'Elektro',
    location: 'Wien, AT',
    year: 2023,
    tagline: 'Smart-Home-Spezialisierung katapultiert den Premium-Auftragsanteil nach oben.',
    problem:
      'Meier wollte sich vom austauschbaren Elektrobetrieb zum spezialisierten Smart-Home-Anbieter entwickeln, doch die Website kommunizierte weiterhin Standard-Elektroleistungen.',
    solution: [
      'Klare Spezialisierungs-Landingpage für Smart Home & KNX-Projekte',
      'Interaktiver Konfigurator für Wunsch-Szenarien (Licht, Heizung, Sicherheit)',
      'Premium-Galerie realisierter Projekte mit Drohnen- und Innenaufnahmen',
      'Whitepaper-Funnel zur Lead-Qualifikation hochpreisiger Interessenten',
    ],
    metrics: [
      { label: 'Anfragen / Monat', before: '7', after: '19', delta: '+171%', positive: true },
      { label: 'Conversion Rate', before: '1,0%', after: '2,6%', delta: '+160%', positive: true },
      { label: 'Umsatz / Monat', before: '€ 34.000', after: '€ 97.000', delta: '+185%', positive: true },
    ],
    testimonial: {
      quote:
        'Heute kommen Kunden gezielt wegen unserer Smart-Home-Expertise zu uns. Die Website hat uns vom Generalisten zum gefragten Spezialisten gemacht.',
      author: 'Andreas Meier',
      role: 'Inhaber, Meier Elektroinstallationen',
      initials: 'AM',
    },
    accentColor: 'from-purple-500/20 to-purple-500/5',
  },
];

export const industries: Array<Industry | 'Alle'> = ['Alle', 'Bau', 'Sanitär', 'Dachdecker', 'Elektro'];
