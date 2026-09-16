import { timelineData, type TimelineItem } from '@/data/timeline-data';
import { upcomingEventsData } from '@/data/additional-data';

const MONTHS = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december',
];

/** Sortable value for a timeline date such as "November 2025" or "July 2022 - Present". */
export function timelineDateValue(date: string): number {
    const [month, year] = date.split(' - ')[0].trim().split(' ');
    return (parseInt(year, 10) || 0) * 12 + MONTHS.indexOf((month || '').toLowerCase()) + 1;
}

function nowValue(now: Date): number {
    return now.getFullYear() * 12 + now.getMonth() + 1;
}

/**
 * Timeline entries that have already happened, newest first.
 * Note: this is evaluated at build time, since the site is a static export.
 */
export function pastTimelineItems(now = new Date()): TimelineItem[] {
    return timelineData
        .filter((item) => timelineDateValue(item.date) <= nowValue(now))
        .sort((a, b) => timelineDateValue(b.date) - timelineDateValue(a.date));
}

/** Display names for the organisations behind the role titles. */
const COMPANY_BRANDS: Record<string, string> = {
    'Roche Diagnostics': 'Roche',
    'Roche Swisslab GmbH': 'Roche',
    'SCRM Lidl International Hub': 'Lidl',
};

export function companyBrand(company: string): string {
    return COMPANY_BRANDS[company] ?? company;
}

export type SiteStats = {
    yearsExperience: number;
    talksDelivered: number;
    upcomingTalks: number;
    averageRating: number | null;
    ratedBy: number;
    awards: number;
    companies: string[];
    /** Countries where a talk has been delivered or is already booked. */
    countries: string[];
    /** Cities where a talk has been delivered or is already booked, oldest first. */
    cities: { city: string; country: string }[];
};

/** Headline numbers for the hero and the feedback section, all derived from src/data. */
export function siteStats(now = new Date()): SiteStats {
    const past = pastTimelineItems(now);
    const experience = past.filter((item) => item.type === 'experience');
    const talks = past.filter((item) => item.type === 'speaking');

    const ratings = talks
        .map((item) => item.feedback?.award)
        .filter((award): award is NonNullable<typeof award> => Boolean(award));

    // Ratings are collected on different scales (out of 5 or out of 10), so
    // normalise every one of them to a 5 point scale before averaging.
    const averageRating = ratings.length
        ? ratings.reduce((sum, a) => sum + (a.averageRating / (a.maxRating ?? 5)) * 5, 0) / ratings.length
        : null;

    const startValues = experience.map((item) => timelineDateValue(item.date));
    const yearsExperience = startValues.length
        ? Math.floor((nowValue(now) - Math.min(...startValues)) / 12)
        : 0;

    const companies: string[] = [];
    for (const item of experience) {
        const brand = companyBrand(item.company ?? item.title.split(' - ').slice(1).join(' - '));
        if (brand && !companies.includes(brand)) companies.push(brand);
    }

    // Reach covers both delivered talks and conferences already booked. `talks` is
    // newest first, so reverse it to read as a tour that ends on what is next.
    const stops = [
        ...[...talks].reverse().map((item) => ({ city: item.city, country: item.country })),
        ...upcomingEventsData.map((event) => ({ city: event.city, country: event.country })),
    ];

    const countries: string[] = [];
    const cities: { city: string; country: string }[] = [];
    for (const stop of stops) {
        if (stop.country && !countries.includes(stop.country)) countries.push(stop.country);
        if (stop.city && stop.country && !cities.some((c) => c.city === stop.city)) {
            cities.push({ city: stop.city, country: stop.country });
        }
    }

    return {
        yearsExperience,
        talksDelivered: talks.length,
        upcomingTalks: upcomingEventsData.length,
        averageRating,
        ratedBy: ratings.reduce((sum, a) => sum + a.respondents, 0),
        awards: ratings.length,
        companies,
        countries,
        cities,
    };
}
