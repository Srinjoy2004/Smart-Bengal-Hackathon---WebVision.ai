
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "For individuals and small projects",
    features: [
      "5 website analyses per month",
      "Basic SEO recommendations",
      "Performance insights",
      "Design suggestions",
      "Email report"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "For growing businesses and freelancers",
    features: [
      "20 website analyses per month",
      "Advanced SEO recommendations",
      "Detailed performance analysis",
      "Comprehensive UI/UX audit",
      "Content optimization suggestions",
      "Competitor analysis",
      "Priority email support"
    ],
    cta: "Try 14 Days Free",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For agencies and large businesses",
    features: [
      "Unlimited website analyses",
      "Advanced SEO & technical audits",
      "Custom reporting dashboard",
      "API access",
      "White-label reports",
      "Team collaboration",
      "Dedicated account manager",
      "Phone & email support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-webvision-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-webvision-blue/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-webvision-blue to-webvision-purple text-transparent bg-clip-text">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that's right for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-webvision-darker border ${
                plan.popular
                  ? "border-webvision-blue shadow-neon relative"
                  : "border-webvision-blue/20"
              } rounded-xl overflow-hidden transition-all duration-300 hover:border-webvision-blue/50 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-webvision-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "neon-button"
                      : "bg-webvision-blue/20 hover:bg-webvision-blue/30 text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mr-2">
                        <Check
                          size={18}
                          className={`mt-0.5 ${plan.popular ? "text-webvision-blue" : "text-green-500"}`}
                        />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need a custom solution? <a href="#" className="text-webvision-blue hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
