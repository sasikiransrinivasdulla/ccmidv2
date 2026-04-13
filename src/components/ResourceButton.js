import React from 'react';

export default function ResourceButton({ href, icon, label, className = "" }) {
  // Check if it's the premium white variant
  const isPremium = className.includes('bg-white');

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 transition-all duration-300 group ${
        isPremium 
          ? `px-6 py-3 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 shadow-lg shadow-white/20 ${className}`
          : `px-4 py-2 text-sm font-medium rounded-xl glass hover:glass-hover border border-white/5 hover:border-white/20 text-white/70 hover:text-white ${className}`
      }`}
    >
      <span className="text-base group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span>
        {label}
      </span>
      <svg 
        className={`w-4 h-4 transition-colors ${isPremium ? 'text-black/40 group-hover:text-black' : 'text-white/20 group-hover:text-white'}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
