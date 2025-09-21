import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from '@widgets/sidebar/ui/sidebar/Sidebar';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });

  test('toggle Sidebar', function ()
  {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });

});