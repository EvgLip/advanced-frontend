import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '@/app/providers/theme-provider';

import { CountrySelector } from './CountrySelector';


const meta = {
  title: 'entities/CountrySelector',
  component: CountrySelector,
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
} satisfies Meta<typeof CountrySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};