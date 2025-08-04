import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import FoodDelivery from "./pages/FoodDelivery";
import SplashScreen from "./components/SplashScreen";
import OnBoarding from "./components/OnBoarding";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<FoodDelivery />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
