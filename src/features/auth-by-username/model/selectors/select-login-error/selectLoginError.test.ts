import { StateSchema } from '@/app/providers/store-provider';

import { selectLoginError } from './selectLoginError';

describe('selectLoginError', function ()
{
  test('should return error', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      login: { error: 'error' }
    };

    expect(selectLoginError(state as StateSchema)).toEqual('error');
  });
  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginError(state as StateSchema)).toEqual(undefined);
  });
});