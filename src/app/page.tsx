import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { CorePurposeSection } from '@/components/core-purpose-section';
import { MissionVisionSection } from '@/components/mission-vision-section';
import { CompaniesSection } from '@/components/companies-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CeoSection } from '@/components/ceo-section';
import { Footer } from '@/components/footer';
import { FloatingActions } from '@/components/floating-actions';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CorePurposeSection />
        <MissionVisionSection />
        <CompaniesSection />
        <TestimonialsSection />
        <CeoSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
