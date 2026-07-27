/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-raised': 'rgb(var(--color-surface-raised) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'accent-cyan': 'rgb(var(--color-accent-cyan) / <alpha-value>)',
        'accent-purple': 'rgb(var(--color-accent-purple) / <alpha-value>)',
        'accent-green': 'rgb(var(--color-accent-green) / <alpha-value>)',
        'accent-amber': 'rgb(var(--color-accent-amber) / <alpha-value>)',
        'accent-red': 'rgb(var(--color-accent-red) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
