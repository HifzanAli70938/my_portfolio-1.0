/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        'text-primary': '#E5E7EB',
        'text-secondary': '#94A3B8',
        accent: {
          cyan: '#22D3EE',
          purple: '#A78BFA',
        },
        highlight: '#F87171',
        primary: {
          DEFAULT: '#22D3EE',
          hover: '#A78BFA',
        },
        dark: '#020617',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
