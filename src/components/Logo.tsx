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
        {/* O letter */}
        <path
          d="M14 16C14 16 19 14 24 14C29 14 34 16 34 16C34 16 36 21 36 24C36 27 34 32 34 32C34 32 29 34 24 34C19 34 14 32 14 32C14 32 12 27 12 24C12 21 14 16 14 16Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* V letter */}
        <path
          d="M20 16L24 32L28 16"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span className="font-gloock text-xl tracking-[0.2em] uppercase">Oxford Five</span>
    </div>
  );
};

export default Logo;