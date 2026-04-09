import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 500, suffix: "M+", label: "Assets Under Management", prefix: "$" },
  { value: 12, suffix: "K+", label: "Entrepreneurs Mentored", prefix: "" },
  { value: 30, suffix: "+", label: "Companies Built", prefix: "" },
  { value: 98, suffix: "%", label: "Client Success Rate", prefix: "" },
];

const AnimatedCounter = ({ value, prefix, suffix, trigger }: { value: number; prefix: string; suffix: string; trigger: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
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
  }, [trigger, value]);

  return (
    <span className="gold-gradient-text">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 75%",
        onEnter: () => setTriggered(true),
        once: true,
      });

      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={ref} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Track Record</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Numbers That <span className="gold-gradient-text">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
              <p className="text-4xl md:text-5xl font-display font-bold mb-3">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} trigger={triggered} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
