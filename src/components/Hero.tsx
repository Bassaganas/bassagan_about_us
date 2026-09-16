import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { SiteStats } from '@/lib/timeline';

type HeroProps = {
    stats: SiteStats;
};

export default function Hero({ stats }: HeroProps) {
    const statItems = [
        { value: `${stats.yearsExperience}+`, label: 'Years in software & quality' },
        {
            value: stats.averageRating ? `${stats.averageRating.toFixed(1)}/5` : 'n/a',
            label: 'Average session rating',
        },
        { value: `${stats.ratedBy}`, label: 'Delegates who rated them' },
    ];

    return (
        <section
            id="about"
            className="snap-section relative overflow-hidden bg-white pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36"
        >
            {/* Soft brand wash + engineering dot grid, faded out so the section
                blends into the one below instead of ending on a hard line. */}
            <div className="tilde-bg fade-bottom pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
                className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-coral-100 via-orange-50 to-transparent blur-3xl"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-50"
                aria-hidden="true"
            />

            <div className="shell relative">
                <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                    <div className="max-w-2xl">
                        {/* The role line, set exactly as the brand guide specifies. */}
                        <p className="eyebrow">Functional Architect · AI in SDLC</p>

                        {/* The ñ carries the coral of the tilde mark. */}
                        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
                            Paula Bassaga<span className="text-coral-600">ñ</span>as
                        </h1>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="chip border-purple-200 bg-purple-50 text-purple-700">International speaker</span>
                            {/* The company is a destination of its own, so this chip is a real link. */}
                            <a
                                href="https://testingfantasy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chip gap-1.5 border-coral-300 bg-coral-50 font-medium text-coral-700 transition-all duration-200 hover:border-coral-500 hover:bg-coral-100 hover:text-coral-800"
                            >
                                Founder, Testing Fantasy
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                            </a>
                            <span className="chip border-ink-200 bg-ink-50 text-ink-600">University teacher</span>
                        </div>

                        <p className="mt-6 text-base leading-relaxed text-ink-600 sm:text-lg">
                            I lead the Enterprise Development Platform and the adoption of AI across the
                            software development lifecycle at Boehringer Ingelheim, for around 2,000
                            developers. I also founded Testing Fantasy, where people learn testing through
                            stories and quests instead of slides.
                        </p>

                        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                            The question I care about is the one testing taught me years ago: not how fast
                            we can build, but how we keep trusting what we build.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Link href="#events" className="btn btn-primary">
                                See where I&rsquo;m speaking
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link href="#professional-journey" className="btn btn-secondary">
                                Explore my experience
                            </Link>
                        </div>

                        {stats.companies.length > 0 && (
                            <div className="mt-10">
                                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                                    Experience with
                                </p>
                                <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                                    {stats.companies.map((company) => (
                                        <li key={company} className="text-sm font-semibold text-ink-500">
                                            {company}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>

                    <div className="order-first flex justify-center lg:order-none lg:justify-end">
                        <div className="relative">
                            <div
                                className="absolute -inset-3 rounded-full bg-gradient-to-br from-coral-200/60 via-orange-100/60 to-purple-100/50 blur-xl"
                                aria-hidden="true"
                            />
                            <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-lift sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                                <Image
                                    src="/images/Paula_Bassaganas_Odena.webp"
                                    alt="Paula Bassagañas"
                                    fill
                                    sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px"
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ink-100 bg-white px-4 py-2 shadow-card lg:left-auto lg:right-0 lg:translate-x-0">
                                <span className="flex items-center gap-2 text-xs font-medium text-ink-700">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                    </span>
                                    Open to connect
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Credentials panel: the numbers, then the speaking tour.
                    Everything here is derived from the data in src/data. */}
                <div className="relative mt-14 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:mt-16">
                    <dl className="grid grid-cols-1 gap-px bg-ink-100 sm:grid-cols-3">
                        {statItems.map((stat) => (
                            <div key={stat.label} className="bg-white px-5 py-5 sm:px-6 sm:py-6">
                                <dt className="sr-only">{stat.label}</dt>
                                <dd>
                                    <span className="block font-mono text-2xl font-semibold tracking-tight text-coral-600 sm:text-3xl">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1.5 block text-xs leading-snug text-ink-500 sm:text-sm">
                                        {stat.label}
                                    </span>
                                </dd>
                            </div>
                        ))}
                    </dl>

                    {/* Oldest first, so the row ends on what is booked next. */}
                    {stats.cities.length > 0 && (
                        <div className="flex flex-col gap-3 border-t border-ink-100 bg-ink-50/60 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-6">
                            <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                                On stage in
                            </p>
                            <ul className="flex flex-wrap gap-2">
                                {stats.cities.map(({ city, country }) => (
                                    <li
                                        key={city}
                                        className="chip border-purple-200 bg-white text-purple-800"
                                        title={country}
                                    >
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
