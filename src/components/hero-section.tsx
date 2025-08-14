import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100dvh-5rem)] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(-45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--foreground)), #FFD166)',
        backgroundSize: '400% 400%',
        animation: 'gradient 20s ease infinite',
      }} />
      <div className="absolute inset-0 bg-primary/80 -z-10" />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter animate-fade-in-down [text-shadow:0_4px_8px_rgba(0,0,0,0.4)]">
            Nubenta Group
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            Shaping the Future, One Innovation at a Time
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-transform hover:scale-105">
              <Link href="#companies">
                Explore Our Companies
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
