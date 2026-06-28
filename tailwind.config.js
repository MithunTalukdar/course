/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          blue: '#2563EB',
          violet: '#7C3AED',
          teal: '#14B8A6',
          dark: '#0F172A',
          bg: '#F8FAFC'
        }
      },
      boxShadow: {
        glow: '0 24px 80px rgba(37, 99, 235, 0.25)',
        premium: '0 18px 55px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
