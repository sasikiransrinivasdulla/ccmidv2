"use client";

import React, { useState } from 'react';

export default function AccordionItem({ id, topic }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 overflow-hidden rounded-2xl transition-all duration-300 ${isOpen ? 'glass-hover' : 'glass'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] ${topic.important ? 'bg-aurora-cyan' : 'bg-white/20 shadow-none'}`} />
          <h4 className={`text-lg font-semibold transition-colors flex items-center gap-2 ${isOpen ? 'text-aurora-cyan' : 'text-white'}`}>
            {topic.title}
            {topic.important && (
              <span className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" title="Important Topic">
                ⭐
              </span>
            )}
          </h4>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-aurora-cyan' : 'text-white/40'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion Content with smooth height transition */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 border-t border-white/5 space-y-4">
            <p className="text-white/70 leading-relaxed italic">
              {topic.description || "Placeholder description for this topic. Detailed concepts and explanations will be added here later."}
            </p>
            
            {topic.points && topic.points.length > 0 && (
              <ul className="space-y-2">
                {topic.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/60">
                    <span className="text-aurora-blue mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {!topic.points?.length && (
              <div className="bg-white/5 rounded-xl p-4 text-sm text-white/40 border border-white/5">
                Key points and technical details will be structured here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
