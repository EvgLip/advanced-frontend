import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '../../src/app/providers/theme-provider';
import TranslateDecorator from '../../src/shared/config/storybook/TranslateDecorator';


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
    disabled: false,
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

      (Story) =>
      {
        return (
          <RouterDecorator>
            <Story />
          </RouterDecorator>
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

      (Story) =>
      {
        return (
          <TranslateDecorator>
            <Story />
          </TranslateDecorator>
        );
      },
    ],
};

export default preview;


