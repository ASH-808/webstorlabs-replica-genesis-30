
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CinematicText } from "@/components/animations/CinematicText";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const HowItWorks = () => {
  const { elementRef, isInView, scrollProgress } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });

  const steps = [
    {
      step: "01",
      title: "Setup",
      description: "Install NFC readers and configure your access points with our simple setup wizard.",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Configure",
      description: "Create user profiles, assign access permissions, and customize security settings.",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Deploy",
      description: "Distribute NFC cards to users and activate the system across all locations.",
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Monitor",
      description: "Track usage, generate reports, and manage your access control system remotely.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section ref={elementRef} className="py-32 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <CinematicText
            variant="reveal"
            size="xl"
            className="text-white mb-8"
            delay={200}
          >
            How It Works
          </CinematicText>
          
          <CinematicText
            variant="fade-up"
            size="sm"
            className="text-gray-300 font-light max-w-3xl mx-auto"
            delay={600}
          >
            Four simple steps to revolutionize your access control system
          </CinematicText>
        </div>

        {/* Progress line */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 h-full"></div>
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-1000"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center gap-12',
                index % 2 === 1 && 'flex-row-reverse',
                'transform transition-all duration-1000',
                isInView
                  ? 'opacity-100 translate-x-0'
                  : `opacity-0 ${index % 2 === 0 ? 'translate-x-16' : '-translate-x-16'}`
              )}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="flex-1">
                <Card className={`bg-gradient-to-br ${step.color} border-0 overflow-hidden group hover:scale-105 transition-transform duration-500`}>
                  <CardContent className="p-12 text-center relative z-10">
                    <div className="text-6xl font-black text-white/20 mb-4">{step.step}</div>
                    <h3 className="text-3xl font-black text-white mb-6">{step.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{step.description}</p>
                    
                    <div className="mt-8 flex justify-center">
                      <CheckCircle className="h-8 w-8 text-white/60" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className={cn(
                    "h-8 w-8 text-gray-500 transform transition-all duration-500",
                    index % 2 === 1 && "rotate-180",
                    isInView && "text-white scale-110"
                  )} />
                </div>
              )}
              
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
