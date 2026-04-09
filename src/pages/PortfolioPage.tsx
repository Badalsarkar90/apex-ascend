import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Cole Capital", category: "Investment Fund", description: "A $200M diversified investment fund focused on high-growth tech and real estate.", color: "from-amber-900/40 to-amber-950/60", year: "2018" },
  { title: "Apex Media", category: "Media & Content", description: "Full-service media company producing premium content reaching 50M+ viewers monthly.", color: "from-stone-800/40 to-stone-900/60", year: "2019" },
  { title: "Urban Estates", category: "Real Estate", description: "Luxury real estate portfolio spanning 12 cities with $300M in managed properties.", color: "from-zinc-800/40 to-zinc-900/60", year: "2016" },
  { title: "MindForge Academy", category: "Education", description: "Online education platform with 100K+ students and 50+ expert-led courses.", color: "from-yellow-900/30 to-yellow-950/50", year: "2020" },
  { title: "NextGen Labs", category: "Technology", description: "AI and blockchain innovation lab building the infrastructure of tomorrow.", color: "from-neutral-800/40 to-neutral-900/60", year: "2021" },
  { title: "Horizon Ventures", category: "Startup Studio", description: "Startup accelerator that has launched 40+ companies with a combined valuation of $1B.", color: "from-orange-900/30 to-orange-950/50", year: "2017" },
];

const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".portfolio-hero-reveal", { opacity: 0, y: 60, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.15, ease: "power3.out" });
      gsap.fromTo(".portfolio-card", { opacity: 0, scale: 0.9, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".portfolio-grid", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={ref}>
        <section className="pt-32 pb-20 section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <p className="portfolio-hero-reveal text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Portfolio</p>
            <h1 className="portfolio-hero-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Brands & <span className="gold-gradient-text">Ventures</span>
            </h1>
            <p className="portfolio-hero-reveal text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated portfolio of companies built to dominate their industries and create generational value.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="portfolio-grid max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="portfolio-card group relative rounded-2xl overflow-hidden cursor-pointer h-80">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                <div className="absolute inset-0 border border-border/30 rounded-2xl group-hover:border-primary/30 transition-colors duration-500" />
                <div className="relative z-10 h-full flex flex-col justify-between p-10">
                  <div className="flex justify-between items-start">
                    <span className="text-xs tracking-widest uppercase text-primary/70">{project.category}</span>
                    <span className="text-sm text-muted-foreground font-display">{project.year}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
