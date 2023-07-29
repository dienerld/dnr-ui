import type { Preview } from '@storybook/vue3';
import { withThemeByClassName } from '@storybook/addon-styling';
import 'tailwindcss/tailwind.css';
import '@/tailwind.css';
import '@/colors.css';


/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */


const preview: Preview = {
  parameters: {
    decorators: [
      withThemeByClassName({
        themes: {
          dark: 'dark',
          light: 'light',
        },
        defaultTheme: 'light',
        parentSelector: 'body',
      }),
    ],
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
