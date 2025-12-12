import { StateSchema } from '@/app/providers/store-provider';

import selectProfileData from './selectProfileData';
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

describe('selectProfileData', function ()
{
  test('should return state profile', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      profile: { data }
    };

    expect(selectProfileData(state as StateSchema)).toEqual(data);
  });
  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};

    expect(selectProfileData(state as StateSchema)).toEqual(undefined);
  });
});