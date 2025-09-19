"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Quote, Star, Heart, Award, Sparkles } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "Fortune 500 Company",
    content: "Nubenta Group transformed our entire digital infrastructure. Their innovative approach and cutting-edge solutions increased our efficiency by 300%. Absolutely phenomenal work!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b94c?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(45_85%_75%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]",
    position: { x: 10, y: 20 },
    size: "large",
    path: "ellipse"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO, Global Innovations",
    company: "Tech Startup",
    content: "Working with Nubenta was a game-changer. They delivered beyond our expectations and their team's expertise is unmatched. The results speak for themselves - 250% growth in 6 months!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(160_85%_45%)] via-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)]",
    position: { x: 70, y: 10 },
    size: "medium",
    path: "figure8"
  },
  {
    id: 3,
    name: "Dr. Amina Hassan",
    role: "Director of Operations",
    company: "HealthCare Plus",
    content: "Nubenta's healthcare solution revolutionized our patient management system. The seamless integration and user-friendly interface have improved our service quality tremendously.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(220_85%_55%)] via-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]",
    position: { x: 20, y: 60 },
    size: "small",
    path: "circular"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Founder & CEO",
    company: "E-Commerce Giant",
    content: "The e-commerce platform Nubenta built for us is simply extraordinary. Sales increased by 400% in the first quarter alone. Their attention to detail is remarkable!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(15_85%_65%)] via-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]",
    position: { x: 80, y: 70 },
    size: "medium",
    path: "wave"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Head of Digital Transformation",
    company: "Banking Solutions",
    content: "Nubenta's fintech expertise helped us modernize our banking infrastructure. The security and performance improvements have been outstanding. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(45_85%_75%)] via-[hsl(15_85%_65%)] to-[hsl(220_85%_55%)]",
    position: { x: 50, y: 40 },
    size: "large",
    path: "infinity"
  },
  {
    id: 6,
    name: "David Park",
    role: "Innovation Director",
    company: "Smart Cities Inc",
    content: "Revolutionary work! Nubenta's IoT solutions transformed our entire smart city infrastructure. 10/10 would recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(160_85%_45%)] via-[hsl(220_85%_55%)] to-[hsl(45_85%_75%)]",
    position: { x: 5, y: 85 },
    size: "small",
    path: "spiral"
  },
  {
    id: 7,
    name: "Maria Santos",
    role: "CTO, EduTech Solutions",
    company: "Education Pioneer",
    content: "Mind-blowing educational platform! Student engagement increased by 500%. Nubenta is simply the best!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    gradient: "from-[hsl(220_85%_55%)] via-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)]",
    position: { x: 90, y: 30 },
    size: "medium",
    path: "orbit"
  }
];

const getCardSize = (size: string) => {
  switch (size) {
    case 'large': return { width: 380, height: 280 };
    case 'medium': return { width: 320, height: 220 };
    case 'small': return { width: 280, height: 180 };
    default: return { width: 320, height: 220 };
  }
};

// Sophisticated motion path calculations
const getMotionPath = (path: string, baseX: number, baseY: number, time: number) => {
  const amplitude = 80; // Larger movement range
  const frequency = 0.3; // Smooth, slow movement

  switch (path) {
    case 'ellipse':
      return {
        x: baseX + amplitude * Math.cos(time * frequency),
        y: baseY + amplitude * 0.6 * Math.sin(time * frequency)
      };

    case 'figure8':
      return {
        x: baseX + amplitude * Math.cos(time * frequency),
        y: baseY + amplitude * 0.5 * Math.sin(time * frequency * 2)
      };

    case 'circular':
      return {
        x: baseX + amplitude * 0.7 * Math.cos(time * frequency),
        y: baseY + amplitude * 0.7 * Math.sin(time * frequency)
      };

    case 'wave':
      return {
        x: baseX + amplitude * Math.sin(time * frequency * 0.5),
        y: baseY + amplitude * 0.4 * Math.cos(time * frequency)
      };

    case 'infinity':
      return {
        x: baseX + amplitude * Math.cos(time * frequency),
        y: baseY + amplitude * 0.4 * Math.sin(time * frequency * 2)
      };

    case 'spiral':
      const spiralRadius = amplitude * 0.6 * (1 + 0.3 * Math.sin(time * frequency * 0.2));
      return {
        x: baseX + spiralRadius * Math.cos(time * frequency),
        y: baseY + spiralRadius * Math.sin(time * frequency)
      };

    case 'orbit':
      return {
        x: baseX + amplitude * 0.8 * Math.cos(time * frequency + Math.PI / 4),
        y: baseY + amplitude * 0.8 * Math.sin(time * frequency + Math.PI / 4)
      };

    default:
      return { x: baseX, y: baseY };
  }
};

export function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden min-h-[120vh]"
    >
      {/* Sophisticated Background */}
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

        {/* Floating Elegant Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        {/* Sophisticated Header */}
        <ScrollReveal className="text-center mb-24">
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
            <Quote className="h-16 w-16 text-[hsl(45_85%_75%)] mx-auto relative z-10" />
          </motion.div>

          <motion.h2
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
                Client Excellence
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
                Testimonials
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
            Transforming visions into reality.
            <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent font-medium"> Exceptional results </span>
            from extraordinary partnerships.
          </motion.p>
        </ScrollReveal>

        {/* Passing Animated Testimonial Cards */}
        <div className="relative h-[80vh] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute group"
              style={{
                width: "350px",
                height: "280px",
              }}
              initial={{
                x: -400,
                y: 50 + index * 80,
                opacity: 0,
                scale: 0.8
              }}
              animate={hoveredCard === testimonial.id ? {
                scale: 1.1,
                zIndex: 50
              } : {
                x: [
                  -400,
                  typeof window !== 'undefined' ? window.innerWidth + 400 : 1600,
                  -400
                ],
                opacity: [0, 1, 1, 1, 0],
                scale: [0.8, 1, 1, 1, 0.8]
              }}
              transition={hoveredCard === testimonial.id ? {
                duration: 0.3
              } : {
                duration: 25 + index * 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 5
              }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Compact Elegant Card */}
              <div className="relative h-full bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-xl rounded-xl border border-white/25 p-6 overflow-hidden shadow-2xl">

                {/* Subtle Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Compact Quote Icon */}
                <motion.div
                  className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Quote className="w-5 h-5 text-[hsl(220_25%_6%)]" />
                </motion.div>

                {/* Compact Content */}
                <div className="relative z-10 h-full flex flex-col">

                  {/* Compact Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <Star className="w-4 h-4 text-[hsl(45_85%_75%)] fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Compact Quote */}
                  <div className="flex-grow mb-4">
                    <blockquote
                      className="text-sm leading-relaxed font-light italic"
                      style={{ color: "hsl(210 25% 95%)" }}
                    >
                      "{testimonial.content.length > 120
                        ? testimonial.content.substring(0, 120) + '...'
                        : testimonial.content}"
                    </blockquote>
                  </div>

                  {/* Compact Author Section */}
                  <div className="flex items-center gap-3">
                    {/* Small Avatar */}
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] p-0.5 shadow-lg">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>

                      {/* Small Sparkle */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] rounded-full flex items-center justify-center"
                        animate={{
                          scale: [1, 1.3, 1],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <Sparkles className="w-2 h-2 text-white" />
                      </motion.div>
                    </div>

                    {/* Compact Author Info */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-bold text-sm truncate"
                        style={{ color: "hsl(210 25% 98%)" }}
                      >
                        {testimonial.name}
                      </h4>

                      <p
                        className="text-xs truncate"
                        style={{ color: "hsl(45 85% 75%)" }}
                      >
                        {testimonial.role}
                      </p>

                      <p
                        className="text-xs truncate"
                        style={{ color: "hsl(210 25% 70%)" }}
                      >
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Small Badge */}
                    <motion.div
                      className="bg-gradient-to-br from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)] p-2 rounded-lg shadow-lg"
                      animate={{
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                    >
                      <Award className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Moving Trail Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${testimonial.gradient.split(' ')[1]} 50%, transparent 100%)`,
                    opacity: 0.1
                  }}
                  animate={{
                    x: [-50, 50, -50]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sophisticated Stats */}
        <ScrollReveal delay={1.5} className="mt-40">
          <div className="text-center mb-20">
            <motion.h3
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Excellence Metrics
              </span>
            </motion.h3>
            <p className="text-xl" style={{ color: "hsl(210 25% 80%)" }}>Measurable impact, immeasurable value</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Satisfied Clients", gradient: "from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)]" },
              { number: "99.9%", label: "Success Rate", gradient: "from-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)]" },
              { number: "24/7", label: "Support", gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]" },
              { number: "∞", label: "Innovation", gradient: "from-[hsl(15_85%_65%)] to-[hsl(45_85%_75%)]" }
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
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/10 group cursor-pointer"
              >
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