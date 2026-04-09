import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const headlineWords = ["Build", "Your", "Empire."];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full border border-primary/20 animate-pulse-glow"
      />
      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[10%] w-20 h-20 rounded-full gold-gradient-bg opacity-10 blur-xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[20%] w-64 h-64 border border-primary/5 rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-8 font-medium"
        >
          Entrepreneur · Investor · Visionary
        </motion.p>

        <div className="flex flex-wrap justify-center gap-x-6 mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight ${
                i === 2 ? "gold-gradient-text" : "text-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Transforming industries through strategic investments, innovative ventures,
          and relentless pursuit of excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#services" className="hero-btn">
            Explore My World
          </a>
          <a href="#about" className="hero-btn-outline">
            My Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
