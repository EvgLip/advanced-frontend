import { RootState } from '@/app/providers/store-provider';

import { selectLoginError } from './selectLoginError';

describe('selectLoginError', function ()
{
  test('should return error', () =>
  {
    const state: DeepPartial<RootState> =
    {
      login: { error: 'error' }
    };

    expect(selectLoginError(state as RootState)).toEqual('error');
  });
  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<RootState> = {};

    expect(selectLoginError(state as RootState)).toEqual(undefined);
  });
});