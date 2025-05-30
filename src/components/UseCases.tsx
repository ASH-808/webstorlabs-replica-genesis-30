
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, Home, Briefcase } from "lucide-react";
import { CinematicText } from "@/components/animations/CinematicText";
import { InteractiveImage } from "@/components/animations/InteractiveImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const UseCases = () => {
  const { elementRef, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const useCases = [
    {
      icon: <Building2 className="h-10 w-10 text-white" />,
      title: "Office Access",
      description: "Secure building entry with employee cards and visitor management systems.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Event Check-ins",
      description: "Streamlined event registration and attendee tracking with NFC technology.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: "Smart Buildings",
      description: "Integrated access control for modern smart building automation systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Business Solutions",
      description: "Custom enterprise solutions for complex multi-location access requirements.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section ref={elementRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <CinematicText
            variant="reveal"
            size="xl"
            className="text-black mb-8"
            delay={200}
          >
            Endless Possibilities
          </CinematicText>
          
          <CinematicText
            variant="fade-up"
            size="sm"
            className="text-gray-600 font-light max-w-3xl mx-auto"
            delay={600}
          >
            From corporate offices to smart cities, our solutions adapt to every environment
          </CinematicText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={cn(
                'group transform transition-all duration-1000',
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              )}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <Card className="overflow-hidden border-0 shadow-2xl group-hover:shadow-3xl transition-all duration-700 h-full bg-white">
                <div className="h-64 relative">
                  <InteractiveImage
                    src={useCase.image}
                    alt={useCase.title}
                    className="h-full"
                    hoverScale={1.1}
                    overlay={
                      <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                        <div className="text-center">
                          <div className="mb-4 flex justify-center">
                            {useCase.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {useCase.title}
                          </h3>
                        </div>
                      </div>
                    }
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-black text-black group-hover:text-gray-600 transition-colors duration-300">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
