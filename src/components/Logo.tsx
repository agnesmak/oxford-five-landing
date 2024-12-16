import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8"
      >
        {/* Elegant outer circle */}
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
        />
        
        {/* Refined analytics bars */}
        <rect x="16" y="18" width="2" height="14" rx="1" fill="currentColor" />
        <rect x="22" y="14" width="2" height="20" rx="1" fill="currentColor" />
        <rect x="28" y="20" width="2" height="12" rx="1" fill="currentColor" />
        <rect x="34" y="16" width="2" height="16" rx="1" fill="currentColor" />
        
        {/* Subtle data points */}
        <circle cx="17" cy="18" r="1" fill="currentColor" />
        <circle cx="23" cy="14" r="1" fill="currentColor" />
        <circle cx="29" cy="20" r="1" fill="currentColor" />
        <circle cx="35" cy="16" r="1" fill="currentColor" />
        
        {/* Elegant connecting line */}
        <path
          d="M17 18C17 18 23 14 23 14C23 14 29 20 29 20C29 20 35 16 35 16"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="font-gloock text-xl tracking-wider">OXFORD FIVE</span>
    </div>
  );
};

export default Logo;