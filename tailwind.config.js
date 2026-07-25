/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Vedica Brand Palette
                'vedica-deep':    '#0A1A2A',   // deepest ocean dark
                'vedica-navy':    '#0D2540',   // dark navy
                'vedica-blue':    '#005CAB',   // primary brand blue
                'vedica-blue-soft': '#3A8AD1', // soft sky blue
                'vedica-teal':    '#3A7AAF',   // mid-range teal
                'vedica-glacial': '#A8C8DE',   // glacial light blue
                'vedica-yellow':  '#FCDC00',   // primary accent gold
                'vedica-yellow-soft': '#FFE85C', // soft warm gold
                'vedica-white':   '#F7F8FB',   // soft white
                'vedica-pearl':   '#EAF2F8',   // pearl off-white
            },
            fontFamily: {
                'cormorant': ['"Cormorant Garamond"', 'Georgia', 'serif'],
                'inter':     ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'vedica-hero': 'linear-gradient(180deg, #3a7aaf 0%, #5790bb 10%, #82acc9 20%, #adc8de 30%, #d9e5ef 40%, #f7f8fb 50%, #fdfdfd 100%)',
            },
            animation: {
                'breathe':     'breathe 7s ease-in-out infinite',
                'halo-pulse':  'haloPulse 9s ease-in-out infinite',
                'scroll-line': 'scrollLine 2.6s ease-in-out infinite',
                'float':       'float 6s ease-in-out infinite',
                'shimmer':     'shimmer 2.5s linear infinite',
                'aureole':     'aureole 4.6s cubic-bezier(0.25,0.7,0.3,1) infinite',
            },
            keyframes: {
                breathe: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%':      { transform: 'translateY(-8px) scale(1.012)' },
                },
                haloPulse: {
                    '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
                    '50%':      { opacity: '1',    transform: 'scale(1.05)' },
                },
                scrollLine: {
                    '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
                    '45%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
                    '55%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
                    '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%':      { transform: 'translateY(-12px)' },
                },
                shimmer: {
                    '0%':   { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                aureole: {
                    '0%':   { width: '10px', height: '10px', opacity: '0.85' },
                    '100%': { width: '64px', height: '64px', opacity: '0' },
                },
            },
            boxShadow: {
                'glass': '0 8px 32px rgba(0,92,171,0.12), inset 0 1px 0 rgba(255,255,255,0.15)',
                'glass-lg': '0 20px 54px rgba(0,14,28,0.34), inset 0 1px 0 rgba(255,255,255,0.07)',
                'vedica-glow': '0 0 40px rgba(0,92,171,0.3), 0 0 80px rgba(0,92,171,0.1)',
            },
            backdropBlur: {
                'glass': '12px',
            }
        },
    },
    plugins: [],
}
