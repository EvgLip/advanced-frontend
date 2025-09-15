import type { Preview } from '@storybook/react-webpack5';

import StyleDecorator from '../../src/shared/config/storybook/style-decorator/StyleDecorator';
import '../../src/app/styles/themes/dark.scss';
import '../../src/app/styles/themes/light.scss';
import '../../src/app/styles/variables/globall.scss';
import s from '../../src/app/styles/variables/globall.scss';

console.log('стили', s);

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
      }
    ],
};

export default preview;
