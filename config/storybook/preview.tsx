import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator';

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
    ],
};

export default preview;
