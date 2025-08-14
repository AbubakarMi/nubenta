import Image from 'next/image';
import { ScrollReveal } from './scroll-reveal';
import { Signature } from './signature';

export function CeoSection() {
  return (
    <section id="ceo" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 lg:col-span-3 flex justify-center">
              <Image
                src="/ceo-picture.JPG"
                alt="Photo of the CEO"
                data-ai-hint="ceo portrait"
                width={300}
                height={300}
                className="rounded-full object-cover w-48 h-48 md:w-60 md:h-60 shadow-2xl border-4 border-white"
              />
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <h3 className="text-2xl font-bold text-primary">A Message from Our CEO</h3>
              <blockquote className="mt-4 text-lg text-foreground/80 italic border-l-4 border-accent pl-4">
                "At Nubenta, we believe in the power of visionary ideas and relentless execution. Our journey is one of passion, purpose, and a commitment to creating lasting value. We are not just building companies; we are building the future of Africa."
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="flex-grow">
                  <p className="font-bold text-primary">Engr. Muhammad Idris Abubakar</p>
                  <p className="text-sm text-muted-foreground">Founder & Group Chief Executive Officer</p>
                  <p className="text-sm text-muted-foreground">Nubenta Group</p>
                </div>
                <div className="ml-4">
                  <Signature />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
