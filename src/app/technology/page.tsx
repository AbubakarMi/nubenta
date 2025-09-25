"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TechHeader } from '@/components/technology/tech-header';
import { TechFooter } from '@/components/technology/tech-footer';
import { motion } from 'framer-motion';
import {
  Code, Brain, Cloud, Shield, Database, Layers,
  ArrowRight, CheckCircle, Star, Users, Globe,
  Award, Rocket, ChevronRight, Mail, Phone,
  Lightbulb, Target, TrendingUp, Zap, Heart,
  Building, Factory, ShoppingCart, Banknote, Quote
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Enterprise-grade AI solutions that transform raw data into intelligent business decisions.",
    features: ["Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"],
    color: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, resilient cloud infrastructure designed for global enterprises.",
    features: ["Multi-Cloud", "Kubernetes", "Serverless", "DevOps"],
    color: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  },
  {
    icon: Layers,
    title: "Custom Development",
    description: "End-to-end software development creating bespoke applications.",
    features: ["Full-Stack", "Mobile Apps", "APIs", "Web Apps"],
    color: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security frameworks protecting enterprise assets.",
    features: ["Threat Detection", "Compliance", "Zero Trust", "Security Audits"],
    color: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data infrastructure and advanced analytics platforms.",
    features: ["Big Data", "Real-time Processing", "BI Dashboards", "Data Lakes"],
    color: "from-[hsl(15_85%_65%)] to-[hsl(160_85%_45%)]"
  },
  {
    icon: Target,
    title: "Digital Transformation",
    description: "Strategic technology leadership guiding digital modernization.",
    features: ["Strategy", "Process Automation", "Change Management", "Training"],
    color: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  }
];

const technologies = [
  { name: "Python", level: 98 },
  { name: "React", level: 96 },
  { name: "AWS", level: 94 },
  { name: "TypeScript", level: 97 },
  { name: "Node.js", level: 95 },
  { name: "TensorFlow", level: 92 }
];

const solutions = [
  {
    name: "AI-Powered Fintech",
    icon: TrendingUp,
    description: "Revolutionary blockchain and AI solutions transforming financial services",
    technologies: ["Blockchain", "DeFi", "Smart Contracts", "AI Trading"],
    impact: "300% ROI"
  },
  {
    name: "Healthcare AI",
    icon: Heart,
    description: "Advanced diagnostic AI and telemedicine platforms saving lives",
    technologies: ["Computer Vision", "NLP", "IoMT", "Predictive Analytics"],
    impact: "99.7% Accuracy"
  },
  {
    name: "Smart Manufacturing",
    icon: Factory,
    description: "Industry 4.0 solutions with IoT, robotics, and predictive maintenance",
    technologies: ["IoT", "Digital Twins", "Robotics", "Edge Computing"],
    impact: "40% Efficiency"
  },
  {
    name: "Quantum Computing",
    icon: Zap,
    description: "Next-generation quantum algorithms for complex problem solving",
    technologies: ["Quantum ML", "Quantum Cryptography", "Optimization", "Simulation"],
    impact: "1000x Speed"
  },
  {
    name: "AR/VR Experiences",
    icon: Globe,
    description: "Immersive extended reality solutions for training and collaboration",
    technologies: ["WebXR", "Unity", "Unreal Engine", "Spatial Computing"],
    impact: "85% Engagement"
  },
  {
    name: "Autonomous Systems",
    icon: Rocket,
    description: "Self-driving and autonomous decision-making systems",
    technologies: ["Computer Vision", "LIDAR", "Sensor Fusion", "Deep RL"],
    impact: "Zero Accidents"
  }
];

const techStats = [
  { number: "50TB+", label: "Data Processed Daily", icon: Database },
  { number: "99.99%", label: "System Uptime", icon: Shield },
  { number: "<10ms", label: "API Response Time", icon: Zap },
  { number: "1000+", label: "AI Models Deployed", icon: Brain }
];

const achievements = [
  {
    title: "Innovation Excellence",
    description: "Leading breakthrough research in AI and quantum computing applications",
    icon: Lightbulb,
    metrics: ["50+ Patents Filed", "12 Research Papers", "Industry Recognition"]
  },
  {
    title: "Global Infrastructure",
    description: "World-class distributed systems serving millions of users globally",
    icon: Globe,
    metrics: ["99.99% Uptime", "Sub-10ms Response", "Global CDN Network"]
  },
  {
    title: "Security Leadership",
    description: "Pioneering zero-trust architecture and advanced threat prevention",
    icon: Shield,
    metrics: ["Zero Breaches", "SOC2 Certified", "Military-Grade Encryption"]
  }
];

const techStack = [
  {
    category: "AI & Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "Vertex AI"],
    color: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]"
  },
  {
    category: "Cloud & Infrastructure",
    technologies: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Docker", "Terraform"],
    color: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  },
  {
    category: "Frontend & Mobile",
    technologies: ["React", "Next.js", "TypeScript", "React Native", "Flutter"],
    color: "from-[hsl(45_85%_75%)] to-[hsl(15_85%_65%)]"
  },
  {
    category: "Backend & Data",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-[hsl(15_85%_65%)] to-[hsl(220_85%_55%)]"
  }
];

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <TechHeader />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden h-screen min-h-[100vh] flex items-center justify-center">
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
        </div>

        {/* Dynamic Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] blur-sm"
              style={{
                boxShadow: `0 0 20px hsl(${45 + Math.random() * 115} 85% ${60 + Math.random() * 25}% / 0.5)`
              }}
            />
          </motion.div>
        ))}

        {/* Sophisticated Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/2 to-black/5 -z-10" />

        <div className="container px-6 md:px-8 z-10 relative max-w-7xl">
          <div className="flex flex-col items-center space-y-16">
            {/* Elegant Technology Icon */}
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

              <Code className="h-16 w-16 md:h-20 md:w-20 text-[hsl(45_85%_75%)] relative z-10 drop-shadow-2xl" />
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
                    WORLD-CLASS
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
                    TECHNOLOGY
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
                      Engineering Excellence
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
                      Transforming Tomorrow
                    </motion.span>
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>

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
                ✨ Premium Tech
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    <Link href="#services" className="flex items-center gap-4 relative z-10">
                      <motion.div
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Code className="h-6 w-6" />
                      </motion.div>

                      <span className="relative">
                        Explore Services
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
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="border-2 border-[hsl(160_85%_45%)] text-[hsl(160_85%_45%)] hover:bg-[hsl(160_85%_45%)] hover:text-white rounded-full px-12 py-8 text-xl font-bold transition-all duration-500"
                  >
                    <Link href="#contact" className="flex items-center gap-4">
                      <Rocket className="h-6 w-6" />
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>

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
      </section>

      {/* Elegant Statistics */}
      <section className="py-24 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center max-w-5xl mx-auto"
          >
            {techStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.2,
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
                  className="absolute inset-0 -m-4 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] rounded-2xl blur-xl opacity-20"
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
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] shadow-2xl">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>

                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent"
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
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Our Premium
              </span>
              <br />
              <span className="text-white">Services</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Comprehensive technology solutions that drive innovation and deliver measurable business results.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                {/* Sophisticated Glow Effect */}
                <motion.div
                  className={`absolute inset-0 -m-2 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-all duration-500`}
                  whileHover={{ scale: 1.1 }}
                />
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-r ${service.color} shadow-2xl`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-bold text-white mb-4 group-hover:text-[hsl(45_85%_75%)] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[hsl(160_85%_45%)] flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center text-[hsl(160_85%_45%)] hover:text-[hsl(160_85%_50%)] cursor-pointer group-hover:translate-x-2 transition-all duration-300"
                  whileHover={{ x: 8 }}
                >
                  <span className="font-semibold mr-2">Learn More</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                Technology
              </span>
              <br />
              <span className="text-white">Excellence</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Cutting-edge technologies powering world-class solutions.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 rounded-xl bg-gradient-to-br from-white/8 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer backdrop-blur-sm"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 -m-2 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.2)] to-[hsl(45_85%_75%_/_0.2)] opacity-0 group-hover:opacity-100 blur-xl rounded-xl transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                />

                <div className="flex justify-between items-center mb-4 relative z-10">
                  <motion.h3
                    className="font-bold text-white group-hover:text-[hsl(45_85%_75%)] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.h3>
                  <motion.span
                    className="text-lg font-black bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {tech.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 relative overflow-hidden">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] rounded-full shadow-lg"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-32, 400] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(15_85%_65%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Pioneering next-generation technologies that define tomorrow's digital landscape.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer backdrop-blur-sm relative overflow-hidden"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 -m-2 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.2)] to-[hsl(160_85%_45%_/_0.2)] opacity-0 group-hover:opacity-100 blur-xl rounded-xl transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] flex items-center justify-center shadow-2xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.span
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] text-white text-sm font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {solution.impact}
                  </motion.span>
                </div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-bold text-white mb-4 group-hover:text-[hsl(45_85%_75%)] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {solution.name}
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                >
                  {solution.description}
                </motion.p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center text-[hsl(160_85%_45%)] hover:text-[hsl(160_85%_50%)] cursor-pointer group-hover:translate-x-2 transition-all duration-300"
                  whileHover={{ x: 8 }}
                >
                  <span className="font-semibold mr-2">Explore Technology</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                Technical
              </span>
              <br />
              <span className="text-white">Achievements</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Pushing the boundaries of technology innovation and excellence.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer backdrop-blur-sm relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 -m-2 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.1)] to-[hsl(45_85%_75%_/_0.1)] opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                />

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] shadow-2xl"
                >
                  <achievement.icon className="w-7 h-7 text-white relative z-10" />
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-white mb-4 group-hover:text-[hsl(45_85%_75%)] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                  {achievement.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                >
                  {achievement.description}
                </motion.p>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                >
                  {achievement.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[hsl(160_85%_45%)] flex-shrink-0" />
                      <span className="text-sm text-gray-400">{metric}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(15_85%_65%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Advanced
              </span>
              <br />
              <span className="text-white">Tech Stack</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Leveraging cutting-edge technologies to build the future.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer backdrop-blur-sm"
              >
                <motion.h3
                  className="text-2xl font-bold text-white mb-6 group-hover:text-[hsl(45_85%_75%)] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {stack.category}
                </motion.h3>

                <div className="flex flex-wrap gap-3">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${stack.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase Section */}
      <section className="py-24 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Experience our latest breakthrough technologies in action.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
                {/* Simulated Code Editor */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-sm ml-4">AI_Assistant.py</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <motion.div
                      className="text-purple-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-blue-400">import</span> nubenta_ai <span className="text-blue-400">as</span> ai
                    </motion.div>
                    <motion.div
                      className="text-green-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <span className="text-blue-400">def</span> <span className="text-yellow-400">revolutionize_business</span>():
                    </motion.div>
                    <motion.div
                      className="text-gray-300 ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      model = ai.<span className="text-purple-400">create_intelligence</span>()
                    </motion.div>
                    <motion.div
                      className="text-gray-300 ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      insights = model.<span className="text-purple-400">analyze_future</span>()
                    </motion.div>
                    <motion.div
                      className="text-gray-300 ml-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      <span className="text-blue-400">return</span> <span className="text-green-400">"Business Transformed ✨"</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {[Brain, Code, Database, Cloud].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${10 + (index % 2) * 70}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] flex items-center justify-center shadow-lg">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                    AI-Powered Development
                  </span>
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our proprietary AI development framework accelerates project delivery by 10x while maintaining enterprise-grade quality and security.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Automated code generation and optimization",
                  "Real-time performance monitoring and scaling",
                  "Advanced security threat detection and prevention",
                  "Intelligent user experience personalization"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[hsl(160_85%_45%)] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] hover:from-[hsl(160_85%_50%)] hover:to-[hsl(45_85%_70%)] text-white border-0 rounded-full px-8 py-4 text-lg font-bold shadow-2xl"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Experience the Future
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Glow */}
            <motion.div
              className="absolute -inset-16 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.1)] via-[hsl(160_85%_45%_/_0.05)] to-[hsl(220_85%_55%_/_0.1)] rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                Build the Future
              </span>
              <br />
              <span className="text-white">With Us</span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Partner with us to leverage cutting-edge technology and transform your vision into reality.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white border-0 rounded-full px-10 py-6 text-lg font-bold shadow-2xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Start Innovation
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="border-2 border-[hsl(160_85%_45%)] text-[hsl(160_85%_45%)] hover:bg-[hsl(160_85%_45%)] hover:text-white rounded-full px-10 py-6 text-lg font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TechFooter />
    </div>
  );
}