"use client";

import { ScrollReveal } from './scroll-reveal';
import { AnimatedCard } from './animated-card';
import { Quote, Target, Users, Globe, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Target, value: "50+", label: "Projects Delivered", gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" },
  { icon: Users, value: "1000+", label: "Team Members", gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]" },
  { icon: Globe, value: "15+", label: "Countries", gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]" },
  { icon: Lightbulb, value: "100+", label: "Innovations", gradient: "from-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)]" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Elegant Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Optimized Gradients */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(45 85% 75% / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(160 85% 45% / 0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 20%, hsl(220 85% 55% / 0.04) 0%, transparent 40%)
            `
          }}
        />

        {/* Simplified Background Orbs */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.08)] to-[hsl(160_85%_45%_/_0.06)] rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(220_85%_55%_/_0.06)] to-[hsl(15_85%_65%_/_0.08)] rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Sophisticated Header */}
          <ScrollReveal className="text-center mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative inline-block mb-8"
            >
              <motion.div
                className="absolute inset-0 -m-8 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.15)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(220_85%_55%_/_0.15)] rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <Quote className="h-16 w-16 text-[hsl(45_85%_75%)] mx-auto relative z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[hsl(160_85%_45%_/_0.3)] border-dashed"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <motion.span
                className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                About
              </motion.span>{" "}
              <motion.span
                className="bg-gradient-to-r from-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Nubenta
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="w-40 h-1 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] mx-auto rounded-full"
            />
          </ScrollReveal>

          {/* Premium Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            {/* Elegant Text Content */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="text-xl md:text-2xl leading-relaxed font-light"
                  style={{ color: "hsl(210 25% 90%)" }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent font-semibold"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Nubenta Group
                  </motion.span>{" "}
                  is a{" "}
                  <span className="relative">
                    <motion.span
                      className="bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(15_85%_65%)] bg-clip-text text-transparent font-medium"
                      animate={{
                        backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      visionary conglomerate
                    </motion.span>
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(15_85%_65%)]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    />
                  </span>{" "}
                  pioneering innovation and excellence across Africa.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="text-lg leading-relaxed"
                  style={{ color: "hsl(210 25% 75%)" }}
                >
                  Through our diverse portfolio and strategic investments, we create transformative value for businesses and communities. Our unwavering commitment to excellence positions us as architects of a prosperous, sustainable future.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="flex items-center gap-6 pt-6"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] border-2 border-[hsl(220_25%_6%)] flex items-center justify-center text-[hsl(220_25%_6%)] font-bold text-sm shadow-lg"
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
                      >
                        {i}
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "hsl(210 25% 80%)" }}>
                    Trusted by global leaders
                  </span>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Sophisticated Visual Element */}
            <ScrollReveal direction="right" delay={0.5}>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-full h-96 bg-gradient-to-br from-white/8 to-white/2 rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

                    {/* Elegant Floating Elements */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] opacity-60"
                        style={{
                          left: `${15 + (i * 12)}%`,
                          top: `${25 + (i % 3) * 20}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.4, 0.9, 0.4],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 4 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Premium Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="relative"
                      >
                        <Lightbulb className="h-24 w-24 text-[hsl(45_85%_75%)]" />
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.2)] to-[hsl(160_85%_45%_/_0.2)] rounded-full blur-2xl"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Sophisticated Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.15)] to-[hsl(220_85%_55%_/_0.15)] rounded-full blur-xl"
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.15)] to-[hsl(15_85%_65%_/_0.15)] rounded-full blur-xl"
                  animate={{ scale: [1.6, 1, 1.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Premium Stats Section */}
          <ScrollReveal delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    y: -8
                  }}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/10 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="mb-6"
                  >
                    <stat.icon className={`h-10 w-10 mx-auto bg-gradient-to-r ${stat.gradient} text-transparent`} style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }} />
                  </motion.div>

                  <motion.div
                    className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className="text-sm font-medium group-hover:text-white transition-colors" style={{ color: "hsl(210 25% 75%)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
