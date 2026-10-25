// Zentrale Angebotsdaten der Marketing-Seite (Stand 25.10.2026, gleich wie im CRM:
// check.studio-100.de/intern/einstellungen/verkauf und /firma). Preise NUR hier ändern.
// Alle Preise in CHF, exkl. MWST (Rosiello Solutions GmbH ist MWST-pflichtig, 8.1 %).
// Der Pilotkunden-Preis ist bewusst NICHT öffentlich.

export const MWST_HINWEIS = 'exkl. MWST';

export const LINKS = {
  digitalCheck: 'https://check.studio-100.de/digital-check',
  websiteCheckApi: 'https://check.studio-100.de/api/website-check', // Website-Check -> Lead im CRM (Herkunft „Website-Check“)
  gespraech: 'https://calendly.com/demian-schlaepfer/30min-austausch', // Calendly "Verkaufsgespräch"
  email: 'demian@studio-100.de',
};

export const FIRMA = {
  marke: 'Studio100',
  name: 'Rosiello Solutions GmbH',
  strasse: 'Gotthardstrasse 14',
  plzOrt: '6300 Zug',
  land: 'Schweiz',
  uid: 'CHE-354.527.586',
  mwstNr: 'CHE-354.527.586 MWST',
  markenZusatz: 'Studio100 ist eine Marke der Rosiello Solutions',
  inhaber: 'Demian Schläpfer',
};

export const KERNPAKET = {
  name: 'Handwerker-Website Komplett',
  preis: 3490,
  abo: { preis: 249, laufzeitMonate: 24, hinweis: 'Betreuung Basis inklusive' },
  leistungen: [
    'Individuelles Design im Studio100-Stil, optimiert für Handy, Tablet und Desktop',
    'Alle Seiten: Startseite, Leistungen, Referenzen, Über uns, Kontakt',
    'Kontakt- und Offertanfrage-Formulare',
    'Stellenseite für die Mitarbeitersuche',
    'Einrichtung bzw. Optimierung des Google-Unternehmensprofils',
    'Texte auf Basis Ihrer Stichworte (auf Wunsch komplett von uns geschrieben)',
    'Zwei Korrekturrunden inklusive',
    'Go-Live innert ca. 4 Wochen; Domain, Hosting und Code laufen auf Ihren Namen',
  ],
  // Wertstapel wie in der Offerte (CRM): Einzelwerte -> Gesamtwert -> Preis
  wertstapel: [
    { bezeichnung: 'Individuelles Webdesign (alle Geräte)', wert: 2400 },
    { bezeichnung: 'Umsetzung aller Seiten inkl. Formulare', wert: 1800 },
    { bezeichnung: 'Texte für alle Seiten', wert: 900 },
    { bezeichnung: 'Stellenseite für die Mitarbeitersuche', wert: 450 },
    { bezeichnung: 'Google-Unternehmensprofil einrichten', wert: 350 },
    { bezeichnung: 'Technische Einrichtung (Domain, Hosting, SSL)', wert: 300 },
  ],
};

export const BETREUUNG = {
  mindestlaufzeitMonate: 12,
  stufen: [
    { name: 'Basis', preis: 99, text: 'Hosting-Überwachung, Updates, Sicherheit', empfohlen: false },
    { name: 'Wachstum', preis: 249, text: 'Basis plus laufende Anpassungen und Auswertungen', empfohlen: true },
    { name: 'Premium', preis: 449, text: 'Wachstum plus aktive Weiterentwicklung und Priorität', empfohlen: false },
  ],
};

export const UPSELLS = [
  { name: 'Zusatzseite', preis: 290, einheit: 'pro Seite', text: 'Weitere Unterseite, z.B. für eine zusätzliche Leistung' },
  { name: 'Recruiting-Landingpage', preis: 690, einheit: 'einmalig', text: 'Eigene Landingpage für die Mitarbeitersuche' },
  { name: 'Online-Terminbuchung', preis: 390, einheit: 'einmalig', text: 'Terminbuchung direkt auf der Website' },
  { name: 'Google-Ads-Einrichtung', preis: 490, einheit: 'einmalig', text: 'Einrichtung einer Google-Ads-Kampagne' },
];

export const GARANTIE = {
  titel: 'Termin-Garantie',
  text: 'Ihre Website ist innert 20 Tagen nach Erhalt aller vollständigen Inhalte online. Andernfalls erhalten Sie 3 Monate Betreuung kostenlos.',
};

/** 3490 -> "3'490" (Schweizer Schreibweise). */
export const chf = (n: number) => n.toLocaleString('de-CH').replace(/[’,]/g, "'");
export const wertGesamt = () => KERNPAKET.wertstapel.reduce((a, w) => a + w.wert, 0);
