import { screen } from '@testing-library/react';
import ComponentRender from '@/shared/lib/tests/ComponentRender';
import { userEvent } from 'storybook/internal/test';
import Counter from './Counter';


describe('test Counter',
  function ()
  {
    test('should render counter with a value of 10', () =>
    {
      ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
      expect(screen.getByTestId('value-title')).toHaveTextContent('10');
      screen.debug();
    });

    test('increment',
      async function ()
      {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        screen.debug();
      });

    test('decrement',
      async function ()
      {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        screen.debug();
      });
  });