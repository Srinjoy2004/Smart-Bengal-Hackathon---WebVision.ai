
import React, { useRef } from "react";
import { Search, LineChart, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Enter your website URL",
    description:
      "Simply input your website address into our analyzer tool. Our AI will begin the comprehensive scan immediately.",
  },
  {
    icon: LineChart,
    title: "AI analyzes & enhances",
    description:
      "Our advanced AI algorithms examine your website's design, performance, SEO, and content to identify improvement opportunities.",
  },
  {
    icon: Zap,
    title: "Get detailed report & recommendations",
    description:
      "Receive actionable insights and specific recommendations to improve your website's performance and user experience.",
  },
];

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="howitworks"
      ref={sectionRef}
      className="py-20 bg-webvision-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-webvision-indigo/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-webvision-blue to-webvision-purple text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            WebVision AI transforms your website with a simple, three-step process
            powered by our advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 relative group hover:border-webvision-blue/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-br from-webvision-blue to-webvision-purple text-white group-hover:shadow-neon transition-all duration-300">
                <step.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="inline-block bg-webvision-blue/20 text-webvision-blue w-7 h-7 rounded-full text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              
              <p className="text-gray-300">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-2 bg-gradient-to-r from-webvision-blue to-webvision-purple rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
