import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "../scroll-reveal";
import { Target, Eye, Cog } from "lucide-react";
import Image from "next/image";

export function TechMissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            Our Purpose &amp; Approach
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-12">
          {/* Mission Card */}
          <ScrollReveal delay={200}>
            <Card className="h-full bg-card shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center lg:text-right border-border/20">
               <CardHeader className="items-center lg:items-end">
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <Target className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                  To create cutting-edge digital solutions that empower businesses to achieve more.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Central Image */}
          <ScrollReveal>
            <div className="relative aspect-square w-full max-w-sm mx-auto flex items-center justify-center">
              <Cog className="absolute h-full w-full text-primary/5 animate-spin-slow" />
              <Image
                src="https://placehold.co/400x400.png"
                alt="Abstract technological design"
                data-ai-hint="abstract technology"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl border-4 border-card p-2"
              />
            </div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal delay={400}>
             <Card className="h-full bg-card shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center lg:text-left border-border/20">
               <CardHeader className="items-center lg:items-start">
                <div className="p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 209, 102, 0.1)' }}>
                  <Eye className="h-10 w-10" style={{ color: '#FFD166' }} />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                  To be Africa’s leading technology innovator, delivering world-class solutions with global impact.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
