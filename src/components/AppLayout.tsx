import React from 'react';
import Navbar from './studio/Navbar';
import Hero from './studio/Hero';
import SystemSection from './studio/SystemSection';
import ProblemSection from './studio/ProblemSection';
import ROICalculator from './studio/ROICalculator';
import AnalysisSection from './studio/AnalysisSection';
import ElektrikerSection from './studio/ElektrikerSection';
import ServicesSection from './studio/ServicesSection';
import OfferSection from './studio/OfferSection';
import GuaranteeSection from './studio/GuaranteeSection';
import TrustBanner from './studio/TrustBanner';
import FAQSection from './studio/FAQSection';
import FinalCTA from './studio/FinalCTA';
import Footer from './studio/Footer';
import CookieBanner from './studio/CookieBanner';

// Startseite (10/2026): Aufbau und Design der bisherigen Seite, kombiniert mit der Handwerk-Positionierung.
// Preise zentral in src/data/angebot.ts. Ohne unbelegte Kennzahlen/Bewertungen.
const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SystemSection />
        <ProblemSection />
        <ROICalculator />
        <AnalysisSection />
        <ElektrikerSection />
        <ServicesSection />
        <OfferSection />
        <GuaranteeSection />
        <TrustBanner />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AppLayout;
