import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BETREUUNG, FIRMA, KERNPAKET, LINKS, UPSELLS } from '@/data/angebot';
import { faqs } from '@/components/studio/FAQSection';

// Strukturierte Daten (Neupositionierung 10/2026). Preise aus src/data/angebot.ts, FAQ aus FAQSection.
// Keine Bewertungen/Kennzahlen ohne Beleg.
const B = 'https://www.studio-100.de';
const offer = (name: string, price: number, description: string, unit?: string) => ({
  '@type': 'Offer', name, description,
  priceSpecification: { '@type': 'UnitPriceSpecification', price: String(price), priceCurrency: 'CHF', valueAddedTaxIncluded: false, ...(unit ? { unitText: unit } : {}) },
});

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${B}/#business`,
      name: FIRMA.marke,
      legalName: FIRMA.name,
      description: 'Websites für Handwerksbetriebe, die Aufträge und Fachkräfte bringen – gebaut von einem Elektriker.',
      url: B,
      email: LINKS.email,
      logo: `${B}/og.jpg`,
      image: `${B}/og.jpg`,
      priceRange: `CHF ${KERNPAKET.preis}`,
      currenciesAccepted: 'CHF',
      vatID: FIRMA.mwstNr,
      address: { '@type': 'PostalAddress', streetAddress: FIRMA.strasse, addressLocality: 'Zug', postalCode: '6300', addressRegion: 'Zug', addressCountry: 'CH' },
      geo: { '@type': 'GeoCoordinates', latitude: 47.1661, longitude: 8.5154 },
      areaServed: [{ '@type': 'Country', name: 'Schweiz' }],
      knowsLanguage: ['de'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Websites für Handwerksbetriebe',
        itemListElement: [
          offer(KERNPAKET.name, KERNPAKET.preis, 'Komplette Website für Handwerksbetriebe inkl. Stellenseite und Google-Profil, einmalig'),
          offer('Website-Abo', KERNPAKET.abo.preis, `Kernpaket im Abo, ${KERNPAKET.abo.laufzeitMonate} Monate, ${KERNPAKET.abo.hinweis}`, 'Monat'),
          ...BETREUUNG.stufen.map((s) => offer(`Betreuung ${s.name}`, s.preis, s.text, 'Monat')),
          ...UPSELLS.map((u) => offer(u.name, u.preis, u.text)),
        ],
      },
      founder: { '@type': 'Person', name: FIRMA.inhaber, jobTitle: 'Gründer', worksFor: { '@id': `${B}/#business` } },
      sameAs: [B],
    },
    { '@type': 'WebSite', '@id': `${B}/#website`, url: B, name: 'Studio100', description: 'Websites für Handwerksbetriebe', publisher: { '@id': `${B}/#business` }, inLanguage: 'de-CH' },
    { '@type': 'AboutPage', '@id': `${B}/ueber-uns#page`, url: `${B}/ueber-uns`, name: 'Über mich | Studio100', isPartOf: { '@id': `${B}/#website` }, about: { '@id': `${B}/#business` } },
    { '@type': 'Blog', '@id': `${B}/blog#blog`, url: `${B}/blog`, name: 'Studio100 Blog', publisher: { '@id': `${B}/#business` }, inLanguage: 'de-CH' },
    {
      '@type': 'FAQPage',
      '@id': `${B}/#faq`,
      url: `${B}/`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ],
};

const SchemaOrg: React.FC = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SchemaOrg;
