"use client";

import PageContainer from "@/components/PageContainer";
import UnitCard from "@/components/UnitCard";
import ResourceButton from "@/components/ResourceButton";
import { useProgress } from "@/context/ProgressContext";

export default function Home() {
  const { getGlobalStats, isLoaded } = useProgress();
  const { completed, total, percentage } = getGlobalStats();

  const units = [
    { id: 3, title: "Virtualization and Containers", description: "Deep dive into virtualized environments and container orchestration platforms." },
    { id: 4, title: "Cloud Computing Challenges", description: "Analyzing the economics, scalability, and security architecture of cloud systems." },
    { id: 5, title: "Advanced Concepts", description: "Exploring serverless patterns, IoT integration, and emerging cloud technologies." },
  ];

  return (
    <PageContainer>
      <div className="flex flex-col items-center text-center mb-12 space-y-6 relative pt-12">
        <div className="absolute top-0 right-0 hidden lg:block">
          <ResourceButton
            href="/syllabus/cn.pdf"
            icon="📘"
            label="Full Syllabus"
            className="bg-white"
          />
        </div>

        <h2 className="text-white/40 font-bold tracking-[0.3em] uppercase text-xs">
          Academic Research Platform
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
          Cloud Computing
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
          A minimalist modern web.
        </p>

        <div className="pt-8 flex flex-col items-center gap-4">
          <ResourceButton
            href="/syllabus/cn.pdf"
            icon="📘"
            label="Full Syllabus"
            className="bg-white lg:hidden"
          />
        </div>

        {/* Mobile Discoverability Arrow */}
        <div className="lg:hidden absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-1 opacity-40">
          <span className="text-[10px] font-bold uppercase tracking-widest">Explore Units</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Global Progress Section */}
      {isLoaded && (
        <div className="max-w-md mx-auto mb-24 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Syllabus Completion</span>
            <span className="text-sm font-bold text-white">{percentage}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-white transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
            {completed} of {total} topics mastered
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {units.map((unit) => (
          <UnitCard
            key={unit.id}
            id={unit.id}
            title={unit.title}
            description={unit.description}
          />
        ))}
      </div>

      <footer className="mt-32 pt-12 border-t border-white/5 text-center text-white/20 text-xs tracking-widest uppercase">
        &copy; 2026 Cloud Computing Mastery &bull; Built for Performance
      </footer>
    </PageContainer>
  );
}
