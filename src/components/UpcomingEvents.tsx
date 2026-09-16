import React from 'react';

interface Event {
    date: string;
    title: string;
    location: string;
    description: string;
    link?: string;
}

interface UpcomingEventsProps {
    events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
    return (
        // No borders: the hero fades into this section's ground, and this section
        // fades back to white for the one below, so no seam is ever visible.
        <section
            id="events"
            className="section snap-section relative bg-gradient-to-b from-ink-50 via-ink-50 to-white"
        >
            <div className="shell relative">
                <div className="max-w-2xl">
                    <p className="eyebrow">Upcoming</p>
                    <h2 className="section-title">Where to find me next</h2>
                    <p className="section-lead">
                        Hands-on tutorials and talks on test automation, AI and quality engineering.
                        Come and say hello, or invite me to your conference.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event, index) => (
                        <article
                            key={`${event.title}-${event.date}`}
                            className="card card-hover group relative flex flex-col overflow-hidden"
                        >
                            <span
                                className={`absolute inset-x-0 top-0 h-1 ${index === 0 ? 'bg-gradient-to-r from-coral-500 to-orange-400' : 'bg-ink-100'
                                    }`}
                                aria-hidden="true"
                            />

                            <div className="flex flex-wrap items-center gap-2 px-5 pb-4 pt-6 sm:px-6">
                                <span className="chip border-ink-200 bg-ink-50 text-ink-600">{event.date}</span>
                                {index === 0 && (
                                    <span className="chip border-coral-200 bg-coral-50 font-semibold uppercase tracking-wider text-coral-700">
                                        Next up
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-1 flex-col px-5 pb-5 sm:px-6 sm:pb-6">
                                <h3 className="font-display text-xl font-bold text-ink-950 transition-colors duration-200 group-hover:text-coral-700">
                                    {event.title}
                                </h3>

                                <p className="mt-2 flex items-start gap-2 text-sm font-medium text-ink-500">
                                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {event.location}
                                </p>

                                <p className="mt-4 border-t border-ink-100 pt-4 text-sm leading-relaxed text-ink-600">
                                    {event.description}
                                </p>

                                <div className="mt-auto pt-5">
                                    {event.link ? (
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-coral-700 transition-colors hover:text-coral-800"
                                        >
                                            Event details
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                                            Details coming soon
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
