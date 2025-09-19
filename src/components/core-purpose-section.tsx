"use client";

import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { Target, Lightbulb, Globe, Users, ArrowRight } from 'lucide-react';

const purposes = [
  {
    icon: Target,
    title: "Strategic Vision",
    description: "Identifying and nurturing high-potential opportunities across African markets with precision and foresight.",
    gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]"
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Fostering cutting-edge technology solutions that address real-world challenges and drive sustainable growth.",
    gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]"
  },
  {
    icon: Globe,
    title: "Continental Impact",
    description: "Building bridges between local innovation and global markets, creating value that transcends borders.",
    gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]"
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Investing in people and communities to create lasting positive change across the continent.",
    gradient: "from-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)]"
  }
];

export function CorePurposeSection() {
  return (
    <section id="core-purpose" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Elegant Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Subtle Moving Gradients */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, hsl(45 85% 75% / 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, hsl(160 85% 45% / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 20% 70%, hsl(220 85% 55% / 0.06) 0%, transparent 40%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="absolute inset-0 -m-8 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.2)] via-[hsl(160_85%_45%_/_0.15)] to-[hsl(220_85%_55%_/_0.2)] rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Target className="h-16 w-16 text-[hsl(45_85%_75%)] mx-auto relative z-10" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Our Core
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(15_85%_65%)] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Purpose
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: "hsl(210 25% 85%)" }}
          >
            We exist to{" "}
            <motion.span
              className="bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent font-semibold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              transform African innovation
            </motion.span>
            {" "}through strategic investments, cutting-edge technology, and{" "}
            <motion.span
              className="bg-gradient-to-r from-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent font-semibold"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              sustainable growth solutions
            </motion.span>
            {" "}that create lasting value for businesses and communities across the continent.
          </motion.p>
        </ScrollReveal>

        {/* Purpose Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {purposes.map((purpose, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/4 backdrop-blur-xl rounded-2xl border border-white/15 p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">

                  {/* Elegant Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${purpose.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${purpose.gradient} flex items-center justify-center shadow-lg`}>
                      <purpose.icon className="w-8 h-8 text-[hsl(220_25%_6%)]" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: "hsl(210 25% 98%)" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {purpose.title}
                    </motion.h3>

                    <motion.p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "hsl(210 25% 80%)" }}
                    >
                      {purpose.description}
                    </motion.p>

                    {/* Arrow Indicator */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "hsl(45 85% 75%)" }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Subtle Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, hsl(45 85% 75%) 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, hsl(160 85% 45%) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}