import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function TechHeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100dvh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(-45deg, hsl(var(--primary)), hsl(var(--accent)), #0a0a0a, #00BFA6)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }} />
       <div className="absolute inset-0 -z-10 opacity-10" style={{
        backgroundImage: 'url(/circuit-board.svg)',
        backgroundRepeat: 'repeat',
      }} />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter animate-fade-in-down">
            <span className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,theme(colors.white),45%,theme(colors.teal.300),55%,theme(colors.white))] bg-[length:200%_100%]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Innovating Today, Shaping Tomorrow
            </span>
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl text-white/90 animate-fade-in-up animation-delay-200" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            We build powerful digital solutions that transform businesses and lives.
          </p>
          <div className="animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg transition-transform hover:scale-105">
              <Link href="#our-work">
                Explore Our Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
