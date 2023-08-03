/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}', './src/App.vue'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      '2xl': 'var(--text-2xl)',
      '3xl': 'var(--text-3xl)'
    },

    screens: {
      mobile: 'var(--screen-mobile)',
      tablet: 'var(--screen-tablet)',
      desktop: 'var(--screen-desktop)',
      tv: 'var(--screen-tv)'
    },
    spacing: {
      none: 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      xs: 'var(--spacing-xs) /* 16px */',
      sm: 'var(--spacing-sm) /* 20px */',
      md: 'var(--spacing-md) /* 24px */',
      lg: 'var(--spacing-lg) /* 32px */',
      xl: 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */'
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },

      fontWeight: {
        bold: 700,
        regular: 400
      },
      // boxShadow: {
      //   none: 'none',
      //   b: '0px 2px 10px 0px rgba(25, 1, 52, 0.12);',
      //   'b-1': '0px 4px 10px 0px rgba(25, 1, 52, 0.16);',
      //   'b-2': '0px 4px 10px 0px rgba(25, 1, 52, 0.16);',
      //   t: '0px 1px 0px 0px #EAEAEA inset;',
      //   't-1': '0px -2px 10px 0px rgba(25, 1, 52, 0.12);',
      //   't-2': '0px -4px 10px 0px rgba(25, 1, 52, 0.16);'
      // },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)'
      },
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'rgba(var(--primary), <alpha-value>)',
          light: 'rgba(var(--primary-light), <alpha-value>)',
          dark: 'rgba(var(--primary-dark), <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'rgba(var(--secondary), <alpha-value>)',
          light: 'rgba(var(--secondary-light), <alpha-value>)',
          dark: 'rgba(var(--secondary-dark), <alpha-value>)'
        },

        disabled: 'rgba(var(--disabled), <alpha-value>)',
        danger: 'rgba(var(--danger), <alpha-value>)',
        error: 'rgba(var(--uie-error), <alpha-value>)',
        success: 'rgba(var(--uie-success), <alpha-value>)'
      },
      backgroundColor: {
        divider: 'rgba(var(--divider), <alpha-value>)',
        page: {
          DEFAULT: 'rgba(var(--page), <alpha-value>)',
          paper: 'rgba(var(--page-paper), <alpha-value>)'
        }
      },
      textColor: {
        primary: 'rgba(var(--text-primary), <alpha-value>)',
        secondary: 'rgba(var(--text-secondary), <alpha-value>)',
        disabled: 'rgba(var(--text-disabled), <alpha-value>)',
        contrast: 'rgba(var(--text-contrast), <alpha-value>)',
        link: 'rgba(var(--text-link), <alpha-value>)'
      },
      blur: {
        DEFAULT: 'var(--blur)'
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)'
      }
    }
  },
  plugins: []
}
