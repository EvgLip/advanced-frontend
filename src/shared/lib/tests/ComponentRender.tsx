import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateShema, StoreProvider } from '@/app/providers/store-provider';

export interface ComponentRenderOption
{
  route?: string;
  initialState?: DeepPartial<StateShema>;
}

export default function ComponentRender(children: ReactNode, options: ComponentRenderOption = {})
{
  const {
    route = '/',
    initialState,
  } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        {children}
      </MemoryRouter>
    </StoreProvider>
  );
}