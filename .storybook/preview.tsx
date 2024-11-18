import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { Preview } from "@storybook/react";
import { lightTheme, darkTheme } from "../src/shared/theme";

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      
      const { theme = 'light' } = parameters;
      
      return (
        <ThemeProvider theme={
            (theme == 'light') ? lightTheme 
            : (theme == 'dark') ? darkTheme
            : lightTheme
          }>
          <Story />
        </ThemeProvider>
      )
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
