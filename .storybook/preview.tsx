import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { Preview } from "@storybook/react";
import { lightTheme, darkTheme } from "../src/shared/theme";
import { FlexContainer } from "../src/index";
import {ToastProvider} from "../src/components/toast/toast.provider";
const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      
      const { theme = 'light' } = parameters;
      return (
        <ThemeProvider
            theme={
              (theme == 'light') ? lightTheme 
              : (theme == 'dark') ? darkTheme
              : lightTheme
            }
            
          >
            <ToastProvider>
              <FlexContainer>
                <Story />
              </FlexContainer>
            </ToastProvider>
        </ThemeProvider>
      )
    }
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
