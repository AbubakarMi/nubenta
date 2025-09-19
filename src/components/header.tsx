"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#mission-vision", label: "Mission & Vision" },
  { href: "#companies", label: "Our Companies" },
  { href: "#ceo", label: "CEO" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = `#${section}`;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const smoothScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    closeMobileMenu();
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      )}
    >
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md" />

      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 relative">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => smoothScrollTo("#hero")}
          className="flex items-center gap-3 font-bold text-xl group"
        >
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-accent/20 blur-lg rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Zap className="h-7 w-7 text-accent relative z-10" />
          </motion.div>
          <motion.span
            className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Nubenta
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.href}
              onClick={() => smoothScrollTo(link.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={cn(
                "relative text-sm font-medium transition-all duration-300 hover:text-accent group py-2",
                activeSection === link.href
                  ? "text-accent"
                  : "text-white/80 hover:text-white"
              )}
            >
              <span className="relative z-10">{link.label}</span>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-accent/10 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Active indicator */}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-accent/5 blur-md rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={() => smoothScrollTo("#companies")}
              className="bg-gradient-to-r from-accent to-amber-400 hover:from-accent/90 hover:to-amber-400/90 text-black font-semibold rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 border-0"
            >
              Get Started
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.div>
                <span className="sr-only">Open menu</span>
              </motion.button>
            </SheetTrigger>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <SheetContent
                  side="right"
                  className="w-[320px] bg-black/90 backdrop-blur-xl border-l border-white/10"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full p-6"
                  >
                    {/* Mobile Logo */}
                    <Link
                      href="/"
                      className="flex items-center gap-3 font-bold text-xl mb-12"
                      onClick={closeMobileMenu}
                    >
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        className="relative"
                      >
                        <Zap className="h-7 w-7 text-accent" />
                      </motion.div>
                      <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                        Nubenta
                      </span>
                    </Link>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-6">
                      {navLinks.map((link, index) => (
                        <motion.button
                          key={link.href}
                          onClick={() => smoothScrollTo(link.href)}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className={cn(
                            "text-left text-lg font-medium transition-all duration-300 hover:text-accent hover:translate-x-2 py-3 px-4 rounded-lg",
                            activeSection === link.href
                              ? "text-accent bg-accent/10"
                              : "text-white/80 hover:bg-white/5"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {link.label}
                            <ChevronDown className="h-4 w-4 opacity-50" />
                          </div>
                        </motion.button>
                      ))}

                      {/* Mobile CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8"
                      >
                        <Button
                          onClick={() => smoothScrollTo("#companies")}
                          className="w-full bg-gradient-to-r from-accent to-amber-400 text-black font-semibold rounded-lg py-4 text-lg transition-all duration-300 hover:scale-105 border-0"
                        >
                          Get Started
                        </Button>
                      </motion.div>
                    </nav>
                  </motion.div>
                </SheetContent>
              )}
            </AnimatePresence>
          </Sheet>
        </div>
      </div>

      {/* Animated border bottom */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      )}
    </motion.header>
  );
}
