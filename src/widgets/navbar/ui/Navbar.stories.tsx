import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Navbar from './Navbar';
import { ThemeList } from '@/app/providers/theme-provider';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators:
    [
      (Story) =>
      {
        return (
          <StoreDecorator initialState={{ user: { authData: { id: '1', username: 'username', } } }}>
            <Story />
          </StoreDecorator>
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
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {
  },
};


export const Dark: Story = {
  args: {
  },
  parameters:
  {
    theme: ThemeList.DARK
  }
};