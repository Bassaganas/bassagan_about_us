"use client";

import React from 'react';
import Image from 'next/image';
import type { TimelineItem } from '@/data/timeline-data';
import { FaQuoteLeft, FaBriefcase, FaMicrophone, FaLaptopCode } from 'react-icons/fa';

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    // Function to determine image container class based on image path
    const getImageContainerClass = (photoPath: string) => {
        if (photoPath.includes('lidl_pay')) {
            return 'mt-4 relative w-full aspect-[3/1] rounded-lg overflow-hidden';
        }
        if (photoPath.includes('cobas_infinity')) {
            return 'mt-4 relative w-full aspect-[2/1] rounded-lg overflow-hidden';
        }
        if (photoPath.includes('boehringer_ingelheim')) {
            return 'mt-4 relative w-full aspect-[3/1] rounded-lg overflow-hidden flex items-center justify-center';
        }
        if (photoPath.includes('upf_logo')) {
            return 'mt-4 relative w-2/3 aspect-[5/1] rounded-lg overflow-hidden flex items-center justify-center mx-auto';
        }
        return 'mt-4 relative w-full aspect-[16/9] rounded-lg overflow-hidden';
    };

    // Function to determine image object fit based on image path
    const getImageObjectFit = (photoPath: string) => {
        if (photoPath.includes('lidl_pay') || photoPath.includes('cobas_infinity') ||
            photoPath.includes('boehringer_ingelheim') || photoPath.includes('upf_logo')) {
            return 'object-contain bg-white';
        }
        return 'object-cover';
    };

    // Function to determine image padding based on image path
    const getImagePadding = (photoPath: string) => {
        if (photoPath.includes('cobas_infinity')) {
            return 'p-4';
        }
        if (photoPath.includes('boehringer_ingelheim')) {
            return 'p-4';
        }
        if (photoPath.includes('upf_logo')) {
            return 'p-4';
        }
        return '';
    };

    // Function to determine image max height
    const getImageMaxHeight = (photoPath: string) => {
        if (photoPath.includes('boehringer_ingelheim')) {
            return 'max-h-[180px]';
        }
        if (photoPath.includes('upf_logo')) {
            return 'max-h-[45px]';
        }
        return '';
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Timeline line */}
            <div className="absolute left-[22px] sm:left-[26px] top-4 bottom-0 w-1.5 bg-gradient-to-b from-coral-500 to-orange-500 rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-16">
                {items?.map((item, index) => (
                    <div key={index} className="relative pl-16 sm:pl-20">
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-4 w-12 h-12 rounded-full border-4 ${item.type === 'experience'
                            ? 'border-coral-600 bg-coral-50 hover:bg-coral-100'
                            : 'border-purple-500 bg-purple-50 hover:bg-purple-100'
                            } flex items-center justify-center -translate-x-[22px] shadow-lg hover:scale-110 transition-all duration-200`}>
                            {item.type === 'experience' ? (
                                <FaLaptopCode className="text-coral-600 text-2xl" />
                            ) : (
                                <FaMicrophone className="text-purple-600 text-2xl" />
                            )}
                        </div>

                        <div className="flex flex-col lg:flex-row lg:gap-12">
                            {/* Main Content */}
                            <div className={`flex-1 rounded-lg shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 ${item.type === 'experience'
                                ? 'bg-white border border-coral-100'
                                : 'bg-gradient-to-br from-purple-50 to-white border border-purple-100'
                                }`}>
                                {/* Date pill */}
                                <div className={`inline-block ${item.type === 'experience'
                                    ? 'bg-gradient-to-r from-coral-600 to-coral-500'
                                    : 'bg-gradient-to-r from-purple-600 to-purple-500'
                                    } text-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm`}>
                                    {item.date}
                                </div>

                                {/* Title */}
                                <h3 className={`text-xl font-bold mb-2 ${item.type === 'experience'
                                    ? 'text-coral-900'
                                    : 'text-purple-900'
                                    }`}>
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4">
                                    {item.description}
                                </p>

                                {/* Link for talks/conferences */}
                                {item.type === 'speaking' && item.link && (
                                    <div className="mb-4">
                                        <a
                                            href={item.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                                        >
                                            {item.link.label}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                )}

                                {/* Tags */}
                                {item.tags && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`${item.type === 'experience'
                                                    ? 'bg-coral-50 text-coral-700 border border-coral-200'
                                                    : 'bg-purple-50 text-purple-700 border border-purple-200'
                                                    } px-3 py-1 rounded-full text-sm`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Photo */}
                                {item.photo && (
                                    <div className={`${getImageContainerClass(item.photo)} ${getImageMaxHeight(item.photo)}`}>
                                        <Image
                                            src={item.photo}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={`${getImageObjectFit(item.photo)} hover:scale-105 transition-transform duration-300 ${getImagePadding(item.photo)}`}
                                            priority={index < 2}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Testimonial Bubble */}
                            {item.testimonial && (
                                <div className="w-full lg:w-96 mt-6 lg:mt-0 relative">
                                    <div className={`absolute -left-4 top-6 w-4 h-4 ${item.type === 'experience'
                                        ? 'bg-gradient-to-r from-coral-50 to-white'
                                        : 'bg-gradient-to-r from-purple-50 to-white'
                                        } transform rotate-45 hidden lg:block`}></div>
                                    <div className={`${item.type === 'experience'
                                        ? 'bg-gradient-to-r from-coral-50 to-white border border-coral-100'
                                        : 'bg-gradient-to-r from-purple-50 to-white border border-purple-100'
                                        } p-6 lg:p-8 rounded-lg shadow-md`}>
                                        <FaQuoteLeft className={`${item.type === 'experience'
                                            ? 'text-coral-500'
                                            : 'text-purple-500'
                                            } text-xl mb-2`} />
                                        <p className="text-gray-700 italic mb-2">
                                            "{item.testimonial.quote}"
                                        </p>
                                        <div className="text-sm text-gray-600">
                                            <span className="font-semibold">{item.testimonial.author}</span>
                                            {item.testimonial.role && (
                                                <span className={`${item.type === 'experience'
                                                    ? 'text-coral-600'
                                                    : 'text-purple-600'
                                                    }`}> • {item.testimonial.role}</span>
                                            )}
                                            {item.testimonial.company && (
                                                <span className={`${item.type === 'experience'
                                                    ? 'text-coral-600'
                                                    : 'text-purple-600'
                                                    }`}> • {item.testimonial.company}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 