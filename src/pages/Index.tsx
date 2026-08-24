
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import SEO from '@/components/SEO';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <SEO
        title="Studio100 – Hochkonvertierende Websites für KMUs | Webdesign DACH"
        description="Studio100 entwickelt professionelle, hochkonvertierende Websites für kleine und mittelständische Unternehmen in der DACH-Region. Mehr Anfragen, mehr Umsatz – durch strategisches Webdesign aus Zug."
        canonical="/"
      />
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
