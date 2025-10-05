import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IStateSheme, StoreProvider } from '@/app/providers/store-proveder';

export interface ComponentRenderOption
{
  route?: string;
  initialState?: DeepPartial<IStateSheme>;
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