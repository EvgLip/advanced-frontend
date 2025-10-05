import { screen } from '@testing-library/react';
import Counter from './Counter';
import ComponentRender from '@/shared/lib/tests/ComponentRender';


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
  });