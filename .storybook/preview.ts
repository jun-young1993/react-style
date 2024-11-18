import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { Preview } from "@storybook/react";
const setHtmlDataTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme);
};
const preview: Preview = {
  decorators: [
    (Story, context) => {
      return <Story {...context} />
   
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
