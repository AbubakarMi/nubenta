
"use client";

import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';

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
      const cardWidth = containerRef.current.querySelector('div')?.clientWidth ?? 0;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="our-work" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                Our Work
              </h2>
              <div className="mt-4 w-24 h-1.5 bg-accent mx-auto md:mx-0" />
            </ScrollReveal>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full bg-card/50 hover:bg-card border-border/50" onClick={() => scroll('left')}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-card/50 hover:bg-card border-border/50" onClick={() => scroll('right')}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <ScrollReveal delay={200}>
          <div 
            ref={containerRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className={cn(
                      "snap-start transition-all duration-500 ease-in-out flex-shrink-0 cursor-pointer",
                      hoveredIndex !== null ? (hoveredIndex === index ? 'w-[28rem]' : 'w-48') : 'w-80'
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <Card className="group bg-card h-full w-full overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-shadow">
                      <div className="relative h-48 w-full flex-shrink-0">
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
                          <p className={cn("mt-2 text-foreground/80 transition-all duration-300 ease-in-out",
                             "overflow-hidden",
                            hoveredIndex === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                          )}>
                            {project.description.substring(0, 100)}...
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative min-h-[300px] md:min-h-0">
                       <Image
                        src={project.image}
                        alt={project.title}
                        data-ai-hint={project.hint}
                        layout="fill"
                        className="object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="p-8 flex flex-col">
                      <h2 className="text-2xl font-bold text-primary mb-4">{project.title}</h2>
                      <p className="text-foreground/80 leading-relaxed flex-grow">{project.description}</p>
                      <DialogClose asChild>
                         <Button variant="outline" className="mt-6 self-start">Close</Button>
                      </DialogClose>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
