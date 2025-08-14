import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../scroll-reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            Get in Touch
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-center text-lg text-foreground/80">
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={200}>
            <Card className="bg-card p-8 shadow-lg">
              <CardContent className="p-0">
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={400} className="space-y-6">
             <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors">
                <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Email</h3>
                    <p className="text-foreground/80">tech@nubenta.com</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors">
                <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Phone</h3>
                    <p className="text-foreground/80">+234 704 252 6071</p>
                </div>
             </div>
             <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors">
                <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Address</h3>
                    <p className="text-foreground/80">No 23 Emir's palara road kano, nigeria</p>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
