/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // orange as primary
          dark: '#EA580C',
          light: '#FB923C',
        },
        secondary: {
          DEFAULT: '#1E293B', // darker secondary
          dark: '#0F172A',
          light: '#334155',
        },
        accent: {
          DEFAULT: '#F97316', // orange accent
          dark: '#EA580C',
          light: '#FB923C',
        },
        background: {
          DEFAULT: '#000000', // pure black background
          light: '#0F172A',
          dark: '#000000',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(107, 70, 193, 0.5)',
        'accent-glow': '0 0 15px rgba(249, 115, 22, 0.5)',
      },
    },
  },
  plugins: [],
}