import React from 'react';
import { Helmet } from 'react-helmet-async';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.studio-100.de/#business',
      name: 'Studio100',
      legalName: 'Rosiello Solutions GmbH',
      description:
        'Studio100 entwickelt hochkonvertierende Websites für kleine und mittelständische Unternehmen in der DACH-Region. Spezialisiert auf Bau-, Handwerks- und Dienstleistungsunternehmen.',
      url: 'https://www.studio-100.de',
      email: 'schlaepfer.demian@gmail.com',
      logo: 'https://www.studio-100.de/og.jpg',
      image: 'https://www.studio-100.de/og.jpg',
      priceRange: 'CHF 3000 – CHF 10000+',
      currenciesAccepted: 'CHF, EUR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Gotthardstrasse 14',
        addressLocality: 'Zug',
        postalCode: '6300',
        addressRegion: 'Zug',
        addressCountry: 'CH',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.1661,
        longitude: 8.5154,
      },
      areaServed: [
        { '@type': 'Country', name: 'Schweiz' },
        { '@type': 'Country', name: 'Deutschland' },
        { '@type': 'Country', name: 'Österreich' },
      ],
      knowsLanguage: ['de', 'en'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Webdesign Leistungen',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Conversion Website System',
            description:
              'Vollständiges Website-Paket inkl. Strategie, Design, Entwicklung, Copywriting, SEO und Tracking-Setup. Performance-Garantie inklusive.',
            price: '5000',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '5000',
              priceCurrency: 'EUR',
              description: 'ab 5.000 € (einmalig, zzgl. MwSt.)',
            },
          },
          {
            '@type': 'Offer',
            name: 'Webdesign für KMU',
            url: 'https://www.studio-100.de/webdesign-kmu',
            description:
              'Hochkonvertierende Websites für kleine und mittlere Unternehmen in der DACH-Region.',
          },
          {
            '@type': 'Offer',
            name: 'Landing Pages',
            url: 'https://www.studio-100.de/landing-page',
            description:
              'Fokussierte Landing Pages für maximale Conversion-Raten.',
          },
          {
            '@type': 'Offer',
            name: 'Conversion-Optimierung',
            url: 'https://www.studio-100.de/conversion-optimierung',
            description:
              'Mehr Anfragen aus bestehendem Traffic durch datenbasierte Analyse, A/B-Tests und strategisches UX-Design.',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '98',
        bestRating: '5',
      },
      founder: {
        '@type': 'Person',
        name: 'Demian Schläpfer',
        jobTitle: 'Gründer & Inhaber',
        worksFor: { '@id': 'https://www.studio-100.de/#business' },
      },
      sameAs: ['https://www.studio-100.de'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.studio-100.de/#website',
      url: 'https://www.studio-100.de',
      name: 'Studio100',
      description: 'Hochkonvertierende Websites für KMUs in der DACH-Region',
      publisher: { '@id': 'https://www.studio-100.de/#business' },
      inLanguage: 'de-CH',
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://www.studio-100.de/ueber-uns#page',
      url: 'https://www.studio-100.de/ueber-uns',
      name: 'Über uns | Studio100 Webdesign Agentur Zug',
      description: 'Mission, Werte und das Team hinter Studio100 – spezialisierte Webdesign-Agentur in Zug, Schweiz.',
      isPartOf: { '@id': 'https://www.studio-100.de/#website' },
      about: { '@id': 'https://www.studio-100.de/#business' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.studio-100.de/webdesign-kmu#page',
      url: 'https://www.studio-100.de/webdesign-kmu',
      name: 'Webdesign für KMU in der DACH-Region | Studio100',
      description: 'Hochkonvertierende Websites für KMUs in Schweiz, Deutschland und Österreich. Ab CHF 3.000.',
      isPartOf: { '@id': 'https://www.studio-100.de/#website' },
      provider: { '@id': 'https://www.studio-100.de/#business' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.studio-100.de/landing-page#page',
      url: 'https://www.studio-100.de/landing-page',
      name: 'Landing Pages erstellen lassen | Studio100',
      description: 'Fokussierte Landing Pages für maximale Conversion-Raten für KMUs in der DACH-Region.',
      isPartOf: { '@id': 'https://www.studio-100.de/#website' },
      provider: { '@id': 'https://www.studio-100.de/#business' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.studio-100.de/conversion-optimierung#page',
      url: 'https://www.studio-100.de/conversion-optimierung',
      name: 'Conversion Rate Optimierung für KMUs | Studio100',
      description: 'Mehr Anfragen aus bestehendem Traffic durch datenbasierte CRO für KMUs in der DACH-Region.',
      isPartOf: { '@id': 'https://www.studio-100.de/#website' },
      provider: { '@id': 'https://www.studio-100.de/#business' },
    },
    {
      '@type': 'Blog',
      '@id': 'https://www.studio-100.de/blog#blog',
      url: 'https://www.studio-100.de/blog',
      name: 'Studio100 Blog – Webdesign & Conversion für KMUs',
      description: 'Praxiswissen zu Webdesign, Conversion-Optimierung und digitaler Sichtbarkeit für KMUs in der DACH-Region.',
      publisher: { '@id': 'https://www.studio-100.de/#business' },
      inLanguage: 'de-CH',
    },
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.studio-100.de/blog/webdesign-kosten-schweiz-2026#post',
      url: 'https://www.studio-100.de/blog/webdesign-kosten-schweiz-2026',
      headline: 'Webdesign Kosten Schweiz 2026: Was kostet eine professionelle Website?',
      description: 'Was kostet eine professionelle Website in der Schweiz? Ehrliche Preisübersicht, Einflussfaktoren und ROI-Berechnung für KMUs.',
      datePublished: '2026-05-12',
      dateModified: '2026-05-18',
      author: { '@id': 'https://www.studio-100.de/#business' },
      publisher: { '@id': 'https://www.studio-100.de/#business' },
      isPartOf: { '@id': 'https://www.studio-100.de/blog#blog' },
      inLanguage: 'de-CH',
      keywords: 'Webdesign Kosten Schweiz, Website erstellen lassen Kosten, Webdesign Preise Schweiz KMU',
    },
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.studio-100.de/blog/website-handwerker-erstellen-lassen#post',
      url: 'https://www.studio-100.de/blog/website-handwerker-erstellen-lassen',
      headline: 'Website für Handwerker erstellen lassen: Der komplette Guide 2026',
      description: 'Was macht eine erfolgreiche Handwerker-Website aus? Must-have-Elemente, typische Fehler und Kosten.',
      datePublished: '2026-05-05',
      dateModified: '2026-05-18',
      author: { '@id': 'https://www.studio-100.de/#business' },
      publisher: { '@id': 'https://www.studio-100.de/#business' },
      isPartOf: { '@id': 'https://www.studio-100.de/blog#blog' },
      inLanguage: 'de-CH',
      keywords: 'Website Handwerker, Handwerker Website erstellen lassen, Webdesign Handwerk DACH',
    },
    {
      '@type': 'BlogPosting',
      '@id': 'https://www.studio-100.de/blog/conversion-rate-optimieren-kmu#post',
      url: 'https://www.studio-100.de/blog/conversion-rate-optimieren-kmu',
      headline: 'Conversion Rate optimieren für KMUs: 7 bewährte Strategien',
      description: '7 datenbasierte Strategien zur Conversion-Optimierung für KMUs in der DACH-Region.',
      datePublished: '2026-04-28',
      dateModified: '2026-05-18',
      author: { '@id': 'https://www.studio-100.de/#business' },
      publisher: { '@id': 'https://www.studio-100.de/#business' },
      isPartOf: { '@id': 'https://www.studio-100.de/blog#blog' },
      inLanguage: 'de-CH',
      keywords: 'Conversion Rate optimieren KMU, CRO Agentur Schweiz, Website Conversion verbessern',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.studio-100.de/#faq',
      url: 'https://www.studio-100.de/',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was kostet eine professionelle Website in der Schweiz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Kosten für eine professionelle Website in der Schweiz liegen zwischen CHF 3.000 und CHF 15.000+. Studio100-Pakete beginnen bei CHF 3.000 und reichen bis CHF 10.000+ für vollständige Conversion-Website-Systeme.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was macht eine gute Webdesign-Agentur in Zug aus?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine gute Webdesign-Agentur in Zug denkt in Ergebnissen, nicht in Designs. Studio100 fokussiert auf KMUs in der DACH-Region und misst Erfolg an Conversion-Rate und Anfragen – mit direkter Zusammenarbeit und Performance-Garantie.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie lange dauert die Erstellung einer professionellen Website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Von der ersten Besprechung bis zum Launch dauert es bei Studio100 zwischen 4 und 8 Wochen – inklusive Strategie, Design, Entwicklung und Copywriting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie garantiert Studio100 den Erfolg meiner neuen Website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Studio100 bietet eine Performance-Garantie: Sollte die neue Website nach dem Launch keine messbar besseren Ergebnisse erzielen, wird kostenlos optimiert, bis die Conversion-Ziele erreicht sind.',
          },
        },
      ],
    },
  ],
};

const SchemaOrg: React.FC = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SchemaOrg;
