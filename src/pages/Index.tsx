
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Dashboard } from "@/components/Dashboard";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />
      <Hero />
      <Products />
      <Dashboard />
      <UseCases />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
