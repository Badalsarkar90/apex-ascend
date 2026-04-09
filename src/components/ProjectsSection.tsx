import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Cole Capital", category: "Investment Fund", color: "from-amber-900/40 to-amber-950/60" },
  { title: "Apex Media", category: "Media & Content", color: "from-stone-800/40 to-stone-900/60" },
  { title: "Urban Estates", category: "Real Estate", color: "from-zinc-800/40 to-zinc-900/60" },
  { title: "MindForge Academy", category: "Education", color: "from-yellow-900/30 to-yellow-950/50" },
  { title: "NextGen Labs", category: "Technology", color: "from-neutral-800/40 to-neutral-900/60" },
  { title: "Horizon Ventures", category: "Startup Studio", color: "from-orange-900/30 to-orange-950/50" },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1,
          duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Brands & <span className="gold-gradient-text">Ventures</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card group relative rounded-2xl overflow-hidden cursor-pointer h-64">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              <div className="absolute inset-0 border border-border/30 rounded-2xl group-hover:border-primary/30 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="text-xs tracking-widest uppercase text-primary/70 mb-2">{project.category}</p>
                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
