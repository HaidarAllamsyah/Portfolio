/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        lime: {
          accent: '#a8ff3e',
          bright: '#c4ff6e',
          dim: '#7acc1e',
          muted: '#4a7a10',
        },
        // Backgrounds
        bg: {
          base: '#0a0a0a',
          surface: '#111111',
          elevated: '#161616',
          overlay: '#1c1c1c',
        },
        // Glass surfaces
        glass: {
          white: 'rgba(255,255,255,0.05)',
          border: 'rgba(255,255,255,0.08)',
          highlight: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        '10xl': ['10rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '11xl': ['12rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '12xl': ['14rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        'lime-glow': 'radial-gradient(ellipse at center, rgba(168,255,62,0.15) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(168,255,62,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(130,80,255,0.06) 0%, transparent 50%)',
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-lg': '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        'lime': '0 0 20px rgba(168,255,62,0.3)',
        'lime-sm': '0 0 10px rgba(168,255,62,0.2)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(168,255,62,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-lime': 'pulseLime 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseLime: {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 10px rgba(168,255,62,0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 25px rgba(168,255,62,0.5)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
