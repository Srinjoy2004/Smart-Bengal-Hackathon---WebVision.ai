
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-webvision-purple/20 to-transparent animate-pulse-glow opacity-30"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMzYgMzRoLTJ2LTJoMnYyek0zMCAzNGgtMnYtMmgydjJ6TTI0IDM0aC0ydi0yaDJ2MnpNMTggMzRoLTJ2LTJoMnYyek0xMiAzNGgtMnYtMmgydjJ6TTYgMzRINHYtMmgydjJ6Ii8+PHBhdGggZmlsbD0iIzhCNUNGNiIgZmlsbC1vcGFjaXR5PSIuMDIiIGQ9Ik0yIDI4SDB2LTJoMnYyek04IDI4SDZ2LTJoMnYyek0xNCAyOGgtMnYtMmgydjJ6TTIwIDI4aC0ydi0yaDJ2ek0yNiAyOGgtMnYtMmgydjJ6TTMyIDI4aC0ydi0yaDJ2ek0zOCAyOGgtMnYtMmgydjJ6TTQ0IDI4aC0ydi0yaDJ2ek01MCAyOGgtMnYtMmgydjJ6TTU2IDI4aC0ydi0yaDJ2eiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-webvision-blue via-webvision-purple to-webvision-pink text-transparent bg-clip-text glow-text">
                AI-Powered Website
              </span>
              <br />
              <span>Analysis & Optimization</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Transform your website's performance, design, and user experience with our cutting-edge AI analysis tool. Get actionable insights and smart recommendations in seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="neon-button text-lg py-6 px-8"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="flex items-center">
                  Analyze My Website <ArrowRight className="ml-2" size={18} />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-webvision-blue/50 hover:border-webvision-blue text-white bg-transparent hover:bg-webvision-blue/10 text-lg py-6"
                onClick={() => document.getElementById("howitworks")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item}
                    className="w-8 h-8 rounded-full border-2 border-webvision-darker bg-gray-700"
                  ></div>
                ))}
              </div>
              <p className="text-gray-400">
                <span className="text-webvision-blue">2,500+</span> websites analyzed this week
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              {/* Website mockup with analysis animation */}
              <div className="rounded-lg overflow-hidden shadow-2xl border border-webvision-blue/30 bg-webvision-dark p-2 bg-opacity-80 backdrop-blur-sm">
                <div className="flex items-center bg-webvision-darker rounded-t-md p-3 gap-2 border-b border-webvision-blue/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-webvision-blue/20 rounded-full h-6 px-3 flex items-center">
                    <div className="h-2 w-40 bg-webvision-blue/40 rounded-full"></div>
                  </div>
                </div>
                
                <div className="px-4 py-6">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 w-1/4 rounded bg-webvision-blue/20 animate-pulse"></div>
                    <div className="h-6 w-1/5 rounded bg-webvision-blue/20 animate-pulse"></div>
                  </div>
                  
                  <div className="h-24 w-full rounded bg-webvision-blue/10 mb-4"></div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-32 rounded bg-webvision-blue/20"></div>
                    <div className="h-32 rounded bg-webvision-purple/20 animate-pulse"></div>
                    <div className="h-32 rounded bg-webvision-blue/20"></div>
                  </div>
                  
                  <div className="h-12 rounded bg-webvision-blue/10 mb-4"></div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 rounded bg-webvision-blue/20"></div>
                    <div className="h-24 rounded bg-webvision-purple/20"></div>
                  </div>
                </div>
              </div>
              
              {/* Analysis overlay */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-webvision-blue/90 backdrop-blur-md rounded-lg p-4 shadow-neon animate-pulse-glow">
                <div className="h-4 w-24 bg-white/30 rounded mb-3"></div>
                <div className="h-3 w-32 bg-white/20 rounded mb-2"></div>
                <div className="h-3 w-28 bg-white/20 rounded mb-4"></div>
                <div className="h-5 w-20 bg-white/40 rounded"></div>
              </div>
              
              <div className="absolute bottom-12 -left-8 bg-webvision-purple/90 backdrop-blur-md rounded-lg p-4 shadow-neon animate-pulse-glow animation-delay-500">
                <div className="h-4 w-28 bg-white/30 rounded mb-3"></div>
                <div className="h-3 w-36 bg-white/20 rounded mb-2"></div>
                <div className="h-3 w-32 bg-white/20 rounded mb-4"></div>
                <div className="h-5 w-20 bg-white/40 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
