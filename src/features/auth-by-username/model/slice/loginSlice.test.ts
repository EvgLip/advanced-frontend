import { loginActions, loginReducer } from './loginSlice';
import { LoginState } from '../types/loginState';
import { RootState } from '@/app/providers/store-provider';

describe('loginSlice', function ()
{
  test('should set username', () =>
  {
    const state: DeepPartial<LoginState> = { username: 'username' };

    expect(loginReducer(
      state as LoginState,
      loginActions.setUserName('username')
    )).toEqual({ username: 'username' });
  });
  //////////////////////////////
  test('should set password', () =>
  {
    const state: DeepPartial<LoginState> = { password: '123' };

    expect(loginReducer(
      state as LoginState,
      loginActions.setPassword('123')
    )).toEqual({ password: '123' });
  });
});