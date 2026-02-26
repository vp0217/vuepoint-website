import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppBouncer from "@/components/WhatsAppBouncer";
import Index from "./pages/Index";
import WhyVuepoint from "./pages/WhyVuepoint";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Apply from "./pages/Apply";
import Faq from "./pages/Faq";
import HireUs from "./pages/HireUs";
import Events from "./pages/Events";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-w-0 overflow-x-hidden">
          <WhatsAppBouncer />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-vuepoint" element={<WhyVuepoint />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/hire-us" element={<HireUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
