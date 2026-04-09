import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-portrait.jpg";
import PageTransition from "@/components/PageTransition";
import PinnedStorySection from "@/components/PinnedStorySection";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: "⚡", title: "Relentless Drive", text: "Every obstacle is a stepping stone. We move fast and break barriers." },
  { icon: "🎯", title: "Strategic Vision", text: "Seeing opportunities where others see chaos. Pattern recognition at scale." },
  { icon: "🤝", title: "Integrity First", text: "Trust is built deal by deal. Our reputation is our most valuable asset." },
  { icon: "🌍", title: "Global Impact", text: "Building businesses that transcend borders and transform communities." },
];

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-page-reveal",
        { opacity: 0, y: 60, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(
        ".value-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".values-grid", start: "top 80%" },
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div ref={heroRef}>
        {/* Hero */}
        <section className="pt-32 pb-20 section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="about-page-reveal text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">About Me</p>
                <h1 className="about-page-reveal text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
                  The Man Behind the <span className="gold-gradient-text">Empire</span>
                </h1>
                <p className="about-page-reveal text-lg text-muted-foreground leading-relaxed mb-6">
                  From humble beginnings to building a $500M portfolio, my journey has been fueled by an unshakeable belief that ordinary people can achieve extraordinary things.
                </p>
                <p className="about-page-reveal text-muted-foreground leading-relaxed">
                  I've spent 15 years studying success, investing in people, and building systems that create lasting wealth. Today, I share everything I've learned with the next generation of builders.
                </p>
              </div>
              <div className="about-page-reveal relative">
                <div className="rounded-2xl overflow-hidden gold-glow">
                  <img src={aboutImg} alt="Marcus Cole" className="w-full h-[500px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Core Values</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                What Drives <span className="gold-gradient-text">Me</span>
              </h2>
            </div>
            <div className="values-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="value-card glass-card p-8 text-center group hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
                  <span className="text-4xl block mb-4">{v.icon}</span>
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PinnedStorySection />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
