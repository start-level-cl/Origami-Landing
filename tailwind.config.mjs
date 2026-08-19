/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'origami-rose': {
          50: '#FDF4F6',
          100: '#FCE7ED',
          200: '#F9D1DD',
          300: '#F3B6C8', // Brief Primario
          400: '#E78AA6',
          500: '#D45D81',
          600: '#B93E64',
          700: '#942B4B',
          800: '#752039',
          900: '#551627',
        },
        'origami-lavender': {
          50: '#F7F5FC',
          100: '#EFEAF8',
          200: '#DED3F1',
          300: '#CABBE7',
          400: '#B8A9D9', // Brief Acento / CTA
          500: '#9782C4',
          600: '#765FA8',
          700: '#5C4789',
          800: '#46346B',
          900: '#32244E',
        },
        'origami-cream': {
          50: '#FFFDF9',
          100: '#FFF9F0', // Brief Fondo Base
          200: '#F7EFE3',
          300: '#EEE1CD',
          400: '#DFCCAF',
          500: '#CBB28C',
          600: '#AC906A',
          700: '#896E4C',
          800: '#685135',
          900: '#473622',
        },
        'origami-slate': {
          50: '#F7F6F9',
          100: '#EDEAF2',
          200: '#DAD4E4',
          300: '#BBB2CD',
          400: '#9589AF',
          500: '#736590',
          600: '#5A4D74',
          700: '#44395A',
          800: '#2D263B',
          900: '#1D1827',
          950: '#110D18',
        },
      },
      boxShadow: {
        paper: '0 2px 10px -2px rgba(45, 38, 59, 0.05), 0 8px 24px -4px rgba(45, 38, 59, 0.07)',
        'paper-hover': '0 6px 16px -3px rgba(45, 38, 59, 0.08), 0 16px 36px -6px rgba(45, 38, 59, 0.12)',
        'paper-lg': '0 12px 32px -8px rgba(45, 38, 59, 0.09), 0 24px 56px -12px rgba(45, 38, 59, 0.13)',
        fold: 'inset 0 1px 1px rgba(255, 255, 255, 0.9), 0 4px 14px -2px rgba(45, 38, 59, 0.06)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
