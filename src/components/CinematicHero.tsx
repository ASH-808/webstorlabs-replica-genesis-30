
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { GlitchText } from "@/components/animations/GlitchText";
import { ScanLines } from "@/components/animations/ScanLines";
import { CinematicTransition } from "@/components/animations/CinematicTransition";

export const CinematicHero = () => {
  const backgroundParallax = useParallax({ sensitivity: 0.02, maxOffset: 15 });
  const imageParallax1 = useParallax({ sensitivity: 0.04, maxOffset: 25 });
  const imageParallax2 = useParallax({ sensitivity: 0.03, maxOffset: 20 });
  const imageParallax3 = useParallax({ sensitivity: 0.05, maxOffset: 30 });
  const imageParallax4 = useParallax({ sensitivity: 0.035, maxOffset: 22 });

  return (
    <section id="home" className="min-h-screen bg-black pt-16 relative">
      <ScanLines opacity={0.05} speed="slow" />
      
      {/* Background Images with Parallax - Now with tech feel */}
      <div 
        className="absolute top-20 left-8 w-64 h-48 opacity-40 will-change-transform"
        style={{ transform: imageParallax1.transform }}
      >
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop" 
          alt="Circuit technology"
          className="w-full h-full object-cover rounded-lg shadow-2xl filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg" />
      </div>
      
      <div 
        className="absolute top-16 right-8 w-48 h-32 opacity-30 will-change-transform"
        style={{ transform: imageParallax2.transform }}
      >
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop" 
          alt="Technology"
          className="w-full h-full object-cover rounded-lg shadow-2xl filter grayscale"
        />
      </div>

      <div 
        className="absolute bottom-32 left-16 w-56 h-40 opacity-35 will-change-transform"
        style={{ transform: imageParallax3.transform }}
      >
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=350&fit=crop" 
          alt="Digital interface"
          className="w-full h-full object-cover rounded-lg shadow-2xl filter grayscale brightness-150"
        />
      </div>

      <div 
        className="absolute bottom-20 right-16 w-52 h-36 opacity-25 will-change-transform"
        style={{ transform: imageParallax4.transform }}
      >
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=450&h=300&fit=crop" 
          alt="Digital display"
          className="w-full h-full object-cover rounded-lg shadow-2xl filter grayscale"
        />
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 will-change-transform"
        style={{ transform: backgroundParallax.transform }}
      >
        <div className="text-center">
          <CinematicTransition transitionType="fade-black" duration={1500}>
            <GlitchText 
              glitchIntensity="high"
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-8"
            >
              <h1 className="font-manrope tracking-wider">WEBSTORLABS</h1>
            </GlitchText>
          </CinematicTransition>
          
          <CinematicTransition transitionType="slide-reveal" duration={1200}>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light tracking-wide">
                The Future of <span className="text-white font-bold">Access</span> Begins
              </p>
            </div>
          </CinematicTransition>

          <CinematicTransition transitionType="spotlight" duration={1800}>
            <div className="mb-12">
              <GlitchText 
                glitchIntensity="medium"
                triggerOnHover
                className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
              >
                LAUNCHING SOON
              </GlitchText>
            </div>
          </CinematicTransition>

          <CinematicTransition transitionType="curtain" duration={2000}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-4 text-xl font-bold transition-all duration-500 hover:scale-105 tracking-wider">
                EXPERIENCE
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-12 py-4 text-xl font-bold transition-all duration-500 tracking-wider">
                <Play className="mr-3 h-6 w-6" />
                PREVIEW
              </Button>
            </div>
          </CinematicTransition>
        </div>
      </div>

      {/* Atmospheric elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
    </section>
  );
};
