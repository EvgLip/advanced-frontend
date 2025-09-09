import { render, screen } from '@testing-library/react';
import Sidebar from '@widgets/sidebar/ui/sidebar/Sidebar';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    render(<Sidebar />);
    screen.debug();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

});