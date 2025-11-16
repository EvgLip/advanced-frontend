import { StateShema } from '@/app/providers/store-provider';

import { selectLoginError } from './selectLoginError';

describe('selectLoginError', function ()
{
  test('should return error', () =>
  {
    const state: DeepPartial<StateShema> =
    {
      login: { error: 'error' }
    };

    expect(selectLoginError(state as StateShema)).toEqual('error');
  });
  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateShema> = {};

    expect(selectLoginError(state as StateShema)).toEqual(undefined);
  });
});