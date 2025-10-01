import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Button, ButtonSize, ButtonType } from '@shared/ui/';
import ThemeDecorator from '@shared/config/storybook/ThemeDecorator';
import { ThemeList } from '@app/providers/theme-providers';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
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
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    //layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    appearance: ButtonType.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    appearance: ButtonType.OUTLINE,
  },
};

export const OutlineM: Story = {
  args: {
    children: 'Outline',
    appearance: ButtonType.OUTLINE,
    size: ButtonSize.M,
  },
};

export const OutlineL: Story = {
  args: {
    children: 'Outline',
    appearance: ButtonType.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineXL: Story = {
  args: {
    children: 'Outline',
    appearance: ButtonType.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    appearance: ButtonType.OUTLINE,
  },
  parameters:
  {
    theme: ThemeList.DARK
  }
};

export const BackgroundAppearanse: Story = {
  args: {
    children: 'Background',
    appearance: ButtonType.BACKGROUND,
  },
};

export const BackgroundInvertedAppearanse: Story = {
  args: {
    children: 'Background Inverted',
    appearance: ButtonType.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    appearance: ButtonType.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareM: Story = {
  args: {
    children: '>',
    appearance: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    appearance: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: '<',
    appearance: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

