"use client";

import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { Target, Eye, Rocket, Heart } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    subtitle: "Driving Innovation Forward",
    description: "To empower businesses and communities through cutting-edge innovation, transformative technology, and strategic solutions that create lasting value and shape a sustainable future for Africa and beyond.",
    gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]",
    bgGradient: "from-[hsl(45_85%_75%_/_0.15)] to-[hsl(160_85%_45%_/_0.08)]",
    glowColor: "hsl(45_85%_75%_/_0.3)",
    highlights: ["Innovation", "Technology", "Strategic Solutions", "Sustainable Future"]
  },
  {
    icon: Eye,
    title: "Our Vision",
    subtitle: "Transforming Africa's Future",
    description: "To be Africa's most trusted and forward-thinking group of companies, pioneering breakthrough solutions that drive sustainable impact, foster economic growth, and establish new standards of excellence across industries.",
    gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]",
    bgGradient: "from-[hsl(160_85%_45%_/_0.15)] to-[hsl(220_85%_55%_/_0.08)]",
    glowColor: "hsl(160_85%_45%_/_0.3)",
    highlights: ["Trusted Leadership", "Forward-Thinking", "Breakthrough Solutions", "Excellence Standards"]
  }
];

export function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Elegant Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Subtle Moving Gradients */}
        <motion.div
          className="absolute inset-0 opacity-8"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(45 85% 75% / 0.06) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, hsl(160 85% 45% / 0.05) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, hsl(220 85% 55% / 0.04) 0%, transparent 40%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-64 h-64 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.08)] to-[hsl(160_85%_45%_/_0.06)] rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.06)] to-[hsl(220_85%_55%_/_0.08)] rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Rocket className="h-16 w-16 text-[hsl(45_85%_75%)] mx-auto relative z-10" />
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
              Vision &
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Mission
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="w-40 h-1 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] mx-auto rounded-full"
          />
        </ScrollReveal>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.3}>
              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -16,
                  scale: 1.02,
                  transition: { duration: 0.4, type: "spring" }
                }}
                className="group relative h-full"
              >
                {/* Main Card */}
                <div className="relative h-full bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-3xl border border-white/25 p-12 overflow-hidden shadow-3xl group-hover:shadow-4xl transition-all duration-700">

                  {/* Multi-layer Sophisticated Glow */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-br ${card.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Inner Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />

                  {/* Floating Geometric Shapes */}
                  <motion.div
                    className="absolute top-8 right-8 w-20 h-20 opacity-10"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${card.gradient} rounded-2xl`} />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 left-8 w-12 h-12 opacity-15"
                    animate={{
                      rotate: -360,
                      y: [0, -10, 0]
                    }}
                    transition={{
                      rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${card.gradient} rounded-full`} />
                  </motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    className="mb-8 relative"
                    whileHover={{ scale: 1.15, rotate: 5, y: -8 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    {/* Icon Glow Ring */}
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-br ${card.gradient} rounded-3xl blur-lg opacity-60`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.8, 0.6]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Icon Container */}
                    <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500`}>
                      <motion.div
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-1 rounded-2xl border border-[hsl(220_25%_6%_/_0.2)] opacity-30"
                      />
                      <card.icon className="w-12 h-12 text-[hsl(220_25%_6%)] relative z-10" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-4xl font-black mb-4 tracking-tight"
                      style={{ color: "hsl(210 25% 98%)" }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      {card.title}
                    </motion.h3>

                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.p
                        className="text-xl font-semibold"
                        style={{ color: "hsl(45 85% 75%)" }}
                      >
                        {card.subtitle}
                      </motion.p>
                    </motion.div>

                    <motion.p
                      className="text-lg leading-relaxed mb-10 font-light"
                      style={{ color: "hsl(210 25% 88%)" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {card.description}
                    </motion.p>

                    {/* Highlight Tags */}
                    <div className="flex flex-wrap gap-4">
                      {card.highlights.map((highlight, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + tagIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          className="relative group cursor-pointer"
                        >
                          {/* Tag Glow */}
                          <motion.div
                            className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                            animate={{
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: tagIndex * 0.5
                            }}
                          />

                          <span className={`relative px-5 py-3 bg-gradient-to-r ${card.bgGradient} rounded-xl text-sm font-semibold border border-white/25 group-hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center gap-2`}
                            style={{ color: "hsl(210 25% 95%)" }}>
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient}`}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: tagIndex * 0.3
                              }}
                            />
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-3 h-3 rounded-full"
                    style={{ backgroundColor: card.glowColor }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />

                  {/* Subtle Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, hsl(45 85% 75%) 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, hsl(160 85% 45%) 1px, transparent 1px)`,
                      backgroundSize: '60px 60px'
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