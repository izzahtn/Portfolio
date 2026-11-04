/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          'surface-elevated': 'var(--color-surface-elevated)',
          'surface-hover': 'var(--color-surface-hover)',
          border: 'var(--color-border)',
          'border-strong': 'var(--color-border-strong)',
          text: 'var(--color-text)',
          'text-muted': 'var(--color-text-muted)',
          'text-faint': 'var(--color-text-faint)',
          rose: 'var(--color-rose)',
          'rose-muted': 'var(--color-rose-muted)',
          celadon: 'var(--color-celadon)',
          'celadon-muted': 'var(--color-celadon-muted)',
          copper: 'var(--color-copper)',
          cyan: 'var(--color-cyan)',
          gold: 'var(--color-gold)',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        display: ['"Cormorant Garamond"', 'Space Grotesk', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(circle, var(--grid-dot) 1px, transparent 1px)",
        'drafting-lines': "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
        'grid-lg': '80px 80px',
      }
    },
  },
  plugins: [],
};
