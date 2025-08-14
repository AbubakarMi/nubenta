import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';

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
          <Carousel 
            opts={{ 
              loop: true, 
              align: "start" 
            }} 
            className="w-full max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4 py-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 sm:basis-1/2 lg:basis-1/3 group">
                  <Card className="h-full overflow-hidden transform hover:shadow-2xl transition-all duration-500 bg-card flex flex-col hover:scale-105 hover:z-10">
                    <div className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        data-ai-hint={project.hint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow transition-all duration-300">
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <p className="mt-2 text-foreground/80 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
