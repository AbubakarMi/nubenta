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
    <section id="what-we-solve" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            What We’re Solving
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
        </ScrollReveal>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <ScrollReveal key={problem.title} delay={problem.delay}>
              <Card className="h-full text-center group transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-card p-6">
                <CardHeader className="items-center">
                  <div className="bg-accent/10 p-4 rounded-full">
                    {problem.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl font-bold text-primary">{problem.title}</CardTitle>
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
