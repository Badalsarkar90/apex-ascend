import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Headphones, Youtube, ArrowRight, Clock } from "lucide-react";

const featuredEpisode = {
  number: "006",
  title: "The Elite Mastermind — Is It Worth It?",
  description:
    "The real ROI of high-level masterminds, accountability groups, and mentorship — and how to choose the right room to be in. Adam shares the masterminds that changed his trajectory and the ones that were a waste of money.",
  duration: "52m",
  tag: "Community",
};

const recentEpisodes = [
  {
    number: "005",
    title: "Raising Capital in Any Market",
    duration: "1h 20m",
    tag: "Finance",
  },
  {
    number: "004",
    title: "The Social Media Blueprint for Entrepreneurs",
    duration: "47m",
    tag: "Marketing",
  },
  {
    number: "003",
    title: "Building a Business That Runs Without You",
    duration: "1h 4m",
    tag: "Business",
  },
];

const platforms = [
  { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "#" },
  { name: "Spotify", icon: <Headphones className="w-4 h-4" />, href: "#" },
  { name: "Apple Podcasts", icon: <Play className="w-4 h-4" />, href: "#" },
];

const PodcastSection = () => (
  <section
    id="podcast"
    className="relative py-28 px-6 overflow-hidden"
    style={{ background: "linear-gradient(150deg, #0a0a0a 0%, #111008 50%, #0a0a0a 100%)" }}
  >
    {/* Ambient glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)" }}
    />

    {/* Decorative grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }}
    />

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Watch & Listen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
          >
            Cohen TV <br />
            <span style={{ color: "#D4AF37" }}>Podcast</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.2)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              <span style={{ color: "#D4AF37" }}>{p.icon}</span>
              {p.name}
            </a>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Main content: featured + recent */}
    <div className="grid lg:grid-cols-5 gap-6">
      {/* Featured Episode — large card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-3 group cursor-pointer rounded-2xl overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(212,175,55,0.18)",
        }}
      >
        {/* Fake waveform decoration */}
        <div className="px-8 pt-8 pb-4 flex items-end gap-1 h-28 opacity-20">
          {[40, 65, 30, 80, 55, 90, 40, 70, 35, 85, 60, 75, 45, 90, 50, 70, 40, 80, 55, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-500 group-hover:opacity-80"
              style={{ height: `${h}%`, backgroundColor: "#D4AF37" }}
            />
          ))}
        </div>

        <div className="p-8 pt-2">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              {featuredEpisode.tag}
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Clock className="w-3 h-3" />
              {featuredEpisode.duration}
            </span>
            <span className="text-xs font-mono font-bold" style={{ color: "rgba(212,175,55,0.5)" }}>
              EP.{featuredEpisode.number}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
            {featuredEpisode.title}
          </h3>
          <p className="font-light leading-relaxed mb-8 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            {featuredEpisode.description}
          </p>

          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              style={{ background: "linear-gradient(135deg, #D4AF37, #C19B2E)", color: "#0B0B0B" }}
            >
              <Play className="w-4 h-4 fill-current" />
              Play Episode
            </button>
            <Link
              to="/cohen-tv"
              className="text-sm font-semibold flex items-center gap-1.5 transition-colors duration-300 hover:text-[#D4AF37]"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              All Episodes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Recent Episodes — stacked */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
          Recent Episodes
        </p>
        {recentEpisodes.map((ep, i) => (
          <motion.div
            key={ep.number}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ x: 4 }}
            className="group flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,175,55,0.2)";
              (e.currentTarget as HTMLDivElement).style.background = "rgba(212,175,55,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
            }}
          >
            {/* Play button */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <Play className="w-3.5 h-3.5 fill-current" style={{ color: "#D4AF37" }} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-mono mb-1" style={{ color: "rgba(212,175,55,0.5)" }}>EP.{ep.number}</p>
              <h4
                className="text-sm font-display font-bold leading-snug truncate transition-colors duration-300 group-hover:text-[#D4AF37]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {ep.title}
              </h4>
            </div>

            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <span
                className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "rgba(212,175,55,0.08)", color: "#D4AF37" }}
              >
                {ep.tag}
              </span>
              <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>{ep.duration}</span>
            </div>
          </motion.div>
        ))}

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-auto pt-2"
        >
          <Link
            to="/cohen-tv"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "rgba(212,175,55,0.06)",
              border: "1px solid rgba(212,175,55,0.2)",
              color: "#D4AF37",
            }}
          >
            Browse All Episodes <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PodcastSection;
