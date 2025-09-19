"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParticleBackground } from "./particles";
import { FloatingOrbs } from "./floating-orbs";
import { TextReveal } from "./text-reveal";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      id="hero"
      className="relative h-screen min-h-[800px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 191, 166, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 209, 102, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(27, 31, 59, 0.4) 0%, transparent 50%),
              linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)
            `,
          }}
        />
        <ParticleBackground />
        <FloatingOrbs />
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 -z-10" />

      <div className="container px-4 md:px-6 z-10 relative">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-amber-400 blur-xl opacity-30"
            />
            <Zap className="h-16 w-16 md:h-20 md:w-20 text-accent relative z-10" />
          </motion.div>

          {/* Main Title */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-r from-accent via-amber-400 to-accent blur-2xl opacity-30"
            />
            <TextReveal
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
              delay={0.5}
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-amber-200"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 20px rgba(0, 191, 166, 0.5))"
                }}
              >
                Nubenta
              </motion.span>
              <br />
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                Group
              </motion.span>
            </TextReveal>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="relative"
          >
            <p className="max-w-[800px] text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed">
              <span className="relative">
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-amber-400/20 blur-sm"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                />
                <span className="relative">Shaping the Future,</span>
              </span>
              <br />
              <span className="text-accent font-medium">One Innovation at a Time</span>
            </p>
          </motion.div>

          {/* Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 md:gap-12 text-center"
          >
            {[
              { number: "50+", label: "Innovations" },
              { number: "10+", label: "Companies" },
              { number: "1M+", label: "Lives Impacted" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-amber-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-accent to-amber-400 rounded-full blur opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Button
              asChild
              size="lg"
              className="relative bg-gradient-to-r from-accent to-amber-400 hover:from-accent/90 hover:to-amber-400/90 text-black font-bold rounded-full px-12 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-accent/40 group border-0"
            >
              <Link href="#companies" className="flex items-center gap-3">
                <Sparkles className="h-5 w-5" />
                Explore Our Universe
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/60"
            >
              <span className="text-sm font-medium">Scroll to discover</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
