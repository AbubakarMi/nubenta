import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "../scroll-reveal";
import { Target, Eye } from "lucide-react";

export function TechMissionVisionSection() {
  return (
    <section id="mission-vision" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal delay={200}>
            <Card className="h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border-l-4 border-accent bg-card">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-foreground/80 leading-relaxed">
                  To create cutting-edge digital solutions that empower businesses to achieve more.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg border-l-4 bg-card" style={{ borderColor: '#FFD166' }}>
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 209, 102, 0.1)' }}>
                  <Eye className="h-8 w-8" style={{ color: '#FFD166' }} />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-foreground/80 leading-relaxed">
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
