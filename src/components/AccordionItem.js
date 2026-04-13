"use client";

import React, { useState } from 'react';
import { useProgress } from "@/context/ProgressContext";

export default function AccordionItem({ id, topic, unitId }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isCompleted, toggleTopic } = useProgress();
  
  const completed = isCompleted(unitId, topic.title);

  const handleToggle = (e) => {
    e.stopPropagation();
    toggleTopic(unitId, topic.title, topic.important);
  };

  const handleYoutubeSearch = (e) => {
    e.stopPropagation();
    window.open(
      `https://www.youtube.com/results?search_query=cloud computing ${topic.title} telugu`,
      "_blank"
    );
  };

  const handleDiagramSearch = (e) => {
    e.stopPropagation();
    window.open(
      `https://www.google.com/search?tbm=isch&q=cloud computing ${topic.title} diagram`,
      "_blank"
    );
  };

  return (
    <div className={`mb-4 overflow-hidden rounded-2xl transition-all duration-300 ${isOpen ? 'glass-hover' : 'glass'} ${completed ? 'opacity-60' : ''}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
      >
        <div className="flex items-center gap-5">
          {/* Checkbox */}
          <div 
            onClick={handleToggle}
            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
              completed 
                ? 'bg-white border-white' 
                : 'border-white/20 group-hover:border-white/40'
            }`}
          >
            {completed && (
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${topic.important ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/20'}`} />
            <h4 className={`text-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              completed ? 'text-white/40 line-through' : 'text-white'
            }`}>
              {topic.title}
              {topic.important && (
                <span className="text-yellow-400/80 drop-shadow-[0_0_5px_rgba(250,204,21,0.3)]" title="Important Topic">
                  ⭐
                </span>
              )}
            </h4>
          </div>
        </div>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-white/20'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Accordion Content */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 border-t border-white/5 space-y-6">
            <p className="text-gray-400 leading-relaxed pt-4">
              {topic.description || "Placeholder description for this topic."}
            </p>
            
            {topic.points && topic.points.length > 0 && (
              <ul className="space-y-3">
                {topic.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/60">
                    <span className="text-white/40 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Search Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
              <button 
                onClick={handleYoutubeSearch}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl glass hover:glass-hover border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform">🎥</span>
                YouTube Search
              </button>
              <button 
                onClick={handleDiagramSearch}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl glass hover:glass-hover border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform">🖼</span>
                Diagram Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
