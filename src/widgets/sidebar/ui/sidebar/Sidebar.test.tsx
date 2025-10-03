import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '@/shared/lib/tests/renderWithRouter';
import Sidebar from '@/widgets/sidebar/ui/sidebar/Sidebar';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    renderWithRouter(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });

  test('toggle Sidebar', function ()
  {
    renderWithRouter(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });

});