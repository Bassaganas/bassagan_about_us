"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lockup } from '@/components/Brand';

const NAV_ITEMS = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Talks' },
    { href: '#professional-journey', label: 'Experience' },
    { href: '#feedback', label: 'Feedback' },
    { href: '#testing-fantasy', label: 'Testing Fantasy' },
    { href: '#gallery', label: 'Gallery' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Highlight the nav entry for whichever section is currently in view.
    useEffect(() => {
        const ids = [...NAV_ITEMS.map((item) => item.href.slice(1)), 'contact'];
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActiveSection(`#${visible.target.id}`);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Escape closes the mobile menu.
    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? 'border-b border-ink-100 bg-white/90 py-2.5 backdrop-blur-md'
                : 'border-b border-transparent py-4'
                }`}
        >
            <div className="shell">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="flex shrink-0 items-center" aria-label="Paula Bassagañas, home">
                        <Lockup
                            markClassName="h-8 w-8 sm:h-9 sm:w-9"
                            wordmarkClassName="text-base sm:text-lg"
                        />
                    </Link>

                    <nav className="hidden items-center gap-1 lg:flex">
                        {NAV_ITEMS.map((item) => (
                            <NavLink key={item.href} href={item.href} isActive={activeSection === item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                        <Link
                            href="#contact"
                            className="btn btn-primary ml-2 px-4 py-2 text-[13px]"
                        >
                            Get in touch
                        </Link>
                    </nav>

                    <button
                        className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-50 hover:text-coral-600 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <nav className="mt-3 max-h-[70vh] overflow-y-auto rounded-xl border border-ink-100 bg-white p-2 shadow-lift lg:hidden">
                        {NAV_ITEMS.map((item) => (
                            <MobileNavLink
                                key={item.href}
                                href={item.href}
                                isActive={activeSection === item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </MobileNavLink>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn btn-primary mt-2 w-full"
                        >
                            Get in touch
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-coral-700' : 'text-ink-600 hover:text-ink-950'
                }`}
        >
            {children}
            <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-coral-500 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </Link>
    );
}

function MobileNavLink({ href, children, isActive, onClick }: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-coral-50 text-coral-700' : 'text-ink-700 hover:bg-ink-50'
                }`}
        >
            {children}
        </Link>
    );
}
