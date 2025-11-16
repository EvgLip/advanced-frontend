import { StateShema } from '@/app/providers/store-provider';
import { selectLoginPassword } from './selectLoginPassword';

describe('selectLoginPassword', function ()
{
  test('should return password', () =>
  {
    const state: DeepPartial<StateShema> =
    {
      login: { password: '123' }
    };

    expect(selectLoginPassword(state as StateShema)).toEqual('123');
  });
  //////////////////////////
  test('should return empty string with empty state', () =>
  {
    const state: DeepPartial<StateShema> = {};

    expect(selectLoginPassword(state as StateShema)).toEqual('');
  });
});