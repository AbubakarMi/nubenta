
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';
import { Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function CompaniesSection() {
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
          <ScrollReveal delay={200}>
            <Link href="/technology" className="group block">
              <Card className="relative bg-card h-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border-border/10">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/tech-background.jpeg"
                    alt="Technology Background"
                    data-ai-hint="abstract technology"
                    layout="fill"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full p-6 text-white">
                  <div className="flex-grow">
                    <div className="bg-accent/20 border border-accent/50 text-accent p-3 rounded-lg inline-block mb-4">
                      <Cpu className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">Nubenta Technology</CardTitle>
                    <CardDescription className="text-white/80 mt-2">Tech &amp; Innovation</CardDescription>
                    <p className="mt-4 text-white/90 leading-relaxed">
                      Specializing in cutting-edge software development, cloud solutions, and digital transformation services to propel businesses into the future.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center font-semibold text-accent">
                    <span>Explore Division</span>
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute -top-px -left-px -right-px -bottom-px rounded-xl border-2 border-transparent transition-all duration-500 group-hover:border-accent/50" />
              </Card>
            </Link>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="relative flex items-center justify-center h-full rounded-xl bg-card/50 backdrop-blur-sm p-8 overflow-hidden border border-border/10">
               <div className="absolute inset-0 -z-10 opacity-20" style={{
                backgroundImage: 'repeating-conic-gradient(from 45deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.1) 25%, transparent 25%, transparent 50%)',
                backgroundSize: '2rem 2rem',
                animation: 'move-bg 20s linear infinite',
              }} />
              <p className="text-muted-foreground text-center text-lg font-medium">More innovative companies coming soon...</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
