
"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';
import { Briefcase, CloudCog, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const problems = [
  {
    icon: <Briefcase className="h-8 w-8 text-white" />,
    title: 'Business Inefficiency',
    description: 'Streamlining operations with custom enterprise software and automation tools that boost productivity and reduce costs.',
    delay: 0,
  },
  {
    icon: <CloudCog className="h-8 w-8 text-white" />,
    title: 'Digital Divide',
    description: 'Developing scalable cloud solutions and mobile applications that are accessible, reliable, and secure for a wide range of users.',
    delay: 200,
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: 'Data Security',
    description: 'Implementing robust cybersecurity measures and data protection protocols to build trust and ensure compliance in a digital-first world.',
    delay: 400,
  }
];

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("transition-all duration-300 hover:scale-105 hover:-translate-y-2", className)}>
      {children}
    </div>
  );
};


export function WhatWeAreSolvingSection() {
  return (
    <section id="what-we-solve" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-2xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/15 rounded-full filter blur-2xl opacity-25" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            What We’re Solving
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
        </ScrollReveal>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <ScrollReveal key={problem.title} delay={problem.delay}>
              <TiltCard>
                <Card className="h-full text-center bg-card/50 backdrop-blur-xl border-border/20 p-6 shadow-2xl relative overflow-hidden group">
                   <div className="absolute -top-1 -left-1 w-[calc(100%+4px)] h-[calc(100%+4px)] bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(255,255,255,0.1)_0%,_hsl(var(--accent))_50%,_rgba(255,255,255,0.1)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite]" />
                   <div className="relative z-10">
                    <CardHeader className="items-center p-0">
                      <div className="mb-6 bg-gradient-to-br from-primary/80 to-accent/80 p-4 rounded-full shadow-lg">
                        {problem.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-primary">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4">
                      <p className="text-foreground/80">{problem.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
