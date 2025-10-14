import { fireEvent, screen } from '@testing-library/react';
import ComponentRenderWithRouter from '@/shared/lib/tests/ComponentRenderWithRouter';
import Sidebar from './Sidebar';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    ComponentRenderWithRouter(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });

  test('toggle Sidebar', function ()
  {
    ComponentRenderWithRouter(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });

});