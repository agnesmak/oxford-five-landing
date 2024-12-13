import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-oxford-navy/80 backdrop-blur-md z-50 py-5 border-b border-oxford-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-oxford-white">
            Oxford V
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-oxford-white/80 hover:text-oxford-blue transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-oxford-white/80 hover:text-oxford-blue transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-oxford-white/80 hover:text-oxford-blue transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-oxford-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-oxford-navy/95 border-t border-oxford-white/10 backdrop-blur-md">
            <div className="flex flex-col space-y-4 p-6">
              <a
                href="#features"
                className="text-oxford-white/80 hover:text-oxford-blue transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-oxford-white/80 hover:text-oxford-blue transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-oxford-white/80 hover:text-oxford-blue transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;