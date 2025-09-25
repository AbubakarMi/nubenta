"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: number;
  tiltDegree?: number;
  glowColor?: string;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverScale = 1.02,
  tiltDegree = 5,
  glowColor = "accent"
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        scale: hoverScale,
        rotateY: tiltDegree,
        z: 50,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative group cursor-pointer",
        "bg-gradient-to-br from-white/5 to-white/10",
        "backdrop-blur-xl border border-white/20",
        "rounded-2xl overflow-hidden",
        "transition-all duration-300",
        "hover:border-accent/30 hover:shadow-2xl",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Optimized Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-${glowColor}/10 to-amber-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

      {/* Simplified Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}