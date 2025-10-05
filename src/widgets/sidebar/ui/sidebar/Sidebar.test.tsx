import { fireEvent, screen } from '@testing-library/react';
import ComponentRender from '@/shared/lib/tests/ComponentRender';
import Sidebar from './Sidebar';


describe('test Sidebar', function ()
{
  test('отрисовка Sidebar', function ()
  {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });

  test('toggle Sidebar', function ()
  {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    screen.debug();
  });

});