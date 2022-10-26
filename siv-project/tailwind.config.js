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
        ash: {
          light: `#F3F3F3`,
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
      boxShadow: {
        'input-shadow': '0px 90px 36px rgba(0, 0, 0, 0.01), 0px 50px 30px rgba(0, 0, 0, 0.05), 0px 22px 22px rgba(0, 0, 0, 0.09), 0px 6px 12px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'google-shadow': '0px 62px 25px rgba(0, 0, 0, 0.01), 0px 35px 21px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'apple-shadow': '0px 49px 20px rgba(0, 0, 0, 0.01), 0px 28px 17px rgba(0, 0, 0, 0.05), 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'fb-shadow': '0px 49px 20px rgba(0, 0, 0, 0.01), 0px 28px 17px rgba(0, 0, 0, 0.05), 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
