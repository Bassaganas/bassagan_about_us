"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import type { TimelineItem } from '@/data/timeline-data';
import { isLogo } from '@/lib/images';
import { FaQuoteLeft, FaMicrophone, FaLaptopCode, FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp, FaStar } from 'react-icons/fa';

/** Entries shown before the reader asks for more, and how many each click adds. */
const STEP = 4;

interface TimelineProps {
    items: TimelineItem[];
}

type Filter = 'all' | 'experience' | 'speaking';

/** Strip the organiser's session code from a feedback title ("Tut D - Real Title"). */
function sessionTitle(item: TimelineItem): string | null {
    const title = item.feedback?.award?.title;
    if (!title) return null;
    return title.replace(/^(tut(orial)?\.?\s*[a-z0-9]*|session\s*[a-z0-9]*)\s*[-–—]\s*/i, '').trim();
}

export default function Timeline({ items }: TimelineProps) {
    const [filter, setFilter] = useState<Filter>('all');
    const [photoIndices, setPhotoIndices] = useState<Record<number, number>>({});
    const [visibleCount, setVisibleCount] = useState(STEP);

    // A new filter starts the list from the top again.
    useEffect(() => setVisibleCount(STEP), [filter]);

    const counts = {
        all: items.length,
        experience: items.filter((i) => i.type === 'experience').length,
        speaking: items.filter((i) => i.type === 'speaking').length,
    };

    const matching = items
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => filter === 'all' || item.type === filter);

    const visible = matching.slice(0, visibleCount);
    const remaining = matching.length - visible.length;

    const stepPhoto = (key: number, total: number, delta: number) =>
        setPhotoIndices((prev) => ({
            ...prev,
            [key]: (((prev[key] ?? 0) + delta) % total + total) % total,
        }));

    const filters: { id: Filter; label: string }[] = [
        { id: 'all', label: 'Everything' },
        { id: 'experience', label: 'Roles' },
        { id: 'speaking', label: 'Talks' },
    ];

    return (
        <div>
            {/* Filter */}
            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter the timeline">
                {filters.map(({ id, label }) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setFilter(id)}
                        aria-pressed={filter === id}
                        className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${filter === id
                            ? 'border-ink-950 bg-ink-950 text-white shadow-card'
                            : 'border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:text-ink-950'
                            }`}
                    >
                        {label}
                        <span className={`font-mono text-[11px] ${filter === id ? 'text-white/60' : 'text-ink-400'}`}>
                            {counts[id]}
                        </span>
                    </button>
                ))}
            </div>

            <div className="relative">
                {/* Rail */}
                <div
                    className="absolute bottom-2 left-[15px] top-2 w-0.5 bg-gradient-to-b from-coral-400 via-ink-200 to-transparent sm:left-[19px]"
                    aria-hidden="true"
                />

                <div className="space-y-6 sm:space-y-8">
                    {visible.map(({ item, index }) => {
                        const isSpeaking = item.type === 'speaking';
                        const accent = isSpeaking
                            ? { chip: 'border-purple-200 bg-purple-50 text-purple-800', dot: 'border-purple-500 bg-purple-50 text-purple-600' }
                            : { chip: 'border-coral-200 bg-coral-50 text-coral-800', dot: 'border-coral-500 bg-coral-50 text-coral-600' };

                        const photos = item.photos?.length ? item.photos : item.photo ? [item.photo] : [];
                        const current = photoIndices[index] ?? 0;
                        const talk = item.talk ?? sessionTitle(item);
                        const heading = item.role ?? item.title;

                        return (
                            <article key={`${item.title}-${item.date}`} className="relative pl-11 sm:pl-16">
                                {/* Rail marker */}
                                <span
                                    className={`absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white shadow-sm sm:h-10 sm:w-10 ${accent.dot}`}
                                    aria-hidden="true"
                                >
                                    {isSpeaking ? <FaMicrophone className="h-3.5 w-3.5" /> : <FaLaptopCode className="h-3.5 w-3.5" />}
                                </span>

                                <div className="card card-hover overflow-hidden">
                                    <div className="p-5 sm:p-6 lg:p-7">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className={`chip ${accent.chip}`}>{item.date}</span>
                                            <span className="chip border-ink-200 bg-white uppercase tracking-wider text-ink-500">
                                                {isSpeaking ? 'Speaking' : 'Role'}
                                            </span>
                                        </div>

                                        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-950 sm:text-xl">
                                            {heading}
                                        </h3>

                                        {item.company && (
                                            <p className="mt-1 text-sm font-semibold text-coral-700">{item.company}</p>
                                        )}
                                        {isSpeaking && talk && (
                                            <p className="mt-1 text-sm font-semibold text-purple-700">{talk}</p>
                                        )}

                                        <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-base">
                                            {item.description}
                                        </p>

                                        {/* Award + audience feedback */}
                                        {isSpeaking && item.feedback && (
                                            <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50/60 p-4 sm:p-5">
                                                {item.feedback.award && (
                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-ink-950 px-2.5 py-1.5 font-mono text-sm font-semibold text-white">
                                                            <FaStar className="h-3.5 w-3.5 text-amber-400" />
                                                            {item.feedback.award.averageRating.toFixed(2)}
                                                            <span className="text-white/50">
                                                                /{item.feedback.award.maxRating ?? 5}
                                                            </span>
                                                        </span>
                                                        <span className="text-sm font-semibold text-purple-900">
                                                            {item.feedback.award.category}
                                                            {item.feedback.award.rank && ` · ${item.feedback.award.rank} place`}
                                                        </span>
                                                        <span className="font-mono text-[11px] uppercase tracking-wider text-purple-700/80">
                                                            {item.feedback.award.respondents} respondents
                                                        </span>
                                                    </div>
                                                )}

                                                {item.feedback.quote && (
                                                    <blockquote className="mt-3 border-l-2 border-purple-400 pl-3 text-sm italic leading-relaxed text-ink-700">
                                                        &ldquo;{item.feedback.quote}&rdquo;
                                                    </blockquote>
                                                )}
                                            </div>
                                        )}

                                        {item.tags && item.tags.length > 0 && (
                                            <ul className="mt-5 flex flex-wrap gap-1.5">
                                                {item.tags.map((tag) => (
                                                    <li key={tag} className="chip border-ink-100 bg-ink-50 text-ink-600">
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Colleague or student testimonial */}
                                        {item.testimonial && (
                                            <figure className="mt-5 rounded-xl border border-coral-100 bg-coral-50/50 p-4 sm:p-5">
                                                <FaQuoteLeft className="h-3.5 w-3.5 text-coral-400" aria-hidden="true" />
                                                <blockquote className="mt-2 text-sm italic leading-relaxed text-ink-700">
                                                    {item.testimonial.quote}
                                                </blockquote>
                                                <figcaption className="mt-3 text-xs text-ink-500">
                                                    <span className="font-semibold text-ink-800">{item.testimonial.author}</span>
                                                    {item.testimonial.role && item.testimonial.role !== 'N/A' && ` · ${item.testimonial.role}`}
                                                    {item.testimonial.company && ` · ${item.testimonial.company}`}
                                                </figcaption>
                                            </figure>
                                        )}

                                        {item.link && (
                                            <a
                                                href={item.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`mt-5 inline-flex items-center gap-1.5 py-1 text-sm font-semibold transition-colors ${isSpeaking
                                                    ? 'text-purple-700 hover:text-purple-800'
                                                    : 'text-coral-700 hover:text-coral-800'
                                                    }`}
                                            >
                                                {item.link.label}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>

                                    {/* Photography */}
                                    {photos.length > 0 && (
                                        isLogo(photos[0]) ? (
                                            <div className="flex items-center border-t border-ink-100 bg-ink-50/60 px-5 py-4 sm:px-6">
                                                <span className="relative h-10 w-40 sm:h-12 sm:w-48">
                                                    <Image
                                                        src={photos[0]}
                                                        alt={item.company ?? item.title}
                                                        fill
                                                        sizes="192px"
                                                        className="object-contain object-left"
                                                    />
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="border-t border-ink-100 bg-ink-50/70 p-4 sm:p-5">
                                                {/* 3:2 matches most of the source photos, so they fill this
                                                    box exactly. Odd ratios letterbox on the neutral
                                                    background instead of being cropped through faces. */}
                                                <div className="relative mx-auto aspect-[3/2] w-full max-w-[600px] overflow-hidden rounded-lg bg-ink-100">
                                                    {photos.map((photo, photoIndex) => (
                                                        <Image
                                                            key={photo}
                                                            src={photo}
                                                            alt={`${item.title}, photo ${photoIndex + 1}`}
                                                            fill
                                                            sizes="(max-width: 640px) 100vw, 600px"
                                                            className={`object-contain transition-opacity duration-500 ${photoIndex === current ? 'opacity-100' : 'opacity-0'
                                                                }`}
                                                            priority={index < 2 && photoIndex === 0}
                                                        />
                                                    ))}

                                                    {photos.length > 1 && (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={() => stepPhoto(index, photos.length, -1)}
                                                                className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur-sm transition hover:bg-ink-950"
                                                                aria-label="Previous photo"
                                                            >
                                                                <FaChevronLeft className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => stepPhoto(index, photos.length, 1)}
                                                                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur-sm transition hover:bg-ink-950"
                                                                aria-label="Next photo"
                                                            >
                                                                <FaChevronRight className="h-3.5 w-3.5" />
                                                            </button>

                                                            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                                                                {photos.map((photo, photoIndex) => (
                                                                    <button
                                                                        key={photo}
                                                                        type="button"
                                                                        onClick={() => setPhotoIndices((prev) => ({ ...prev, [index]: photoIndex }))}
                                                                        className="flex h-7 items-center px-1"
                                                                        aria-label={`Go to photo ${photoIndex + 1}`}
                                                                        aria-current={photoIndex === current}
                                                                    >
                                                                        <span
                                                                            className={`block h-1.5 rounded-full transition-all duration-200 ${photoIndex === current ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90'
                                                                                }`}
                                                                        />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* The list stops after a few entries so the page keeps moving.
                    Readers who want the rest ask for it; everyone else scrolls on. */}
                {remaining > 0 && (
                    <div className="relative pt-10">
                        <div
                            className="pointer-events-none absolute inset-x-0 -top-28 h-28 bg-gradient-to-b from-transparent to-white"
                            aria-hidden="true"
                        />
                        <div className="relative flex flex-col items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setVisibleCount((count) => count + STEP)}
                                className="group flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-coral-300 hover:text-coral-600 hover:shadow-lift"
                                aria-label={`Show ${Math.min(STEP, remaining)} more of the ${matching.length}`}
                            >
                                <FaChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                            </button>
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                                {remaining} more
                            </span>
                        </div>
                    </div>
                )}

                {remaining === 0 && matching.length > STEP && (
                    <div className="flex flex-col items-center gap-2 pt-10">
                        <button
                            type="button"
                            onClick={() => setVisibleCount(STEP)}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-500 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-coral-300 hover:text-coral-600 hover:shadow-lift"
                            aria-label="Collapse the list"
                        >
                            <FaChevronUp className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                        </button>
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
                            Collapse
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
