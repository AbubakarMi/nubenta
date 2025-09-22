"use client";

import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, ArrowUp, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.08)] via-[hsl(160_85%_45%_/_0.06)] to-[hsl(220_85%_55%_/_0.08)]" />

        {/* Elegant Moving Gradients */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, hsl(45 85% 75% / 0.05) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, hsl(160 85% 45% / 0.04) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, hsl(220 85% 55% / 0.03) 0%, transparent 40%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[hsl(45_85%_75%_/_0.4)] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto py-16 px-4 md:px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="h-12 w-12 text-[hsl(45_85%_75%)] mx-auto" />
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the{" "}
            <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
              Innovation Loop
            </span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest updates on our groundbreaking projects and exclusive insights into the future of technology.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative flex-1"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[hsl(45_85%_75%)]"
                required
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] hover:from-[hsl(45_85%_75%_/_0.9)] hover:to-[hsl(160_85%_45%_/_0.9)] text-[hsl(220_25%_6%)] font-semibold px-8"
                disabled={isSubscribed}
              >
                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="flex items-center gap-3 text-3xl font-bold group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[hsl(45_85%_75%_/_0.2)] blur-lg rounded-full"
                />
                <Zap className="h-10 w-10 text-[hsl(45_85%_75%)] relative z-10" />
              </motion.div>
              <span className="bg-gradient-to-r from-white via-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                Nubenta Group
              </span>
            </Link>

            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Pioneering the future through{" "}
              <span className="text-[hsl(45_85%_75%)] font-semibold">cutting-edge innovation</span> and{" "}
              <span className="text-[hsl(160_85%_45%)] font-semibold">transformative solutions</span>.
              Join us in shaping tomorrow's world today.
            </p>

            {/* Awards/Recognition */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[hsl(45_85%_75%)] rounded-full animate-pulse" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[hsl(160_85%_45%)] rounded-full animate-pulse" />
                <span>Award Winning</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[hsl(45_85%_75%)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 bg-[hsl(45_85%_75%)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-xl text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "contact@nubenta.com", href: "mailto:contact@nubenta.com" },
                { icon: Phone, text: "+2347042526071", href: "tel:+2347042526071" },
                { icon: MapPin, text: "No 20 Emir's Palace Road\nKano, Nigeria", href: "#" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="mt-1 p-2 rounded-lg bg-white/5 group-hover:bg-[hsl(45_85%_75%_/_0.2)] transition-colors"
                  >
                    <item.icon className="h-4 w-4 text-[hsl(45_85%_75%)]" />
                  </motion.div>
                  <Link
                    href={item.href}
                    className="text-gray-400 group-hover:text-white transition-colors whitespace-pre-line"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-gray-400 font-medium">Follow Our Journey:</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      className={`p-3 rounded-full bg-white/5 border border-white/10 hover:border-[hsl(45_85%_75%_/_0.5)] text-gray-400 ${social.color} transition-all duration-300 group`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Back to Top
                <ArrowUp className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-500 text-sm"
            >
              &copy; {new Date().getFullYear()} Nubenta Group. All Rights Reserved. |{" "}
              <span className="text-[hsl(45_85%_75%)]">Crafted with ❤️ for the Future</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
