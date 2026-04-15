import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Cohen Capital",
    category: "Investment Fund",
    description: "A $500M global investment portfolio spanning private equity, venture capital, and alternative assets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop",
    tag: "Finance",
  },
  {
    title: "Apex Media",
    category: "Media & Content",
    description: "A premium content studio producing high-impact digital and broadcast media for influential brands.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&fit=crop",
    tag: "Media",
  },
  {
    title: "Urban Estates",
    category: "Real Estate",
    description: "Luxury residential and commercial property development across Tier-1 global markets.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop",
    tag: "Property",
  },
  {
    title: "MindForge Academy",
    category: "Education",
    description: "Elite business and mindset training that has transformed over 10,000 entrepreneurs worldwide.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop",
    tag: "Education",
  },
  {
    title: "NextGen Labs",
    category: "Technology",
    description: "Cutting-edge AI and deep-tech R&D lab building the infrastructure of tomorrow's economy.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    tag: "Technology",
  },
  {
    title: "Horizon Ventures",
    category: "Startup Studio",
    description: "A venture studio that co-funds, builds, and scales early-stage companies to market dominance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop",
    tag: "Ventures",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
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
            Brands &amp; <span className="gold-gradient-text">Ventures</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-muted-foreground max-w-xl mx-auto font-light"
          >
            A curated portfolio of companies built, funded, and scaled across industries.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Tag badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-black/50 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="bg-card border border-border/60 border-t-0 rounded-b-2xl p-6 group-hover:border-primary/30 transition-colors duration-500">
                <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Hover CTA */}
                <div className="mt-4 flex items-center gap-1.5 text-primary text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
