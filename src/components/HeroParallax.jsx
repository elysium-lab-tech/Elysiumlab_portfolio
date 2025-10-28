"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroParallax() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  const layer = (depth) => ({
    x: useTransform(sx, (v) => v * depth),
    y: useTransform(sy, (v) => v * depth),
  });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const relX = (e.clientX - cx) / (rect.width / 2);
    const relY = (e.clientY - cy) / (rect.height / 2);
    mx.set(relX * 20);
    my.set(relY * 20);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Precompute all parallax layers (never call layer() inside JSX)
  const bg = layer(-10); // kept for potential use, not applied to background image
  const mid = layer(-4);
  const fg = layer(-1.5);
  const l2 = layer(-2);
  const l3 = layer(-3);
  const l4 = layer(-4);

  const bgImgSrc = "/Elysium_niven.jpg"; // from public folder
  const bgStyle = { backgroundImage: `url(${bgImgSrc})` };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Static full-bleed background (no parallax) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center"
        style={bgStyle}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />
      </div>

      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative z-10 mx-auto flex h-screen max-w-7xl items-center justify-center px-6"
      >
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <motion.h1 style={mid} className="text-4xl font-bold tracking-tight text-white drop-shadow md:text-6xl">
              Elysium Lab
            </motion.h1>
            <motion.p style={fg} className="max-w-xl text-lg text-zinc-200/90">
              We craft immersive digital products and intelligent interfaces. From concept to code, we blend design, motion, and engineering to deliver experiences that feel alive.
            </motion.p>
            <motion.div style={fg} className="flex gap-4">
              <a href="#work" className="rounded-full bg-white/90 px-6 py-3 text-black transition-colors hover:bg-white">
                View Work
              </a>
              <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 text-white transition-colors hover:bg-white/10">
                Contact
              </a>
            </motion.div>
          </div>

          {/* Subtle glass cards with parallax for realism */}
          <motion.div style={mid} className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
            <motion.div
              style={fg}
              className="absolute inset-0 rounded-2xl bg-white/5 ring-1 ring-white/15 backdrop-blur-md"
            />
            <motion.div
              style={l2}
              className="absolute -top-6 -left-10 rounded-xl bg-white/15 px-4 py-3 shadow-lg ring-1 ring-white/20 backdrop-blur-md"
            >
              <div className="text-sm text-white/90">Innovation</div>
            </motion.div>
            <motion.div
              style={l4}
              className="absolute -bottom-6 -right-8 rounded-xl bg-white/15 px-4 py-3 shadow-lg ring-1 ring-white/20 backdrop-blur-md"
            >
              <div className="text-sm text-white/90">Research</div>
            </motion.div>
            <motion.div
              style={l3}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image src="/elysium_logo.png" alt="Elysium Lab" width={512} height={512} className="w-72 h-auto md:w-96" priority />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
