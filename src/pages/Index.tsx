
import { CinematicHero } from "@/components/CinematicHero";
import { TechShowcase } from "@/components/TechShowcase";
import { Dashboard } from "@/components/Dashboard";
import { MysteriousReveal } from "@/components/MysteriousReveal";
import { UseCases } from "@/components/UseCases";
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
      <TechShowcase />
      <MysteriousReveal />
      <Dashboard />
      <UseCases />
      <HowItWorks />
      <LaunchingSoon />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
