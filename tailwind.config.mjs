/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'origami-surface': {
          base: '#F6F4EF',    // Mesa de taller / fondo general
          sheet: '#FFFFFF',   // Pliego frontal de papel
          warm: '#ECE8DE',    // Pliego secundario / solapas
          card: '#FAF9F6',    // Fondo de tarjetas reposadas
          muted: '#E5E1D6',   // Tono hundido / ranuras
        },
        'origami-ink': {
          50: '#F6F7F9',
          100: '#ECEEF2',
          200: '#C2C6CF',
          300: '#9CA3AF',
          400: '#7C8494',
          500: '#5F6775',
          600: '#4A515C',
          700: '#353B45',
          800: '#252930',
          900: '#1B1E23',
          950: '#111317',
        },
        'origami-terracotta': {
          50: '#FCF6F4',
          100: '#F8ECE8',
          200: '#F0D4CC',
          300: '#E4B2A3',
          400: '#D87B5E',
          500: '#CC6949',
          600: '#C25E3E', // Acento Taller
          700: '#A84E32',
          800: '#883E27',
          900: '#682E1C',
        },
        'origami-forest': {
          50: '#F2F7F4',
          100: '#E6EFEA',
          200: '#C7DEC6',
          300: '#9FC3AD',
          400: '#6EA083',
          500: '#467F61',
          600: '#2D664D',
          700: '#1E4D3B', // Acción WhatsApp & Confianza
          800: '#16382B',
          900: '#0F241C',
        },
        'origami-crease': {
          line: '#DDD8CB',
          light: '#FFFFFF',
          dark: '#C8C2B3',
        },
      },
      boxShadow: {
        'paper-flat': '1px 1px 0px #DDD8CB',
        'paper-sheet': '1px 1px 0px #DDD8CB, 2px 4px 10px -2px rgba(27, 30, 35, 0.05)',
        'paper-lift': '2px 2px 0px #C8C2B3, 5px 8px 18px -3px rgba(27, 30, 35, 0.09)',
        'paper-float': '0 4px 16px -2px rgba(27, 30, 35, 0.08)',
        fold: 'inset 0 1px 1px rgba(255, 255, 255, 0.9), 1px 1px 0px #DDD8CB',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
