import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="160"
        height="32"
        viewBox="0 0 160 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8"
      >
        {/* Neural network O */}
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="16" cy="8" r="2" fill="currentColor" />
        <circle cx="16" cy="24" r="2" fill="currentColor" />
        <circle cx="8" cy="16" r="2" fill="currentColor" />
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        <line x1="16" y1="10" x2="16" y2="14" stroke="currentColor" strokeWidth="1" />
        <line x1="16" y1="18" x2="16" y2="22" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1" />
        <line x1="18" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1" />
        
        {/* XFORD text */}
        <text x="32" y="22" className="font-garamond" fill="currentColor" fontSize="24">
          XFORD
        </text>
        
        {/* V as magnifying glass */}
        <circle cx="120" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="125" y1="18" x2="135" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Logo;