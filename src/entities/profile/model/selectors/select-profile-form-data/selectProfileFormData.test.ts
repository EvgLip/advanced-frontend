// import { Countries } from '@/entities/country';
// import { Currency } from '@/entities/currency';
import { StateSchema } from '@/app/providers/store-provider';

import selectProfileFormData from './selectProfileFormData';
import { Countries } from '../../../../../entities/country/model/types/country';
import { Currency } from '../../../../../entities/currency/model/types/currency';

const formData = {
  username: 'admin',
  age: 58,
  country: Countries.Russia,
  lastname: 'lastname',
  firstname: 'firstname',
  city: 'city',
  currency: Currency.RUB,
};


describe('selectProfileFormData', function ()
{
  test('should return profile state form data', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      profile: { formData }
    };
    expect(selectProfileFormData(state as StateSchema)).toEqual(formData);
  });

  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});