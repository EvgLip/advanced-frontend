import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';
import RouterDecoratorProps from '../../src/shared/config/storybook/RouterDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '../../src/app/providers/theme-provider';


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
          <RouterDecoratorProps>
            <Story />
          </RouterDecoratorProps>
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
