import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import {
  Smartphone, Apple, Play, Layers, Wifi, Bell,
  ArrowRight, CheckCircle2, Star, Zap
} from "lucide-react";

const services = [
  {
    icon: <Apple className="w-7 h-7" />,
    title: "iOS App Development",
    description: "Native and hybrid iOS apps built for performance, elegance, and App Store success — from concept to launch.",
    features: ["Swift & SwiftUI", "App Store submission", "Face ID / Touch ID", "Apple Pay integration"],
  },
  {
    icon: <Play className="w-7 h-7" />,
    title: "Android App Development",
    description: "Robust Android applications that work flawlessly across the full range of devices on the Play Store.",
    features: ["Kotlin & Jetpack Compose", "Play Store publishing", "Material Design 3", "Google Pay integration"],
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Cross-Platform Apps",
    description: "Write once, run everywhere. React Native apps that deliver near-native performance on both iOS and Android.",
    features: ["React Native / Expo", "Single codebase", "Native device APIs", "Faster time to market"],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "MVP Development",
    description: "Get your idea in users' hands fast. We build lean, validated MVPs that prove product-market fit before you over-invest.",
    features: ["Rapid prototyping", "User testing support", "Iterative build cycles", "Investor-ready demos"],
  },
  {
    icon: <Wifi className="w-7 h-7" />,
    title: "API & Backend Integration",
    description: "Connect your app to any third-party service, payment gateway, or internal system with robust API architecture.",
    features: ["REST & GraphQL APIs", "Stripe / PayPal / Apple Pay", "Firebase & Supabase", "Real-time sync"],
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "App Maintenance & Updates",
    description: "Keep your app OS-compatible, secure, and continuously improving with our dedicated maintenance packages.",
    features: ["OS version compatibility", "Bug fixes & patches", "Feature enhancements", "Performance monitoring"],
  },
];

const stats = [
  { val: "50+",   label: "Apps Launched" },
  { val: "4.8★",  label: "Avg App Store Rating" },
  { val: "2M+",   label: "End Users Served" },
  { val: "99.9%", label: "Uptime Guaranteed" },
];

const process = [
  { step: "01", title: "Strategy",   desc: "Define user personas, core features, and technical architecture." },
  { step: "02", title: "UI/UX",      desc: "Interactive prototypes and pixel-perfect mobile designs." },
  { step: "03", title: "Develop",    desc: "Sprint-based development with regular TestFlight / beta builds." },
  { step: "04", title: "Ship",       desc: "App Store / Play Store submission, QA, and post-launch support." },
];

const MobileAppPage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-[58vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #04080F 0%, #080e1a 60%, #04080F 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse at 30% 60%, #D4AF37, transparent 55%)" }}
      />
      {/* Floating phone silhouette decoration */}
      <div
        className="absolute right-10 top-24 w-48 h-80 rounded-[2.5rem] opacity-5 border-2 border-[#D4AF37] hidden lg:block"
      />
      <div
        className="absolute right-20 top-32 w-40 h-64 rounded-[2rem] opacity-[0.03] bg-[#D4AF37] hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
        >
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Business Concierge</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
        >
          Mobile App <br />
          <span style={{ color: "#D4AF37" }}>Development</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          iOS, Android, and cross-platform apps that your users will love — built fast, built right, built to scale.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-12"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{s.val}</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Start Your App <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/web-development" className="hero-btn-outline inline-flex items-center gap-2">
            Need a Website Instead?
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            What We Build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Mobile <span className="gold-gradient-text">Services</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {svc.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5">
                {svc.description}
              </p>
              <ul className="space-y-1.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Platform highlight */}
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* iOS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border border-primary/20"
          >
            <Apple className="w-10 h-10 text-primary mb-5" />
            <h3 className="text-2xl font-display font-bold mb-3">iOS Development</h3>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              We build stunning native apps for iPhone and iPad using Swift and SwiftUI, fully adhering to Apple's Human Interface Guidelines to ensure App Store approval and high ratings.
            </p>
            <ul className="space-y-2">
              {["Swift & SwiftUI expertise", "App Store optimisation (ASO)", "Apple Watch & iPad support", "In-App Purchases & Subscriptions"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Android */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border border-primary/20"
          >
            <Play className="w-10 h-10 text-primary mb-5" />
            <h3 className="text-2xl font-display font-bold mb-3">Android Development</h3>
            <p className="text-muted-foreground mb-6 font-light leading-relaxed">
              Powerful Android apps built with Kotlin and Jetpack Compose, designed to reach billions of Android users across hundreds of device types with consistent performance.
            </p>
            <ul className="space-y-2">
              {["Kotlin & Jetpack Compose", "Play Store launch strategy", "Multi-device compatibility", "Firebase & Google Cloud integration"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            How We <span className="gold-gradient-text">Build It</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <p className="text-5xl font-display font-black gold-gradient-text mb-4">{p.step}</p>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
        <Zap className="w-10 h-10 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Launch Your App <span className="gold-gradient-text">This Year</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          Book a free discovery call and we'll map out your app's scope, timeline, and cost — no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Book Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/web-development" className="hero-btn-outline inline-flex items-center gap-2">
            Web Development <Star className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default MobileAppPage;
