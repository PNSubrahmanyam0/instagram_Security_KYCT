import React from 'react';

interface InstagramBadgeProps {
  className?: string;
  size?: number;
}

export const InstagramBadge: React.FC<InstagramBadgeProps> = ({ className = '', size = 16 }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-[5px] bg-white shadow-sm ring-1 ring-black/20 ${className}`}
      style={{ width: size, height: size }}
      title="Instagram"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#18191a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[72%] h-[72%]"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </div>
  );
};
