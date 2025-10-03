import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { AppLink, LinkThemeList } from '@/shared/ui/';
import { ThemeList } from '@/app/providers/theme-provider';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  decorators: [
    (Story) =>
    {
      return (
        <RouterDecorator >
          <Story />
        </RouterDecorator >
      );
    },
  ],
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
  args: { to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryLight: Story = {
  args: {
    children: 'Primary',
    theme: LinkThemeList.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
    theme: LinkThemeList.PRIMARY,
  },
  parameters:
  {
    theme: ThemeList.DARK
  }
};

export const SecondaryLight: Story = {
  args: {
    children: 'Secondary',
    theme: LinkThemeList.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Secondary',
    theme: LinkThemeList.SECONDARY,
  },
  parameters:
  {
    theme: ThemeList.DARK
  }
};

export const Red: Story = {
  args: {
    children: 'Secondary',
    theme: LinkThemeList.RED,
  },
};