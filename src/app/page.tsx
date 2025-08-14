import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { MissionVisionSection } from '@/components/mission-vision-section';
import { CompaniesSection } from '@/components/companies-section';
import { CeoSection } from '@/components/ceo-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <CompaniesSection />
        <CeoSection />
      </main>
      <Footer />
    </div>
  );
}
