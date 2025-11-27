import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '@/app/providers/theme-provider';
import Select from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
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
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Выберите значение',
    options: [
      { value: '123', content: '1-й пункт' },
      { value: '1234', content: '2-й пункт' },
    ],
  },
};