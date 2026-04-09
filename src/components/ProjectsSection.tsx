import { motion } from "framer-motion";

const projects = [
  { title: "Cohen Capital", category: "Investment Fund", color: "from-amber-900/40 to-amber-950/60" },
  { title: "Apex Media", category: "Media & Content", color: "from-stone-800/40 to-stone-900/60" },
  { title: "Urban Estates", category: "Real Estate", color: "from-zinc-800/40 to-zinc-900/60" },
  { title: "MindForge Academy", category: "Education", color: "from-yellow-900/30 to-yellow-950/50" },
  { title: "NextGen Labs", category: "Technology", color: "from-neutral-800/40 to-neutral-900/60" },
  { title: "Horizon Ventures", category: "Startup Studio", color: "from-orange-900/30 to-orange-950/50" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Portfolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Brands & <span className="gold-gradient-text">Ventures</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="project-card group relative rounded-2xl overflow-hidden cursor-pointer h-72 shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-500 group-hover:opacity-80`} />
              <div className="absolute inset-0 border border-border/30 rounded-2xl group-hover:border-primary/50 transition-all duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-10">
                <p className="text-xs tracking-[0.2em] uppercase text-primary/80 mb-3 font-medium">{project.category}</p>
                <h3 className="text-3xl font-display font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
