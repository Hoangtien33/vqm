/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        museum: {
          black: '#08080a',
          wall: '#0f0f15',
          gold: '#d4af37',
          goldLight: '#fbeea4',
          goldDark: '#8a6412',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        serifLuxury: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1.5deg)', opacity: '0.95' },
          '20%': { transform: 'scale(1.08, 0.94) rotate(2deg)', opacity: '1' },
          '40%': { transform: 'scale(0.96, 1.05) rotate(-1deg)', opacity: '0.88' },
          '60%': { transform: 'scale(1.04, 1.02) rotate(1.5deg)', opacity: '0.98' },
          '80%': { transform: 'scale(0.98, 0.97) rotate(-2deg)', opacity: '0.92' },
        },
        shineGold: {
          to: { backgroundPosition: '200% center' }
        }
      },
      animation: {
        flame: 'flicker 1.1s infinite ease-in-out',
        shine: 'shineGold 8s linear infinite',
      }
    },
  },
  plugins: [],
}
