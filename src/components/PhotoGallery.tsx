import React from 'react';
import Image from 'next/image';
import { PhotoItem } from '@/data/additional-data';

type PhotoGalleryProps = {
    photos: PhotoItem[];
};

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
    const getImageSettings = (src: string) => {
        if (src.includes('Paula_Bassaganas_Odena')) {
            return {
                objectFit: 'cover',
                quality: 100,
                objectPosition: 'center center'
            };
        }
        return {
            objectFit: 'cover',
            quality: 85,
            objectPosition: 'center'
        };
    };

    return (
        <section id="gallery" className="py-16 bg-gradient-to-b from-white to-orange-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    <span className="text-coral-600">Professional</span>{' '}
                    <span className="text-orange-600">Highlights</span>
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                    A visual journey through my professional experiences, speaking engagements, and technical achievements
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photos.map((photo, index) => {
                        const settings = getImageSettings(photo.src);
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-square relative overflow-hidden bg-white">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        className={`transition-transform duration-500 group-hover:scale-105 ${photo.src.includes('Paula_Bassaganas_Odena') ? 'object-center' : ''
                                            }`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={photo.src.includes('Paula_Bassaganas_Odena')}
                                        quality={settings.quality}
                                        style={{
                                            objectFit: settings.objectFit as 'cover' | 'contain',
                                            objectPosition: settings.objectPosition
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="text-white text-lg font-medium mb-2">
                                                {photo.caption}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 