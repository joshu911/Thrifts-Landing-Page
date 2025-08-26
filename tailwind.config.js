/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // keep if you place UI under /src
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        brand: '#f97316',
        interactive: '#3B82F6',
        danger: '#db4a2b',
        bg: {
          DEFAULT: '#EFEFEF',
          dark: '#15202B',
        },
        bgSecondary: {
          DEFAULT: '#FFFFFF',
          dark: '#101922',
        },
        text: {
          DEFAULT: '#000000',
          dark: '#FFFFFF',
        },
        textMuted: {
          DEFAULT: '#6B7280',
          dark: '#9CA3AF',
        },
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
