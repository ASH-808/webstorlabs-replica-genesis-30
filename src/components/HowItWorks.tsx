
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { StaggeredText } from "@/components/animations/StaggeredText";

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Setup",
      description: "Install NFC readers and configure your access points with our simple setup wizard."
    },
    {
      step: "02",
      title: "Configure",
      description: "Create user profiles, assign access permissions, and customize security settings."
    },
    {
      step: "03",
      title: "Deploy",
      description: "Distribute NFC cards to users and activate the system across all locations."
    },
    {
      step: "04",
      title: "Monitor",
      description: "Track usage, generate reports, and manage your access control system remotely."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText animation="fade-down" className="text-4xl md:text-5xl font-bold text-black mb-6">
            <h2>How It Works</h2>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={200} className="text-xl text-gray-600 max-w-3xl mx-auto">
            <p>
              Simple implementation process from setup to deployment
            </p>
          </AnimatedText>
        </div>

        <StaggeredText
          staggerDelay={200}
          animation="slide-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-black text-gray-300 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </StaggeredText>
      </div>
    </section>
  );
};
