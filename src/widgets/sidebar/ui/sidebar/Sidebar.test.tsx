import { fireEvent, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import ComponentRender from '@/shared/lib/tests/ComponentRender';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    // ComponentRenderWithRouter(<Sidebar />);
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });

  test('toggle Sidebar', function ()
  {
    // ComponentRenderWithRouter(<Sidebar />);
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });

});