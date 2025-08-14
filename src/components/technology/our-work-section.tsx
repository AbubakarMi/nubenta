
"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';
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
  }
];

export function OurWorkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        
        <ScrollReveal delay={200} className="mt-12">
          <div 
            className="flex gap-4 w-full h-[500px] transition-all duration-500 ease-in-out"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "relative transition-all duration-700 ease-in-out h-full rounded-2xl overflow-hidden shadow-2xl",
                  hoveredIndex === null ? 'flex-1' : (hoveredIndex === index ? 'w-[60%]' : 'w-[13.33%]'),
                )}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  data-ai-hint={project.hint}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500",
                   hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                )} />
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500",
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-white/90">{project.description}</p>
                </div>
                 <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-500",
                  "writing-mode-vertical-rl transform rotate-180",
                   hoveredIndex !== null && hoveredIndex !== index ? 'opacity-100' : 'opacity-0'
                )}>
                   <h3 className="text-xl font-bold text-center">{project.title}</h3>
                 </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
