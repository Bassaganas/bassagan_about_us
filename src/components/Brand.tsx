import React from 'react';

/**
 * The brand marks, following brand/README.txt.
 *
 * The lockup is rebuilt here in JSX rather than loaded from the SVG files so the
 * wordmark uses the Poppins that the page already loads. The SVG files set live
 * text, which falls back to Helvetica when loaded through an <img>, and the
 * README says to use the PNG in that case. Rendering it as real text keeps it
 * crisp, selectable and correctly kerned at every size.
 *
 * The ñ is always coral: it is the thread back to the tilde in the icon, so it
 * must never be set in one flat colour.
 */

type Tone = 'light' | 'dark';

/** The tilde icon: a coral rounded square carrying a cream tilde. */
export function TildeMark({ className = 'h-8 w-8' }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
            <rect width="100" height="100" rx="28" className="fill-coral-600" />
            <path
                d="M21 59 C29 40 44 40 50 50 C56 60 71 60 79 41"
                fill="none"
                stroke="#FFFDFB"
                strokeWidth="12"
                strokeLinecap="round"
            />
        </svg>
    );
}

/** The bare tilde, for small sizes and single-colour use. */
export function TildeBare({ className = 'h-4 w-4' }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
            <path
                d="M21 59 C29 40 44 40 50 50 C56 60 71 60 79 41"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
            />
        </svg>
    );
}

/**
 * The tilde used as a background watermark.
 *
 * Placement is deliberate rather than tiled: one per section at most, always in
 * dead space beside or below the content, never behind text. Each appearance
 * varies in size, rotation and mirroring so the mark feels hand-placed. The
 * caller passes position, size, rotation and colour; `currentColor` drives the
 * stroke, so tint it with a text colour at very low opacity.
 *
 * Content next to one of these needs `relative z-10`, since the watermark is
 * positioned and would otherwise paint over static content.
 */
export function TildeWatermark({ className = '' }: { className?: string }) {
    return <TildeBare className={`pointer-events-none absolute z-0 select-none ${className}`} />;
}

/** "Paula Bassagañas" with the ñ in coral. */
export function Wordmark({
    tone = 'light',
    className = '',
}: {
    tone?: Tone;
    className?: string;
}) {
    return (
        <span
            className={`font-display font-semibold tracking-tight ${tone === 'dark' ? 'text-cream' : 'text-ink-950'
                } ${className}`}
        >
            Paula Bassaga
            <span className={tone === 'dark' ? 'text-coral-400' : 'text-coral-600'}>ñ</span>
            as
        </span>
    );
}

/** Icon plus wordmark, the compact lockup used in the header and footer. */
export function Lockup({
    tone = 'light',
    className = '',
    markClassName = 'h-8 w-8',
    wordmarkClassName = 'text-lg',
}: {
    tone?: Tone;
    className?: string;
    markClassName?: string;
    wordmarkClassName?: string;
}) {
    return (
        <span className={`inline-flex items-center gap-2.5 ${className}`}>
            <TildeMark className={markClassName} />
            <Wordmark tone={tone} className={wordmarkClassName} />
        </span>
    );
}
