
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';
import { Briefcase, CloudCog, ShieldCheck } from 'lucide-react';

export function WhatWeAreSolvingSection() {
  const problems = [
    {
      icon: <Briefcase className="h-10 w-10 text-accent" />,
      title: 'Business Inefficiency',
      description: 'Streamlining operations with custom enterprise software and automation tools that boost productivity and reduce costs.',
      delay: 0,
    },
    {
      icon: <CloudCog className="h-10 w-10 text-accent" />,
      title: 'Digital Divide',
      description: 'Developing scalable cloud solutions and mobile applications that are accessible, reliable, and secure for a wide range of users.',
      delay: 200,
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: 'Data Security',
      description: 'Implementing robust cybersecurity measures and data protection protocols to build trust and ensure compliance in a digital-first world.',
      delay: 400,
    }
  ];

  return (
    <section id="what-we-solve" className="py-20 lg:py-32 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-accent/10 rounded-full blur-3xl" />
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
              <Card className="h-full text-center group transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-card/60 backdrop-blur-sm border-border/20 p-6">
                <CardHeader className="items-center">
                  <div className="bg-primary p-4 rounded-full shadow-lg group-hover:bg-accent transition-colors duration-300">
                    {React.cloneElement(problem.icon, { className: 'h-10 w-10 text-primary-foreground' })}
                  </div>
                  <CardTitle className="mt-6 text-xl font-bold text-primary">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{problem.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
