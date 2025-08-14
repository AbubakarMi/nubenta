import Image from 'next/image';
import { ScrollReveal } from './scroll-reveal';
import { Signature } from './signature';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function CeoSection() {
  return (
    <section id="ceo" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <Card className="overflow-hidden shadow-2xl border-border/10 bg-card">
            <div className="grid md:grid-cols-12 md:gap-0">
              <div className="md:col-span-4 relative">
                <Image
                  src="/ceo-picture.JPG"
                  alt="Photo of the CEO, Engr. Muhammad Idris Abubakar"
                  data-ai-hint="ceo portrait"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full min-h-[300px] md:min-h-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="md:col-span-8 flex flex-col justify-center">
                <CardContent className="p-8 md:p-12 lg:p-16">
                  <Quote className="h-10 w-10 text-accent mb-4" />
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground/90 leading-relaxed">
                    "At Nubenta, we believe in the power of visionary ideas and relentless execution. Our journey is one of passion, purpose, and a commitment to creating lasting value. We are not just building companies; we are building the future of Africa."
                  </blockquote>
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="font-bold text-lg text-primary">Engr. Muhammad Idris Abubakar</p>
                      <p className="text-sm text-muted-foreground">Founder & Group Chief Executive Officer</p>
                      <p className="text-sm text-muted-foreground">Nubenta Group</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <Signature />
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
