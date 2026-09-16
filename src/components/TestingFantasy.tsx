import React from 'react';
import Link from 'next/link';
import { TildeBare } from '@/components/Brand';

/**
 * The invitation into Testing Fantasy, placed straight after the feedback so it
 * follows the proof. Coral ground with cream type, per the brand guide: the
 * icon on a coral ground must be the reverse (cream) mark, never the coral one.
 */

const OFFERS = [
    {
        title: 'Stories and quests, not slides',
        body: 'Every workshop is a world to walk through. Curiosity is what makes the lesson stick.',
    },
    {
        title: 'Skills that transfer on Monday',
        body: 'Test design, risk thinking, automation and AI in the SDLC, each taught through a chapter of the story.',
    },
    {
        title: 'For teams, conferences and cohorts',
        body: 'Bring a quest to your team, book one for your conference, or join a public cohort.',
    },
];

export default function TestingFantasy() {
    return (
        <section id="testing-fantasy" className="section snap-section bg-ink-50">
            <div className="shell">
                <div className="relative overflow-hidden rounded-3xl bg-coral-600 px-5 py-12 shadow-lift sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                    <TildeBare
                        className="pointer-events-none absolute -right-12 -top-14 h-72 w-72 rotate-[-10deg] text-cream/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                    />
                    <div
                        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl"
                        aria-hidden="true"
                    />

                    <div className="relative">
                        <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-cream/80 sm:text-xs">
                            <span className="h-px w-6 bg-cream/50" aria-hidden="true" />
                            Testing Fantasy
                        </p>

                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                            Join the guild
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream sm:text-lg">
                            A learning experience for adults, built on one idea: only what surprises us
                            stays with us. Testing Fantasy teaches testing through stories and quests,
                            forged over years of hands-on tutorials at EuroSTAR, Agile Testing Days,
                            AutomationSTAR, WeTest and HUSTEF.
                        </p>

                        <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
                            {OFFERS.map((offer) => (
                                <li key={offer.title} className="border-t border-cream/25 pt-4">
                                    <h3 className="font-display text-base font-bold text-cream">{offer.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-cream/90">{offer.body}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <a
                                href="https://testingfantasy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-cream text-coral-700 shadow-card hover:bg-white hover:shadow-lift"
                            >
                                Join the learning platform
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                            <Link
                                href="#contact"
                                className="btn border border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
                            >
                                Bring a quest to your team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
