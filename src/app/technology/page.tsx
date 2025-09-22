"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TechHeader } from '@/components/technology/tech-header';
import { TechFooter } from '@/components/technology/tech-footer';
import {
  Code, Brain, Cloud, Shield, Database, Layers,
  ArrowRight, CheckCircle, Star, Users, Globe,
  Award, Rocket, ChevronRight, Mail, Phone,
  Lightbulb, Target, TrendingUp, Zap, Heart,
  Building, Factory, ShoppingCart, Banknote, Quote
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Enterprise-grade AI solutions that transform raw data into intelligent business decisions.",
    features: ["Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"],
    color: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, resilient cloud infrastructure designed for global enterprises.",
    features: ["Multi-Cloud", "Kubernetes", "Serverless", "DevOps"],
    color: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  },
  {
    icon: Layers,
    title: "Custom Development",
    description: "End-to-end software development creating bespoke applications.",
    features: ["Full-Stack", "Mobile Apps", "APIs", "Web Apps"],
    color: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security frameworks protecting enterprise assets.",
    features: ["Threat Detection", "Compliance", "Zero Trust", "Security Audits"],
    color: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data infrastructure and advanced analytics platforms.",
    features: ["Big Data", "Real-time Processing", "BI Dashboards", "Data Lakes"],
    color: "from-[hsl(15_85%_65%)] to-[hsl(160_85%_45%)]"
  },
  {
    icon: Target,
    title: "Digital Transformation",
    description: "Strategic technology leadership guiding digital modernization.",
    features: ["Strategy", "Process Automation", "Change Management", "Training"],
    color: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  }
];

const technologies = [
  { name: "Python", level: 98 },
  { name: "React", level: 96 },
  { name: "AWS", level: 94 },
  { name: "TypeScript", level: 97 },
  { name: "Node.js", level: 95 },
  { name: "TensorFlow", level: 92 }
];

const industries = [
  { name: "Financial Services", icon: Banknote, projects: "150+" },
  { name: "Healthcare", icon: Heart, projects: "120+" },
  { name: "Manufacturing", icon: Factory, projects: "100+" },
  { name: "Retail & E-commerce", icon: ShoppingCart, projects: "90+" },
  { name: "Government", icon: Building, projects: "80+" },
  { name: "Energy & Utilities", icon: Zap, projects: "70+" }
];

const stats = [
  { number: "1000+", label: "Projects Delivered", icon: Rocket },
  { number: "500+", label: "Enterprise Clients", icon: Users },
  { number: "25+", label: "Countries Served", icon: Globe },
  { number: "99.8%", label: "Success Rate", icon: Award }
];

const testimonials = [
  {
    quote: "Nubenta Technology transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.",
    author: "Sarah Johnson",
    position: "CTO, Fortune 500 Company",
    company: "TechCorp Global"
  },
  {
    quote: "The cloud migration was seamless. Zero downtime and 60% cost reduction exceeded all expectations.",
    author: "Michael Chen",
    position: "Head of Infrastructure",
    company: "Global Manufacturing Inc"
  },
  {
    quote: "Their cybersecurity implementation saved us from multiple threats. World-class expertise.",
    author: "Dr. Amanda Foster",
    position: "Chief Security Officer",
    company: "Healthcare Systems"
  }
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <TechHeader />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(45_85%_75%_/_0.02)] via-transparent to-[hsl(160_85%_45%_/_0.02)]" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] rounded-full opacity-20"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] shadow-2xl">
              <Code className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-white to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                World-Class
              </span>
              <br />
              <span className="text-white">Technology</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Engineering the future with cutting-edge AI, cloud solutions, and enterprise-grade software that transforms businesses globally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white border-0 rounded-full px-8">
                <Link href="#services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-[hsl(160_85%_45%)] text-[hsl(160_85%_45%)] hover:bg-[hsl(160_85%_45%)] hover:text-white rounded-full px-8">
                <Link href="#contact" className="flex items-center gap-2">
                  Get Started
                  <Rocket className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions that drive innovation and deliver measurable business results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[hsl(160_85%_45%)] flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-[hsl(160_85%_45%)] hover:text-[hsl(160_85%_50%)] cursor-pointer group-hover:translate-x-1 transition-transform">
                  <span className="font-semibold mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering world-class solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-white">{tech.name}</h3>
                  <span className="text-lg font-black bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                    {tech.level}%
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep domain expertise across critical industry verticals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] flex items-center justify-center">
                      <industry.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white">{industry.name}</h3>
                  </div>
                  <span className="text-sm font-bold text-[hsl(160_85%_45%)]">{industry.projects}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-[hsl(220_25%_8%)] to-[hsl(220_25%_6%)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                <Quote className="w-8 h-8 text-[hsl(160_85%_45%)] mb-6" />
                <p className="text-white mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.position}</div>
                  <div className="text-[hsl(160_85%_45%)] text-sm font-semibold">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our world-class technology solutions can accelerate your business growth and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white border-0 rounded-full px-8">
              <Mail className="w-5 h-5 mr-2" />
              Start a Project
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-[hsl(160_85%_45%)] text-[hsl(160_85%_45%)] hover:bg-[hsl(160_85%_45%)] hover:text-white rounded-full px-8">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      <TechFooter />
    </div>
  );
}