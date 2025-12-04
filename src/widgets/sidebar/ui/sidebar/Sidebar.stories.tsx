import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Sidebar } from '@/widgets/sidebar';
import { ThemeList } from '@/app/providers/theme-provider';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) =>
    {
      return (
        <StoreDecorator>
          <Story />
        </StoreDecorator >
      );
    },],
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

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