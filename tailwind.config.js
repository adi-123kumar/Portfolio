/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
     colors: {
  bg: 'rgb(var(--color-bg) / <alpha-value>)',
  surface: 'rgb(var(--color-surface) / <alpha-value>)',
  border: 'rgb(var(--color-border) / <alpha-value>)',
  text: 'rgb(var(--color-text) / <alpha-value>)',
  muted: 'rgb(var(--color-muted) / <alpha-value>)',
  accent: 'rgb(var(--color-accent) / <alpha-value>)',
},
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
