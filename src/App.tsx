
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import ArticleDetail from "./pages/ArticleDetail";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import WordPressProvider from "./providers/WordPressProvider";

const App = () => (
  <WordPressProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:cityId" element={<CityDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/article/:articleId" element={<ArticleDetail />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </WordPressProvider>
);

export default App;
