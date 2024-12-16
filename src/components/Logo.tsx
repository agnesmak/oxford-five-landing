import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/lovable-uploads/18db05d0-3ce9-4008-a0be-8e229a71a398.png" 
        alt="Oxford Five Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;