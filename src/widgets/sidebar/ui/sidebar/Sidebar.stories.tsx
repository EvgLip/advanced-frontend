import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Sidebar } from '@widgets/sidebar';
import { ThemeList } from '@app/providers/ThemeProviders';
import RouterDecorator from '@shared/config/storybook/RouterDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {
  },
};

Light.decorators =
  [
    (Story) =>
    {
      return (
        <RouterDecorator theme={ThemeList.LIGHT} >
          <Story />
        </RouterDecorator >
      );
    },
  ];

export const Dark: Story = {
  args: {
  },
};

Dark.decorators =
  [
    (Story) =>
    {
      return (
        <RouterDecorator theme={ThemeList.LIGHT} >
          <Story />
        </RouterDecorator >
      );
    },
  ];