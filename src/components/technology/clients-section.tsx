import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';

const clients = [
  { name: 'Innovate Corp', logo: 'https://placehold.co/150x60.png', hint: 'tech company logo' },
  { name: 'Quantum Solutions', logo: 'https://placehold.co/150x60.png', hint: 'modern company logo' },
  { name: 'Apex Industries', logo: 'https://placehold.co/150x60.png', hint: 'industrial company logo' },
  { name: 'Starlight Bank', logo: 'https://placehold.co/150x60.png', hint: 'finance company logo' },
  { name: 'Momentum Logistics', logo: 'https://placehold.co/150x60.png', hint: 'logistics company logo' },
  { name: 'Vertex Health', logo: 'https://placehold.co/150x60.png', hint: 'health company logo' },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
        </ScrollReveal>
        
        <ScrollReveal delay={200} className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  data-ai-hint={client.hint}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
