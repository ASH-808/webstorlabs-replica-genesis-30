
import { HorizontalScroll } from "@/components/animations/HorizontalScroll";
import { CinematicTransition } from "@/components/animations/CinematicTransition";
import { ScanLines } from "@/components/animations/ScanLines";
import { GlitchText } from "@/components/animations/GlitchText";

export const TechShowcase = () => {
  const techVisuals = [
    {
      title: "NEURAL",
      subtitle: "networks",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      description: "Advanced processing"
    },
    {
      title: "QUANTUM",
      subtitle: "encryption",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      description: "Secure connections"
    },
    {
      title: "BIOMETRIC",
      subtitle: "recognition",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      description: "Identity verification"
    },
    {
      title: "PROXIMITY",
      subtitle: "sensing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      description: "Contactless interaction"
    },
    {
      title: "MESH",
      subtitle: "networking",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
      description: "Connected ecosystem"
    }
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden py-20">
      <ScanLines opacity={0.03} speed="medium" direction="vertical" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CinematicTransition transitionType="fade-black" duration={1200}>
          <div className="text-center mb-16">
            <GlitchText 
              glitchIntensity="low"
              className="text-5xl md:text-7xl font-black text-black mb-6"
            >
              TECHNOLOGY
            </GlitchText>
            <p className="text-2xl text-gray-600 font-light tracking-wide">
              Beyond imagination. Beyond limits.
            </p>
          </div>
        </CinematicTransition>

        <CinematicTransition transitionType="slide-reveal" duration={1500}>
          <HorizontalScroll
            className="h-96"
            itemClassName="w-80"
            spacing="gap-12"
          >
            {techVisuals.map((tech, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 w-80 overflow-hidden bg-black rounded-none">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-wider">
                      {tech.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-light">
                      {tech.subtitle}
                    </p>
                    <div className="w-16 h-0.5 bg-white mt-4 group-hover:w-32 transition-all duration-500" />
                  </div>

                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-60" />
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </CinematicTransition>
      </div>
    </section>
  );
};
