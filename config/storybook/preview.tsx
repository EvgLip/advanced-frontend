import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '../../src/app/providers/ThemeProviders';


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
          <ThemeDecorator theme={theme}>
            <Story />
          </ThemeDecorator>
        );
      },
    ],
};

export default preview;
