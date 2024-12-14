import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/lovable-uploads/e64f7f17-d9aa-44fe-8af4-7504fabd1e35.png",
  "/lovable-uploads/f59b77e7-f59e-4cb2-bd82-001fb9371229.png",
  "/lovable-uploads/1b6b9242-e631-49b6-8c13-248e4cbba706.png",
  "/lovable-uploads/cb54b827-fce7-440f-8001-a1413b191739.png",
  "/lovable-uploads/027b0670-59e2-4c5e-b943-b97464afe1ee.png"
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      {/* Tagline Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-sofia font-semibold text-oxford-white text-center max-w-5xl mx-auto leading-tight animate-fade-up">
            We empower brands to improve their brand presence in the era of AI search
          </h1>
        </div>
      </section>

      {/* Photo Slideshow Section */}
      <section className="py-20 bg-oxford-navy/30">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt="Team at Oxford"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-oxford-white/20 hover:bg-oxford-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="text-oxford-white" size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-oxford-white/20 hover:bg-oxford-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="text-oxford-white" size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-oxford-white" : "bg-oxford-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-oxford-navy to-oxford-dark p-8 md:p-12 rounded-2xl">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-sofia font-semibold text-oxford-white mb-6">
                Born from Oxford University's Excellence
              </h2>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                Oxford Five emerged from the prestigious halls of Oxford University, bringing together deep expertise in AI Search technology. Our founders are industry experts in their respective domains, creating a unique blend of knowledge and innovation.
              </p>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                At Oxford Five, we seamlessly blend cutting-edge analytics with our expertise in marketing and search, empowering businesses with the tools and recommendations they need to improve their brand presence and successfully navigate through evolving customer search behaviors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;