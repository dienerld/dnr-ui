/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}', './src/App.vue'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.25rem',
        h4: '1rem',
        h5: '0.875rem',
        h6: '0.75rem',

        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem'
      },
      fontWeight: {
        bold: 700,
        regular: 400
      },
      boxShadow: {
        none: 'none',
        b: '0px 2px 10px 0px rgba(25, 1, 52, 0.12);',
        'b-1': '0px 4px 10px 0px rgba(25, 1, 52, 0.16);',
        'b-2': '0px 4px 10px 0px rgba(25, 1, 52, 0.16);',
        t: '0px 1px 0px 0px #EAEAEA inset;',
        't-1': '0px -2px 10px 0px rgba(25, 1, 52, 0.12);',
        't-2': '0px -4px 10px 0px rgba(25, 1, 52, 0.16);'
      },
      space: {
        sm: '0.5rem',
        base: '1rem',
        lg: '1.5rem',
        xl: '2.5rem'
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        brand: {
          DEFAULT: 'var(--brand)',
          light: 'var(--brand-light)'
        },
        'brand-secondary': {
          DEFAULT: 'var(--brand-secondary)',
          light: 'var(--brand-secondary-light)'
        },
        page: {
          DEFAULT: 'var(--page)',
          accent: 'var(--page-accent)'
        },
        uit: {
          primary: 'var(--uit-primary)',
          secondary: 'var(--uit-secondary)',
          tertiary: 'var(--uit-tertiary)',
          success: 'var(--uit-success)',
          error: 'var(--uit-error)',
          link: 'var(--uit-link)'
        },
        uie: {
          primary: 'var(--uie-primary)',
          secondary: 'var(--uie-secondary)',
          tertiary: 'var(--uie-tertiary)',
          success: 'var(--uie-success)',
          error: 'var(--uie-error)',
          neutral: 'var(--uie-neutral)',
          overlay: 'var(--uie-overlay)'
        }
      }
    }
  },
  plugins: []
}
