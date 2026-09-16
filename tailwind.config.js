/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand accent, from public/brand/README.txt: the mark, the ñ and links
                // are coral-600 (#C2371F); coral-400 (#FF6B4A) is the light variant
                // for ink grounds only.
                coral: {
                    50: '#fff5f2',
                    100: '#ffe4dc',
                    200: '#ffc8b9',
                    300: '#ffa48c',
                    400: '#ff6b4a',
                    500: '#e04a2b',
                    600: '#c2371f',
                    700: '#9e2c18',
                    800: '#7c2313',
                    900: '#651d10',
                },
                // Warm neutral. Body text, dark grounds and borders. ink-950 is the
                // brand ink (#1A1613) and ink-500 the brand label grey (#6F655E).
                ink: {
                    50: '#faf8f7',
                    100: '#f0edeb',
                    200: '#e0dad6',
                    300: '#c4bab4',
                    400: '#9a8e87',
                    500: '#6f655e',
                    600: '#574e49',
                    700: '#443d39',
                    800: '#322d2a',
                    900: '#241f1d',
                    950: '#1a1613',
                },
                // Light ground.
                cream: '#fffdfb',
                orange: {
                    50: '#fff8f1',
                    100: '#feebcb',
                    200: '#fcd9a5',
                    300: '#fac073',
                    400: '#f8a744',
                    500: '#f5901f',
                    600: '#e07612',
                    700: '#bb5f08',
                    800: '#964a0c',
                    900: '#7a3e0d',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['var(--font-poppins)', 'var(--font-inter)', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            borderWidth: {
                '3': '3px',
            },
            boxShadow: {
                card: '0 1px 2px rgba(11, 15, 26, 0.04), 0 8px 24px -12px rgba(11, 15, 26, 0.12)',
                lift: '0 2px 4px rgba(11, 15, 26, 0.05), 0 18px 40px -16px rgba(11, 15, 26, 0.22)',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.4s ease-out both',
            },
        },
    },
    plugins: [],
}
