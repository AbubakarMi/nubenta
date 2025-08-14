
"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../scroll-reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React from "react";

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    
    // For demonstration, we'll just show a success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });

    // And reset the form
    const form = e.target as HTMLFormElement;
    form.reset();
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">
            Get in Touch
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-accent mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-center text-lg text-foreground/80">
            Have a project in mind or want to learn more? We&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={200}>
            <Card className="bg-card p-8 shadow-2xl border border-border/20">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
                    <Input id="name" name="name" placeholder="Your Name" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required className="bg-background" />
                  </div>
                   <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                    <Textarea id="message" name="message" placeholder="Your Message" rows={5} required className="bg-background" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold group">
                    Send Message
                    <Send className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={400} className="space-y-8">
             <div className="flex items-start gap-6 p-6 rounded-lg bg-card shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/10">
                <div className="bg-accent/10 p-4 rounded-full">
                    <Mail className="h-7 w-7 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Email</h3>
                    <p className="text-foreground/80">tech@nubenta.com</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-1 text-accent">
                        <a href="mailto:tech@nubenta.com">Send an email</a>
                    </Button>
                </div>
             </div>
             <div className="flex items-start gap-6 p-6 rounded-lg bg-card shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/10">
                <div className="bg-accent/10 p-4 rounded-full">
                    <Phone className="h-7 w-7 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Phone</h3>
                    <p className="text-foreground/80">+234 704 252 6071</p>
                     <Button variant="link" asChild className="p-0 h-auto mt-1 text-accent">
                        <a href="tel:+2347042526071">Call us</a>
                    </Button>
                </div>
             </div>
             <div className="flex items-start gap-6 p-6 rounded-lg bg-card shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/10">
                <div className="bg-accent/10 p-4 rounded-full">
                    <MapPin className="h-7 w-7 text-accent" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Address</h3>
                    <p className="text-foreground/80">No 20 Emir's Palace Road Kano, Nigeria</p>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
