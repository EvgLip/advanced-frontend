import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from '@widgets/sidebar/ui/sidebar/Sidebar';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    render(<Sidebar />);
    screen.debug();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle Sidebar', function ()
  {
    render(<Sidebar />);
    screen.debug();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });

});