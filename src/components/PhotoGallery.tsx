"use client";

import React from 'react';
import Image from 'next/image';
import { PhotoItem } from '@/data/additional-data';
import { FaExternalLinkAlt } from 'react-icons/fa';

type PhotoGalleryProps = {
    photos: PhotoItem[];
};

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
    return (
        <section id="gallery" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center">Photo Gallery</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    );
} 