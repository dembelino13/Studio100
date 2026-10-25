import React from 'react';
import Navbar from './studio/Navbar';
import Hero from './studio/Hero';
import ProblemSection from './studio/ProblemSection';
import PositioningSection from './studio/PositioningSection';
import OfferSection from './studio/OfferSection';
import GuaranteeSection from './studio/GuaranteeSection';
import FAQSection from './studio/FAQSection';
import FinalCTA from './studio/FinalCTA';
import Footer from './studio/Footer';
import CookieBanner from './studio/CookieBanner';

// Startseite (Neupositionierung 10/2026: Handwerksbetriebe, Preise zentral in src/data/angebot.ts).
// Entfernt: Technologie-Banner, ROI-Rechner, alte Website-Analyse (ersetzt durch Digital-Check),
// Referenzen/Kennzahlen ohne Beleg, Leistungen "Conversion Website System" (5'000 €).
const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <PositioningSection />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AppLayout;
