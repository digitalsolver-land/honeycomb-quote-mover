import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/services" element={<div className="pt-20 min-h-screen flex items-center justify-center"><p className="text-2xl text-brand-blue">Page Services - En construction</p></div>} />
              <Route path="/contact" element={<div className="pt-20 min-h-screen flex items-center justify-center"><p className="text-2xl text-brand-blue">Page Contact - En construction</p></div>} />
              <Route path="/hub" element={<div className="pt-20 min-h-screen flex items-center justify-center"><p className="text-2xl text-brand-blue">Page Hub - En construction</p></div>} />
              <Route path="/about" element={<div className="pt-20 min-h-screen flex items-center justify-center"><p className="text-2xl text-brand-blue">Page À Propos - En construction</p></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
