import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "💎", title: "Private Consulting", description: "One-on-one strategic sessions designed for high-net-worth entrepreneurs ready to scale beyond limits.", tag: "Premium" },
  { icon: "📈", title: "Investment Advisory", description: "Data-driven investment strategies across real estate, tech startups, and emerging markets.", tag: "Exclusive" },
  { icon: "🎓", title: "Elite Mastermind", description: "Join a curated circle of ambitious leaders. Weekly sessions, annual retreats, lifetime network.", tag: "By Invitation" },
  { icon: "🚀", title: "Venture Studio", description: "We co-build, fund, and scale your next venture from idea to market dominance.", tag: "Partnership" },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 60, filter: "blur(4px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Services & <span className="gold-gradient-text">Opportunities</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card glass-card p-8 md:p-10 group hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl">{service.icon}</span>
                <span className="text-xs tracking-widest uppercase text-primary/70 border border-primary/20 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
