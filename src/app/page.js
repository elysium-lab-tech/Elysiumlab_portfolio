"use client";
import HeroParallax from "@/components/HeroParallax";
import { motion } from "framer-motion";
import { Cpu, Code2, Sparkles, ShieldCheck, Rocket, Phone, Mail, MapPin, MessageCircle, Globe, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "AI Interfaces",
      desc: "Conversational, context‑aware UX powered by modern AI stacks.",
      icon: Cpu,
      accent: "cyan",
    },
    {
      title: "Experience Design",
      desc: "Cinematic motion, micro‑interactions, and accessibility.",
      icon: Sparkles,
      accent: "gold",
    },
    {
      title: "Full‑Stack Systems",
      desc: "Robust APIs, scalable clouds, and real‑time data flows.",
      icon: Code2,
      accent: "cyan",
    },
    {
      title: "Security & Reliability",
      desc: "Hardened auth, audits, and best‑practice deployments.",
      icon: ShieldCheck,
      accent: "gold",
    },
    {
      title: "Launch & Growth",
      desc: "Performance, SEO, analytics, and continuous iteration.",
      icon: Rocket,
      accent: "cyan",
    },
  ];

  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen antialiased">
      <HeroParallax />

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl px-6 py-24"
        style={{
          background: "linear-gradient(180deg, #050910 0%, #0d111a 100%)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <div className="relative z-10">
          <h2 className="glow-heading mb-4 text-3xl font-semibold text-cyan-100">
            About Elysium Lab
          </h2>
          <p className="max-w-prose text-zinc-300">
            We are a futuristic digital lab exploring the edges of design and code.
            Our craft blends intelligent systems, cinematic interfaces, and motion.
            We prototype tomorrow’s experiences today—precise, immersive, and fast.
            Built on curiosity, powered by technology, delivered with creativity.
          </p>
        </div>

        {/* Subtle animated accents */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-8 h-24 w-24 rounded-full"
          style={{ boxShadow: "0 0 0 1px rgba(34,211,238,0.25), 0 0 28px rgba(34,211,238,0.18)" }}
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-6 left-2 w-px"
          style={{ background: "linear-gradient(180deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.6) 50%, rgba(34,211,238,0) 100%)" }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated dark grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            animation: "grid-pan 18s linear infinite",
          }}
        />

        {/* Services grid */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const glowCyan = s.accent === "cyan";
            return (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="group rounded-2xl p-6 transition-all"
                style={{
                  border: `1px solid ${glowCyan ? "rgba(6,182,212,0.35)" : "rgba(245,158,11,0.35)"}`,
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ y: -3 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="rounded-lg p-2"
                    style={{
                      background: glowCyan ? "rgba(6,182,212,0.1)" : "rgba(245,158,11,0.1)",
                      boxShadow: glowCyan
                        ? "0 0 12px rgba(6,182,212,0.25)"
                        : "0 0 12px rgba(245,158,11,0.25)",
                    }}
                  >
                    <Icon size={18} className={glowCyan ? "text-cyan-300" : "text-amber-300"} />
                  </div>
                  <h3 className="glow-heading text-lg font-semibold">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-300/90">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      

      

      <section id="clients" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="glow-heading mb-6 text-3xl font-semibold">Our Experiences</h2>
        <div className="clients-marquee">
          <div className="clients-track">
            {/* Set A */}
            <div className="client-card glass-card rounded-2xl overflow-hidden">
              <img src="/client_1.jpg" alt="Velocity" className="client-img" />
              <div className="client-info">
                <div className="client-title">Velocity</div>
                <p className="client-desc">We crafted bold digital campaigns and high-impact visuals that elevated Velocity’s EV identity. Our design strategy focused on clean energy storytelling and futuristic branding precision.</p>
              </div>
            </div>
            {/* <div className="client-card glass-card rounded-2xl overflow-hidden">
              <img src="/client_2.jpg" alt="Balance Salon" className="client-img" />
              <div className="client-info">
                <div className="client-title">Balance Salon</div>
                <p className="client-desc">We designed an elegant black-and-gold identity blending luxury with minimal aesthetics. Our digital creatives and ad visuals enhanced customer engagement with a premium salon vibe.</p>
              </div>
            </div>
            <div className="client-card glass-card rounded-2xl overflow-hidden">
              <img src="/client_3.jpg" alt="Thennatu Virundhu" className="client-img" />
              <div className="client-info">
                <div className="client-title">Thennatu Virundhu</div>
                <p className="client-desc">We brought tradition to the digital space with earthy tones and heritage-driven branding. Our campaigns and graphic narratives celebrated authentic South Indian dining with modern flair.</p>
              </div>
            </div> */}
            {/* Duplicate for seamless loop (Set B) */}
            <div className="client-card glass-card rounded-2xl overflow-hidden">
              <img src="/client_1.jpg" alt="Velocity" className="client-img" />
              <div className="client-info">
                <div className="client-title">Velocity</div>
                <p className="client-desc">We crafted bold digital campaigns and high-impact visuals that elevated Velocity’s EV identity. Our design strategy focused on clean energy storytelling and futuristic branding precision.</p>
              </div>
            </div>
            {/* <div className="client-card glass-card rounded-2xl overflow-hidden">
              <img src="/client_2.jpg" alt="Balance Salon" className="client-img" />
              <div className="client-info">
                <div className="client-title">Balance Salon</div>
                <p className="client-desc">We designed an elegant black-and-gold identity blending luxury with minimal aesthetics. Our digital creatives and ad visuals enhanced customer engagement with a premium salon vibe.</p>
              </div>
            </div>
            <div className="client-card glass-card rounded-2xl overflow-hidden">
              <img src="/client_3.jpg" alt="Thennatu Virundhu" className="client-img" />
              <div className="client-info">
                <div className="client-title">Thennatu Virundhu</div>
                <p className="client-desc">We brought tradition to the digital space with earthy tones and heritage-driven branding. Our campaigns and graphic narratives celebrated authentic South Indian dining with modern flair.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl px-6 py-24"
      >
        {/* Animated dark grid / particles background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            animation: "grid-pan 24s linear infinite",
          }}
        />

        <div
          className="relative z-10 overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(180deg, #050910 0%, #0d111a 100%)",
            border: "1px solid rgba(148,163,184,0.18)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            {/* Left column: heading + info */}
            <div>
              <h2 className="glow-heading mb-4 text-3xl font-semibold text-cyan-100">
                Let’s Build the Future Together
              </h2>
              <div
                className="mb-2 text-2xl font-semibold leading-tight text-zinc-100 md:text-3xl"
                style={{ textShadow: "0 0 14px rgba(255,255,255,0.18)" }}
              >
                Free consultation
              </div>
              <p className="mb-6 max-w-prose text-zinc-300">
                A no‑cost strategy session to map challenges, uncover opportunities,
                and shape the right roadmap for your build.
              </p>
              <p className="max-w-prose text-zinc-300">
                We partner with teams to imagine, design, and ship intelligent,
                cinematic experiences—secure, scalable, and fast.
              </p>
            </div>

            {/* Right column: form */}
            <form className="glass-card rounded-xl p-5 backdrop-blur-md md:p-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-zinc-100 outline-none transition focus:border-white/60 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-zinc-100 outline-none transition focus:border-white/60 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                    placeholder="Company"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-zinc-100 outline-none transition focus:border-white/60 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                    placeholder="+91‑"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-zinc-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-zinc-100 outline-none transition focus:border-white/60 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1 block text-sm text-zinc-400">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-zinc-100 outline-none transition focus:border-white/60 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="btn-outline-glow btn-outline-glow--cyan rounded-full px-8 py-2.5 text-sm font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer at the very end, full-width background */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mt-16 w-full"
      >
        {/* thin glowing top border */}
        <div className="pointer-events-none absolute -top-px left-0 right-0 h-px w-full" style={{ boxShadow: "0 0 18px rgba(255,255,255,0.18)" }} />

        {/* Full-width gradient background with centered content */}
        <div style={{ background: "linear-gradient(180deg, #050910 0%, #0d111a 100%)", borderTop: "1px solid rgba(148,163,184,0.2)" }}>
          <div className="mx-auto max-w-7xl px-6 py-3">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Services */}
              <div>
                <h3 className="glow-heading mb-3 text-lg font-semibold">Services</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li>AI Interfaces</li>
                  <li>Experience Design</li>
                  <li>Full‑Stack Systems</li>
                  <li>Security & Reliability</li>
                  <li>Launch & Growth</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-zinc-300">
                <h3 className="glow-heading mb-3 text-lg font-semibold">Contact Info</h3>
                <div className="flex items-center gap-2"><Phone size={16} className="text-zinc-400" /><span>+91 8531057157</span></div>
                <div className="flex items-center gap-2"><Mail size={16} className="text-zinc-400" /><span>elysiumlab.in@gmail.com</span></div>
                {/* <div className="flex items-center gap-2"><MapPin size={16} className="text-zinc-400" /><span>Ring Sector 7, Niven Orbit</span></div> */}
              </div>

              {/* Connect */}
              <div>
                <h3 className="glow-heading mb-3 text-lg font-semibold">Connect</h3>
                <a
                  href="https://wa.me/918531057157"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-100 transition"
                  style={{ border: "1px solid rgba(255,255,255,0.35)", boxShadow: "0 0 0 2px rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.15), 0 0 20px rgba(255,255,255,0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 2px rgba(255,255,255,0.08)")}
                  target="_blank" rel="noopener noreferrer"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <div className="mt-4 flex items-center gap-4 text-zinc-400">
                  <a href="https://www.reddit.com/user/WorkingLet3472/" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-200"><Globe size={18} /></a>
                  <a href="https://www.linkedin.com/in/elysium-lab" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-200"><Linkedin size={18} /></a>
                  <a href="https://www.instagram.com/elysium___lab" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-200"><Instagram size={18} /></a>
                </div>
              </div>
            </div>

            <div className=" text-center text-xs text-zinc-400">
              © 2025 Elysium Lab. Designed by Venkatesh S S.
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
