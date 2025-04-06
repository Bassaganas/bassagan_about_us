import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { experienceData, conferencesData } from '@/data/timeline-data';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Timeline
          items={experienceData}
          title="Professional Experience"
          id="experience"
        />
        <Timeline
          items={conferencesData}
          title="Conferences & Talks"
          id="conferences"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
