import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    year: "2010",
    title: "The Beginning",
    text: "Started with $500 and a dream. Built the first company from a garage, working 18-hour days.",
  },
  {
    year: "2015",
    title: "The Breakthrough",
    text: "Crossed $10M in revenue. Expanded into real estate and launched the first investment fund.",
  },
  {
    year: "2020",
    title: "The Empire",
    text: "Portfolio grew to 30+ companies. Team of 200. Mentored 12,000 entrepreneurs worldwide.",
  },
  {
    year: "2025",
    title: "The Vision",
    text: "Building the next generation of leaders. $500M under management. The journey continues.",
  },
];

const PinnedStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

      panels.forEach((panel, i) => {
        if (i === 0) return;
        gsap.fromTo(
          panel,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 30%",
              scrub: 0.5,
            },
          }
        );
      });

      // Pin the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${stories.length * 100}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const idx = Math.min(Math.floor(self.progress * stories.length), stories.length - 1);
          panels.forEach((panel, i) => {
            gsap.to(panel, {
              opacity: i === idx ? 1 : 0.15,
              scale: i === idx ? 1 : 0.95,
              duration: 0.4,
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-background">
      <div ref={containerRef} className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium text-center">
            The Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            From Zero to{" "}
            <span className="gold-gradient-text">Empire</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story) => (
              <div
                key={story.year}
                className="story-panel glass-card p-8 text-center"
              >
                <span className="text-5xl font-display font-bold gold-gradient-text block mb-4">
                  {story.year}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {story.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedStorySection;
