import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';
import { Cpu } from 'lucide-react';

export function CompaniesSection() {
  return (
    <section id="companies" className="py-20 lg:py-32">
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
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <ScrollReveal delay={200}>
            <Card className="group transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-primary">Nubenta Technology</CardTitle>
                    <CardDescription>Tech &amp; Innovation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Specializing in cutting-edge software development, cloud solutions, and digital transformation services to propel businesses into the future.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex items-center justify-center h-full border-2 border-dashed rounded-lg bg-secondary/50 p-8">
              <p className="text-muted-foreground text-center">More innovative companies coming soon...</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}