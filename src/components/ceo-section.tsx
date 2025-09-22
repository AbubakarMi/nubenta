"use client";

import Image from 'next/image';
import { ScrollReveal } from './scroll-reveal';
import { Signature } from './signature';
import { Quote, Award, Target, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const achievements = [
  { icon: Award, label: "Industry Awards", value: "15+", gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" },
  { icon: Target, label: "Projects Delivered", value: "200+", gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]" },
  { icon: Users, label: "Team Members", value: "500+", gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]" },
  { icon: Lightbulb, label: "Innovations", value: "50+", gradient: "from-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)]" }
];

export function CeoSection() {
  return (
    <section id="ceo" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Elegant Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Subtle Moving Gradients */}
        <motion.div
          className="absolute inset-0 opacity-12"
          style={{
            background: `
              radial-gradient(circle at 25% 30%, hsl(45 85% 75% / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 70%, hsl(160 85% 45% / 0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, hsl(220 85% 55% / 0.04) 0%, transparent 40%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Elegant Floating Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.06)] to-[hsl(160_85%_45%_/_0.04)] rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(220_85%_55%_/_0.04)] to-[hsl(15_85%_65%_/_0.06)] rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
              className="absolute inset-0 -m-8 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.15)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(220_85%_55%_/_0.15)] rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Award className="h-16 w-16 text-[hsl(45_85%_75%)] mx-auto relative z-10" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Meet Our{" "}
            <motion.span
              className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Visionary
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
              Leader
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="w-40 h-1 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] mx-auto rounded-full"
          />
        </ScrollReveal>

        {/* Main CEO Section */}
        <div className="max-w-7xl mx-auto">
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45_85%_75%_/_0.08)] via-[hsl(160_85%_45%_/_0.06)] to-[hsl(220_85%_55%_/_0.08)] opacity-60" />

              {/* Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[hsl(45_85%_75%_/_0.4)] rounded-full"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              <div className="grid lg:grid-cols-12 lg:gap-0 relative z-10">
                {/* CEO Image Section */}
                <div className="lg:col-span-5 relative">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative h-[400px] lg:h-full min-h-[500px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45_85%_75%_/_0.15)] to-[hsl(160_85%_45%_/_0.12)] rounded-2xl m-4" />
                    <Image
                      src="/ceo-picture.JPG"
                      alt="Photo of the CEO, Engr. Muhammad Idris Abubakar"
                      width={600}
                      height={800}
                      className="object-cover w-full h-full rounded-2xl m-4 border-2 border-white/20"
                    />

                    {/* Floating CEO Badge */}
                    <motion.div
                      className="absolute top-8 right-8 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] text-[hsl(220_25%_6%)] px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ✨ Visionary CEO
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="p-8 md:p-12 lg:p-16">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="relative mb-8"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-[hsl(45_85%_75%_/_0.4)] border-dashed w-16 h-16"
                      />
                      <Quote className="h-12 w-12 text-[hsl(45_85%_75%)] relative z-10 p-2" />
                    </motion.div>

                    {/* Quote Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="text-xl lg:text-2xl xl:text-3xl font-light text-white leading-relaxed mb-8"
                    >
                      <span className="text-[hsl(45_85%_75%)] font-semibold">"</span>
                      At Nubenta, we believe in the{" "}
                      <span className="text-[hsl(45_85%_75%)] font-semibold">power of visionary ideas</span> and{" "}
                      <span className="text-[hsl(160_85%_45%)] font-semibold">relentless execution</span>.
                      Our journey is one of passion, purpose, and a commitment to creating lasting value.
                      We are not just building companies; we are{" "}
                      <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent font-semibold">
                        building the future of Africa
                      </span>.
                      <span className="text-[hsl(45_85%_75%)] font-semibold">"</span>
                    </motion.blockquote>

                    {/* CEO Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
                    >
                      <div className="space-y-2">
                        <h3 className="font-black text-2xl text-white">
                          Engr. Muhammad Idris Abubakar
                        </h3>
                        <p className="text-[hsl(45_85%_75%)] font-semibold text-lg">
                          Founder & Group Chief Executive Officer
                        </p>
                        <p className="text-gray-400">Nubenta Group</p>

                        {/* Achievement Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {["Innovator", "Leader", "Visionary"].map((tag, index) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                              className="px-3 py-1 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.15)] to-[hsl(160_85%_45%_/_0.15)] rounded-full text-sm text-[hsl(45_85%_75%)] border border-[hsl(45_85%_75%_/_0.3)]"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        className="flex-shrink-0"
                      >
                        <Signature />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>

        {/* Achievements Section */}
        <ScrollReveal delay={1.2} className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative text-center p-8 rounded-3xl bg-gradient-to-br from-white/12 to-white/6 backdrop-blur-xl border border-white/20 group overflow-hidden"
              >
                {/* Sophisticated Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={`mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-xl relative z-10`}
                >
                  <achievement.icon className="h-8 w-8 text-[hsl(220_25%_6%)]" />
                </motion.div>

                <motion.div
                  className="text-4xl font-black text-white mb-3"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  {achievement.value}
                </motion.div>

                <div className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm">
                  {achievement.label}
                </div>

                {/* Subtle floating particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
