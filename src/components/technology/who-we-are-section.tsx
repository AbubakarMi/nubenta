import { ScrollReveal } from '../scroll-reveal';

export function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            Who We Are
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Nubenta Technology is the innovation engine of the Nubenta Group. We are a team of passionate technologists, designers, and strategists dedicated to building cutting-edge digital products. From complex enterprise software to user-friendly mobile apps, we leverage the latest technologies to solve real-world problems and drive digital transformation for our clients across Africa and beyond.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
