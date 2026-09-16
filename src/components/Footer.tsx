import React from 'react';
import Link from 'next/link';
import { Lockup } from '@/components/Brand';
import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const QUICK_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Upcoming talks' },
    { href: '#professional-journey', label: 'Experience' },
    { href: '#feedback', label: 'Feedback' },
    { href: '#testing-fantasy', label: 'Testing Fantasy' },
    { href: '#gallery', label: 'Gallery' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-ink-800 bg-ink-950">
            <div className="tilde-bg-light pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="shell relative z-10 py-12 sm:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
                    <div>
                        <Lockup tone="dark" markClassName="h-9 w-9" wordmarkClassName="text-lg" />
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-400">
                            Functional Architect for the Enterprise Development Platform and AI in the
                            SDLC, founder of Testing Fantasy, and an international speaker on testing and AI.
                        </p>
                        <div className="mt-5 flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/paulabassaganas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-800 text-ink-300 transition-all hover:border-coral-500 hover:text-coral-400"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <FaLinkedinIn className="h-4 w-4" />
                            </a>
                            <a
                                href="https://github.com/Bassaganas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-800 text-ink-300 transition-all hover:border-coral-500 hover:text-coral-400"
                            >
                                <span className="sr-only">GitHub</span>
                                <FaGithub className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <nav>
                        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Explore</h2>
                        <ul className="mt-4 space-y-2.5">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-ink-300 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">Contact</h2>
                        <ul className="mt-4 space-y-2.5 text-sm text-ink-300">
                            <li>
                                <a
                                    href="mailto:paula.bassaganas@gmail.com"
                                    className="break-all transition-colors hover:text-white"
                                >
                                    paula.bassaganas@gmail.com
                                </a>
                            </li>
                            <li>Biberach an der Riss, Germany</li>
                            <li>
                                <a
                                    href="https://testingfantasy.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-coral-400 transition-colors hover:text-coral-300"
                                >
                                    testingfantasy.com
                                    <FaExternalLinkAlt className="h-2.5 w-2.5" />
                                </a>
                            </li>
                            <li>
                                <Link href="#contact" className="transition-colors hover:text-white">
                                    Send a message
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-ink-800 pt-6">
                    <p className="text-xs text-ink-500">
                        © {currentYear} Paula Bassaga<span className="text-coral-400">ñ</span>as. All rights reserved.
                    </p>
                </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-coral-600 via-orange-500 to-purple-500" />
        </footer>
    );
}
