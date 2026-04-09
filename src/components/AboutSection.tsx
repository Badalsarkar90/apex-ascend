import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-glow">
              <img
                src={aboutImg}
                alt="Marcus Cole"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 gold-gradient-bg opacity-10 rounded-2xl -z-10 blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              The Story
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              From Nothing to{" "}
              <span className="gold-gradient-text">Everything</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Starting with nothing more than a relentless drive and a vision for the future,
                I built a portfolio of companies spanning technology, real estate, media, and
                education — each one designed to create lasting impact.
              </p>
              <p>
                Over the past decade, I've helped thousands of entrepreneurs transform their
                ideas into thriving businesses. My philosophy is simple: knowledge applied
                with conviction creates unstoppable momentum.
              </p>
              <p>
                Today, I lead a team of over 200 professionals across 8 countries, managing
                investments worth over $500M. But the real measure of success? The lives
                changed along the way.
              </p>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold gold-gradient-text">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years in Business</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold gold-gradient-text">8</p>
                <p className="text-sm text-muted-foreground mt-1">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold gold-gradient-text">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
