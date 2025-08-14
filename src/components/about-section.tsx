import { ScrollReveal } from './scroll-reveal';
import { Quote } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-4xl mx-auto">
          <ScrollReveal>
            <Quote className="absolute -top-8 -left-8 h-24 w-24 text-primary/5 -z-10" />
            <div className="text-center">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
                About Nubenta
              </h2>
              <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
            </div>
            <p className="mt-12 text-center text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
              Nubenta Group is a dynamic and forward-thinking conglomerate dedicated to fostering innovation and driving progress across Africa. With a diverse portfolio of companies, we are committed to creating sustainable value and making a positive impact on businesses and communities. Our strategic investments and commitment to excellence position us at the forefront of shaping a brighter, more prosperous future.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
