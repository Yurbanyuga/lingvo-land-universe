
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import ProtectedRoute from "./components/ProtectedRoute";

import Index from "./pages/Index";
import About from "./pages/About";
import StartFree from "./pages/StartFree";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Advantages from "./pages/Advantages";
import Stages from "./pages/Stages";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminContent from "./pages/AdminContent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Публичные маршруты */}
          <Route path="/" element={<><Navbar /><PageTransition><Index /></PageTransition><Footer /></>} />
          <Route path="/about" element={<><Navbar /><PageTransition><About /></PageTransition><Footer /></>} />
          <Route path="/start-free" element={<><Navbar /><PageTransition><StartFree /></PageTransition><Footer /></>} />
          <Route path="/classes" element={<><Navbar /><PageTransition><Classes /></PageTransition><Footer /></>} />
          <Route path="/pricing" element={<><Navbar /><PageTransition><Pricing /></PageTransition><Footer /></>} />
          <Route path="/advantages" element={<><Navbar /><PageTransition><Advantages /></PageTransition><Footer /></>} />
          <Route path="/stages" element={<><Navbar /><PageTransition><Stages /></PageTransition><Footer /></>} />
          <Route path="/reviews" element={<><Navbar /><PageTransition><Reviews /></PageTransition><Footer /></>} />
          <Route path="/login" element={<Login />} />
          
          {/* Защищенные маршруты администратора */}
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="content" element={<AdminContent />} />
          </Route>
          
          {/* Catch-all маршрут */}
          <Route path="*" element={<><Navbar /><PageTransition><NotFound /></PageTransition><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
