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
        brand: {
          DEFAULT: 'rgba(var(--brand), <alpha-value>)',
          light: 'rgba(var(--brand-light), <alpha-value>)'
        },
        disabled: 'rgba(var(--disabled), <alpha-value>)',
        error: 'rgba(var(--uie-error), <alpha-value>)',
        success: 'rgba(var(--uie-success), <alpha-value>)',
        neutral: 'rgba(var(--uie-neutral), <alpha-value>)',
        'uie-primary': 'rgba(var(--uie-primary), <alpha-value>)',
        'uie-tertiary': 'rgba(var(--uie-tertiary), <alpha-value>)',
        'uie-secondary': 'rgba(var(--uie-secondary), <alpha-value>)'
      },
      backgroundColor: {
        overlay: 'rgba(var(--uie-overlay), <alpha-value>)',
        page: {
          DEFAULT: 'rgba(var(--page), <alpha-value>)',
          accent: 'rgba(var(--page-accent), <alpha-value>)'
        }
      },
      textColor: {
        primary: 'rgba(var(--uit-primary), <alpha-value>)',
        secondary: 'rgba(var(--uit-secondary), <alpha-value>)',
        tertiary: 'rgba(var(--uit-tertiary), <alpha-value>)',
        success: 'rgba(var(--uit-success), <alpha-value>)',
        error: 'rgba(var(--uit-error), <alpha-value>)',
        link: 'rgba(var(--uit-link), <alpha-value>)'
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
