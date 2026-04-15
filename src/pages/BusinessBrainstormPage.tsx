import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Video, Calendar, Users, Zap, ArrowRight, CheckCircle2, Star } from "lucide-react";

const programs = [
  {
    id: "weekly-zoom",
    icon: <Video className="w-8 h-8" />,
    title: "Weekly Zoom",
    tagline: "Live Coaching. Real Breakthroughs.",
    description:
      "Every week, join Adam and a curated group of entrepreneurs for a live Zoom session focused on real business problems, live Q&A, hot seat coaching, and accountability. No pre-recorded fluff — just raw, tactical guidance.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80&fit=crop",
    features: [
      "Live sessions every week",
      "Hot seat coaching opportunities",
      "Real-time Q&A with Adam",
      "Peer accountability groups",
      "Session recordings for members",
      "Private community access",
    ],
    cta: "Join Weekly Zoom",
    highlight: "Most Popular",
  },
  {
    id: "live-events",
    icon: <Calendar className="w-8 h-8" />,
    title: "Live Events",
    tagline: "The Room That Changes Everything.",
    description:
      "Immersive in-person events held multiple times per year bringing together elite entrepreneurs, investors, and industry leaders. Expect intensive workshops, keynote presentations, masterminds, and high-impact networking that accelerates your trajectory.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&fit=crop",
    features: [
      "Full-day immersive workshops",
      "Keynote presentations",
      "VIP networking dinners",
      "Expert panel discussions",
      "Deal-making opportunities",
      "Lifetime alumni community",
    ],
    cta: "View Upcoming Events",
    highlight: "High Impact",
  },
];

const testimonials = [
  {
    quote: "The weekly Zoom alone was worth the entire investment. Adam's real-time feedback saved me from a $200K mistake.",
    name: "Marcus T.",
    title: "Real Estate Investor",
  },
  {
    quote: "I signed a $1.2M contract at the live event. The room was filled with serious players — exactly who I needed to meet.",
    name: "Priya S.",
    title: "CEO, Digital Agency",
  },
  {
    quote: "These aren't typical business events. Adam creates an atmosphere where real collaboration and transformation happen.",
    name: "Kevin R.",
    title: "Entrepreneur & Investor",
  },
];

const BusinessBrainstormPage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-[50vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #D4AF37, transparent 50%)" }}
      />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
        >
          Community
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight"
        >
          Business <span className="gold-gradient-text">Brainstorm</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl font-light"
        >
          Live accountability, connection, and strategy sessions with Adam and a community of high-performers who push each other to the next level.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-12"
        >
          {[
            { val: "500+", label: "Active Members" },
            { val: "52",   label: "Sessions Per Year" },
            { val: "12+",  label: "Live Events Annually" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-display font-bold gold-gradient-text">{s.val}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Programs */}
    {programs.map((prog, i) => (
      <section
        key={prog.id}
        id={prog.id}
        className={`section-padding relative ${i % 2 === 1 ? "bg-secondary/30" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className={`relative rounded-2xl overflow-hidden gold-glow ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <img src={prog.image} alt={prog.title} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Highlight badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold tracking-widest uppercase">
                <Star className="w-3 h-3 fill-black" />
                {prog.highlight}
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                  {prog.icon}
                </span>
                <div>
                  <p className="text-white font-display font-bold text-lg leading-tight">{prog.title}</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={i % 2 === 1 ? "lg:order-1" : ""}
            >
              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 font-semibold">{prog.tagline}</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{prog.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 font-light">{prog.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {prog.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
                {prog.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    ))}

    {/* Testimonials */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-display font-bold"
          >
            What Members <span className="gold-gradient-text">Say</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed font-light italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
        <Users className="w-10 h-10 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Join the <span className="gold-gradient-text">Brainstorm</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          Applications are reviewed individually. Book a call to see if you're the right fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            <Zap className="w-4 h-4" /> Apply Now
          </Link>
          <Link to="/contact" className="hero-btn-outline inline-flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default BusinessBrainstormPage;
