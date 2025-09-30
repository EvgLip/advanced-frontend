import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeList, ThemeProvider } from '../../src/app/providers/ThemeProviders';


const preview: Preview =
{
  parameters:
  {
    controls:
    {
      matchers:
      {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: ThemeList.LIGHT,
  },
  decorators:
    [
      (Story) =>
      {
        return (
          <StyleDecorator>
            <Story />
          </StyleDecorator >
        );
      },

      (Story, { parameters }) =>
      {
        const { theme = ThemeList.LIGHT } = parameters;
        return (
          <ThemeProvider initialTheme={theme}>
            <Story />
          </ThemeProvider>
        );
      },
    ],
};

export default preview;
