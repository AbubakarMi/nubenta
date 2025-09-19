"use client";

import Image from 'next/image';
import { ScrollReveal } from './scroll-reveal';
import { Signature } from './signature';
import { Quote, Award, Target, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const achievements = [
  { icon: Award, label: "Industry Awards", value: "15+" },
  { icon: Target, label: "Projects Delivered", value: "200+" },
  { icon: Users, label: "Team Members", value: "500+" },
  { icon: Lightbulb, label: "Innovations", value: "50+" }
];

export function CeoSection() {
  return (
    <section id="ceo" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-accent via-purple-500 to-amber-400 bg-clip-text text-transparent">
              Visionary Leader
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-32 h-1 bg-gradient-to-r from-accent to-amber-400 mx-auto rounded-full"
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
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/10 to-amber-400/10 opacity-50" />

              {/* Floating Elements */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/30 rounded-full"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl m-4" />
                    <Image
                      src="/ceo-picture.JPG"
                      alt="Photo of the CEO, Engr. Muhammad Idris Abubakar"
                      width={600}
                      height={800}
                      className="object-cover w-full h-full rounded-2xl m-4 border-2 border-white/20"
                    />

                    {/* Floating CEO Badge */}
                    <motion.div
                      className="absolute top-8 right-8 bg-gradient-to-r from-accent to-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg"
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
                        className="absolute inset-0 rounded-full border-2 border-accent/30 border-dashed w-16 h-16"
                      />
                      <Quote className="h-12 w-12 text-accent relative z-10 p-2" />
                    </motion.div>

                    {/* Quote Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="text-xl lg:text-2xl xl:text-3xl font-light text-white leading-relaxed mb-8"
                    >
                      <span className="text-accent font-semibold">"</span>
                      At Nubenta, we believe in the{" "}
                      <span className="text-accent font-semibold">power of visionary ideas</span> and{" "}
                      <span className="text-amber-400 font-semibold">relentless execution</span>.
                      Our journey is one of passion, purpose, and a commitment to creating lasting value.
                      We are not just building companies; we are{" "}
                      <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent font-semibold">
                        building the future of Africa
                      </span>.
                      <span className="text-accent font-semibold">"</span>
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
                        <p className="text-accent font-semibold text-lg">
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
                              className="px-3 py-1 bg-gradient-to-r from-accent/20 to-amber-400/20 rounded-full text-sm text-accent border border-accent/30"
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto mb-4 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-amber-400 flex items-center justify-center"
                >
                  <achievement.icon className="h-6 w-6 text-black" />
                </motion.div>

                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  {achievement.value}
                </motion.div>

                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
