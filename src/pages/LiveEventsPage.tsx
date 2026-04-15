import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import {
  MapPin, Users, Mic, Network, Lightbulb, Trophy,
  CheckCircle2, ArrowRight, Star, Calendar, Clock, Ticket
} from "lucide-react";

const eventFeatures = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Keynote Presentations",
    description: "Adam delivers high-content, no-fluff keynotes on the most pressing wealth, business, and mindset topics — tailored to where his community is right now.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Intensive Workshops",
    description: "Roll-up-your-sleeves working sessions where you apply frameworks directly to your business with expert facilitation and peer feedback.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Curated Networking",
    description: "Every attendee is vetted. These rooms are filled with serious operators — investors, founders, executives, and deal-makers actively looking to connect.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Panel Discussions",
    description: "Industry leaders across real estate, tech, media, and finance take the stage for unscripted conversations and direct Q&A from the audience.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "VIP Dinner Experience",
    description: "Select ticket holders join Adam and a small group for a private dinner — the most intimate and valuable conversations happen around the table.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Lifetime Alumni Network",
    description: "Once you attend, you're part of the alumni — access to the private group, future early-bird pricing, and an ongoing community of serious entrepreneurs.",
  },
];

const ticketTiers = [
  {
    name: "General Admission",
    price: "From $997",
    tag: null,
    description: "Full event access, all keynotes, workshops, panel discussions, and networking.",
    perks: [
      "All main stage sessions",
      "Workshop participation",
      "Networking breaks & mixer",
      "Event materials & playbook",
      "Alumni community access",
    ],
    cta: "Register Interest",
    highlight: false,
  },
  {
    name: "VIP Experience",
    price: "From $2,997",
    tag: "Most Popular",
    description: "Everything in General plus front-row seating, VIP dinner, and direct access to speakers.",
    perks: [
      "Everything in General",
      "Front-row reserved seating",
      "VIP dinner with Adam",
      "Speaker meet & greet",
      "Priority hot seat access",
      "Exclusive VIP lounge",
    ],
    cta: "Apply for VIP",
    highlight: true,
  },
  {
    name: "Mastermind Table",
    price: "From $9,997",
    tag: "Limited Seats",
    description: "A private, co-working table with Adam for the full event — your deals reviewed, decisions made, trajectory set.",
    perks: [
      "Everything in VIP",
      "Private table with Adam",
      "Full-day deal review",
      "Custom action plan",
      "90-day follow-up call",
      "Year-round priority access",
    ],
    cta: "Enquire Now",
    highlight: false,
  },
];

const upcomingEvents = [
  {
    title: "The Apex Summit 2025",
    location: "Miami, Florida",
    date: "September 19–20, 2025",
    theme: "Scale, Capital & Legacy",
    spots: "200 Seats",
    status: "Registration Open",
  },
  {
    title: "Business Brainstorm LIVE",
    location: "New York City, NY",
    date: "November 7, 2025",
    theme: "Revenue Systems & Mindset",
    spots: "120 Seats",
    status: "Early Bird",
  },
];

const testimonials = [
  {
    quote: "I signed a $1.2M contract at the live event. The room was filled with serious players — exactly who I needed to meet. ROI in one deal.",
    name: "Kevin R.",
    title: "Commercial Real Estate, Dallas",
    event: "Apex Summit 2024",
  },
  {
    quote: "The VIP dinner alone was worth 10x the ticket price. Three hours with Adam and six other high-performers changed the direction of my company.",
    name: "Simone A.",
    title: "CEO, E-Commerce Brand",
    event: "Business Brainstorm LIVE 2024",
  },
  {
    quote: "I've been to hundreds of events. This is different. The people in the room are actually doing the work — no tire-kickers, no dreamers. Just operators.",
    name: "David L.",
    title: "SaaS Founder, Austin",
    event: "Apex Summit 2023",
  },
];

const LiveEventsPage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative min-h-[65vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #060608 0%, #0a0908 60%, #060608 100%)" }}
      />
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80&fit=crop"
          alt="Live event"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,8,0.7) 0%, rgba(6,6,8,0.4) 50%, rgba(6,6,8,0.95) 100%)" }} />
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
          Live <span style={{ color: "#D4AF37" }}>Events</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Immersive in-person experiences that compress years of growth into two days. The room you're in determines the trajectory you're on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-10 mt-12"
        >
          {[
            { val: "12+",  label: "Events Per Year" },
            { val: "5K+",  label: "Alumni Members" },
            { val: "2",    label: "Days of Immersion" },
            { val: "100%", label: "Vetted Attendees" },
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
            Reserve Your Seat <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/business-brainstorm/weekly-zoom" className="hero-btn-outline">
            Explore Weekly Zoom
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-display font-bold"
          >
            Upcoming <span className="gold-gradient-text">Events</span>
          </motion.h2>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((evt, i) => (
            <motion.div
              key={evt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {evt.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{evt.spots}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-1">{evt.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 font-light italic">"{evt.theme}"</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {evt.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {evt.date}
                    </span>
                  </div>
                </div>
                <Link to="/contact" className="hero-btn text-sm py-3 px-6 whitespace-nowrap inline-flex items-center gap-2">
                  Register <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Event Features */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            What's Inside
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            The Event <span className="gold-gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted-foreground max-w-xl mx-auto font-light"
          >
            Every event is meticulously curated — no filler sessions, no time wasted, maximum impact.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feat.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Ticket Tiers */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Choose Your <span className="gold-gradient-text">Experience</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ticketTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col relative ${tier.highlight ? "border-primary/50 shadow-[0_0_40px_rgba(212,175,55,0.12)]" : "border-border/50"}`}
            >
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold tracking-widest uppercase">
                  <Star className="w-3 h-3 fill-black" />
                  {tier.tag}
                </div>
              )}
              <div className="mb-6">
                <Ticket className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold mb-1">{tier.name}</h3>
                <p className="text-3xl font-display font-black gold-gradient-text mt-2 mb-3">{tier.price}</p>
                <p className="text-sm text-muted-foreground font-light">{tier.description}</p>
              </div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {tier.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full text-center block py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                  tier.highlight
                    ? "hero-btn"
                    : "border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-display font-bold"
          >
            What Attendees <span className="gold-gradient-text">Say</span>
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
                <p className="text-xs text-primary mt-1 font-medium">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
        <MapPin className="w-10 h-10 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Secure Your <span className="gold-gradient-text">Seat</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          Events sell out. Register your interest today and we'll send you early access and pricing before the public announcement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="hero-btn inline-flex items-center gap-2">
            Reserve My Seat <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/business-brainstorm/weekly-zoom" className="hero-btn-outline inline-flex items-center gap-2">
            Join Weekly Zoom First
          </Link>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default LiveEventsPage;
