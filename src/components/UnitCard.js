import React from 'react';
import Link from 'next/link';

export default function UnitCard({ id, title, description }) {
  return (
    <Link href={`/unit/${id}`} className="group">
      <div className="glass group-hover:glass-hover transition-all duration-300 rounded-2xl p-8 h-full flex flex-col justify-between cursor-pointer transform group-hover:-translate-y-2">
        <div>
          <span className="text-aurora-cyan text-sm font-bold tracking-widest uppercase mb-4 block">
            Unit {id}
          </span>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {description || "Explore core concepts and advanced architectures in this comprehensive unit module."}
          </p>
        </div>
        
        <div className="flex items-center text-aurora-blue font-semibold group-hover:translate-x-1 transition-transform duration-300">
          Start Learning 
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
