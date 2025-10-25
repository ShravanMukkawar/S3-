module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#334155'
        },
        brand: {
          50: '#f5fbff',
          100: '#e6f6ff',
          300: '#7dd3fc',
          500: '#06b6d4',
          700: '#0891b2'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 700ms ease-out both',
        float: 'float 4s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 700ms ease-out both',
        'scale-in': 'scale-in 700ms ease-out both'
      }
    },
  },
  plugins: [],
}
