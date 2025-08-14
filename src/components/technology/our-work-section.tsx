import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';

const projects = [
  {
    title: 'Enterprise ERP Solution',
    description: 'A comprehensive ERP system that streamlined operations for a major logistics company, improving efficiency by 40%.',
    image: 'https://placehold.co/600x400.png',
    hint: 'computer code'
  },
  {
    title: 'Fintech Mobile App',
    description: 'A secure and user-friendly mobile banking app that reached 1 million downloads in its first year.',
    image: 'https://placehold.co/600x400.png',
    hint: 'mobile banking'
  },
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce site for a fashion retailer, featuring a custom recommendation engine.',
    image: 'https://placehold.co/600x400.png',
    hint: 'online shopping'
  },
   {
    title: 'Careflux - Health Management System',
    description: 'An integrated hospital management solution for staff to access their dashboard and manage patient information.',
    image: '/careflux-screenshot.png',
    hint: 'medical records'
  }
];

export function OurWorkSection() {
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
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="overflow-hidden group transform hover:shadow-2xl transition-all duration-300 bg-card">
                      <Image
                        src={project.image}
                        alt={project.title}
                        data-ai-hint={project.hint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      />
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                        <p className="mt-2 text-foreground/80">{project.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-14" />
            <CarouselNext className="mr-14" />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
