import dynamic from 'next/dynamic';
import { TechHeader } from '@/components/technology/tech-header';
import { TechHeroSection } from '@/components/technology/tech-hero-section';
import { WhoWeAreSection } from '@/components/technology/who-we-are-section';

// Lazy load heavy components
const WhatWeAreSolvingSection = dynamic(() => import('@/components/technology/what-we-are-solving-section').then(mod => ({ default: mod.WhatWeAreSolvingSection })), {
  ssr: false,
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

const TechMissionVisionSection = dynamic(() => import('@/components/technology/tech-mission-vision-section').then(mod => ({ default: mod.TechMissionVisionSection })), {
  ssr: false,
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

const OurWorkSection = dynamic(() => import('@/components/technology/our-work-section').then(mod => ({ default: mod.OurWorkSection })), {
  ssr: false,
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

const ClientsSection = dynamic(() => import('@/components/technology/clients-section').then(mod => ({ default: mod.ClientsSection })), {
  ssr: false,
  loading: () => <div className="h-64 bg-secondary/20 animate-pulse" />
});

const ContactSection = dynamic(() => import('@/components/technology/contact-section').then(mod => ({ default: mod.ContactSection })), {
  ssr: false,
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

const TechFooter = dynamic(() => import('@/components/technology/tech-footer').then(mod => ({ default: mod.TechFooter })), {
  ssr: false,
  loading: () => <div className="h-32 bg-secondary/20 animate-pulse" />
});

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
