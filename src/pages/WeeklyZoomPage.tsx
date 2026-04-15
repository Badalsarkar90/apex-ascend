import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import {
  Video, Users, Zap, MessageSquare, Target, TrendingUp,
  CheckCircle2, ArrowRight, Star, Calendar, Clock
} from "lucide-react";

const whatToExpect = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Hot Seat Coaching",
    description: "Volunteer your real business challenge and receive live, unfiltered feedback from Adam and the group — the most valuable 15 minutes you'll spend all week.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Open Q&A",
    description: "Ask Adam anything. Deals, mindset, marketing, scaling, hiring — no topic is off limits. You get direct access, not a pre-recorded answer.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Weekly Theme Deep-Dive",
    description: "Each session opens with a focused 20-minute masterclass on a high-value topic — from negotiation tactics to social media to capital raising.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Peer Accountability",
    description: "Set your weekly commitments publicly in front of the group. The social accountability alone will change how you operate.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Deal & Opportunity Sharing",
    description: "Members regularly surface deals, referrals, and collaboration opportunities inside the sessions — the network effect is real.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Full Session Recordings",
    description: "Miss a session? Every recording is available in the private member portal within 24 hours — searchable and time-stamped.",
  },
];

const included = [
  "52 live Zoom sessions per year",
  "Hot seat coaching opportunities",
  "Direct Q&A access to Adam Cohen",
  "Weekly topic deep-dives & masterclasses",
  "All session recordings (private portal)",
  "Member-only community platform",
  "Deal flow & collaboration network",
  "Monthly 1:1 check-in with accountability partner",
];

const testimonials = [
  {
    quote: "The weekly Zoom alone was worth the entire investment. Adam's real-time feedback saved me from a $200K mistake on a deal I was about to close.",
    name: "Marcus T.",
    title: "Real Estate Investor, Florida",
    sessions: "Member since 2023",
  },
  {
    quote: "I went from $0 to $40K/month in my coaching business in 6 months. The accountability inside these calls is unlike anything I've experienced.",
    name: "Priya S.",
    title: "Business Coach, New York",
    sessions: "Member since 2022",
  },
  {
    quote: "Hot seat coaching changed the way I think. I walked away from one session with a restructured offer that 3x'd my close rate.",
    name: "Jason W.",
    title: "Agency Owner, Texas",
    sessions: "Member since 2024",
  },
];

const schedule = [
  { day: "Every Wednesday",  time: "12:00 PM EST", label: "Live Session",   tag: "Core" },
  { day: "Every Wednesday",  time: "11:45 AM EST", label: "Open Room",      tag: "Optional" },
  { day: "Monthly",          time: "TBA",          label: "Bonus Masterclass", tag: "Bonus" },
  { day: "On Demand",        time: "Any time",     label: "Recording Replay",  tag: "Always" },
];

const WeeklyZoomPage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #060a0f 0%, #090a06 60%, #060a0f 100%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse at 65% 40%, #D4AF37, transparent 58%)" }}
      />
      {/* Background video-call grid decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-[0.04]">
        <div className="grid grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-32 h-24 rounded-xl border border-[#D4AF37]" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
        >
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Business Brainstorm</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
        >
          Weekly <span style={{ color: "#D4AF37" }}>Zoom</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Live, interactive coaching sessions every week with Adam Cohen. Real answers to real problems — no scripted content, no fluff, just direct access.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-12"
        >
          {[
            { val: "52",    label: "Sessions / Year" },
            { val: "500+",  label: "Active Members" },
            { val: "90",    label: "Min Per Session" },
            { val: "Live",  label: "Every Wednesday" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{s.val}</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Apply to Join <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/business-brainstorm/live-events" className="hero-btn-outline inline-flex items-center gap-2">
            Explore Live Events
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Session Schedule */}
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass-card p-8 md:p-12 border border-primary/20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-display font-bold">Session Schedule</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {schedule.map((s) => (
              <div key={s.label} className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 border border-border/40">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-display font-bold">{s.label}</p>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.day}</p>
                  <p className="text-xs text-primary font-semibold mt-1">{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* What to Expect */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Inside Every Session
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            What You <span className="gold-gradient-text">Experience</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatToExpect.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Included + Image */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Membership</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Everything <span className="gold-gradient-text">Included</span>
          </h2>
          <p className="text-muted-foreground mb-8 font-light">
            One membership. Unlimited access to live coaching, recordings, community, and accountability.
          </p>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
              Apply for Membership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden gold-glow"
        >
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80&fit=crop"
            alt="Weekly Zoom coaching session"
            className="w-full h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(11,11,11,0.85)", border: "1px solid rgba(212,175,55,0.2)", backdropFilter: "blur(12px)" }}>
              <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">Every Wednesday</p>
              <p className="text-white font-display font-bold text-xl">Live. Interactive. Transformational.</p>
              <p className="text-white/50 text-sm mt-1">No pre-recorded content. Real coaching, in real time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-display font-bold"
          >
            Member <span className="gold-gradient-text">Results</span>
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
              <div className="border-t border-border/40 pt-4">
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
                <p className="text-xs text-primary mt-1">{t.sessions}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
        <Video className="w-10 h-10 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Join This <span className="gold-gradient-text">Wednesday</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          Applications reviewed within 48 hours. If you're accepted, you'll be on the call this week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/business-brainstorm/live-events" className="hero-btn-outline inline-flex items-center gap-2">
            Explore Live Events
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default WeeklyZoomPage;
