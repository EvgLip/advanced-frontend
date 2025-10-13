import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RootState, StoreProvider } from '@/app/providers/store-proveder';

export interface ComponentRenderOption
{
  route?: string;
  initialState?: DeepPartial<RootState>;
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