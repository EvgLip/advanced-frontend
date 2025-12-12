import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeList } from '@/app/providers/theme-provider';
import ProfilePage from './ProfilePage';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { Countries } from '@/entities/country';
import { Currency } from '@/entities/currency';

const initialState =
{
  profile: {
    formData: {
      username: 'admin',
      age: 58,
      country: Countries.Russia,
      lastname: 'lastname',
      firstname: 'firstname',
      city: 'city',
      currency: Currency.RUB,
    },
  },
};

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    (Story) =>
    {
      return (
        <StoreDecorator initialState={initialState} >
          <Story />
        </StoreDecorator >
      );
    },
  ],
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  parameters:
  {
    theme: ThemeList.DARK
  }
};