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
        {/* Outer circle (O shape) */}
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Analytics bars forming a V pattern */}
        <rect x="16" y="18" width="3" height="12" fill="currentColor" />
        <rect x="21" y="15" width="3" height="18" fill="currentColor" />
        <rect x="26" y="20" width="3" height="10" fill="currentColor" />
        <rect x="31" y="17" width="3" height="14" fill="currentColor" />
        
        {/* Connecting dots for data visualization */}
        <circle cx="17.5" cy="18" r="1.5" fill="currentColor" />
        <circle cx="22.5" cy="15" r="1.5" fill="currentColor" />
        <circle cx="27.5" cy="20" r="1.5" fill="currentColor" />
        <circle cx="32.5" cy="17" r="1.5" fill="currentColor" />
        
        {/* Subtle connecting lines */}
        <path
          d="M17.5 18L22.5 15L27.5 20L32.5 17"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>
      <span className="font-gloock text-xl tracking-wide">OXFORD FIVE</span>
    </div>
  );
};

export default Logo;