import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export interface ComponentRenderOption
{
  route?: string;
}

export default function ComponentRender(children: ReactNode, options: ComponentRenderOption = {})
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