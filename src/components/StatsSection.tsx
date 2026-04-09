import { motion } from "framer-motion";

const highlights = [
  { value: "15+", label: "Years of High-Stakes Experience", icon: "💎" },
  { value: "500M+", label: "Assets Under Strategy", icon: "📈" },
  { value: "30+", label: "Empires Built from Seed", icon: "🚀" },
  { value: "12K+", label: "Visionaries Mentored", icon: "🤝" },
];

const StatsSection = () => {
  return (
    <section id="highlights" className="section-padding relative bg-secondary/30">
      <div className="max-w-7xl mx-auto relative px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-medium"
          >
            Performance Metrics
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
          >
            The <span className="gold-gradient-text">Impact</span> in Numbers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                borderColor: "rgba(var(--primary), 0.3)" 
              }}
              className="glass-card p-10 text-center border border-border/50 group transition-colors duration-300"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                {item.icon}
              </div>
              <p className="text-5xl md:text-6xl font-display font-bold gold-gradient-text mb-4">
                {item.value}
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
