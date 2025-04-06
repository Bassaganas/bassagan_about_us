import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="about" className="pt-32 pb-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Paula Bassagañas Òdena
                        </h1>
                        <p className="text-xl text-blue-600 dark:text-blue-400 mb-6 font-mono">
                            IT Architect
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            IT Architect specialized in test automation and the pharmaceutical field.
                            Passionate about building robust, scalable testing solutions for critical systems.
                            Experienced in implementing quality-driven approaches in regulated environments.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-md"
                            >
                                Contact Me
                            </a>
                            <a
                                href="#experience"
                                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-800 transition"
                            >
                                My Experience
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                            <Image
                                src="https://avatars.githubusercontent.com/u/205505581?s=400&u=0b64015aee994a5a6b04f3b2cd92a33e841f4c95&v=4"
                                alt="Paula Bassagañas Òdena"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 