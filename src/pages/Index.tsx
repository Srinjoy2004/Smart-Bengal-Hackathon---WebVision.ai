
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import DemoSection from "../components/DemoSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show welcome toast when page loads
    setTimeout(() => {
      toast({
        title: "Welcome to WebVision.Ai",
        description: "Explore our AI-powered website analysis tool",
        duration: 5000,
      });
    }, 1500);
  }, [toast]);

  return (
    <div className="min-h-screen bg-webvision-darker text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
