import React from 'react';
import Header from '@/components/Header';
import { TildeWatermark } from '@/components/Brand';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import UpcomingEvents from '@/components/UpcomingEvents';
import PhotoGallery from '@/components/PhotoGallery';
import Testimonials from '@/components/Testimonials';
import TestingFantasy from '@/components/TestingFantasy';
import ContactSection from '@/components/ContactSection';

import { upcomingEventsData, photosData, testimonialsData } from '@/data/additional-data';
import { pastTimelineItems, siteStats } from '@/lib/timeline';

export default function Home() {
  // Both are evaluated at build time, because the site is exported as static HTML.
  const timelineItems = pastTimelineItems();
  const stats = siteStats();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero stats={stats} />
        <UpcomingEvents events={upcomingEventsData} />

        <section id="professional-journey" className="section snap-section relative overflow-hidden bg-white">
          <TildeWatermark className="right-[5%] top-16 hidden h-64 w-64 rotate-[12deg] scale-x-[-1] text-coral-600/[0.07] lg:block xl:h-72 xl:w-72" />
          <div className="shell relative z-10">
            <div className="max-w-2xl">
              <p className="eyebrow">Journey</p>
              <h2 className="section-title">Roles, talks and tutorials</h2>
              <p className="section-lead">
                {stats.yearsExperience} years across diagnostics, retail payments and pharma, from
                validating laboratory systems to leading a developer platform and AI in the SDLC.
                All of it alongside the conference stage and the university classroom.
              </p>
            </div>

            <div className="mt-10 sm:mt-12">
              <Timeline items={timelineItems} />
            </div>
          </div>
        </section>

        <Testimonials testimonials={testimonialsData} stats={stats} />
        <TestingFantasy />
        <PhotoGallery photos={photosData} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
