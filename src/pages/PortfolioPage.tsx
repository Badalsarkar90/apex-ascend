import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

const projectData = [
  { 
    title: "The Urban Nexus", 
    location: "Los Angeles, CA",
    category: "Commercial Re-development", 
    roi: "34% IRR",
    summary: "Acquisition and transformation of a distressed 50,000 sq. ft. industrial space into a high-yield creative hub.", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    year: "2022" 
  },
  { 
    title: "Apex Logistics Hub", 
    location: "Dubai, UAE",
    category: "Strategic Acquisition", 
    roi: "28% IRR",
    summary: "Institutional-grade logistics facility acquisition with a 15-year lease-back agreement to a Fortune 500 tech giant.", 
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    year: "2023" 
  },
  { 
    title: "Horizon Residential", 
    location: "Austin, TX",
    category: "Multi-family Portfolio", 
    roi: "42% Exit",
    summary: "Aggregated a 400-unit distressed portfolio, executed a $5M CAPEX plan, and exited to a private equity fund.", 
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    year: "2021" 
  },
];

const caseStudies = [
  {
    title: "The Turnaround of Cohen Plaza",
    problem: "A class-C office building with 40% vacancy and $2M in deferred maintenance during a market downturn.",
    strategy: "Executed a strategic re-zoning plan, phased high-end renovations, and implemented an AI-driven property management system.",
    result: "Reached 98% occupancy within 18 months. Property valuation increased from $12M to $28.5M. Refinanced at an 11% LTV.",
  },
  {
    title: "Global Tech Venture Exit",
    problem: "Early-stage fintech startup struggling with unit economics and a fragmented growth strategy.",
    strategy: "Restructured the board, streamlined operational burn by 30%, and pivoted the product towards high-growth B2B markets.",
    result: "Acquired by a global payment processor for $120M. Adam Cohen's initial seed investment returned 14x in 4 years.",
  },
];

const performanceStats = [
  { val: "250+", label: "Total Deals Closed" },
  { val: "$1.4B+", label: "Total Transaction Volume" },
  { val: "15+", label: "Years of Market Mastery" },
];

const PortfolioPage = () => {
  return (
    <PageTransition>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-36 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium"
            >
              The Track Record
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-8"
            >
              Proven Results <br />
              <span className="gold-gradient-text">& Real Deals.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Credibility is built through action, not words. Explore the portfolio of 
              high-stakes acquisitions and strategic transformations that define the Cohen standard.
            </motion.p>
          </div>
        </section>

        {/* Project Grid */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projectData.map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card group relative rounded-3xl overflow-hidden cursor-pointer h-[500px] border border-primary/10 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="absolute inset-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold bg-background/80 px-4 py-1.5 rounded-full backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="text-xl font-display font-bold gold-gradient-text translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        {project.roi}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-medium">{project.location}</p>
                      <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Case Studies */}
        <section className="section-padding px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
              >
                Deep Dive
              </motion.p>
              <h2 className="text-4xl md:text-6xl font-display font-bold">Featured <span className="gold-gradient-text">Case Studies.</span></h2>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, i) => (
                <motion.div 
                  key={study.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-12 md:p-16 border border-primary/10 grid lg:grid-cols-3 gap-12 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="lg:col-span-1">
                    <p className="text-xs tracking-widest text-primary uppercase mb-3 font-bold">The Engagement</p>
                    <h3 className="text-3xl font-display font-bold leading-tight mb-6">{study.title}</h3>
                    <div className="w-12 h-1 bg-primary" />
                  </div>
                  
                  <div className="lg:col-span-2 grid md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                      <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold">Problem</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{study.problem}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold">Strategy</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{study.strategy}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs tracking-widest uppercase text-primary font-bold">Result</p>
                      <p className="text-sm leading-relaxed text-foreground font-semibold">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After Transformation Section */}
        <section className="section-padding px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-display font-bold">The Transformation <span className="gold-gradient-text">Impact.</span></h2>
              <p className="mt-6 text-muted-foreground font-light text-lg">Visual evidence of strategic capital deployment.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden group border border-primary/20 aspect-video"
              >
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 overflow-hidden border-r-2 border-primary relative">
                    <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop" className="h-full w-[200%] object-cover grayscale max-w-none" alt="Before" />
                    <div className="absolute top-6 left-6 bg-background/80 px-4 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold text-muted-foreground">Before Transformation</div>
                  </div>
                  <div className="w-1/2 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="h-full w-[200%] -translate-x-1/2 object-cover max-w-none" alt="After" />
                    <div className="absolute top-6 right-6 bg-primary/80 px-4 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold text-background">After: Prime Corporate Hub</div>
                  </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md px-10 py-4 rounded-2xl border border-primary/20">
                  <p className="text-xl font-display font-bold gold-gradient-text">ROI: +$16.5M Valuation Gain</p>
                </div>
              </motion.div>

              <div className="flex flex-col justify-center space-y-10">
                <div className="glass-card p-10 border-l-4 border-primary">
                  <h4 className="text-2xl font-display font-bold mb-4">Strategic Acquisition</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Acquired at a 4.5% Cap Rate, we identified untapped air rights and zoning 
                    arbitrage that allowed for a 40% expansion of the GLA within 12 months.
                  </p>
                </div>
                <div className="glass-card p-10 border-l-4 border-primary">
                  <h4 className="text-2xl font-display font-bold mb-4">Market Positioning</h4>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    By curating a mix of tier-1 tech tenants and high-end retail, we achieved 
                    rental premiums of 22% above the local market average.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elite Trust Metrics */}
        <section className="py-24 px-6 bg-secondary/20 border-y border-primary/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {performanceStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-6xl md:text-7xl font-display font-bold gold-gradient-text mb-4">
                    {stat.val}
                  </p>
                  <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-16 md:p-24 border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Want Similar <br />
                <span className="gold-gradient-text">Results?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Strategic capital and expert execution wait for no one. Let's discuss your next 
                landmark move today.
              </p>
              <MagneticButton as="a" href="/book" className="hero-btn !px-12 !py-6 text-lg">
                Book a Strategy Call
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
