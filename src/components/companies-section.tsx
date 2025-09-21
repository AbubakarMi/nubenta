
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';
import { Cpu, ArrowRight, Lightbulb, Sparkles, Award, Globe, Rocket, Zap, Building2, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const companies = [
  {
    id: 1,
    name: "Nubenta Technology",
    category: "World-Class Tech Innovation",
    description: "Leading global technology transformation with cutting-edge AI, enterprise solutions, and next-generation software development",
    icon: Cpu,
    color: "from-[hsl(220_85%_55%)] to-[hsl(45_85%_75%)]",
    features: ["AI & Machine Learning", "Enterprise Cloud Solutions", "Digital Transformation", "Custom Software Development", "DevOps & Infrastructure", "Cybersecurity Solutions"],
    stats: { projects: "1000+", clients: "500+", satisfaction: "99.8%" },
    link: "/technology",
    gradient: "from-[hsl(220_85%_55%_/_0.15)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(45_85%_75%_/_0.15)]",
    isPremium: true
  },
  {
    id: 2,
    name: "Nubenta Fintech",
    category: "Financial Technology",
    description: "Revolutionizing financial services with blockchain, DeFi, and advanced payment solutions",
    icon: TrendingUp,
    color: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]",
    features: ["Blockchain Solutions", "Payment Systems", "DeFi Platforms"],
    stats: { transactions: "Coming Soon", secured: "Coming Soon", uptime: "Coming Soon" },
    link: "#",
    gradient: "from-[hsl(160_85%_45%_/_0.15)] via-[hsl(220_85%_55%_/_0.1)] to-[hsl(15_85%_65%_/_0.15)]",
    isComingSoon: true
  },
  {
    id: 3,
    name: "Nubenta Healthcare",
    category: "Health & Life Sciences",
    description: "Transforming healthcare through telemedicine, AI diagnostics, and patient management systems",
    icon: Users,
    color: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]",
    features: ["Telemedicine", "AI Diagnostics", "Patient Management"],
    stats: { patients: "Coming Soon", hospitals: "Coming Soon", accuracy: "Coming Soon" },
    link: "#",
    gradient: "from-[hsl(45_85%_75%_/_0.15)] via-[hsl(15_85%_65%_/_0.1)] to-[hsl(160_85%_45%_/_0.15)]",
    isComingSoon: true
  },
  {
    id: 4,
    name: "Nubenta Smart Cities",
    category: "Urban Innovation",
    description: "Building tomorrow's cities with IoT, smart infrastructure, and sustainable technologies",
    icon: Building2,
    color: "from-[hsl(15_85%_65%)] to-[hsl(220_85%_55%)]",
    features: ["IoT Infrastructure", "Smart Grid", "Urban Analytics"],
    stats: { cities: "Coming Soon", sensors: "Coming Soon", efficiency: "Coming Soon" },
    link: "#",
    gradient: "from-[hsl(15_85%_65%_/_0.15)] via-[hsl(45_85%_75%_/_0.1)] to-[hsl(220_85%_55%_/_0.15)]",
    isComingSoon: true
  },
  {
    id: 5,
    name: "Future Ventures",
    category: "Innovation Lab",
    description: "Exploring frontier technologies: Quantum computing, space tech, and emerging innovations",
    icon: Rocket,
    color: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]",
    features: ["R&D Labs", "Prototype Development", "Tech Incubation"],
    stats: { patents: "Coming Soon", startups: "Coming Soon", funding: "Coming Soon" },
    link: "#",
    gradient: "from-[hsl(220_85%_55%_/_0.15)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(45_85%_75%_/_0.15)]",
    isComingSoon: true
  }
];

export function CompaniesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      id="companies"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Elegant Gradient Foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

        {/* Animated Background Gradients */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, hsl(220 85% 55% / 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, hsl(160 85% 45% / 0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, hsl(45 85% 75% / 0.04) 0%, transparent 50%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Optimized Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        {/* World-Class Header */}
        <ScrollReveal className="text-center mb-20">
          <motion.div
            className="relative inline-block mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 -m-8 bg-gradient-to-r from-[hsl(220_85%_55%_/_0.2)] via-[hsl(160_85%_45%_/_0.15)] to-[hsl(45_85%_75%_/_0.2)] rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Globe className="h-20 w-20 text-[hsl(160_85%_45%)] mx-auto relative z-10" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="relative block">
              <motion.span
                className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Global
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-[hsl(160_85%_45%)] via-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Enterprises
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: "hsl(210 25% 85%)" }}
          >
            Transforming industries through
            <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent font-medium"> cutting-edge innovation </span>
            and world-class expertise.
          </motion.p>
        </ScrollReveal>

        {/* Premium Company Cards - Animated Carousel */}
        <div className="relative mb-20 overflow-hidden">
          {/* World-Class Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                i % 3 === 0 ? 'from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]' :
                i % 3 === 1 ? 'from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]' :
                'from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]'
              } shadow-lg`} />
            </motion.div>
          ))}
          {/* Animated Container */}
          {/* Elegant gradient borders */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(160_85%_45%_/_0.1)] to-transparent pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(220_25%_6%)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(220_25%_6%)] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -420 * companies.length, 0]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${companies.length * 2 * 420}px`
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* Duplicate cards for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: "400px" }}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.1)",
                    "0 20px 60px rgba(100,200,255,0.2)",
                    "0 10px 30px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{
                  delay: (index % companies.length) * 0.1,
                  duration: 0.8,
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.08,
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 80px rgba(100,200,255,0.4)",
                  transition: {
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300
                  }
                }}
              >
              {company.isPremium ? (
                // Premium World-Class Technology Card
                <Link href={company.link} className="group block h-full">
                  <motion.div
                    className="relative h-full"
                    onMouseMove={(e) => handleMouseMove(e, company.id)}
                    onHoverStart={() => setHoveredCard(company.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.05, y: -12 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl border-2 border-[hsl(160_85%_45%_/_0.4)] p-6 overflow-hidden shadow-2xl">

                      {/* Premium Badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] px-4 py-2 rounded-full z-20"
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 0 20px hsl(45 85% 75% / 0.5)",
                            "0 0 40px hsl(160 85% 45% / 0.6)",
                            "0 0 20px hsl(45 85% 75% / 0.5)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-[hsl(220_25%_6%)] font-bold text-sm flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          WORLD CLASS
                        </span>
                      </motion.div>

                      {/* Enhanced Mouse Follow Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: hoveredCard === company.id
                            ? `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(160 85% 45% / 0.25), transparent)`
                            : 'transparent'
                        }}
                      />

                      {/* Enhanced Animated Background Glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${company.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Premium Header */}
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                            className={`p-6 rounded-2xl bg-gradient-to-br ${company.color} shadow-2xl`}
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                            animate={{
                              boxShadow: [
                                "0 0 30px hsl(220 85% 55% / 0.3)",
                                "0 0 50px hsl(45 85% 75% / 0.4)",
                                "0 0 30px hsl(220 85% 55% / 0.3)"
                              ]
                            }}
                          >
                            <company.icon className="h-10 w-10 text-white" />
                          </motion.div>

                          <motion.div
                            className="flex flex-col items-end gap-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div
                              className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] p-3 rounded-xl shadow-lg"
                              animate={{
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Zap className="h-5 w-5 text-white" />
                            </motion.div>
                            <span className="text-xs font-bold bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                              FLAGSHIP
                            </span>
                          </motion.div>
                        </div>

                        {/* Enhanced Content */}
                        <div className="flex-grow">
                          <motion.h3
                            className="text-3xl font-black mb-3 tracking-tight"
                            style={{ color: "hsl(210 25% 98%)" }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {company.name}
                          </motion.h3>
                          <motion.p
                            className="text-lg font-bold mb-6 bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent"
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{ backgroundSize: "200% 200%" }}
                          >
                            {company.category}
                          </motion.p>
                          <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(210 25% 85%)" }}>
                            {company.description}
                          </p>

                          {/* Enhanced Features Grid */}
                          <div className="mb-4">
                            <div className="grid grid-cols-2 gap-2">
                              {company.features.map((feature, idx) => (
                                <motion.span
                                  key={idx}
                                  className="px-3 py-1 bg-gradient-to-r from-white/15 to-white/10 rounded-lg text-xs font-semibold border border-[hsl(160_85%_45%_/_0.3)] backdrop-blur-sm"
                                  style={{ color: "hsl(210 25% 95%)" }}
                                  whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "hsl(160 85% 45% / 0.1)"
                                  }}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <span className="flex items-center gap-2">
                                    <Lightbulb className="h-2 w-2 text-[hsl(45_85%_75%)]" />
                                    {feature}
                                  </span>
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Enhanced Stats */}
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            {Object.entries(company.stats).map(([key, value], idx) => (
                              <motion.div
                                key={key}
                                className="text-center p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
                                whileHover={{ scale: 1.1, y: -5 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                              >
                                <motion.div
                                  className="text-lg font-black bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                                  animate={{
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: idx * 0.5
                                  }}
                                >
                                  {value}
                                </motion.div>
                                <div className="text-xs capitalize font-medium" style={{ color: "hsl(210 25% 75%)" }}>
                                  {key}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Premium CTA */}
                        <motion.div
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.15)] to-[hsl(45_85%_75%_/_0.15)] rounded-xl border border-[hsl(160_85%_45%_/_0.3)]"
                          whileHover={{
                            backgroundColor: "hsl(160 85% 45% / 0.2)",
                            scale: 1.02
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="font-bold text-base" style={{ color: "hsl(160 85% 45%)" }}>
                            Explore Our Technology
                          </span>
                          <motion.div
                            whileHover={{ x: 8, scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-5 w-5" style={{ color: "hsl(160 85% 45%)" }} />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ) : company.isComingSoon ? (
                // Coming Soon Card
                <motion.div
                  className="relative group h-full"
                  onHoverStart={() => setHoveredCard(company.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 overflow-hidden shadow-2xl">
                    {/* Animated Background Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${company.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center min-h-[250px]">
                      {/* Icon with Effects */}
                      <motion.div
                        className="relative mb-4"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`p-6 rounded-2xl bg-gradient-to-br ${company.color} shadow-2xl`}>
                          <company.icon className="h-12 w-12 text-white" />
                        </div>
                        <motion.div
                          className="absolute -inset-4 bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] rounded-full blur-xl opacity-50"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(210 25% 98%)" }}>
                        {company.name}
                      </h3>
                      <p className="text-base font-medium mb-3 bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                        {company.category}
                      </p>
                      <p className="text-center leading-relaxed mb-4 text-sm" style={{ color: "hsl(210 25% 80%)" }}>
                        {company.description}
                      </p>

                      {/* Coming Soon Badge */}
                      <motion.div
                        className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] px-4 py-2 rounded-full"
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 0 20px hsl(45 85% 75% / 0.3)",
                            "0 0 40px hsl(160 85% 45% / 0.4)",
                            "0 0 20px hsl(45 85% 75% / 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-[hsl(220_25%_6%)] font-bold flex items-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          Coming Soon
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Regular Company Card
                <Link href={company.link} className="group block h-full">
                  <motion.div
                    className="relative h-full"
                    onMouseMove={(e) => handleMouseMove(e, company.id)}
                    onHoverStart={() => setHoveredCard(company.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative h-full bg-gradient-to-br from-white/12 to-white/6 backdrop-blur-xl rounded-2xl border border-white/25 p-6 overflow-hidden shadow-2xl">

                      {/* Mouse Follow Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: hoveredCard === company.id
                            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(160 85% 45% / 0.15), transparent)`
                            : 'transparent'
                        }}
                      />

                      {/* Animated Background Glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${company.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                            className={`p-4 rounded-xl bg-gradient-to-br ${company.color} shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <company.icon className="h-8 w-8 text-white" />
                          </motion.div>

                          <motion.div
                            className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] p-2 rounded-lg shadow-lg"
                            animate={{
                              rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Award className="h-4 w-4 text-[hsl(220_25%_6%)]" />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(210 25% 98%)" }}>
                            {company.name}
                          </h3>
                          <p className="text-sm font-medium mb-3 bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                            {company.category}
                          </p>
                          <p className="leading-relaxed mb-4 text-sm" style={{ color: "hsl(210 25% 80%)" }}>
                            {company.description}
                          </p>

                          {/* Features */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {company.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20"
                                  style={{ color: "hsl(210 25% 90%)" }}
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            {Object.entries(company.stats).map(([key, value], idx) => (
                              <div key={key} className="text-center">
                                <div className="text-base font-bold bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                                  {value}
                                </div>
                                <div className="text-xs capitalize" style={{ color: "hsl(210 25% 70%)" }}>
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.div
                          className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10"
                          whileHover={{ backgroundColor: "hsl(160 85% 45% / 0.1)" }}
                        >
                          <span className="font-semibold" style={{ color: "hsl(160 85% 45%)" }}>
                            Explore Division
                          </span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-5 w-5" style={{ color: "hsl(160 85% 45%)" }} />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global Impact Stats */}
        <ScrollReveal delay={1000} className="text-center">
          <motion.h3
            className="text-4xl md:text-6xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
              Global Impact
            </span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Countries Served", icon: Globe, gradient: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]" },
              { number: "500+", label: "Enterprise Clients", icon: Building2, gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]" },
              { number: "1000+", label: "Projects Delivered", icon: Rocket, gradient: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]" },
              { number: "99.8%", label: "Client Satisfaction", icon: Award, gradient: "from-[hsl(220_85%_55%)] to-[hsl(45_85%_75%)]" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.08,
                  y: -12
                }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/15 group cursor-pointer"
              >
                <motion.div
                  className="mb-4"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className={`h-8 w-8 mx-auto bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                </motion.div>

                <motion.div
                  className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
