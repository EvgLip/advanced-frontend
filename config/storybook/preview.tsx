import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/style-decorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/theme-decorator/ThemeDecorator';
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
          <ThemeDecorator theme={ThemeList.DARK}>
            <Story />
          </ThemeDecorator >
        );
      }
    ],
};

export default preview;
