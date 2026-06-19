/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          50: '#F5F7FB',
          100: '#E8EDF5',
          200: '#C0D8E4',
          300: '#88AABC',
          700: '#0D1B3E',
          800: '#152448',
          900: '#0A1428',
        },
        teal: {
          DEFAULT: '#00B5AD',
          light: '#E0F5F5',
          400: '#00B5AD',
          500: '#00B5AD',
          600: '#009E96',
          hover: '#00D4CA',
        },
        amber: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
          600: '#D97706',
        },
        green: {
          dark: '#065F46',
        },
        blue: {
          DEFAULT: '#1A78C2',
        },
        purple: {
          DEFAULT: '#7C3AED',
        },
      },
      borderColor: {
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
        },
      },
      textColor: {
        body: '#1F2937',
        secondary: '#374151',
        muted: '#6B7280',
        hint: '#88AABC',
      },
      backgroundColor: {
        surface: '#F3F4F6',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
};
