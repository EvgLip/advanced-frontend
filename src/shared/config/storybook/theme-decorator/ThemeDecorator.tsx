import '@app/styles/index.scss';
import { ReactRenderer } from '@storybook/react-webpack5';
import { PartialStoryFn } from 'storybook/internal/types';

export default function ThemeDecorator(Story: PartialStoryFn<ReactRenderer, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}>)
{
  return (
    <div>
      <Story />
    </div>

  );
}