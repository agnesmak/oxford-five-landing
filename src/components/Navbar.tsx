import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oxford-navy/80 backdrop-blur-sm border-b border-oxford-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo className="text-oxford-white" />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-oxford-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-oxford-white/80 hover:text-oxford-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-oxford-white/80 hover:text-oxford-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-oxford-white/80 hover:text-oxford-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-oxford-white/80 hover:text-oxford-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-oxford-white/80 hover:text-oxford-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-oxford-white/80 hover:text-oxford-white transition-colors"
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