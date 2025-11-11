import { RootState } from '@/app/providers/store-provider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername', function ()
{
  test('should return username', () =>
  {
    const state: DeepPartial<RootState> =
    {
      login: { username: 'username' }
    };

    expect(selectLoginUsername(state as RootState)).toEqual('username');
  });
  //////////////////////////////////////
  test('should return empty string with empty state', () =>
  {
    const state: DeepPartial<RootState> = {};

    expect(selectLoginUsername(state as RootState)).toEqual('');
  });
});