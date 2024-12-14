import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Success = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const colors = ['#045EEC', '#0F2D6E', '#0EA5E9', '#FFD700'];
    const pieces = Array.from({ length: 50 }, (_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 2}s`;
      
      return (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            backgroundColor: color,
            left,
            animationDelay,
            top: '-20px'
          }}
        />
      );
    });
    
    setConfetti(pieces);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden">
      {confetti}
      <div className="text-center px-4">
        <h1 className="text-4xl font-sofia font-semibold text-oxford-white mb-6 animate-fade-up">
          Thank You!
        </h1>
        <p className="text-xl text-oxford-white/80 mb-8 max-w-2xl animate-fade-up">
          We've received your consultation request and will reach out to you within 3 business days.
        </p>
        <Button asChild variant="secondary" size="lg" className="animate-fade-up">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Success;