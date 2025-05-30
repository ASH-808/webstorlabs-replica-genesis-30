
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone, Wifi, ArrowRight } from "lucide-react";
import { CinematicText } from "@/components/animations/CinematicText";
import { InteractiveImage } from "@/components/animations/InteractiveImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const Products = () => {
  const { elementRef: sectionRef, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const products = [
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "NFC Cards",
      description: "Premium NFC-enabled access cards with customizable designs and advanced security features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      stats: "99.9% Reliability"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Smart Readers",
      description: "High-performance NFC readers with real-time data processing and cloud connectivity.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      stats: "Sub-second Response"
    },
    {
      icon: <Wifi className="h-8 w-8 text-white" />,
      title: "Smart Tags",
      description: "Versatile NFC tags for asset tracking, automation, and seamless user interactions.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      stats: "10-year Lifespan"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <CinematicText
            variant="reveal"
            size="xl"
            className="text-white mb-8"
            delay={200}
          >
            Revolutionary Products
          </CinematicText>
          
          <div className="max-w-3xl mx-auto">
            <CinematicText
              variant="fade-up"
              size="sm"
              className="text-gray-300 font-light"
              delay={600}
            >
              Complete NFC ecosystem solutions designed for the future of access control
            </CinematicText>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                'group transform transition-all duration-1000',
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              )}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-zinc-600 transition-all duration-500">
                <div className="h-64 relative">
                  <InteractiveImage
                    src={product.image}
                    alt={product.title}
                    className="h-full"
                    hoverScale={1.05}
                    overlay={
                      <div className="flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                          {product.icon}
                        </div>
                      </div>
                    }
                  />
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {product.stats}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    {product.description}
                  </CardDescription>
                  
                  <Button
                    variant="ghost"
                    className="text-white hover:text-black hover:bg-white w-full group/btn transition-all duration-300"
                  >
                    Explore Product
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
