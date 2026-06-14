/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#05060A',
        'bg-secondary': '#0B0E17',
        'accent-cyan': '#00F0FF',
        'accent-blue': '#3B82F6',
        'text-primary': '#F5F7FA',
        'text-muted': '#8A93A6',
        'border-subtle': '#1E2433',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 240, 255, 0.35)',
        'glow-sm': '0 0 12px rgba(0, 240, 255, 0.25)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #00F0FF 0%, #3B82F6 100%)',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
