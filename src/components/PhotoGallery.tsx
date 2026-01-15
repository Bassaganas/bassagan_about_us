"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PhotoItem } from '@/data/additional-data';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type PhotoGalleryProps = {
    photos: PhotoItem[];
};

const PHOTOS_PER_PAGE = 8;
const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    // Calculate how many pages we need
    const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

    // Get the current set of photos to display
    const getCurrentPhotos = () => {
        const start = currentIndex * PHOTOS_PER_PAGE;
        const end = start + PHOTOS_PER_PAGE;
        return photos.slice(start, end);
    };

    // Auto-rotate through photos
    useEffect(() => {
        if (!isAutoRotating || totalPages <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }, AUTO_ROTATE_INTERVAL);

        return () => clearInterval(interval);
    }, [isAutoRotating, totalPages]);

    const goToNext = () => {
        setIsAutoRotating(false);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const goToPrev = () => {
        setIsAutoRotating(false);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (pageIndex: number) => {
        setIsAutoRotating(false);
        setCurrentIndex(pageIndex);
    };

    const currentPhotos = getCurrentPhotos();

    return (
        <section id="gallery" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">Photo Gallery</h2>

                <div className="relative">
                    {/* Navigation Buttons */}
                    {totalPages > 1 && (
                        <>
                            <button
                                onClick={goToPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-coral-50 transition-all duration-200 hover:scale-110"
                                aria-label="Previous photos"
                            >
                                <FaChevronLeft className="text-coral-600 w-5 h-5" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-coral-50 transition-all duration-200 hover:scale-110"
                                aria-label="Next photos"
                            >
                                <FaChevronRight className="text-coral-600 w-5 h-5" />
                            </button>
                        </>
                    )}

                    {/* Photo Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentPhotos.map((photo, index) => {
                            const globalIndex = currentIndex * PHOTOS_PER_PAGE + index;
                            return (
                                <div
                                    key={globalIndex}
                                    className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="aspect-square relative overflow-hidden">
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
                                                <p className="text-white text-sm font-medium">
                                                    {photo.caption}
                                                </p>
                                                {photo.link && (
                                                    <a
                                                        href={photo.link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-coral-300 hover:text-coral-100 text-sm font-medium transition-colors duration-200"
                                                    >
                                                        {photo.link.label}
                                                        <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Page Indicators */}
                    {totalPages > 1 && (
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <button
                                    key={pageIndex}
                                    onClick={() => goToPage(pageIndex)}
                                    className={`transition-all duration-200 rounded-full ${
                                        pageIndex === currentIndex
                                            ? 'bg-coral-600 w-8'
                                            : 'bg-coral-200 w-2 hover:bg-coral-400'
                                    } h-2`}
                                    aria-label={`Go to page ${pageIndex + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Auto-rotate indicator */}
                    {totalPages > 1 && isAutoRotating && (
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-500">
                                Auto-rotating through {photos.length} photos
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 