/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                coral: {
                    50: '#fff5f2',
                    100: '#ffe6e2',
                    200: '#ffd1c8',
                    300: '#ffb3a5',
                    400: '#ff8a73',
                    500: '#ff6347',
                    600: '#f04f38',
                    700: '#d83a28',
                    800: '#b02e22',
                    900: '#91281e',
                },
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
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-poppins)', 'sans-serif'],
            },
            borderWidth: {
                '3': '3px',
            },
        },
    },
    plugins: [],
} 