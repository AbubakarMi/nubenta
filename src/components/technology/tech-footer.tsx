"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Code, Mail, Phone, MapPin, ArrowRight, ExternalLink,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github,
  Brain, Cloud, Shield, Database, Layers, Settings,
  Award, Globe, Users, Rocket, ArrowLeft
} from 'lucide-react';

const services = [
  { name: "AI & Machine Learning", href: "#services" },
  { name: "Cloud Solutions", href: "#services" },
  { name: "Custom Development", href: "#services" },
  { name: "Cybersecurity", href: "#services" },
  { name: "Data Engineering", href: "#services" },
  { name: "Digital Transformation", href: "#services" }
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" }
];

export function TechFooter() {
  return (
    <footer className="relative overflow-hidden" id="contact">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_4%)] via-[hsl(220_20%_6%)] to-[hsl(220_25%_4%)]" />
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, hsl(220 85% 55% / 0.1) 0%, transparent 60%),
              radial-gradient(circle at 80% 80%, hsl(160 85% 45% / 0.08) 0%, transparent 60%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
        {/* Contact Section */}
        <motion.div
          className="py-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-black tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="text-white">Your Business?</span>
          </motion.h2>

          <motion.p
            className="text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            style={{ color: "hsl(210 25% 85%)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Let's discuss how our world-class technology solutions can accelerate your business growth and innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white rounded-full px-10 py-6 text-lg font-bold shadow-2xl border-0"
              >
                <Link href="mailto:tech@nubenta.com" className="flex items-center gap-3">
                  <Mail className="h-6 w-6" />
                  Start a Project
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[hsl(160_85%_45%)] text-[hsl(160_85%_45%)] hover:bg-[hsl(160_85%_45%)] hover:text-white rounded-full px-10 py-6 text-lg font-bold"
              >
                <Link href="tel:+2347042526071" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Schedule Call
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Content */}
        <div className="py-16 border-t border-white/10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4">
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
              </div>

              <p className="text-base leading-relaxed" style={{ color: "hsl(210 25% 80%)" }}>
                Engineering the future with cutting-edge technology solutions that transform businesses globally.
              </p>

              {/* Back to Main Site */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  asChild
                  className="border border-white/20 text-white/90 hover:bg-white/10 hover:text-white rounded-full"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Main Site
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-[hsl(210_25%_80%)] hover:text-[hsl(160_85%_45%)] transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-[hsl(210_25%_80%)] hover:text-[hsl(160_85%_45%)] transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 mt-1 text-[hsl(160_85%_45%)]" />
                  <div>
                    <a
                      href="mailto:tech@nubenta.com"
                      className="text-[hsl(210_25%_80%)] group-hover:text-[hsl(160_85%_45%)] transition-colors font-medium"
                    >
                      tech@nubenta.com
                    </a>
                    <div className="text-sm text-[hsl(210_25%_70%)]">Email us anytime</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 mt-1 text-[hsl(160_85%_45%)]" />
                  <div>
                    <a
                      href="tel:+2347042526071"
                      className="text-[hsl(210_25%_80%)] group-hover:text-[hsl(160_85%_45%)] transition-colors font-medium"
                    >
                      +234 704 252 6071
                    </a>
                    <div className="text-sm text-[hsl(210_25%_70%)]">Call us today</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-5 w-5 mt-1 text-[hsl(160_85%_45%)]" />
                  <div>
                    <span className="text-[hsl(210_25%_80%)] font-medium">
                      No 20 Emir's Palace Road
                    </span>
                    <div className="text-sm text-[hsl(210_25%_70%)]">Kano, Nigeria</div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
                <div className="flex items-center gap-4">
                  {[
                    { icon: Twitter, href: "#", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Instagram, href: "#", label: "Instagram" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 rounded-xl bg-white/5 text-[hsl(210_25%_80%)] hover:bg-[hsl(160_85%_45%)] hover:text-white transition-all duration-300 border border-white/10"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center md:text-left">
            <p className="text-[hsl(210_25%_70%)]">
              &copy; {new Date().getFullYear()} Nubenta Technology. All rights reserved.
            </p>
            <p className="text-sm text-[hsl(210_25%_60%)]">
              Engineered with precision in Nigeria 🇳🇬
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-[hsl(210_25%_70%)] hover:text-[hsl(160_85%_45%)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[hsl(210_25%_70%)] hover:text-[hsl(160_85%_45%)] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-[hsl(210_25%_70%)] hover:text-[hsl(160_85%_45%)] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
