import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { StateSchema, StoreProvider } from '@/app/providers/store-provider';
import i18nForTests from '@/shared/config/i18next/i18nForTests';

export interface ComponentRenderOption
{
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export default function ComponentRender(children: ReactNode, options: ComponentRenderOption = {})
{
  const {
    route = '/',
    initialState,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          {children}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}