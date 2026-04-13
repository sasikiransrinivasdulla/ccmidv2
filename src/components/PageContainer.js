"use client";

import React from 'react';

export default function PageContainer({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Content wrapper */}
      <main className="relative z-10 px-6 py-12 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
