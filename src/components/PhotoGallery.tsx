"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PhotoItem } from '@/data/additional-data';
import { isLogo } from '@/lib/images';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type PhotoGalleryProps = {
    photos: PhotoItem[];
};

const PHOTOS_PER_PAGE = 8;
const AUTO_ROTATE_INTERVAL = 6000;

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);
    const currentPhotos = photos.slice(currentIndex * PHOTOS_PER_PAGE, currentIndex * PHOTOS_PER_PAGE + PHOTOS_PER_PAGE);

    useEffect(() => {
        if (isPaused || totalPages <= 1) return;
        const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % totalPages), AUTO_ROTATE_INTERVAL);
        return () => clearInterval(interval);
    }, [isPaused, totalPages]);

    const step = (delta: number) => {
        setIsPaused(true);
        setCurrentIndex((prev) => (prev + delta + totalPages) % totalPages);
    };

    return (
        <section id="gallery" className="section snap-section relative overflow-hidden bg-gradient-to-b from-ink-50 via-ink-50 to-white">
            <div className="shell relative z-10">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="eyebrow">Gallery</p>
                        <h2 className="section-title">On stage and in the lab</h2>
                        <p className="section-lead">
                            Conferences, classrooms and the diagnostics systems behind the testing work.
                        </p>
                    </div>

                    {totalPages > 1 && (
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-ink-500">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => step(-1)}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition-all hover:border-coral-300 hover:text-coral-600"
                                    aria-label="Previous photos"
                                >
                                    <FaChevronLeft className="h-3.5 w-3.5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => step(1)}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition-all hover:border-coral-300 hover:text-coral-600"
                                    aria-label="Next photos"
                                >
                                    <FaChevronRight className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <ul
                    className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                    onMouseEnter={() => setIsPaused(true)}
                    onFocus={() => setIsPaused(true)}
                >
                    {currentPhotos.map((photo) => (
                        <li
                            key={photo.src}
                            className="group relative overflow-hidden rounded-xl border border-ink-100 bg-white shadow-card"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className={
                                        isLogo(photo.src)
                                            ? 'bg-white object-contain p-6'
                                            : 'object-cover transition-transform duration-500 group-hover:scale-105'
                                    }
                                />
                                {!isLogo(photo.src) && (
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent p-3 pt-8">
                                        <p className="text-[11px] font-medium leading-snug text-white sm:text-xs">
                                            {photo.caption}
                                        </p>
                                        {photo.link && (
                                            <a
                                                href={photo.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-coral-300 transition-colors hover:text-coral-200"
                                            >
                                                {photo.link.label}
                                                <FaExternalLinkAlt className="h-2.5 w-2.5" />
                                            </a>
                                        )}
                                    </div>
                                )}
                                {isLogo(photo.src) && (
                                    <p className="absolute inset-x-0 bottom-0 border-t border-ink-100 bg-white/95 p-2 text-center text-[11px] font-medium text-ink-600">
                                        {photo.caption}
                                    </p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>

                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-2">
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                type="button"
                                onClick={() => {
                                    setIsPaused(true);
                                    setCurrentIndex(pageIndex);
                                }}
                                className="flex h-8 items-center px-1"
                                aria-label={`Go to photo set ${pageIndex + 1}`}
                                aria-current={pageIndex === currentIndex}
                            >
                                <span
                                    className={`block h-1.5 rounded-full transition-all duration-200 ${pageIndex === currentIndex ? 'w-8 bg-coral-600' : 'w-2 bg-ink-300 hover:bg-ink-400'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
