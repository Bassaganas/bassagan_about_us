'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { TildeWatermark } from '@/components/Brand';
import { TestimonialItem } from '@/data/additional-data';
import type { SiteStats } from '@/lib/timeline';

type TestimonialsProps = {
    testimonials: TestimonialItem[];
    stats: SiteStats;
};

/** Quotes shown before the reader asks for more, and how many each click adds. */
const STEP = 6;

export default function Testimonials({ testimonials, stats }: TestimonialsProps) {
    const [visibleCount, setVisibleCount] = useState(STEP);

    // The source data repeats a couple of quotes; show each one once.
    const unique = testimonials.filter(
        (testimonial, index) => testimonials.findIndex((t) => t.quote === testimonial.quote) === index
    );

    const shown = unique.slice(0, visibleCount);
    const remaining = unique.length - shown.length;

    const headline = [
        {
            value: stats.averageRating ? stats.averageRating.toFixed(1) : 'n/a',
            suffix: '/5',
            label: 'Average rating across rated sessions',
        },
        { value: `${stats.ratedBy}`, suffix: '', label: 'Conference delegates who scored them' },
        { value: `${stats.awards}`, suffix: '', label: 'Award-listed tutorials' },
    ];

    return (
        // The dark ground is kept for contrast, but held inside a rounded panel on
        // the page ground rather than run full width, so it reads as the biggest
        // card on a card-based page instead of a different site.
        <section
            id="feedback"
            className="section snap-section bg-gradient-to-b from-white via-white to-ink-50"
        >
            <div className="shell">
                <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-4 py-10 shadow-lift sm:px-8 sm:py-14 lg:px-12 lg:py-16">
                    <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                    <div
                        className="pointer-events-none absolute -left-32 -top-24 h-80 w-80 rounded-full bg-coral-600/20 blur-3xl"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -bottom-24 -right-32 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
                        aria-hidden="true"
                    />

                    <TildeWatermark className="-right-12 -top-10 hidden h-80 w-80 rotate-[-10deg] text-cream/[0.07] sm:block lg:h-96 lg:w-96" />

                    <div className="relative">
                <div className="max-w-2xl">
                    <p className="eyebrow !text-coral-400">Feedback</p>
                    <h2 className="section-title !text-white">What people say</h2>
                    <p className="section-lead !text-ink-300">
                        Ratings from conference delegates, and words from colleagues and students
                        I have worked with and taught.
                    </p>
                </div>

                <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-3">
                    {headline.map((stat) => (
                        <div key={stat.label} className="bg-ink-900 px-5 py-6">
                            <dt className="sr-only">{stat.label}</dt>
                            <dd>
                                <span className="font-mono text-3xl font-semibold tracking-tight text-white">
                                    {stat.value}
                                    <span className="text-lg text-ink-400">{stat.suffix}</span>
                                </span>
                                <span className="mt-2 block text-sm leading-snug text-ink-400">{stat.label}</span>
                            </dd>
                        </div>
                    ))}
                </dl>

                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {shown.map((testimonial) => (
                        <li
                            key={testimonial.quote}
                            className="flex min-w-0 flex-col rounded-2xl border border-ink-800 bg-ink-900/70 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ink-700 sm:p-6"
                        >
                            <svg
                                className="h-7 w-7 flex-shrink-0 text-coral-500/70"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                            >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>

                            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-200">
                                {testimonial.quote}
                            </blockquote>

                            {testimonial.link && (
                                <a
                                    href={testimonial.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-coral-400 transition-colors hover:text-coral-300"
                                >
                                    {testimonial.link.label}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            )}

                            <div className="mt-5 flex items-center gap-3 border-t border-ink-800 pt-4">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coral-500 to-orange-500 font-display text-sm font-bold text-white">
                                    {testimonial.author.charAt(0)}
                                </span>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                                    <p className="text-xs leading-snug text-ink-400">
                                        {testimonial.role}
                                        {testimonial.company && ` · ${testimonial.company}`}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Same pattern as the journey: a few quotes, then ask for the rest. */}
                {remaining > 0 && (
                    <div className="mt-10 flex flex-col items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setVisibleCount((count) => count + STEP)}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-coral-500 hover:text-coral-400"
                            aria-label={`Show ${Math.min(STEP, remaining)} more of the ${unique.length} quotes`}
                        >
                            <FaChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                        </button>
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                            {remaining} more
                        </span>
                    </div>
                )}

                {remaining === 0 && unique.length > STEP && (
                    <div className="mt-10 flex flex-col items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setVisibleCount(STEP)}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-coral-500 hover:text-coral-400"
                            aria-label="Collapse the quotes"
                        >
                            <FaChevronUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                        </button>
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                            Collapse
                        </span>
                    </div>
                )}
                    </div>
                </div>
            </div>
        </section>
    );
}
