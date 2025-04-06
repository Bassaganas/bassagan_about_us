import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="about" className="pt-24 pb-10 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Additional decorative blobs positioned strategically behind content */}
            <div className="absolute top-20 -left-16 w-72 h-72 -z-10 opacity-5">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF6B4F" d="M45.7,-77.8C59.1,-71.3,70.3,-58.9,79.5,-44.4C88.7,-29.9,95.9,-14.9,95.5,-0.2C95.1,14.5,87.1,29,77.7,41.9C68.2,54.7,57.3,65.9,44.4,74.4C31.5,82.9,16.6,88.7,1.5,86.5C-14,84.3,-28.1,74,-42.1,65.5C-56.2,57,-70.2,50.4,-78.1,39.2C-86,28.1,-87.7,12.4,-87,-3.1C-86.3,-18.7,-83.3,-34.1,-73.8,-44.5C-64.2,-54.9,-48.3,-60.3,-34.2,-66.6C-20.2,-73,-10.1,-80.3,2.6,-85C15.4,-89.7,32.3,-84.3,45.7,-77.8Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="absolute -bottom-28 right-0 w-96 h-96 -z-10 opacity-5 rotate-45">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF6B4F" d="M36.9,-62.2C47.3,-53.3,54.9,-41.6,60.9,-29.5C66.9,-17.3,71.3,-4.6,70.9,8.2C70.4,21,64.9,33.9,56.7,44.5C48.4,55.1,37.4,63.5,24.6,70.2C11.8,76.9,-2.8,82,-18.4,80.8C-34,79.6,-50.7,72.1,-60.7,59.9C-70.7,47.7,-74.1,30.8,-75.4,14.6C-76.6,-1.6,-75.9,-17,-67.7,-27.1C-59.6,-37.2,-44.1,-41.8,-31.7,-50.4C-19.3,-58.9,-9.7,-71.3,2.1,-74.6C13.9,-77.9,27.8,-72.1,36.9,-62.2Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                    <div className="md:w-3/5 space-y-7 relative">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                                Paula Bassagañas
                            </h1>
                            <div className="flex items-center">
                                <div className="w-10 h-0.5 bg-coral-500 mr-3"></div>
                                <h2 className="text-xl font-semibold text-coral-700">IT Architect</h2>
                            </div>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                            IT Architect specialized in test automation and the pharmaceutical field.
                            Passionate about building robust, scalable testing solutions for critical systems.
                            Experienced in implementing quality-driven approaches in regulated environments.
                        </p>

                        {/* Decorative blob behind buttons */}
                        <div className="absolute bottom-0 left-0 w-64 h-64 -z-10 opacity-5">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FF6B4F" d="M47.7,-51.2C59.2,-37.9,64.7,-18.9,62.4,-2.3C60.1,14.4,50.1,28.9,38.5,41.7C26.9,54.5,13.4,65.7,-2.3,68C-18.1,70.3,-36.1,63.8,-49.5,51C-62.9,38.2,-71.6,19.1,-70.8,0.8C-70,-17.4,-59.6,-34.9,-46.1,-48.2C-32.6,-61.5,-16.3,-70.7,1.5,-72.1C19.2,-73.6,38.5,-67.3,47.7,-51.2Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2 relative z-10">
                            <Link href="#contact">
                                <div className="px-6 py-3 bg-coral-600 hover:bg-coral-700 text-white font-medium rounded shadow-sm transition duration-300 flex items-center">
                                    <span>Contact Me</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </Link>
                            <Link href="#experience">
                                <div className="px-6 py-3 bg-white hover:bg-orange-50 text-gray-800 font-medium rounded border border-gray-200 shadow-sm hover:border-coral-200 transition duration-300 flex items-center">
                                    <span>My Experience</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-coral-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-2/5 flex justify-center">
                        <div className="relative">
                            {/* Background decorative gradient */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-coral-100 to-orange-50 rounded-full blur-md -z-10 opacity-80"></div>

                            {/* Additional blob decoration behind image */}
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 -z-10 opacity-5">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FF6B4F" d="M40.8,-58.9C55.3,-51.5,71,-44.5,78.7,-32.1C86.4,-19.6,86.1,-1.5,79.9,13.4C73.7,28.2,61.5,39.9,48.8,50.1C36.1,60.3,23,69,6.8,75.2C-9.3,81.3,-28.5,85,-42.2,78C-55.9,71,-64.1,53.2,-71.8,35.3C-79.4,17.4,-86.5,-0.7,-82.7,-16.6C-78.9,-32.4,-64.3,-46.1,-49.2,-53.6C-34.1,-61.1,-18.5,-62.5,-3.3,-58.3C11.9,-54.1,26.3,-66.3,40.8,-58.9Z" transform="translate(100 100)" />
                                </svg>
                            </div>

                            {/* Moved orange circle decoration to be behind the image */}
                            <div className="absolute -right-10 -bottom-10 bg-orange-50 w-24 h-24 rounded-full opacity-40 -z-10"></div>

                            {/* Image container */}
                            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <Image
                                    src="/images/Paula_Bassaganas_Odena.JPG"
                                    alt="Paula Bassagañas"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                    className="rounded-full"
                                />
                            </div>

                            {/* Available tag */}
                            <div className="absolute -bottom-3 right-0 bg-white rounded-full py-2 px-4 shadow-md border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-sm font-medium text-gray-800">Available for projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute bottom-10 left-1/4 opacity-10 w-32 h-32">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF6B4F" d="M47.7,-51.2C59.2,-37.9,64.7,-18.9,62.4,-2.3C60.1,14.4,50.1,28.9,38.5,41.7C26.9,54.5,13.4,65.7,-2.3,68C-18.1,70.3,-36.1,63.8,-49.5,51C-62.9,38.2,-71.6,19.1,-70.8,0.8C-70,-17.4,-59.6,-34.9,-46.1,-48.2C-32.6,-61.5,-16.3,-70.7,1.5,-72.1C19.2,-73.6,38.5,-67.3,47.7,-51.2Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="absolute top-1/3 left-10 bg-coral-50 w-16 h-16 rounded-full opacity-30"></div>

            {/* Tech Pattern Overlay */}
            <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b4f' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='17' cy='17' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                }}>
            </div>
        </section>
    );
} 