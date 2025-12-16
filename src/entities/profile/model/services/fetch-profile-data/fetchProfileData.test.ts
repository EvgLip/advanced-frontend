import fetchProfileData from './fetchProfileData';
import { TestAsyncThunk } from '../../../../../shared/lib/tests/TestAsyncThunk';

import { Countries } from '../../../../../entities/country/model/types/country';
import { Currency } from '../../../../../entities/currency/model/types/currency';

const data = {
  username: 'admin',
  age: 58,
  country: Countries.Russia,
  lastname: 'lastname',
  firstname: 'firstname',
  city: 'city',
  currency: Currency.RUB,
};

describe('fetchProfileData', function ()
{
  test('success', async () =>
  {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);

  });

  test('error', async () =>
  {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
  });
});