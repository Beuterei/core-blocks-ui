import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '@/index.css';

import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';


const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,

      },
      expanded: true,
    },
    viewport: {
        viewports: {
          ...INITIAL_VIEWPORTS,
          ...MINIMAL_VIEWPORTS,
        },
      },
    actions: { disable: true },
  },
  decorators: [withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: 'data-mode',
  })],
  tags: ['autodocs'],
};

export default preview;
