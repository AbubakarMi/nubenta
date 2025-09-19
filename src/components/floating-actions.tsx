"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actions = [
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:+2347042526071",
      color: "from-green-500 to-emerald-500",
      delay: 0.1
    },
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:contact@nubenta.com",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      href: "#contact",
      color: "from-purple-500 to-pink-500",
      delay: 0.3
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Action Buttons */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3, delay: action.delay }}
                className="flex items-center gap-3"
              >
                {/* Label */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-white/10"
                >
                  {action.label}
                </motion.div>

                {/* Action Button */}
                <motion.a
                  href={action.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow`}
                >
                  <action.icon className="h-5 w-5" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-accent to-amber-400 rounded-full blur-lg"
        />

        {/* Back to Top Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-accent to-amber-400 hover:from-accent/90 hover:to-amber-400/90 text-black shadow-2xl border-0 transition-all duration-300"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>

        {/* Expand/Collapse Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}