"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Code } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from '../scroll-reveal';

export function TechHeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      {/* Sophisticated Background - Matching Main System */}
      <div className="absolute inset-0">
        {/* Elegant Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Subtle Moving Gradients */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, hsl(45 85% 75% / 0.06) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, hsl(160 85% 45% / 0.05) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, hsl(220 85% 55% / 0.04) 0%, transparent 40%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Optimized Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        <ScrollReveal className="text-center">
          {/* Sophisticated Icon */}
          <motion.div
            className="relative inline-block mb-12"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 -m-6 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.15)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(220_85%_55%_/_0.15)] rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Code className="h-16 w-16 text-[hsl(45_85%_75%)] mx-auto relative z-10" />
          </motion.div>

          {/* Main Title - Matching System Typography */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="relative block">
              <motion.span
                className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Technology
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-[hsl(160_85%_45%)] via-[hsl(15_85%_65%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Division
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle - Matching System Style */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12"
            style={{ color: "hsl(210 25% 85%)" }}
          >
            Engineering tomorrow's digital landscape.
            <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent font-medium"> Innovative solutions </span>
            for extraordinary business transformation.
          </motion.p>

          {/* CTA Button - Matching System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] hover:from-[hsl(45_85%_80%)] hover:to-[hsl(160_85%_50%)] text-[hsl(220_25%_6%)] rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0">
              <Link href="#our-work" className="flex items-center gap-2">
                Explore Our Work
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </ScrollReveal>

        {/* Sophisticated Stats - Matching Main System */}
        <ScrollReveal delay={1000} className="mt-24">
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" },
              { number: "50+", label: "Technologies", gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]" },
              { number: "99.9%", label: "Success Rate", gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.15 }}
                whileHover={{
                  scale: 1.08,
                  y: -12
                }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/10 group cursor-pointer"
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>

                <div className="group-hover:text-white transition-colors text-base font-medium" style={{ color: "hsl(210 25% 75%)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
