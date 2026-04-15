import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import {
  Home, TrendingDown, DollarSign, Calendar, PiggyBank,
  ArrowRight, CheckCircle2, Zap, BarChart3, ArrowDownRight
} from "lucide-react";

const pillars = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Bi-Weekly Payment Strategy",
    description: "Making half your monthly payment every two weeks results in one extra full payment per year — slashing years off your mortgage.",
    impact: "Save 4–6 years",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Principal Curtailment",
    description: "Strategic extra principal payments targeted at the right time in your amortisation schedule create outsized interest savings.",
    impact: "Save $50K–$200K+",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Rate Optimisation",
    description: "We analyse your rate against today's market and tell you exactly when and whether refinancing makes mathematical sense.",
    impact: "Save 1–2% on rate",
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Cash Flow Redirection",
    description: "Every dollar saved on interest gets redirected into wealth-building assets — real estate, index funds, or your next investment.",
    impact: "Compound your savings",
  },
];

const included = [
  "Full mortgage payoff acceleration analysis",
  "Custom bi-weekly payment calendar",
  "Principal curtailment schedule",
  "Break-even analysis for refinancing",
  "Interest savings projection (5, 10, 20 year view)",
  "Net worth impact modelling",
  "Monthly 1:1 accountability check-in",
  "Access to our preferred lender network",
];

const results = [
  { val: "6.2",     label: "Avg Years Saved",       sub: "off 30-year mortgage" },
  { val: "$147K",   label: "Avg Interest Saved",    sub: "per household" },
  { val: "1,000+",  label: "Families Helped",       sub: "since 2018" },
  { val: "92%",     label: "Stay on Track",         sub: "after 12 months" },
];

const steps = [
  {
    step: "01",
    title: "Mortgage Audit",
    desc: "We collect your current mortgage details — balance, rate, term remaining, and monthly payment.",
  },
  {
    step: "02",
    title: "Savings Analysis",
    desc: "Using our proprietary model, we map out your personalised payoff acceleration plan with exact numbers.",
  },
  {
    step: "03",
    title: "Strategy Session",
    desc: "We walk through your plan live — explaining every strategy, the maths behind it, and your options.",
  },
  {
    step: "04",
    title: "Implementation",
    desc: "You execute the plan with our step-by-step guide. We stay accountable with monthly check-ins.",
  },
];

const SmashMortgagePage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #07050a 0%, #0b0a07 60%, #07050a 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse at 35% 55%, #D4AF37, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
        >
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Real Estate</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
        >
          Smash Your <br />
          <span style={{ color: "#D4AF37" }}>Mortgage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Most people pay their mortgage for 30 years and hand the bank a fortune in interest. We'll show you how to cut that in half — and redirect the savings into real wealth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-12"
        >
          {results.map((r) => (
            <div key={r.label}>
              <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{r.val}</p>
              <p className="text-xs font-semibold mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{r.label}</p>
              <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{r.sub}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Get My Free Savings Analysis <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/real-estate" className="hero-btn-outline">
            All Real Estate Services
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Visual impact section */}
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border border-primary/30"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">
              The Mortgage <span className="gold-gradient-text">Trap</span>
            </h2>
            <p className="text-muted-foreground font-light">On a typical $400,000 mortgage at 7%, here's what you actually pay:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Loan Amount",       val: "$400,000", icon: <Home className="w-5 h-5" />,            color: "text-foreground" },
              { label: "Total Interest Paid", val: "$559,000", icon: <ArrowDownRight className="w-5 h-5" />, color: "text-red-400" },
              { label: "Total You Pay",     val: "$959,000", icon: <DollarSign className="w-5 h-5" />,      color: "text-red-500" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-xl bg-secondary/50">
                <div className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-3 ${item.color}`}>
                  {item.icon}
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                <p className={`text-2xl font-display font-black ${item.color}`}>{item.val}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl border border-primary/30 bg-primary/5">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground font-light">
                <span className="font-bold text-foreground">The Smash Mortgage program</span> typically reduces total interest paid by <span className="text-primary font-bold">$100K–$200K</span> and shaves <span className="text-primary font-bold">5–8 years</span> off your mortgage — without refinancing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* The 4 Pillars */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            The Methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            The 4 <span className="gold-gradient-text">Pillars</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {p.icon}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5">
                  {p.impact}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What's Included + Image */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">The Program</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Everything <span className="gold-gradient-text">Included</span>
          </h2>
          <p className="text-muted-foreground mb-8 font-light">
            A complete mortgage acceleration programme — analysis, strategy, and ongoing accountability.
          </p>
          <ul className="grid grid-cols-1 gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden gold-glow"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop"
            alt="Smash mortgage programme"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(11,11,11,0.85)", border: "1px solid rgba(212,175,55,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Freedom Date</p>
              </div>
              <p className="text-white font-display font-bold text-xl">Know exactly when you're mortgage-free.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            How It <span className="gold-gradient-text">Works</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <p className="text-5xl font-display font-black gold-gradient-text mb-4">{s.step}</p>
              <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
        <Home className="w-10 h-10 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Get Your Free <span className="gold-gradient-text">Savings Analysis</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          It takes 10 minutes. You'll know exactly how much interest you can save and when you can be mortgage-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Book Free Analysis <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/real-estate/private-equity" className="hero-btn-outline">
            Explore Private Equity
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default SmashMortgagePage;
