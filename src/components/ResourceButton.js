import React from 'react';

export default function ResourceButton({ href, icon, label, className = "" }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full glass hover:glass-hover border border-white/10 hover:border-aurora-cyan/30 transition-all duration-300 group shadow-[0_0_15px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)] ${className}`}
    >
      <span className="text-base group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="text-white/80 group-hover:text-white transition-colors">
        {label}
      </span>
      <svg 
        className="w-4 h-4 text-white/40 group-hover:text-aurora-cyan transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
