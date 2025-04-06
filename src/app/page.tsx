import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import UpcomingEvents from '@/components/UpcomingEvents';
import PhotoGallery from '@/components/PhotoGallery';
import ContactSection from '@/components/ContactSection';

import { experienceData, conferencesData } from '@/data/timeline-data';
import { upcomingEventsData, photosData } from '@/data/additional-data';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <UpcomingEvents events={upcomingEventsData} />
        <Timeline
          data={experienceData}
          title="Professional Experience"
          id="experience"
        />
        <Timeline
          data={conferencesData}
          title="Conferences & Talks"
          id="conferences"
        />
        <PhotoGallery photos={photosData} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
