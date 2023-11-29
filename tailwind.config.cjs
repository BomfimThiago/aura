/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tiny-mobile': { max: '380px' },
        'small-mobile': { max: '640px' },
        // Breakpoint prefix	Minimum width	CSS
        // sm	640px	@media (min-width: 640px) { ... }
        // md	768px	@media (min-width: 768px) { ... }
        // lg	1024px	@media (min-width: 1024px) { ... }
        // xl	1280px	@media (min-width: 1280px) { ... }
        // 2xl	1536px	@media (min-width: 1536px) { ... }
      },
      colors: {
        graphite:'#5D6975',
        auraRed: '#382e75',
        ecoGray: '#e6e6e6',
        lightGray: '#f8f9fB',
        auraRed: '#ac1612'
      },
      fontSize: {
        xxs: '9px',
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        sans: ['Open Sans'],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.hide-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
  ],
}

