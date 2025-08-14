
"use client";

import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Enterprise ERP Solution',
    description: 'A comprehensive ERP system that streamlined operations for a major logistics company, improving efficiency by 40%. We developed a custom solution that integrated with their existing systems, providing real-time data and analytics to inform business decisions. The platform included modules for inventory management, order processing, and financial reporting.',
    image: 'https://placehold.co/600x400.png',
    hint: 'enterprise resource planning'
  },
  {
    title: 'Fintech Mobile App',
    description: 'A secure and user-friendly mobile banking app that reached 1 million downloads in its first year. The app features biometric authentication, peer-to-peer payments, and a personal finance management dashboard. Our team handled the end-to-end development, from UI/UX design to backend integration with banking APIs.',
    image: 'https://placehold.co/600x400.png',
    hint: 'mobile banking'
  },
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce site for a fashion retailer, featuring a custom recommendation engine that increased average order value by 25%. The platform was built on a headless architecture, allowing for a highly customized frontend and seamless integration with third-party services like payment gateways and shipping providers.',
    image: 'https://placehold.co/600x400.png',
    hint: 'online shopping'
  },
  {
    title: 'Careflux - Health Management System',
    description: 'An integrated hospital management solution for staff to access their dashboard and manage patient information. The system includes modules for electronic health records (EHR), appointment scheduling, billing, and a patient portal. It is designed to improve clinical workflows and enhance patient care.',
    image: '/careflux-screenshot.png',
    hint: 'medical records'
  },
  {
    title: 'Another Project',
    description: 'Description for another great project, showcasing our diverse capabilities in building custom software solutions for various industries.',
    image: 'https://placehold.co/600x400.png',
    hint: 'tech solution'
  }
];

export function OurWorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="our-work" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            Our Work
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-center text-lg text-foreground/80">
            A glimpse into the solutions we've delivered.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-12 relative">
          <div className="absolute inset-y-0 left-0 hidden md:flex items-center z-10">
             <Button variant="outline" size="icon" className="bg-background/50 hover:bg-background rounded-full h-10 w-10" onClick={() => scroll('left')}>
                <ChevronLeft className="h-6 w-6" />
             </Button>
          </div>
          <div 
            ref={containerRef}
            className="flex items-stretch gap-4 overflow-x-auto pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "snap-center transition-all duration-500 ease-in-out flex-shrink-0",
                  hoveredIndex !== null ? (hoveredIndex === index ? 'w-[30rem]' : 'w-48') : 'w-96'
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="group bg-card cursor-pointer h-full w-full overflow-hidden flex flex-col">
                  <div className="relative h-56 w-full flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      data-ai-hint={project.hint}
                      layout="fill"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <p className={cn("mt-2 text-foreground/80 transition-all duration-300 ease-in-out overflow-hidden",
                        hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}>
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
           <div className="absolute inset-y-0 right-0 hidden md:flex items-center z-10">
             <Button variant="outline" size="icon" className="bg-background/50 hover:bg-background rounded-full h-10 w-10" onClick={() => scroll('right')}>
                <ChevronRight className="h-6 w-6" />
             </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
