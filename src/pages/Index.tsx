
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import SEO from '@/components/SEO';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <SEO
        title="Studio100 – Websites für Handwerksbetriebe | Aufträge und Fachkräfte"
        description="Websites für Handwerksbetriebe, die Aufträge und Fachkräfte bringen – gebaut von einem Elektriker. Fixpreis CHF 3'490 exkl. MWST, Termin-Garantie. Kostenloser Digital-Check."
        canonical="/"
      />
      <AppLayout />
    </AppProvider>
  );
};

export default Index;
