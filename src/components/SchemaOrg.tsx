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
            name: 'Strategisches Webdesign',
            description:
              'Conversion-orientiertes UX-Design mit Visual Hierarchy, Mobile-First-Ansatz und Premium-Ästhetik.',
          },
          {
            '@type': 'Offer',
            name: 'Conversion Copywriting',
            description:
              'Verkaufspsychologisch optimierte Texte für Landingpages, die Besucher in Anfragen verwandeln.',
          },
          {
            '@type': 'Offer',
            name: 'Technische Entwicklung & SEO',
            description:
              'Lighthouse 100/100, DSGVO-konforme Implementierung, CMS-Integration und Tracking-Setup.',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '98',
        bestRating: '5',
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
  ],
};

const SchemaOrg: React.FC = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SchemaOrg;
