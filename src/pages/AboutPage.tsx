import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

const storyBlocks = [
  {
    age: "16",
    title: "The Genesis",
    text: "While most were focused on exams, I was focused on leverage. My first side hustle wasn't just about the money; it was about understanding the mechanics of value exchange. I realized then that freedom wasn't a destination, but a system you build.",
  },
  {
    age: "21",
    title: "The Trial by Fire",
    text: "The path wasn't linear. Rejection letters from Silicon Valley and a failed first startup taught me more than any MBA could. I learned that resilience isn't just about getting back up—it's about staying up when the world wants you down.",
  },
  {
    age: "28",
    title: "The Breakthrough",
    text: "Everything changed when I stopped playing mid-level games. Closing my first landmark real estate deal and launching an investment fund proved that scale is a mindset. I transitioned from a builder to an architect of ecosystems.",
  },
  {
    age: "Today",
    title: "The Legacy",
    text: "With over $500M in assets under strategy and a portfolio spanning 30+ industries, the mission has evolved. Now, it's about engineering the success of others, turning raw ambition into calculated dominance.",
  },
];

const achievements = [
  { val: "$500M+", label: "Assets Managed", desc: "Across real estate and tech." },
  { val: "30+", label: "Companies Launched", desc: "From seed to market leaders." },
  { val: "15+", label: "Years of Mastery", desc: "In high-stakes negotiation." },
  { val: "12K+", label: "Leaders Mentored", desc: "Global network of entrepreneurs." },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium">The Man Behind The Mission</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
                  The Story Behind <br />
                  <span className="gold-gradient-text">Adam Cohen</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
                  A journey defined by calculated risks, relentless discipline, and a vision 
                  that started at the age of 16. From a single ambition to a global empire.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden gold-glow group">
                  <img src="/mm.png" alt="Adam Cohen" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Chronicles</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">The Path to <span className="gold-gradient-text">Mastery</span></h2>
            </motion.div>

            <div className="relative">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-24 relative z-10">
                {storyBlocks.map((block, i) => (
                  <div key={block.age} className="relative">
                    {/* Alternating Row */}
                    <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-0`}>
                      {/* Content Column */}
                      <motion.div 
                        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                      >
                        <div className="glass-card p-8 md:p-10 border border-primary/10 hover:border-primary/30 transition-all duration-500">
                          <span className="text-5xl font-display font-bold gold-gradient-text block mb-4">{block.age}</span>
                          <h3 className="text-2xl font-display font-bold mb-4">{block.title}</h3>
                          <p className="text-muted-foreground leading-relaxed font-light">{block.text}</p>
                        </div>
                      </motion.div>

                      {/* Timeline Node (Center) */}
                      <div className="hidden md:flex w-[10%] justify-center items-center relative">
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="w-4 h-4 rounded-full bg-primary relative z-10"
                        >
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                        </motion.div>
                        {/* Connecting Line to Card */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-1/2 h-px bg-primary/20 ${i % 2 === 0 ? "right-1/2" : "left-1/2"}`} />
                      </div>

                      {/* Spacer Column */}
                      <div className="hidden md:block w-[45%]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-padding px-6 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Records</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Business <span className="gold-gradient-text">Milestones</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="glass-card p-10 text-center border border-primary/10 group transition-all duration-500"
                >
                  <p className="text-5xl font-display font-bold gold-gradient-text mb-4">{item.val}</p>
                  <p className="text-lg font-semibold mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">The North Star</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                  Vision & <span className="gold-gradient-text">Leadership</span>
                </h2>
                <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    I believe leadership isn't about control—it's about expansion. My vision 
                    is to build ecosystems where raw talent is refined into market-dominating 
                    force through absolute strategy and unyielding discipline.
                  </p>
                  <p>
                    True sovereignty comes from the ability to engineer your own reality. 
                    I'm building a world where builders don't just survive, they conquer.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-12 md:p-16 border-l-4 border-primary"
              >
                <svg className="w-12 h-12 text-primary/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed">
                  "Sovereignty is not given; it is engineered. We don't wait for opportunity; 
                  we build the systems that manifest it."
                </p>
                <p className="mt-8 font-display font-bold text-lg">— Adam Cohen</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Sets Adam Apart */}
        <section className="section-padding px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Differentiation</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">What Sets <span className="gold-gradient-text">Adam Apart</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Discipline", desc: "The unshakeable foundation of every breakthrough." },
                { title: "Strategy", desc: "Seeing the chessboard 10 steps before the first move." },
                { title: "Execution", desc: "Turning high-level concepts into market dominance." },
                { title: "Mindset", desc: "The absolute refusal to accept artificial limits." },
              ].map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border-b-2 border-transparent hover:border-primary transition-all duration-300 bg-background/40"
                >
                  <h3 className="text-2xl font-display font-bold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground font-light">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-20 text-center border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Want to Work With <br />
                <span className="gold-gradient-text">Adam Cohen?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light">
                Whether you're looking for a strategic partner, investor, or mentor—let's build 
                the next generation of empires together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton as="a" href="/contact" className="hero-btn !px-12 !py-6">
                  Book a Call
                </MagneticButton>
                <MagneticButton as="a" href="/contact" className="hero-btn-outline !px-12 !py-6">
                  Work With Me
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
