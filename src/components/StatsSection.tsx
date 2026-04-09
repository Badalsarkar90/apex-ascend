import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "M+", label: "Assets Under Management", prefix: "$" },
  { value: 12, suffix: "K+", label: "Entrepreneurs Mentored", prefix: "" },
  { value: 30, suffix: "+", label: "Companies Built", prefix: "" },
  { value: 98, suffix: "%", label: "Client Success Rate", prefix: "" },
];

const AnimatedCounter = ({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="gold-gradient-text">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Numbers That{" "}
            <span className="gold-gradient-text">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500"
            >
              <p className="text-4xl md:text-5xl font-display font-bold mb-3">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
