import React from 'react';
import Link from 'next/link';
import PageContainer from "@/components/PageContainer";
import AccordionItem from "@/components/AccordionItem";
import ResourceButton from "@/components/ResourceButton";
import { syllabus } from "@/data/syllabus";

export default function UnitPage({ params }) {
  const { id } = params;
  const unit = syllabus[id];

  if (!unit) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Unit Not Found</h1>
          <Link href="/" className="text-aurora-cyan hover:underline">Return Home</Link>
        </div>
      </PageContainer>
    );
  }

  const topics = unit.topics;
  
  // Conditionally show notes for units 3, 4, 5
  const hasNotes = ['3', '4', '5'].includes(id);

  return (
    <PageContainer>
      <div className="mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-white/40 hover:text-aurora-cyan transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-aurora-blue font-bold tracking-[0.2em] uppercase text-sm mb-2">
              Deep Dive
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Unit {id}: {unit.title}
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            {hasNotes && (
              <ResourceButton 
                href={`/resources/unit${id}.pdf`} 
                icon="📄" 
                label="Notes" 
              />
            )}
            <div className="text-white/40 font-medium hidden md:block">
              {topics.length} Topics
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px flex-1 bg-white/10"></span>
          <span className="text-sm font-semibold tracking-widest uppercase text-white/30">Topics</span>
          <span className="h-px flex-1 bg-white/10"></span>
        </div>

        <div className="max-w-4xl mx-auto">
          {topics.map((topic) => (
            <AccordionItem 
              key={topic.id} 
              id={topic.id} 
              topic={topic} 
            />
          ))}
        </div>
      </div>

      {unit.description && (
        <div className="mt-16 p-8 rounded-2xl glass border-aurora-blue/20 bg-aurora-blue/5">
          <h4 className="text-aurora-blue font-bold mb-2">Unit {id} Overview</h4>
          <p className="text-white/60">
            {unit.description}
          </p>
        </div>
      )}
    </PageContainer>
  );
}
