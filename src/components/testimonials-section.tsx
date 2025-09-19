"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "Fortune 500 Company",
    content: "Nubenta Group transformed our entire digital infrastructure. Their innovative approach and cutting-edge solutions increased our efficiency by 300%. Absolutely phenomenal work!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b94c?w=150&h=150&fit=crop&crop=face",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO, Global Innovations",
    company: "Tech Startup",
    content: "Working with Nubenta was a game-changer. They delivered beyond our expectations and their team's expertise is unmatched. The results speak for themselves - 250% growth in 6 months!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    name: "Dr. Amina Hassan",
    role: "Director of Operations",
    company: "HealthCare Plus",
    content: "Nubenta's healthcare solution revolutionized our patient management system. The seamless integration and user-friendly interface have improved our service quality tremendously.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Founder & CEO",
    company: "E-Commerce Giant",
    content: "The e-commerce platform Nubenta built for us is simply extraordinary. Sales increased by 400% in the first quarter alone. Their attention to detail is remarkable!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Head of Digital Transformation",
    company: "Banking Solutions",
    content: "Nubenta's fintech expertise helped us modernize our banking infrastructure. The security and performance improvements have been outstanding. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    gradient: "from-amber-500 to-orange-500"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative inline-block mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-accent/30 border-dashed"
            />
            <Quote className="h-16 w-16 text-accent mx-auto relative z-10" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-accent via-purple-500 to-amber-400 bg-clip-text text-transparent">
              Customers
            </span>
            <br />
            Are Saying
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what industry leaders and innovative companies say about their transformative experience with Nubenta Group.
          </motion.p>
        </ScrollReveal>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main Testimonial Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 overflow-hidden">
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-10 blur-3xl`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 right-6 opacity-10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Quote className="h-24 w-24 text-accent" />
                </motion.div>

                <div className="relative z-10">
                  {/* Stars */}
                  <motion.div
                    className="flex items-center gap-1 mb-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Star className="h-6 w-6 text-amber-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.blockquote
                    className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Customer Info */}
                  <motion.div
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-full blur-lg opacity-50`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/30 relative z-10"
                      />
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-accent font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handlePrevious}
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>

            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <ScrollReveal delay={0.8} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Happy Clients", icon: "😊" },
              { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}