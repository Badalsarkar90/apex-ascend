import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import heroBg from "@/assets/hero-bg.jpg";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Lazy load video on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.src =
            "https://cdn.coverr.co/videos/coverr-aerial-view-of-city-at-night-1573/1080p.mp4";
          videoRef.current.load();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(overlayRef.current, { scaleY: 1 }, { scaleY: 0, duration: 1.2, transformOrigin: "top" }, 0);
      tl.fromTo(taglineRef.current, { opacity: 0, y: 30, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, 0.6);

      const headline = headlineRef.current;
      if (headline) {
        const words = headline.querySelectorAll(".hero-word");
        words.forEach((word, wi) => {
          const letters = word.querySelectorAll(".hero-letter");
          tl.fromTo(
            letters,
            { opacity: 0, y: 80, rotateX: -90, filter: "blur(8px)" },
            { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", duration: 0.6, stagger: 0.03, ease: "back.out(1.7)" },
            0.8 + wi * 0.2
          );
        });
      }

      tl.fromTo(subtitleRef.current, { opacity: 0, y: 40, filter: "blur(5px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, 1.6);
      tl.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 2);
      tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 2.5);

      gsap.to(".hero-float-1", { y: -20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-float-2", { y: 15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-float-3", { rotation: 360, duration: 30, repeat: -1, ease: "none" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = ["Build", "Your", "Empire."];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Loading overlay */}
      <div ref={overlayRef} className="absolute inset-0 z-30 bg-background" />

      {/* Video background with fallback image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Floating elements */}
      <div className="hero-float-1 absolute top-1/4 right-[15%] w-32 h-32 rounded-full border border-primary/20" />
      <div className="hero-float-2 absolute bottom-1/3 left-[10%] w-20 h-20 rounded-full gold-gradient-bg opacity-10 blur-xl" />
      <div className="hero-float-3 absolute top-[15%] left-[20%] w-64 h-64 border border-primary/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p ref={taglineRef} className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-medium opacity-0">
          Entrepreneur · Investor · Visionary
        </p>

        <div ref={headlineRef} className="flex flex-wrap justify-center gap-x-6 mb-8" style={{ perspective: "600px" }}>
          {headlineWords.map((word, i) => (
            <span key={word} className="hero-word inline-block">
              {word.split("").map((letter, li) => (
                <span
                  key={`${word}-${li}`}
                  className={`hero-letter inline-block text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight ${
                    i === 2 ? "gold-gradient-text" : "text-foreground"
                  }`}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </div>

        <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0">
          Transforming industries through strategic investments, innovative ventures,
          and relentless pursuit of excellence.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <MagneticButton as="a" href="#services" className="hero-btn">
            Explore My World
          </MagneticButton>
          <MagneticButton as="a" href="#about" className="hero-btn-outline">
            My Story
          </MagneticButton>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
