import PageContainer from "@/components/PageContainer";
import UnitCard from "@/components/UnitCard";
import ResourceButton from "@/components/ResourceButton";

export default function Home() {
  const units = [
    { id: 1, title: "Foundations of Cloud", description: "Introduction to cloud computing, service models (IaaS, PaaS, SaaS), and deployment models." },
    { id: 2, title: "Virtualization & Infrastructure", description: "Deep dive into hypervisors, containerization, and software-defined networking." },
    { id: 3, title: "Virtualization and Containers", description: "Deep dive into virtualized environments and container orchestration platforms." },
    { id: 4, title: "Cloud Computing Challenges", description: "Analyzing the economics, scalability, and security architecture of cloud systems." },
    { id: 5, title: "Advanced Concepts", description: "Exploring serverless patterns, IoT integration, and emerging cloud technologies." },
  ];

  return (
    <PageContainer>
      <div className="flex flex-col items-center text-center mb-16 space-y-4 relative">
        <div className="absolute top-0 right-0 hidden md:block">
          <ResourceButton 
            href="/syllabus/cn.pdf" 
            icon="📘" 
            label="Full Syllabus" 
          />
        </div>
        
        <h2 className="text-aurora-cyan font-bold tracking-[0.2em] uppercase text-sm">
          Modern Study Platform
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Cloud Computing <br /> Mastery
        </h1>
        <p className="max-w-2xl text-white/50 text-lg md:text-xl font-medium pt-2">
          Learn smarter. Understand visually. A premium structured curriculum for mastering the cloud ecosystem.
        </p>

        <div className="md:hidden pt-4">
          <ResourceButton 
            href="/syllabus/cn.pdf" 
            icon="📘" 
            label="Full Syllabus" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {units.map((unit) => (
          <UnitCard 
            key={unit.id}
            id={unit.id}
            title={unit.title}
            description={unit.description}
          />
        ))}
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 text-center text-white/20 text-sm">
        &copy; 2026 Cloud Computing Mastery. Designed for performance.
      </footer>
    </PageContainer>
  );
}
