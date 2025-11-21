// import { Dispatch } from '@reduxjs/toolkit';

import loginByUsername from './loginByUsername';
// import { StateSchema } from '@/app/providers/store-provider';
import { userActions } from '@/entities/user';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

const userData = { username: '123', id: '1' };

describe('loginByUsername', function ()
{
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() =>
  // {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () =>
  // {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

  //   const action = loginByUsername({ username: 'username', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   // console.log('loginByUsername ', loginByUsername);
  //   // console.log('result -> ', result);

  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userData);
  // });
  // ///////////////////////////////////////
  // test('error login', async () =>
  // {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

  //   const action = loginByUsername({ username: 'username', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   // console.log('loginByUsername ', loginByUsername);
  //   // console.log('result -> ', result);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(dispatch).not.toHaveBeenCalledWith(userActions.setAuthData(userData));
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual('неверный логин или пароль');
  // });

  test('success login', async () =>
  {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error login', async () =>
  {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('неверный логин или пароль');
  });
});