
import { CinematicTransition } from "@/components/animations/CinematicTransition";
import { GlitchText } from "@/components/animations/GlitchText";
import { ScanLines } from "@/components/animations/ScanLines";

export const LaunchingSoon = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden flex items-center">
      <ScanLines opacity={0.1} speed="medium" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <CinematicTransition transitionType="fade-black" duration={2500}>
          <div className="space-y-16">
            <div>
              <GlitchText 
                glitchIntensity="high"
                className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none"
              >
                LAUNCHING
              </GlitchText>
            </div>
            
            <div>
              <GlitchText 
                glitchIntensity="medium"
                className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
              >
                SOON
              </GlitchText>
            </div>

            <div className="space-y-8 text-xl md:text-2xl font-light">
              <p className="text-gray-400">
                The future of access control is coming.
              </p>
              <p className="text-gray-500">
                Are you ready?
              </p>
            </div>

            {/* Countdown-style elements */}
            <div className="flex justify-center space-x-8 mt-16">
              {['DAYS', 'HOURS', 'MINUTES'].map((unit, index) => (
                <div key={unit} className="text-center">
                  <div className="text-4xl md:text-6xl font-black text-white mb-2">
                    <GlitchText glitchIntensity="low">
                      --
                    </GlitchText>
                  </div>
                  <div className="text-sm text-gray-500 tracking-widest">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CinematicTransition>
      </div>
    </section>
  );
};
