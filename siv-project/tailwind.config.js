/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      fontFamily: {
        lato: ['Lato'],
      },
      colors: {
        blue: {
          dark: '#1F4490',
          light: `#00A9E1`,
          background: '#E7E7E7'
        },
        black: {
          light: `#0E0E0F`,
          lighter: `rgba(14, 14, 15, 0.2)`,
        },
      },
      height: {
        '0.5': '1px',
      },
      width: {
        '12': '12rem',
        '17': '5.25rem',
        '180': '45rem',
        '82': '25rem',
      },
      lineHeight: {
        '20': '60px',
        '14': '40px',
      },
    },
  },
  plugins: [],
}
