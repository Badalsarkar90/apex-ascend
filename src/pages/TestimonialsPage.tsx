import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { quote: "Marcus doesn't just advise — he transforms the way you think about business. In 6 months, my revenue tripled.", name: "Sarah Chen", title: "CEO, TechBridge Solutions", avatar: "SC" },
  { quote: "The mastermind group changed everything. The network alone is worth 10x the investment.", name: "David Okafor", title: "Founder, Scale Dynamics", avatar: "DO" },
  { quote: "His strategic vision turned our struggling startup into a market leader.", name: "Elena Rossi", title: "COO, Meridian Health", avatar: "ER" },
  { quote: "I've worked with dozens of consultants. Marcus is in a completely different league.", name: "James Whitfield", title: "Managing Director, Whitfield Capital", avatar: "JW" },
  { quote: "The venture studio partnership was the best decision of my career. We 10x'd in 18 months.", name: "Aisha Patel", title: "Co-Founder, NovaTech", avatar: "AP" },
  { quote: "Marcus sees opportunities no one else sees. His investment in our company changed everything.", name: "Liam Brooks", title: "CEO, Greenshift Energy", avatar: "LB" },
];

const TestimonialsPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".test-hero-reveal", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out" });
      gsap.fromTo(".test-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".test-grid", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={ref}>
        <section className="pt-32 pb-20 section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <p className="test-hero-reveal text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Testimonials</p>
            <h1 className="test-hero-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Real Results, <span className="gold-gradient-text">Real People</span>
            </h1>
            <p className="test-hero-reveal text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't take my word for it. Here's what our clients and partners have to say.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="test-grid max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="test-card glass-card p-8 group hover:border-primary/30 transition-all duration-500">
                <svg className="w-8 h-8 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground/90 leading-relaxed italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-sm font-bold text-background">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default TestimonialsPage;
