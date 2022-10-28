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
      backgroundImage: {
        'banner': "url('./assets/images/banner.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
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
          500: `rgba(14, 14, 15, 0.5)`,
          lighter: `rgba(14, 14, 15, 0.2)`,
        },
        borders: {
          dash: `#C3C3C3`,
        },
        ash: {
          light: `#F3F3F3`,
          light2: '#D9D9D9',
        },
      },
      borderRadius: {
        // 'none': '0',
        // 'sm': '0.125rem',
        // DEFAULT: '0.25rem',
        // DEFAULT: '4px',
        // 'md': '0.375rem',
        // 'lg': '0.5rem',
        // 'full': '9999px',
        // 'large': '12px',

      },
      height: {
        '0.5': '1px',
        '160': '480px',
        '54': '54px',
        '60': '60px',
      },
      width: {
        '12': '12rem',
        '17': '5.25rem',
        '180': '45rem',
        '82': '25rem',
        '54': '54px',
        '874': '874px',
        '357': '357px',
        '518': '517px',
        '288': '288px',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        // xl: '1.25rem',
        // 2xl: '1.563rem',
        // 3xl: '1.953rem',
        // 4xl: '2.441rem',
        // 5xl: '3.052rem',
        heading1: '4rem',
      },
      lineHeight: {
        '20': '60px',
        '14': '40px',
        '64': '64px',
      },
      boxShadow: {
        'input-shadow': '0px 90px 36px rgba(0, 0, 0, 0.01), 0px 50px 30px rgba(0, 0, 0, 0.05), 0px 22px 22px rgba(0, 0, 0, 0.09), 0px 6px 12px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'btn-shadow': '0px 35px 14px rgba(0, 0, 0, 0.01), 0px 20px 12px rgba(0, 0, 0, 0.05), 0px 9px 9px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'filter-shadow': '0px 90px 36px rgba(0, 0, 0, 0.01), 0px 50px 30px rgba(0, 0, 0, 0.05), 0px 22px 22px rgba(0, 0, 0, 0.09), 0px 6px 12px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'google-shadow': '0px 62px 25px rgba(0, 0, 0, 0.01), 0px 35px 21px rgba(0, 0, 0, 0.05), 0px 15px 15px rgba(0, 0, 0, 0.09), 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'apple-shadow': '0px 49px 20px rgba(0, 0, 0, 0.01), 0px 28px 17px rgba(0, 0, 0, 0.05), 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
        'fb-shadow': '0px 49px 20px rgba(0, 0, 0, 0.01), 0px 28px 17px rgba(0, 0, 0, 0.05), 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        'neg-8': '-8px',
      }
    },
  },
  plugins: [],
}
