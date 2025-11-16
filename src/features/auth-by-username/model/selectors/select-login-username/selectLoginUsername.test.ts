import { StateShema } from '@/app/providers/store-provider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername', function ()
{
  test('should return username', () =>
  {
    const state: DeepPartial<StateShema> =
    {
      login: { username: 'username' }
    };

    expect(selectLoginUsername(state as StateShema)).toEqual('username');
  });
  //////////////////////////////////////
  test('should return empty string with empty state', () =>
  {
    const state: DeepPartial<StateShema> = {};

    expect(selectLoginUsername(state as StateShema)).toEqual('');
  });
});