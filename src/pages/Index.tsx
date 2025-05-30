
import { CinematicHero } from "@/components/CinematicHero";
import { TechShowcase } from "@/components/TechShowcase";
import { Dashboard } from "@/components/Dashboard";
import { MysteriousReveal } from "@/components/MysteriousReveal";
import { StickyUseCases } from "@/components/StickyUseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { LaunchingSoon } from "@/components/LaunchingSoon";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-manrope overflow-x-hidden">
      <Navbar />
      <CinematicHero />
      <div className="relative z-10">
        <TechShowcase />
        <MysteriousReveal />
        <Dashboard />
        <StickyUseCases />
        <HowItWorks />
        <LaunchingSoon />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
