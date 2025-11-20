import { StateSchema } from '@/app/providers/store-provider';
import { selectLoginPassword } from './selectLoginPassword';

describe('selectLoginPassword', function ()
{
  test('should return password', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      login: { password: '123' }
    };

    expect(selectLoginPassword(state as StateSchema)).toEqual('123');
  });
  //////////////////////////
  test('should return empty string with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginPassword(state as StateSchema)).toEqual('');
  });
});