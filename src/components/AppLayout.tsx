import React from 'react';
import Navbar from './studio/Navbar';
import Hero from './studio/Hero';
import ProblemSection from './studio/ProblemSection';
import ROICalculator from './studio/ROICalculator';
import PositioningSection from './studio/PositioningSection';
import ServicesSection from './studio/ServicesSection';
import OfferSection from './studio/OfferSection';
import GuaranteeSection from './studio/GuaranteeSection';
import AnalysisSection from './studio/AnalysisSection';
import TestimonialsSection from './studio/TestimonialsSection';
import FinalCTA from './studio/FinalCTA';
import Footer from './studio/Footer';
import CookieBanner from './studio/CookieBanner';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ROICalculator />
        <PositioningSection />
        <ServicesSection />
        <OfferSection />
        <GuaranteeSection />
        <AnalysisSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AppLayout;