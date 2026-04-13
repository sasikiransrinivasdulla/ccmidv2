"use client";

import React from 'react';

export default function PageContainer({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Aurora Glow Layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-aurora-blue/20 rounded-full blur-[120px] animate-aurora-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-aurora-cyan/15 rounded-full blur-[150px] animate-aurora-2" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-aurora-purple/10 rounded-full blur-[100px] animate-aurora-1" />
      </div>

      {/* Content wrapper */}
      <main className="relative z-10 px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
