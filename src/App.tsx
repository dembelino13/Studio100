
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { HelmetProvider } from "react-helmet-async";
import SchemaOrg from "@/components/SchemaOrg";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/blog/BlogIndex";
import WebdesignKostenSchweiz from "./pages/blog/WebdesignKostenSchweiz";
import WebsiteHandwerker from "./pages/blog/WebsiteHandwerker";
import ConversionRateKMU from "./pages/blog/ConversionRateKMU";
import UeberUns from "./pages/UeberUns";
import SitemapPage from "./pages/Sitemap";

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
            {/* Alte Angebote/Referenzen (bis 10/2026) -> Startseite */}
            <Route path="/case-studies" element={<Navigate to="/" replace />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/webdesign-kmu" element={<Navigate to="/#offer" replace />} />
            <Route path="/landing-page" element={<Navigate to="/#offer" replace />} />
            <Route path="/conversion-optimierung" element={<Navigate to="/#offer" replace />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/webdesign-kosten-schweiz-2026" element={<WebdesignKostenSchweiz />} />
            <Route path="/blog/website-handwerker-erstellen-lassen" element={<WebsiteHandwerker />} />
            <Route path="/blog/conversion-rate-optimieren-kmu" element={<ConversionRateKMU />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
  </HelmetProvider>
);

export default App;
