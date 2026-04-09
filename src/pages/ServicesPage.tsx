import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "💎", title: "Private Consulting", description: "One-on-one strategic sessions designed for high-net-worth entrepreneurs ready to scale beyond limits. Deep-dive analysis, actionable roadmaps, and ongoing accountability.", tag: "Premium", price: "From $5,000/mo" },
  { icon: "📈", title: "Investment Advisory", description: "Data-driven investment strategies across real estate, tech startups, and emerging markets. Portfolio diversification and risk management tailored to your goals.", tag: "Exclusive", price: "By Application" },
  { icon: "🎓", title: "Elite Mastermind", description: "Join a curated circle of ambitious leaders. Weekly strategy sessions, annual retreats in exclusive locations, and a lifetime network of high-performers.", tag: "By Invitation", price: "$25,000/year" },
  { icon: "🚀", title: "Venture Studio", description: "We co-build, fund, and scale your next venture from idea to market dominance. Full operational support, marketing, and growth infrastructure.", tag: "Partnership", price: "Equity Partnership" },
];

const process = [
  { step: "01", title: "Discovery", text: "Deep analysis of your current position, goals, and untapped opportunities." },
  { step: "02", title: "Strategy", text: "Custom roadmap designed around your unique strengths and market position." },
  { step: "03", title: "Execution", text: "Hands-on implementation with weekly check-ins and real-time adjustments." },
  { step: "04", title: "Scale", text: "Systematic growth through proven frameworks and strategic partnerships." },
];

const ServicesPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".services-hero-reveal", { opacity: 0, y: 60, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.15, ease: "power3.out" });
      gsap.fromTo(".service-detail-card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: ".services-grid", start: "top 80%" } });
      gsap.fromTo(".process-step", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".process-section", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={ref}>
        <section className="pt-32 pb-20 section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <p className="services-hero-reveal text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Services</p>
            <h1 className="services-hero-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Elevate Your <span className="gold-gradient-text">Game</span>
            </h1>
            <p className="services-hero-reveal text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium services designed for ambitious entrepreneurs who are ready to operate at the highest level.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="services-grid max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="service-detail-card glass-card p-10 group hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl">{s.icon}</span>
                  <span className="text-xs tracking-widest uppercase text-primary/70 border border-primary/20 px-3 py-1 rounded-full">{s.tag}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{s.price}</span>
                  <MagneticButton as="a" href="/contact" className="hero-btn-outline text-xs py-2 px-5">
                    Apply Now
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                The <span className="gold-gradient-text">Process</span>
              </h2>
            </div>
            <div className="space-y-8">
              {process.map((p) => (
                <div key={p.step} className="process-step glass-card p-8 flex items-start gap-8 group hover:border-primary/30 transition-all duration-500">
                  <span className="text-4xl font-display font-bold gold-gradient-text shrink-0">{p.step}</span>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
