import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/lovable-uploads/5798bbd0-0e22-4719-a66f-e19c45a04280.png" 
        alt="Oxford Five Logo" 
        className="h-8 w-auto"
      />
      <span className="font-gloock text-xl tracking-wide">OXFORD FIVE</span>
    </div>
  );
};

export default Logo;