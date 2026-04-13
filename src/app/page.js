import PageContainer from "@/components/PageContainer";
import UnitCard from "@/components/UnitCard";
import ResourceButton from "@/components/ResourceButton";

export default function Home() {
  const units = [
    { id: 3, title: "Virtualization and Containers", description: "Deep dive into virtualized environments and container orchestration platforms." },
    { id: 4, title: "Cloud Computing Challenges", description: "Analyzing the economics, scalability, and security architecture of cloud systems." },
    { id: 5, title: "Advanced Concepts", description: "Exploring serverless patterns, IoT integration, and emerging cloud technologies." },
  ];

  return (
    <PageContainer>
      <div className="flex flex-col items-center text-center mb-24 space-y-6 relative pt-12">
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
          Cloud Computing <br /> Mastery
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
          A minimalist curriculum for high-performance cloud architecture. 
          Master the systems that power the modern web.
        </p>

        <div className="pt-8">
          <ResourceButton 
            href="/syllabus/cn.pdf" 
            icon="📘" 
            label="Full Syllabus" 
            className="bg-white lg:hidden"
          />
        </div>
      </div>

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
