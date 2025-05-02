
import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Quantum Media",
    content: "WebVision AI transformed our website. The AI insights helped us increase conversion rates by 42% in just two months. The UI/UX recommendations were spot-on!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Web Developer",
    company: "TechFlow",
    content: "As a developer, I appreciate the technical depth of WebVision's analysis. It spotted issues I missed and suggested optimizations that improved our site speed by 67%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Emma Rodriguez",
    role: "Small Business Owner",
    company: "Craft Corner",
    content: "My small business website was struggling to rank. After implementing WebVision's recommendations, we're now on page one for our main keywords. Worth every penny!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-webvision-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-webvision-purple/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-webvision-blue to-webvision-purple text-transparent bg-clip-text">
              Trusted by Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            See how businesses and developers are transforming their web presence with WebVision AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-webvision-dark border border-webvision-blue/20 hover:border-webvision-blue/50 p-6 rounded-xl transition-all duration-300 hover:shadow-neon"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-webvision-blue/30"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                  />
                ))}
              </div>
              
              <p className="text-gray-300">{testimonial.content}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-white mb-8">
            Join 2,500+ satisfied customers who improved their websites with WebVision AI
          </p>
          <Button 
            className="neon-button inline-flex"
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Try For Free</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
