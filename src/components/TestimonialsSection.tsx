import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "Marcus doesn't just advise — he transforms the way you think about business. In 6 months, my revenue tripled.",
    name: "Sarah Chen",
    title: "CEO, TechBridge Solutions",
  },
  {
    quote: "The mastermind group changed everything. The network alone is worth 10x the investment. Marcus is the real deal.",
    name: "David Okafor",
    title: "Founder, Scale Dynamics",
  },
  {
    quote: "His strategic vision turned our struggling startup into a market leader. Genuinely brilliant and incredibly generous.",
    name: "Elena Rossi",
    title: "COO, Meridian Health",
  },
  {
    quote: "I've worked with dozens of consultants. Marcus is in a completely different league. Results speak for themselves.",
    name: "James Whitfield",
    title: "Managing Director, Whitfield Capital",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What They{" "}
            <span className="gold-gradient-text">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-10 md:p-14 text-center"
        >
          <svg className="w-10 h-10 text-primary/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <div className="min-h-[120px] flex items-center justify-center">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light italic"
            >
              "{testimonials[active].quote}"
            </motion.p>
          </div>

          <div className="mt-8">
            <motion.p
              key={`name-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-display font-semibold text-lg"
            >
              {testimonials[active].name}
            </motion.p>
            <p className="text-sm text-muted-foreground mt-1">
              {testimonials[active].title}
            </p>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
