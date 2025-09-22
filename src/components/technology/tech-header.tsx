"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Menu, X, Code, Home, Info, Briefcase,
  Mail, ChevronDown, Rocket, Users,
  Award, Globe, ArrowLeft
} from 'lucide-react';

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function TechHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[hsl(220_25%_6%_/_0.95)] backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Technology Brand */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 -m-2 bg-gradient-to-r from-[hsl(220_85%_55%_/_0.3)] to-[hsl(160_85%_45%_/_0.3)] rounded-xl blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10 p-3 rounded-xl bg-gradient-to-br from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] shadow-2xl">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <Link href="/technology" className="text-2xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                  Nubenta
                </span>
                <span className="text-white ml-2">Technology</span>
              </Link>
              <div className="text-xs font-medium text-[hsl(210_25%_70%)] mt-1">
                World-Class Innovation
              </div>
            </div>
          </motion.div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-colors duration-300 font-medium group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Back to Main Site */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                asChild
                className="border border-white/20 text-white/90 hover:bg-white/10 hover:text-white rounded-full px-6"
              >
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Main Site
                </Link>
              </Button>
            </motion.div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white rounded-full px-6 border-0 shadow-lg"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-[hsl(220_25%_6%_/_0.98)] backdrop-blur-xl border-b border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2 border-b border-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Action Buttons */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border border-white/20 text-white/90 hover:bg-white/10 hover:text-white rounded-full"
                  >
                    <Link href="/" className="flex items-center justify-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Main Site
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white rounded-full border-0"
                  >
                    <Link href="#contact" className="flex items-center justify-center gap-2">
                      <Rocket className="h-4 w-4" />
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
