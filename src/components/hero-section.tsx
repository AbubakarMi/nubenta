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

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter animate-fade-in-down">
            <span className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,theme(colors.white),45%,theme(colors.amber.200),55%,theme(colors.white))] bg-[length:200%_100%]" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
              Nubenta Group
            </span>
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-white animate-fade-in-up animation-delay-200" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Shaping the Future, One Innovation at a Time
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-accent/40 hover:border-white/30 group">
              <Link href="#companies">
                Explore Our Companies
                <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-y-1 animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '1s' }} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
