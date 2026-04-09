import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "Cole Capital", category: "Investment Fund", color: "from-amber-900/40 to-amber-950/60" },
  { title: "Apex Media", category: "Media & Content", color: "from-stone-800/40 to-stone-900/60" },
  { title: "Urban Estates", category: "Real Estate", color: "from-zinc-800/40 to-zinc-900/60" },
  { title: "MindForge Academy", category: "Education", color: "from-yellow-900/30 to-yellow-950/50" },
  { title: "NextGen Labs", category: "Technology", color: "from-neutral-800/40 to-neutral-900/60" },
  { title: "Horizon Ventures", category: "Startup Studio", color: "from-orange-900/30 to-orange-950/50" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Brands &{" "}
            <span className="gold-gradient-text">Ventures</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-64"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              <div className="absolute inset-0 border border-border/30 rounded-2xl group-hover:border-primary/30 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="text-xs tracking-widest uppercase text-primary/70 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
