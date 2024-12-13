import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8"
      >
        {/* Neural network O */}
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
        <circle cx="24" cy="36" r="2" fill="currentColor" />
        <circle cx="12" cy="24" r="2" fill="currentColor" />
        <circle cx="36" cy="24" r="2" fill="currentColor" />
        <line x1="24" y1="14" x2="24" y2="22" stroke="currentColor" strokeWidth="1" />
        <line x1="24" y1="26" x2="24" y2="34" stroke="currentColor" strokeWidth="1" />
        <line x1="14" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1" />
        <line x1="26" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="1" />
        
        {/* V overlay */}
        <path
          d="M38 12L24 36L10 12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Logo;