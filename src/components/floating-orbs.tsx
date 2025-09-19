"use client";

import { motion } from 'framer-motion';

export function FloatingOrbs() {
  const orbs = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-xl ${
            i % 3 === 0
              ? 'bg-accent/20'
              : i % 3 === 1
              ? 'bg-primary/15'
              : 'bg-amber-400/10'
          }`}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}