import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import * as React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

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
    docs: {
        page: () => (
          <>
            <Title />
            <Subtitle />
            <Description />
            For all native elements the normal DOM api is supported, this documentation focuses on the customized DOM api.
            <Primary />
            <Controls />
            <Stories />
          </>
        ),
      },
  },
  decorators: [withThemeByDataAttribute({
    themes: {
      Light: "light",
      Dark: "dark",
      "Light Green": "light-green",
      "Dark Green": "dark-green",
    },
    defaultTheme: "light",
    attributeName: 'data-mode',
  })],
  tags: ['autodocs'],
};

export default preview;
