import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '@/app/providers/theme-provider';
import Text from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Text',
  component: Text,
  decorators: [
    (Story) =>
    {
      return (
        <ThemeDecorator theme={ThemeList.LIGHT} >
          <Story />
        </ThemeDecorator >
      );
    },
  ],
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLight: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текстовое содержание',
  },
};

export const TextDark: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текстовое содержание',
  },
  parameters: {
    theme: ThemeList.DARK,
  }
};