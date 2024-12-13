import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-oxford-dark">
            Oxford V
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-oxford-gray hover:text-oxford-purple transition-colors">
              Features
            </a>
            <a href="#about" className="text-oxford-gray hover:text-oxford-purple transition-colors">
              About
            </a>
            <a href="#contact" className="text-oxford-gray hover:text-oxford-purple transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-oxford-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#features"
                className="text-oxford-gray hover:text-oxford-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-oxford-gray hover:text-oxford-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-oxford-gray hover:text-oxford-purple transition-colors"
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