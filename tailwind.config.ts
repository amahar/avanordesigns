import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        navy: {
          DEFAULT: '#0B1220',
          2: '#111a2e',
          3: '#1a2540',
        },
        paper: {
          DEFAULT: '#F6F4EE',
          2: '#EFEAE0',
          3: '#E6DFD0',
        },
        muted: {
          DEFAULT: '#6B7283',
          2: '#8A8F9B',
          3: '#C5C2B8',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          soft: 'var(--accent-soft)',
          deep: 'var(--accent-deep)',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Geist"', '"Inter"', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        s1: '0 1px 0 rgba(11,18,32,0.04), 0 1px 2px rgba(11,18,32,0.04)',
        s2: '0 18px 40px -22px rgba(11,18,32,0.22), 0 4px 12px -6px rgba(11,18,32,0.08)',
        s3: '0 30px 80px -30px rgba(11,18,32,0.35)',
      },
      borderRadius: {
        brand: '22px',
        brandXl: '28px',
      },
      animation: {
        float: 'floatY 4s ease-in-out infinite',
        'float-delayed': 'floatY 4s ease-in-out -2s infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
} satisfies Config
