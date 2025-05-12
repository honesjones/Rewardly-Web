
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import OffersPage from "./pages/OffersPage";
import ExplorePage from "./pages/ExplorePage";
import SurveysPage from "./pages/SurveysPage";
import VideosPage from "./pages/VideosPage";
import InvitePage from "./pages/InvitePage";
import RedeemPage from "./pages/RedeemPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/offers" replace />} />
            <Route path="offers" element={<OffersPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="surveys" element={<SurveysPage />} />
            <Route path="videos" element={<VideosPage />} />
            <Route path="invite" element={<InvitePage />} />
            <Route path="redeem" element={<RedeemPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
