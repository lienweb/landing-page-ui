'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ProjectSection from '@/components/ProjectSection';
import TestimonialSection from '@/components/TestimonialSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ProjectSection />
        <TestimonialSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
