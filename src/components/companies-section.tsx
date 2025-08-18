
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';
import { Cpu, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

export function CompaniesSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -100, y: -100 });
  };


  return (
    <section id="companies" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary text-center">
            Our Companies
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-center text-lg text-foreground/80">
            Pioneering change and delivering excellence across various sectors.
          </p>
        </ScrollReveal>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <ScrollReveal delay={0}>
            <Link href="/technology" className="group block h-full">
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative bg-card h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-border/10 p-px hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--accent) / 0.15), transparent)`,
                  }}
                />
                <div className="relative z-10 flex flex-col h-full p-6 bg-card rounded-[inherit]">
                  <div className="flex-grow">
                    <div className="bg-accent/20 border border-accent/50 text-accent p-3 rounded-lg inline-block mb-4">
                      <Cpu className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Nubenta Technology</h3>
                    <p className="text-foreground/60 mt-2">Tech &amp; Innovation</p>
                    <p className="mt-4 text-foreground/80 leading-relaxed">
                      Specializing in cutting-edge software development, cloud solutions, and digital transformation services to propel businesses into the future.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center font-semibold text-accent">
                    <span>Explore Division</span>
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative flex flex-col items-center justify-center h-full rounded-xl bg-primary/5 p-8 overflow-hidden border border-border/10 group">
               <div 
                className="absolute inset-0 -z-10 opacity-50" 
                style={{
                  backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
                  backgroundSize: '2rem 2rem'
                }}
              />
              <div className="absolute inset-0 -z-10 bg-grid-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative text-center">
                <div className="relative inline-block">
                  <Lightbulb className="h-12 w-12 text-accent animate-pulse" />
                   <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl animate-pulse animation-delay-400" />
                </div>
                <p className="mt-6 text-muted-foreground text-lg font-medium">Future Innovations</p>
                <p className="text-sm text-muted-foreground/70">Under Construction</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
