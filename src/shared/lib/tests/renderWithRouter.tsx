import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOption
{
  route?: string;
}

export default function RenderWithRouter(children: ReactNode, options: renderWithRouterOption = {})
{
  const {
    route = '/',
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      {children}
    </MemoryRouter>
  );
}