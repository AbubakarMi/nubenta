import { TechHeader } from '@/components/technology/tech-header';
import { TechHeroSection } from '@/components/technology/tech-hero-section';
import { WhoWeAreSection } from '@/components/technology/who-we-are-section';
import { WhatWeAreSolvingSection } from '@/components/technology/what-we-are-solving-section';
import { TechMissionVisionSection } from '@/components/technology/tech-mission-vision-section';
import { OurWorkSection } from '@/components/technology/our-work-section';
import { ClientsSection } from '@/components/technology/clients-section';
import { ContactSection } from '@/components/technology/contact-section';
import { TechFooter } from '@/components/technology/tech-footer';

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <TechHeader />
      <main className="flex-1">
        <TechHeroSection />
        <WhoWeAreSection />
        <WhatWeAreSolvingSection />
        <TechMissionVisionSection />
        <OurWorkSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <TechFooter />
    </div>
  );
}
