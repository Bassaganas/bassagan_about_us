import React from 'react';
import { TestimonialItem } from '@/data/additional-data';

type TestimonialsProps = {
    testimonials: TestimonialItem[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
    return (
        <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-2 text-center">What People Say</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-10 max-w-2xl mx-auto">
                    Feedback from colleagues and clients about my work and collaborations.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <svg
                                className="w-10 h-10 text-gray-300 dark:text-gray-500 mb-4"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                            >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="ml-3">
                                    <p className="text-gray-900 dark:text-white font-semibold">{testimonial.author}</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {testimonial.role}
                                        {testimonial.company && ` at ${testimonial.company}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 