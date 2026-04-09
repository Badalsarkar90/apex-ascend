import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-portrait.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imgRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal
      gsap.fromTo(
        ".about-text-reveal",
        { opacity: 0, y: 50, filter: "blur(4px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text-container",
            start: "top 80%",
          },
        }
      );

      // Stats stagger
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats-row",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div ref={imgRef} className="relative rounded-2xl overflow-hidden gold-glow">
              <img src={aboutImg} alt="Marcus Cole" className="w-full h-[500px] lg:h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 gold-gradient-bg opacity-10 rounded-2xl -z-10 blur-2xl" />
          </div>

          {/* Text */}
          <div className="about-text-container">
            <p className="about-text-reveal text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Story
            </p>
            <h2 className="about-text-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              From Nothing to <span className="gold-gradient-text">Everything</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="about-text-reveal">
                Starting with nothing more than a relentless drive and a vision for the future,
                I built a portfolio of companies spanning technology, real estate, media, and
                education — each one designed to create lasting impact.
              </p>
              <p className="about-text-reveal">
                Over the past decade, I've helped thousands of entrepreneurs transform their
                ideas into thriving businesses. My philosophy is simple: knowledge applied
                with conviction creates unstoppable momentum.
              </p>
              <p className="about-text-reveal">
                Today, I lead a team of over 200 professionals across 8 countries, managing
                investments worth over $500M. But the real measure of success? The lives
                changed along the way.
              </p>
            </div>
            <div className="about-stats-row mt-10 flex gap-8">
              {[
                { val: "15+", label: "Years in Business" },
                { val: "8", label: "Countries" },
                { val: "200+", label: "Team Members" },
              ].map((s) => (
                <div key={s.label} className="about-stat">
                  <p className="text-3xl font-display font-bold gold-gradient-text">{s.val}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
