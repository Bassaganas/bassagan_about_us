import React from 'react';

interface Event {
    date: string;
    title: string;
    location: string;
    description: string;
}

interface UpcomingEventsProps {
    events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
    return (
        <section id="events" className="py-8 bg-white relative">
            {/* Subtle decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-70"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
                    <div className="w-24 h-1 bg-coral-500 mx-auto mb-4"></div>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Join me at these upcoming professional engagements where I'll be sharing insights on test automation and IT architecture
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group flex flex-col h-full"
                        >
                            {/* Card header with date */}
                            <div className="bg-gradient-to-r from-coral-500 to-coral-600 px-6 py-4 flex items-center">
                                <div className="bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                                    <span className="text-white font-mono font-medium">{event.date}</span>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="p-6 flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-coral-600 transition-colors duration-300">
                                    {event.title}
                                </h3>

                                <div className="flex items-start mb-4">
                                    <svg className="w-5 h-5 text-coral-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">{event.location}</span>
                                </div>

                                <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    {event.description}
                                </p>
                            </div>

                            {/* Card footer */}
                            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 mt-auto">
                                <a href="#" className="text-coral-600 hover:text-coral-700 text-sm font-medium inline-flex items-center transition-colors duration-300">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech pattern overlay */}
            <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B4F' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-coral-200 to-transparent"></div>
        </section>
    );
} 