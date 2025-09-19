"use client";

import { ScrollReveal } from './scroll-reveal';
import { AnimatedCard } from './animated-card';
import { Quote, Target, Users, Globe, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Target, value: "50+", label: "Projects Delivered", color: "text-accent" },
  { icon: Users, value: "1000+", label: "Team Members", color: "text-amber-400" },
  { icon: Globe, value: "15+", label: "Countries", color: "text-blue-400" },
  { icon: Lightbulb, value: "100+", label: "Innovations", color: "text-green-400" }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block mb-6"
            >
              <Quote className="h-16 w-16 text-accent/20 mx-auto" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-accent/30 border-dashed"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent">
                About
              </span>{" "}
              <span className="text-white">Nubenta</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-32 h-1 bg-gradient-to-r from-accent to-amber-400 mx-auto rounded-full"
            />
          </ScrollReveal>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
                >
                  <span className="text-accent font-semibold">Nubenta Group</span> is a{" "}
                  <span className="relative">
                    <span className="text-amber-400 font-medium">dynamic and forward-thinking</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400/50"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </span>{" "}
                  conglomerate dedicated to fostering innovation and driving progress across Africa.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-lg text-gray-400 leading-relaxed"
                >
                  With a diverse portfolio of companies, we are committed to creating sustainable value and making a positive impact on businesses and communities. Our strategic investments and commitment to excellence position us at the forefront of shaping a brighter, more prosperous future.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="flex items-center gap-4 pt-4"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-amber-400 border-2 border-black flex items-center justify-center text-black font-bold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">Trusted by leading organizations</span>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Visual Element */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="w-full h-80 bg-gradient-to-br from-accent/20 to-amber-400/20 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

                    {/* Floating Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-accent rounded-full opacity-60"
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${30 + (i % 2) * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative"
                      >
                        <Lightbulb className="h-20 w-20 text-accent" />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-amber-400/20 rounded-full blur-xl"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-xl"
                  animate={{ scale: [1.5, 1, 1.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Stats Section */}
          <ScrollReveal delay={0.6}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className="text-center p-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4"
                  >
                    <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </AnimatedCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
