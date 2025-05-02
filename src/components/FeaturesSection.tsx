
import React from "react";
import { 
  Search, LineChart, BarChart, Activity, 
  Layers, Code, Cpu, Gauge
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI-powered website analysis",
    description: "Our advanced AI examines every aspect of your website to identify optimization opportunities.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Layers,
    title: "Smart website segmentation",
    description: "We break down your site into key components to provide targeted recommendations for each area.",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: Code,
    title: "UI/UX & SEO recommendations",
    description: "Get detailed suggestions to improve both user experience and search engine visibility.",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: BarChart,
    title: "Competitive benchmarking",
    description: "See how your website compares to competitors and industry leaders in your niche.",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    icon: Activity,
    title: "Performance optimization",
    description: "Identify and fix performance bottlenecks for faster loading speeds and better user experience.",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Gauge,
    title: "Content optimization",
    description: "Analyze your content quality and get AI-powered suggestions for improvements.",
    gradient: "from-red-500 to-pink-500"
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-webvision-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iLjAyIiBkPSJNMzYgMzRoLTJ2LTJoMnYyek0zMCAzNGgtMnYtMmgydjJ6TTI0IDM0aC0ydi0yaDJ2MnpNMTggMzRoLTJ2LTJoMnYyek0xMiAzNGgtMnYtMmgydjJ6TTYgMzRINHYtMmgydjJ6Ii8+PHBhdGggZmlsbD0iIzhCNUNGNiIgZmlsbC1vcGFjaXR5PSIuMDIiIGQ9Ik0yIDI4SDB2LTJoMnYyek04IDI4SDZ2LTJoMnYyek0xNCAyOGgtMnYtMmgydjJ6TTIwIDI4aC0ydi0yaDJ2ek0yNiAyOGgtMnYtMmgydjJ6TTMyIDI4aC0ydi0yaDJ2ek0zOCAyOGgtMnYtMmgydjJ6TTQ0IDI4aC0ydi0yaDJ2ek01MCAyOGgtMnYtMmgydjJ6TTU2IDI4aC0ydi0yaDJ2eiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-webvision-blue to-webvision-purple text-transparent bg-clip-text">
              Key Features
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Discover how WebVision AI can transform your website's performance, design, and user experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-lg mb-6 bg-gradient-to-br ${feature.gradient} text-white`}>
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-webvision-blue transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
