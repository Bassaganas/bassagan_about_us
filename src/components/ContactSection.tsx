'use client';

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            console.log('Email sent successfully:', result.text);
            setStatus('success');
            setFormData({ user_name: '', user_email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        <span className="text-gray-900">Get in </span>
                        <span className="text-coral-700">Touch</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
                            <p className="text-gray-700 leading-relaxed">
                                I'm always open to discussing new projects, participate in conferences or teaching initiatives.
                                Feel free to reach me about test automation, architecture, or just connecting with fellow tech enthusiasts.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-3">
                                        <svg className="h-5 w-5 text-coral-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Email</p>
                                        <a href="mailto:paula.bassaganas@gmail.com" className="text-coral-700 hover:text-coral-800">
                                            paula.bassaganas@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coral-100 flex items-center justify-center mr-3">
                                        <svg className="h-5 w-5 text-coral-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Social Media</p>
                                        <div className="flex mt-1 space-x-4">
                                            <a href="https://www.linkedin.com/in/paulabassaganas/" className="text-coral-700 hover:text-coral-800">
                                                <span className="sr-only">LinkedIn</span>
                                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                            <a href="https://github.com/Bassaganas" className="text-coral-700 hover:text-coral-800">
                                                <span className="sr-only">GitHub</span>
                                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-coral-100 to-orange-50 transform -rotate-3 rounded-2xl"></div>
                            <div className="relative bg-white shadow-lg rounded-lg p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-coral-500 focus:border-coral-500"
                                            placeholder="How can I help you?"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className={`w-full bg-coral-700 hover:bg-coral-800 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 shadow-md ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>

                                    {status === 'success' && (
                                        <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
                                            Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                                            There was an error sending your message. Please try again later.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute inset-0 bg-coral-50 opacity-30 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)",
                backgroundSize: "50px 50px"
            }}></div>
        </section>
    );
} 