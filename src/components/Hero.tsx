
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { StaggeredText } from "@/components/animations/StaggeredText";

export const Hero = () => {
  const backgroundParallax = useParallax({ sensitivity: 0.02, maxOffset: 15 });
  const imageParallax1 = useParallax({ sensitivity: 0.04, maxOffset: 25 });
  const imageParallax2 = useParallax({ sensitivity: 0.03, maxOffset: 20 });
  const imageParallax3 = useParallax({ sensitivity: 0.05, maxOffset: 30 });
  const imageParallax4 = useParallax({ sensitivity: 0.035, maxOffset: 22 });

  return (
    <section id="home" className="min-h-screen bg-white pt-16 relative overflow-hidden">
      {/* Background Images with Parallax */}
      <div 
        className="absolute top-20 left-8 w-64 h-48 opacity-60 will-change-transform"
        style={{ transform: imageParallax1.transform }}
      >
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=400&fit=crop" 
          alt="Workspace"
          className="w-full h-full object-cover rounded-lg shadow-lg animate-fade-in"
        />
      </div>
      
      <div 
        className="absolute top-16 right-8 w-48 h-32 opacity-60 will-change-transform"
        style={{ 
          transform: imageParallax2.transform,
          animationDelay: "0.2s" 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop" 
          alt="Technology"
          className="w-full h-full object-cover rounded-lg shadow-lg animate-fade-in"
        />
      </div>

      <div 
        className="absolute bottom-32 left-16 w-56 h-40 opacity-60 will-change-transform"
        style={{ 
          transform: imageParallax3.transform,
          animationDelay: "0.4s" 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=350&fit=crop" 
          alt="Circuit board"
          className="w-full h-full object-cover rounded-lg shadow-lg animate-fade-in"
        />
      </div>

      <div 
        className="absolute bottom-20 right-16 w-52 h-36 opacity-60 will-change-transform"
        style={{ 
          transform: imageParallax4.transform,
          animationDelay: "0.6s" 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=450&h=300&fit=crop" 
          alt="Digital display"
          className="w-full h-full object-cover rounded-lg shadow-lg animate-fade-in"
        />
      </div>

      {/* Main Content with animations */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 will-change-transform"
        style={{ transform: backgroundParallax.transform }}
      >
        <div className="text-center">
          <AnimatedText 
            animation="text-reveal" 
            delay={200}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none mb-8"
          >
            <h1 className="animate-glow-pulse">WEBSTORLABS</h1>
          </AnimatedText>
          
          <div className="max-w-3xl mx-auto mb-12">
            <AnimatedText 
              animation="fade-up" 
              delay={600}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              <p>
                "From smart entry systems to custom software, WebstorLabs delivers the complete infrastructure for intelligent access control."
              </p>
            </AnimatedText>
          </div>

          <StaggeredText 
            staggerDelay={200}
            animation="scale-fade"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
              Know More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 text-lg font-medium hover:bg-gray-50 transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </StaggeredText>
        </div>
      </div>

      {/* Floating social icon with animation */}
      <AnimatedText animation="scale-fade" delay={1000}>
        <div className="fixed bottom-8 right-8 z-20">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold">f</span>
          </div>
        </div>
      </AnimatedText>
    </section>
  );
};
