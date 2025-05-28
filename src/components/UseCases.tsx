
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, Home, Briefcase } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { StaggeredText } from "@/components/animations/StaggeredText";

export const UseCases = () => {
  const useCases = [
    {
      icon: <Building2 className="h-10 w-10 text-blue-600" />,
      title: "Office Access",
      description: "Secure building entry with employee cards and visitor management systems."
    },
    {
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      title: "Event Check-ins",
      description: "Streamlined event registration and attendee tracking with NFC technology."
    },
    {
      icon: <Home className="h-10 w-10 text-purple-600" />,
      title: "Smart Buildings",
      description: "Integrated access control for modern smart building automation systems."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-orange-600" />,
      title: "Business Solutions",
      description: "Custom enterprise solutions for complex multi-location access requirements."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText animation="fade-down" className="text-4xl md:text-5xl font-bold text-black mb-6">
            <h2>Use Cases</h2>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={200} className="text-xl text-gray-600 max-w-3xl mx-auto">
            <p>
              Versatile applications across industries and environments
            </p>
          </AnimatedText>
        </div>

        <StaggeredText
          staggerDelay={150}
          animation="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 text-center"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </StaggeredText>
      </div>
    </section>
  );
};
