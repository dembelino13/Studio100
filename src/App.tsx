
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import SchemaOrg from "@/components/SchemaOrg";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import WebdesignKMU from "./pages/WebdesignKMU";
import LandingPage from "./pages/LandingPage";
import ConversionOptimierung from "./pages/ConversionOptimierung";
import BlogIndex from "./pages/blog/BlogIndex";
import WebdesignKostenSchweiz from "./pages/blog/WebdesignKostenSchweiz";
import WebsiteHandwerker from "./pages/blog/WebsiteHandwerker";
import ConversionRateKMU from "./pages/blog/ConversionRateKMU";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <SchemaOrg />
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/webdesign-kmu" element={<WebdesignKMU />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/conversion-optimierung" element={<ConversionOptimierung />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/webdesign-kosten-schweiz-2026" element={<WebdesignKostenSchweiz />} />
            <Route path="/blog/website-handwerker-erstellen-lassen" element={<WebsiteHandwerker />} />
            <Route path="/blog/conversion-rate-optimieren-kmu" element={<ConversionRateKMU />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
  </HelmetProvider>
);

export default App;
