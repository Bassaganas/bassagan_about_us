"use client";

import React from 'react';
import Image from 'next/image';
import type { TimelineItem } from '@/data/timeline-data';

interface TimelineProps {
    data: TimelineItem[];
    title: string;
    id: string;
}

interface TimelineItemProps {
    item: TimelineItem;
    index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
    return (
        <div className="mb-20 flex flex-col md:flex-row">
            <div className="flex flex-col items-center mr-6">
                <div>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border-coral-500 border-3 bg-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-coral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className="w-1.5 h-full bg-gradient-to-b from-coral-500 to-orange-500 rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 w-full">
                {/* Main content with photo */}
                <div className="rounded-xl bg-white shadow-lg p-0 w-full lg:w-3/5 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-gray-100">
                    {item.photo && (
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={item.photo}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <span className="absolute bottom-4 left-6 font-semibold text-white px-4 py-1.5 rounded-full 
                                bg-gradient-to-r from-coral-600 to-orange-500 shadow-md">
                                {item.date}
                            </span>
                        </div>
                    )}

                    <div className="p-6">
                        {!item.photo && (
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-white px-4 py-1.5 bg-coral-600 rounded-full">{item.date}</span>
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                            {item.title}
                            <span className="ml-2 inline-block w-2.5 h-2.5 rounded-full bg-coral-500"></span>
                        </h3>
                        <p className="text-gray-700 mb-5 leading-relaxed">{item.description}</p>

                        {item.tags && item.tags.length > 0 && (
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag: string, idx: number) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-gradient-to-r from-orange-100 to-coral-100 text-gray-800 px-3 py-1.5 rounded-full border border-coral-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {item.link && (
                            <div className="mt-5">
                                <a
                                    href={item.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-coral-700 hover:text-coral-800 transition-colors"
                                >
                                    {item.link.label}
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Testimonial as speech bubble */}
                {item.testimonial && (
                    <div className="lg:mt-6 w-full lg:w-2/5 relative">
                        <div className="bg-gradient-to-br from-orange-50 to-coral-50 p-5 rounded-xl shadow-lg relative speech-bubble border-t border-l border-white/50">
                            <svg
                                className="absolute top-4 left-4 w-7 h-7 text-coral-500 opacity-70"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
                            </svg>
                            <div className="ml-7">
                                <blockquote className="italic text-gray-700 text-sm md:text-base">"<span className="text-coral-600 font-medium not-italic">❝</span> {item.testimonial.quote} <span className="text-coral-600 font-medium not-italic">❞</span>"</blockquote>
                                <div className="mt-4 flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-coral-500 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                                            <span className="text-white font-semibold text-base">{item.testimonial.author.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-800">{item.testimonial.author}</p>
                                        <p className="text-xs text-coral-700">
                                            {item.testimonial.role}
                                            {item.testimonial.company && `, ${item.testimonial.company}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Arrow pointing to the experience */}
                        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                            <div className="w-5 h-5 bg-orange-50 transform rotate-45 shadow-md"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Timeline({ data, title, id }: TimelineProps) {
    return (
        <section id={id} className="py-16 bg-gradient-to-b from-white via-gray-50 to-white relative">
            <style jsx global>{`
                .speech-bubble::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: -10px;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                    border-right: 10px solid #fff7ed; /* Orange-50 equivalent */
                }
                
                /* Add Tailwind custom colors for coral */
                :root {
                    --color-coral-50: #fff1ec;
                    --color-coral-100: #ffe4dc;
                    --color-coral-200: #ffc9b9;
                    --color-coral-300: #ffa9a0;
                    --color-coral-400: #ff8a74;
                    --color-coral-500: #ff6b4f;
                    --color-coral-600: #ed4e39;
                    --color-coral-700: #d43a27;
                    --color-coral-800: #b22e22;
                    --color-coral-900: #9a2920;
                }
            `}</style>

            {/* Decorative elements for more visual interest */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF6B4F" d="M44.3,-76.1C58.4,-70.2,71.3,-59.9,79.8,-46.3C88.3,-32.6,92.3,-16.3,89.8,-1.5C87.3,13.4,78.2,26.8,69.2,40.2C60.1,53.5,51,66.9,38.4,74.4C25.8,82,12.9,83.7,-0.2,84C-13.4,84.3,-26.7,83.3,-38.4,77.2C-50.1,71.1,-60.1,60,-68.2,47C-76.3,34,-82.5,17,-83.1,0C-83.7,-17,-78.8,-34,-69.5,-46.9C-60.2,-59.8,-46.6,-68.6,-33,-73.4C-19.4,-78.2,-5.8,-79.1,7.1,-79.9C20,-80.7,30.3,-82,44.3,-76.1Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">
                    <span className="text-gray-800">Professional</span>
                    <span className="text-coral-600 ml-2">Experience</span>
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-coral-500 to-orange-500 mx-auto mb-16 rounded-full"></div>
                <div className="relative">
                    {data.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
} 