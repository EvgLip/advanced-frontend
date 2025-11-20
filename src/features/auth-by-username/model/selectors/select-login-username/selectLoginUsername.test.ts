import { StateSchema } from '@/app/providers/store-provider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername', function ()
{
  test('should return username', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      login: { username: 'username' }
    };

    expect(selectLoginUsername(state as StateSchema)).toEqual('username');
  });
  //////////////////////////////////////
  test('should return empty string with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginUsername(state as StateSchema)).toEqual('');
  });
});