import { render, screen } from '@testing-library/react';
import { Button } from '@shared/ui';


describe('testButton', function ()
{
  test('тест кнопки', async function ()
  {
    render(<Button>TEST </Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});