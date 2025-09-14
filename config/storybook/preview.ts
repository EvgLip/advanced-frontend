import type { Preview } from '@storybook/react-webpack5';

import '../../src/app/styles/themes/dark.scss';
import '../../src/app/styles/themes/light.scss';
import '../../src/app/styles/variables/globall.scss';

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
  }
};

export default preview;
