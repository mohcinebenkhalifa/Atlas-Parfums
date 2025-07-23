
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import OurStory from "./pages/OurStory";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfSale from "./pages/TermsOfSale";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
// Category pages
import Musc from "./pages/categories/Musc";
import Oud from "./pages/categories/Oud";
import Ambre from "./pages/categories/Ambre";
import Rose from "./pages/categories/Rose";
import Jasmin from "./pages/categories/Jasmin";
import Santal from "./pages/categories/Santal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-sale" element={<TermsOfSale />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* Category routes */}
            <Route path="/categories/musc" element={<Musc />} />
            <Route path="/categories/oud" element={<Oud />} />
            <Route path="/categories/ambre" element={<Ambre />} />
            <Route path="/categories/rose" element={<Rose />} />
            <Route path="/categories/jasmin" element={<Jasmin />} />
            <Route path="/categories/santal" element={<Santal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
