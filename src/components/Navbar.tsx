
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-black">WEBSTORLABS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
            <a href="#support" className="text-gray-700 hover:text-black transition-colors">Support</a>
            <Button variant="outline" className="rounded-full px-6">
              Contact us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#support" className="text-gray-700 hover:text-black transition-colors">Support</a>
              <Button variant="outline" className="rounded-full w-fit">
                Contact us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
