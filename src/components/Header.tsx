"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'py-3 bg-white shadow-sm'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/images/icon.png"
                                    alt="Paula Bassagañas Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-gray-900">Paula<span className="text-coral-600">.</span></span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#events">Events</NavLink>
                        <NavLink href="#conferences">Talks</NavLink>
                        <NavLink href="#gallery">Gallery</NavLink>
                        <NavLink href="#contact" isButton>Contact</NavLink>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-coral-600 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col space-y-2">
                            <MobileNavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
                            <MobileNavLink href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</MobileNavLink>
                            <MobileNavLink href="#events" onClick={() => setIsMobileMenuOpen(false)}>Events</MobileNavLink>
                            <MobileNavLink href="#conferences" onClick={() => setIsMobileMenuOpen(false)}>Talks</MobileNavLink>
                            <MobileNavLink href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</MobileNavLink>
                            <MobileNavLink href="#contact" isButton onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
                        </div>
                    </div>
                )}
            </div>

            {/* Clean indicator line under the header when scrolled */}
            {isScrolled && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-200 via-coral-400 to-orange-200 opacity-80"></div>
            )}
        </header>
    );
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isButton?: boolean;
}

function NavLink({ href, children, isButton = false }: NavLinkProps) {
    return (
        <Link href={href}>
            <div className={`
                px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                ${isButton
                    ? 'bg-coral-600 text-white hover:bg-coral-700'
                    : 'text-gray-700 hover:text-coral-600 hover:bg-orange-50'
                }
            `}>
                {children}
            </div>
        </Link>
    );
}

interface MobileNavLinkProps extends NavLinkProps {
    onClick: () => void;
}

function MobileNavLink({ href, children, isButton = false, onClick }: MobileNavLinkProps) {
    return (
        <Link href={href} onClick={onClick}>
            <div className={`
                px-4 py-3 mx-2 rounded-md text-sm font-medium transition-colors duration-200
                ${isButton
                    ? 'bg-coral-600 text-white'
                    : 'text-gray-700 hover:text-coral-600 hover:bg-orange-50'
                }
            `}>
                {children}
            </div>
        </Link>
    );
} 