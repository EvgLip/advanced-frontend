import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from '@shared/ui';


describe('testButton', function ()
{
  test('тест кнопки', async function ()
  {
    render(<Button>TEST </Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    screen.debug();
  });

  test('тест кнопки с классом clear', async function ()
  {
    render(<Button appearance={ButtonType.CLEAR}>TEST </Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});