import React from 'react';
import Link from 'next/link';

export default function UnitCard({ id, title, description }) {
  return (
    <Link href={`/unit/${id}`} className="group relative block">
      <div className="h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div className="flex flex-col h-full bg-gradient-to-b from-transparent to-white/[0.01]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold tracking-widest text-white/30 uppercase">
              Unit {id}
            </span>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors tracking-tight">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {description}
          </p>

          <div className="mt-auto flex items-center gap-2 text-white font-medium text-sm border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
            <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-white transition-all">
              Explore Unit
            </span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
