import { RootState } from '@/app/providers/store-provider';
import { selectLoginPassword } from './selectLoginPassword';

describe('selectLoginPassword', function ()
{
  test('should return password', () =>
  {
    const state: DeepPartial<RootState> =
    {
      login: { password: '123' }
    };

    expect(selectLoginPassword(state as RootState)).toEqual('123');
  });
  //////////////////////////
  test('should return empty string with empty state', () =>
  {
    const state: DeepPartial<RootState> = {};

    expect(selectLoginPassword(state as RootState)).toEqual('');
  });
});