import type { Meta, StoryObj } from '@storybook/react-webpack5';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator';
import { ThemeList } from '@/app/providers/theme-provider';
import LoginForm from '@/features/auth-by-username/ui/login-form/LoginForm';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

const meta = {
  title: 'reatures/LoginForm',
  component: LoginForm,
  decorators: [
    (Story) =>
    {
      return (
        <StoreDecorator initialState={{ login: { username: 'username', password: '123' } }} >
          <Story />
        </StoreDecorator >
      );
    },
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
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  parameters: {
    theme: ThemeList.DARK,
  },
};

export const Error: Story = {
  args: {},
  decorators: [
    (Story) =>
    {
      return (
        <StoreDecorator initialState={{ login: { username: 'username', password: '123', error: 'Сообщение об ошибке' } }} >
          <Story />
        </StoreDecorator >
      );
    },]
};

export const Loading: Story = {
  args: {},
  decorators: [
    (Story) =>
    {
      return (
        <StoreDecorator initialState={{ login: { username: 'username', password: '123', isLoading: true } }} >
          <Story />
        </StoreDecorator >
      );
    },]
};
