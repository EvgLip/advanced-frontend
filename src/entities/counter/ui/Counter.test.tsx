import { screen } from '@testing-library/react';
import Counter from './Counter';
import ComponentRender from '@/shared/lib/tests/ComponentRender';
import { userEvent } from 'storybook/internal/test';


describe('test Counter',
  function ()
  {
    test('отрисовка значения Counter',
      function ()
      {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        screen.debug();
      });

    test('increment',
      function ()
      {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        screen.debug();
      });

    test('decrement',
      function ()
      {
        ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        screen.debug();
      });
  });