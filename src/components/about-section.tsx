import { ScrollReveal } from './scroll-reveal';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
               <Image
                src="https://placehold.co/600x400.png"
                alt="About Nubenta"
                data-ai-hint="corporate innovation"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover"
              />
               <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
              About Nubenta
            </h2>
            <div className="mt-4 w-24 h-1.5 bg-accent" />
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Nubenta Group is a dynamic and forward-thinking conglomerate dedicated to fostering innovation and driving progress across Africa. With a diverse portfolio of companies, we are committed to creating sustainable value and making a positive impact on businesses and communities. Our strategic investments and commitment to excellence position us at the forefront of shaping a brighter, more prosperous future.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
