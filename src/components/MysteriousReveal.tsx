
import { CinematicTransition } from "@/components/animations/CinematicTransition";
import { GlitchText } from "@/components/animations/GlitchText";
import { ScanLines } from "@/components/animations/ScanLines";

export const MysteriousReveal = () => {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
      <ScanLines opacity={0.08} speed="fast" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <CinematicTransition transitionType="spotlight" duration={2000}>
          <div className="space-y-12">
            <GlitchText 
              glitchIntensity="medium"
              className="text-4xl md:text-6xl font-black mb-8"
            >
              TOUCH TOMORROW
            </GlitchText>
            
            <div className="space-y-8 text-2xl md:text-3xl font-light leading-relaxed">
              <p className="text-gray-300">
                Where physical meets digital.
              </p>
              <p className="text-gray-400">
                Where security meets simplicity.
              </p>
              <p className="text-gray-500">
                Where the future meets your fingertips.
              </p>
            </div>

            <div className="mt-16">
              <div className="inline-block relative">
                <div className="w-32 h-32 border-2 border-white/20 rounded-full flex items-center justify-center relative">
                  <div className="w-16 h-16 border-2 border-white/40 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
                  </div>
                  <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </CinematicTransition>
      </div>

      {/* Mysterious particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-30" />
    </section>
  );
};
