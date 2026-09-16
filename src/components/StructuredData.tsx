import React from 'react';

import { upcomingEventsData } from '@/data/additional-data';
import { SITE_DESCRIPTION, SITE_URL } from '@/lib/site';
import { pastTimelineItems } from '@/lib/timeline';

/**
 * JSON-LD for search engines: who Paula is, and which conferences she is
 * booked to speak at. This is what lets Google treat the site as an entity
 * ("Paula Bassagañas, Functional Architect") rather than just a page of text,
 * and makes the upcoming talks eligible for event rich results.
 *
 * Everything here is derived from src/data, so it cannot drift from the page.
 */

const MONTHS: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
};

/** "October 6-8, 2026" -> "2026-10-06". Returns null when the shape is unexpected. */
function isoStartDate(date: string): string | null {
    const match = date.match(/^([A-Za-z]+)\s+(\d{1,2})[^,]*,\s*(\d{4})$/);
    if (!match) return null;
    const month = MONTHS[match[1].toLowerCase()];
    if (!month) return null;
    return `${match[3]}-${month}-${match[2].padStart(2, '0')}`;
}

export default function StructuredData() {
    const currentRole = pastTimelineItems().find(
        (item) => item.type === 'experience' && item.date.includes('Present') && item.company
    );

    const person = {
        '@type': 'Person',
        '@id': `${SITE_URL}/#paula`,
        name: 'Paula Bassagañas Òdena',
        alternateName: 'Paula Bassagañas',
        jobTitle: 'Functional Architect',
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/og-image.jpg`,
        worksFor: currentRole?.company
            ? { '@type': 'Organization', name: currentRole.company }
            : undefined,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Biberach an der Riss',
            addressCountry: 'DE',
        },
        knowsAbout: [
            'Test automation',
            'AI in the software development lifecycle',
            'Developer platforms',
            'Quality engineering',
            'Retrieval-augmented generation',
        ],
        sameAs: [
            'https://www.linkedin.com/in/paulabassaganas/',
            'https://github.com/Bassaganas',
            'https://testingfantasy.com',
        ],
    };

    const events = upcomingEventsData
        .map((event) => {
            const startDate = isoStartDate(event.date);
            if (!startDate) return null;
            return {
                '@type': 'Event',
                name: event.title,
                startDate,
                eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                eventStatus: 'https://schema.org/EventScheduled',
                description: event.description,
                url: event.link,
                location: {
                    '@type': 'Place',
                    name: event.title,
                    address: { '@type': 'PostalAddress', addressLocality: event.location },
                },
                performer: { '@id': `${SITE_URL}/#paula` },
            };
        })
        .filter(Boolean);

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            person,
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: 'Paula Bassagañas',
                description: SITE_DESCRIPTION,
                inLanguage: 'en',
                publisher: { '@id': `${SITE_URL}/#paula` },
            },
            {
                '@type': 'Organization',
                name: 'Testing Fantasy',
                url: 'https://testingfantasy.com',
                founder: { '@id': `${SITE_URL}/#paula` },
                description:
                    'Learning experiences that teach testing through stories and quests, for teams, conferences and public cohorts.',
            },
            ...events,
        ],
    };

    return (
        <script
            type="application/ld+json"
            // Derived from our own data, so there is no untrusted input here.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
            suppressHydrationWarning
        />
    );
}
