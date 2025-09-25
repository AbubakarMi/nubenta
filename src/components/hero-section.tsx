"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Crown, Gem } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      id="hero"
      className="relative h-screen min-h-[100vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Sophisticated Background System */}
      <div className="absolute inset-0 -z-20">
        {/* Primary Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Elegant Radial Overlays */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 25% 25%, hsl(45 85% 75% / 0.08) 0%, transparent 50%),
               radial-gradient(circle at 75% 75%, hsl(160 85% 45% / 0.06) 0%, transparent 50%),
               radial-gradient(circle at 50% 10%, hsl(220 85% 55% / 0.04) 0%, transparent 40%)`,

              `radial-gradient(circle at 75% 25%, hsl(45 85% 75% / 0.08) 0%, transparent 50%),
               radial-gradient(circle at 25% 75%, hsl(15 85% 65% / 0.06) 0%, transparent 50%),
               radial-gradient(circle at 50% 90%, hsl(160 85% 45% / 0.04) 0%, transparent 40%)`,

              `radial-gradient(circle at 25% 25%, hsl(45 85% 75% / 0.08) 0%, transparent 50%),
               radial-gradient(circle at 75% 75%, hsl(160 85% 45% / 0.06) 0%, transparent 50%),
               radial-gradient(circle at 50% 10%, hsl(220 85% 55% / 0.04) 0%, transparent 40%)`
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle Aurora Effect */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(45deg, transparent 45%, hsl(45 85% 75% / 0.03) 50%, transparent 55%)`
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Optimized Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] opacity-60" />
          </motion.div>
        ))}

        {/* Simplified Geometric Shapes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
            }}
            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[hsl(160_85%_45%_/_0.2)] to-[hsl(220_85%_55%_/_0.2)] backdrop-blur-sm" />
          </motion.div>
        ))}
      </div>

      {/* Sophisticated Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/2 to-black/5 -z-10" />

      <div className="container px-6 md:px-8 z-10 relative max-w-7xl">
        <div className="flex flex-col items-center space-y-16">

          {/* Elegant Crown Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -45, y: -50 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3
            }}
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            {/* Sophisticated Glow */}
            <motion.div
              className="absolute inset-0 -m-8 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.15)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(220_85%_55%_/_0.15)] rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <Crown className="h-16 w-16 md:h-20 md:w-20 text-[hsl(45_85%_75%)] relative z-10 drop-shadow-2xl" />

            {/* Floating Gems */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${50 + Math.sin((i * Math.PI * 2) / 4) * 80}%`,
                  top: `${50 + Math.cos((i * Math.PI * 2) / 4) * 80}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                <Gem className="h-3 w-3 text-[hsl(160_85%_45%)]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Sophisticated Typography */}
          <div className="relative text-center max-w-5xl">
            {/* Elegant Aura */}
            <motion.div
              className="absolute -inset-16 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.08)] via-transparent to-[hsl(160_85%_45%_/_0.08)] rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Title */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.8
              }}
              className="relative z-10"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.9]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="block bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 200%",
                    filter: "drop-shadow(0 0 40px hsl(45 85% 75% / 0.3))"
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  NUBENTA
                </motion.span>

                <motion.span
                  className="block mt-2 bg-gradient-to-r from-[hsl(210_25%_98%)] via-[hsl(160_85%_45%)] to-[hsl(15_85%_65%)] bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 200%",
                    filter: "drop-shadow(0 0 30px hsl(160 85% 45% / 0.3))"
                  }}
                  animate={{
                    backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  GROUP
                </motion.span>
              </motion.h1>

              {/* Sophisticated Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-8 max-w-3xl mx-auto"
              >
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed"
                  style={{ color: "hsl(210 25% 90%)" }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-[hsl(210_25%_98%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent font-semibold"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Pioneering Excellence
                  </motion.span>
                  <motion.span
                    className="mx-4 text-[hsl(45_85%_75%)]"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✦
                  </motion.span>
                  <motion.span
                    className="bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(15_85%_65%)] bg-clip-text text-transparent font-semibold"
                    animate={{
                      backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Defining Tomorrow
                  </motion.span>
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Elegant Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="grid grid-cols-3 gap-8 md:gap-16 text-center max-w-4xl mx-auto"
          >
            {[
              { number: "100+", label: "Innovations", gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" },
              { number: "50+", label: "Companies", gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]" },
              { number: "10M+", label: "Lives Transformed", gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 2.5 + index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8
                }}
                className="relative group"
              >
                {/* Elegant Glow */}
                <motion.div
                  className={`absolute inset-0 -m-4 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-20`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.8
                  }}
                />

                {/* Sophisticated Card */}
                <div className="relative bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-500">
                  <motion.div
                    className={`text-3xl md:text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>

                  <div className="text-white/70 group-hover:text-white/90 transition-colors font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* World-Class CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="relative group"
          >
            {/* Multi-layered Sophisticated Glow */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.4)] via-[hsl(160_85%_45%_/_0.3)] to-[hsl(220_85%_55%_/_0.4)] rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.3)] via-[hsl(220_85%_55%_/_0.2)] to-[hsl(45_85%_75%_/_0.3)] rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.2, 0.4],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Premium Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-[hsl(15_85%_65%)] to-[hsl(220_85%_55%)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/20"
              animate={{
                y: [0, -3, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Premium
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] hover:from-[hsl(45_85%_70%)] hover:to-[hsl(160_85%_40%)] text-[hsl(220_25%_6%)] font-bold rounded-full px-12 py-8 text-xl shadow-3xl transition-all duration-500 border-2 border-white/20 hover:border-white/40 group overflow-hidden"
              >
                <Link href="#companies" className="flex items-center gap-4 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crown className="h-6 w-6" />
                  </motion.div>

                  <span className="relative">
                    Discover Excellence
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </span>

                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="h-6 w-6" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            {/* Floating Elements Around CTA */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${i % 2 === 0 ? '-20px' : '120px'}`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] blur-sm`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Refined Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex flex-col items-center gap-3 text-white/50"
            >
              <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
              <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-0.5 h-2 bg-white/40 rounded-full mt-1.5"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
