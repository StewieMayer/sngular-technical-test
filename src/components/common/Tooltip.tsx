import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div 
        className={`absolute ${
          position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-1' :
          position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-1' :
          position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-1' :
          'left-full top-1/2 -translate-y-1/2 ml-1'
        } px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50`}
        style={{
          transform: position === 'top' || position === 'bottom' 
            ? 'translateX(-50%)' 
            : 'translateY(-50%)'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
