import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import UpcomingEvents from '@/components/UpcomingEvents';
import PhotoGallery from '@/components/PhotoGallery';
import ContactSection from '@/components/ContactSection';

import { timelineData } from '@/data/timeline-data';
import { upcomingEventsData, photosData } from '@/data/additional-data';

export default function Home() {
  // Filter out upcoming events and sort by date
  const allTimelineItems = [...timelineData]
    .filter(item => {
      // Extract year and month from date strings
      const getDateValue = (dateStr: string) => {
        const [month, year] = dateStr.split(' ');
        const months = {
          'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
          'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        };
        return (parseInt(year) * 12) + (months[month as keyof typeof months] || 0);
      };

      // Handle date ranges (e.g., "July 2022 - Present")
      const date = item.date.split(' - ')[0];
      const [month, year] = date.split(' ');

      // Check if the date is in the future
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed

      const itemYear = parseInt(year);
      const months = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
      };
      const itemMonth = months[month as keyof typeof months] || 0;

      // If year is in the future, or year is current and month is in the future
      return !(itemYear > currentYear || (itemYear === currentYear && itemMonth > currentMonth));
    })
    .sort((a, b) => {
      // Extract year and month from date strings
      const getDateValue = (dateStr: string) => {
        const [month, year] = dateStr.split(' ');
        const months = {
          'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
          'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        };
        return (parseInt(year) * 12) + (months[month as keyof typeof months] || 0);
      };

      // Handle date ranges (e.g., "July 2022 - Present")
      const aDate = a.date.split(' - ')[0];
      const bDate = b.date.split(' - ')[0];

      return getDateValue(bDate) - getDateValue(aDate);
    });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <UpcomingEvents events={upcomingEventsData} />
        <section id="professional-journey" className="py-16 bg-gradient-to-b from-white to-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-coral-600">Professional</span>{' '}
              <span className="text-orange-600">Journey</span>
            </h2>
            <Timeline items={allTimelineItems} />
          </div>
        </section>
        <PhotoGallery photos={photosData} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
