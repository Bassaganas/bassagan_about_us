'use client';

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaMagic, FaExternalLinkAlt } from 'react-icons/fa';

export default function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            setStatus('success');
            setFormData({ user_name: '', user_email: '', message: '' });
            setTimeout(() => setStatus('idle'), 6000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 6000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const fieldClass =
        'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500/20';

    return (
        <section id="contact" className="section snap-section relative overflow-hidden bg-white">
            <div className="shell relative z-10">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="eyebrow">Contact</p>
                        <h2 className="section-title">Let&rsquo;s talk</h2>
                        <p className="section-lead">
                            Looking for a speaker, a hands-on tutorial for your conference, or a workshop
                            for your team? Happy to talk about developer platforms, AI in software
                            development, quality, or how people actually learn.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex min-w-0 items-start gap-3">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-coral-50 text-coral-600">
                                    <FaEnvelope className="h-4 w-4" />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Email</p>
                                    <a
                                        href="mailto:paula.bassaganas@gmail.com"
                                        className="block break-all text-sm font-semibold text-ink-900 transition-colors hover:text-coral-700"
                                    >
                                        paula.bassaganas@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-coral-50 text-coral-600">
                                    <FaMapMarkerAlt className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Based in</p>
                                    <p className="text-sm font-semibold text-ink-900">Biberach an der Riss, Germany</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-coral-50 text-coral-600">
                                    <FaMagic className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-ink-400">Workshops</p>
                                    <a
                                        href="https://testingfantasy.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral-700 transition-colors hover:text-coral-800"
                                    >
                                        testingfantasy.com
                                        <FaExternalLinkAlt className="h-2.5 w-2.5" />
                                    </a>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/paulabassaganas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-ink-600 transition-all hover:border-coral-300 hover:bg-coral-50 hover:text-coral-700"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <FaLinkedinIn className="h-4 w-4" />
                            </a>
                            <a
                                href="https://github.com/Bassaganas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-ink-600 transition-all hover:border-coral-300 hover:bg-coral-50 hover:text-coral-700"
                            >
                                <span className="sr-only">GitHub</span>
                                <FaGithub className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="card p-6 sm:p-8">
                        <h3 className="font-display text-xl font-bold text-ink-950">Send a message</h3>
                        <form ref={form} onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium text-ink-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    className={fieldClass}
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium text-ink-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    className={fieldClass}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className={`${fieldClass} resize-y`}
                                    placeholder="How can I help?"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`btn btn-primary w-full ${status === 'sending' ? 'cursor-not-allowed opacity-70' : ''}`}
                            >
                                {status === 'sending' ? 'Sending…' : 'Send message'}
                            </button>

                            <p aria-live="polite" className="min-h-[1.25rem]">
                                {status === 'success' && (
                                    <span className="block rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                                        Message sent. I&rsquo;ll get back to you soon.
                                    </span>
                                )}
                                {status === 'error' && (
                                    <span className="block rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                                        Something went wrong. Please email me directly at paula.bassaganas@gmail.com.
                                    </span>
                                )}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
