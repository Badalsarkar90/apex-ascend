import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import {
  TrendingUp, BarChart3, Users, Building2, Globe, Shield,
  ArrowRight, CheckCircle2, DollarSign, Star
} from "lucide-react";

const strategies = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Multifamily Acquisitions",
    description: "Value-add apartment communities where operational improvements unlock substantial equity growth.",
    target: "$2M – $20M deals",
    returns: "18–25% IRR target",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Commercial Real Estate",
    description: "Office, industrial, retail, and mixed-use assets in high-growth metros with strong fundamentals.",
    target: "$5M – $50M deals",
    returns: "15–22% IRR target",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Development & Ground-Up",
    description: "Ground-up residential and mixed-use development in supply-constrained urban markets.",
    target: "$3M – $30M deals",
    returns: "20–30% IRR target",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Distressed Assets",
    description: "Opportunistic acquisitions of distressed or underperforming properties at significant discounts.",
    target: "$1M – $15M deals",
    returns: "25–35% IRR target",
  },
];

const investorBenefits = [
  "Preferred return of 8% before profits split",
  "Quarterly cash flow distributions",
  "Full transparency — monthly investor reporting",
  "Co-investment alongside Adam Cohen's capital",
  "Access to off-market deal flow",
  "Dedicated investor relations manager",
  "Tax-advantaged structures (1031, DST options)",
  "Exit strategies planned from day one",
];

const process = [
  {
    step: "01",
    title: "Investor Inquiry",
    desc: "Submit your interest and accreditation details. We'll schedule an introductory call within 48 hours.",
  },
  {
    step: "02",
    title: "Deal Review",
    desc: "Receive a detailed investment memorandum covering the asset, market, projections, and risk profile.",
  },
  {
    step: "03",
    title: "Due Diligence",
    desc: "We walk you through our underwriting model, comparable sales, and operational plan in full.",
  },
  {
    step: "04",
    title: "Capital Commitment",
    desc: "Sign the operating agreement and wire capital. You're officially a co-investor in the deal.",
  },
  {
    step: "05",
    title: "Active Management",
    desc: "We manage the asset. You receive quarterly reports, distributions, and direct access to our team.",
  },
  {
    step: "06",
    title: "Exit & Returns",
    desc: "At disposition, profits are distributed per the waterfall — you get your principal + returns.",
  },
];

const PrivateEquityPage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #05080d 0%, #070c0a 60%, #05080d 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse at 70% 50%, #D4AF37, transparent 60%)" }}
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
          Private <span style={{ color: "#D4AF37" }}>Equity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Institutional-grade real estate investment opportunities — co-investing alongside Adam Cohen in high-conviction deals across the US.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-12"
        >
          {[
            { val: "$500M+",   unit: "Assets Under Management" },
            { val: "8%",       unit: "Preferred Return" },
            { val: "30+",      unit: "Deals Closed" },
            { val: "$500K",    unit: "Minimum Investment" },
          ].map((s) => (
            <div key={s.unit}>
              <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{s.val}</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.unit}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Investor Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/real-estate" className="hero-btn-outline">
            All Real Estate Services
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Investment Strategies */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Investment Focus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Our <span className="gold-gradient-text">Strategies</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {s.icon}
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Returns Target</p>
                  <p className="text-sm font-bold text-primary">{s.returns}</p>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">{s.description}</p>
              <div className="pt-4 border-t border-border/40 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Deal Size: </span>
                <span className="text-sm font-semibold text-primary">{s.target}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits + Image */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Investor Benefits</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why Invest <span className="gold-gradient-text">With Us</span>
          </h2>
          <p className="text-muted-foreground mb-8 font-light">
            We align our interests with yours — Adam invests his own capital in every deal.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {investorBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{b}</span>
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fit=crop"
            alt="Private equity real estate"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(11,11,11,0.85)", border: "1px solid rgba(212,175,55,0.2)", backdropFilter: "blur(12px)" }}>
              <div className="flex items-center gap-3 mb-1">
                <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Track Record</p>
              </div>
              <p className="text-white font-display font-bold text-xl">$500M+ Deployed.</p>
              <p className="text-white/50 text-sm mt-1">Consistent returns across market cycles.</p>
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
            The Investment <span className="gold-gradient-text">Journey</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-8"
            >
              <p className="text-4xl font-display font-black gold-gradient-text mb-4">{p.step}</p>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Accreditation notice + CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-4 border border-primary/20 mb-8 flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground font-light">
            <span className="font-semibold text-foreground">Accredited Investors Only.</span> Participation is limited to accredited investors as defined by SEC Rule 501. This is not an offer to sell securities. Past performance does not guarantee future results.
          </p>
        </div>
        <div className="text-center glass-card p-12 md:p-16 border border-primary/20">
          <Users className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to <span className="gold-gradient-text">Co-Invest?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Qualified investors are reviewed individually. Apply and we'll schedule a confidential introductory call within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
              Investor Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/real-estate/hard-money" className="hero-btn-outline">
              Explore Hard Money
            </Link>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default PrivateEquityPage;
