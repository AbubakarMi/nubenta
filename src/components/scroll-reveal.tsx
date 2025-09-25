"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  stagger = 0.1
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If not mounted yet, show content immediately to prevent flash
  if (!isMounted) {
    return <div className={cn(className)}>{children}</div>;
  }

  // For better performance, reduce motion on slow devices
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 }
  };

  const containerVariants = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: stagger
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
