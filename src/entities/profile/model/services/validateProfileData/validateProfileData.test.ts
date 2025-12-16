
import { Countries } from '../../../../../entities/country/model/types/country';
import { Currency } from '../../../../../entities/currency/model/types/currency';

import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';


const data = {
  username: 'admin',
  age: 58,
  country: Countries.Russia,
  lastname: 'lastname',
  firstname: 'firstname',
  city: 'city',
  currency: Currency.RUB,
};

describe('validateProfileData', () =>
{
  test('should pass validation with correct data', () =>
  {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('should return error for incorrect age', () =>
  {
    const invalidData = { ...data, age: -5 };
    const result = validateProfileData(invalidData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  it('should return an error if the age is not specified', () =>
  {
    const invalidData = { ...data, age: undefined };
    const result = validateProfileData(invalidData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  it('should return error for empty first and last name', () =>
  {
    const invalidData = { ...data, firstname: '', lastname: '' };
    const result = validateProfileData(invalidData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  it('should return error for undefined first and last name', () =>
  {
    const invalidData = { ...data, firstname: undefined, lastname: undefined };
    const result = validateProfileData(invalidData);
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

});

