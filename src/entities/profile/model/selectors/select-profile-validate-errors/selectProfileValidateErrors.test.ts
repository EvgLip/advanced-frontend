import { StateSchema } from '@/app/providers/store-provider';
import selectProfileValidateErrors from './selectProfileValidateErrors';
import { ValidateProfileErrorType } from '../../types/profile';

describe('selectProfileValidateErrors', function ()
{
  test('should return validate errors', () =>
  {
    const validateErrors: ValidateProfileErrorType[] = ['INCORRECT_USER_DATA', 'NO_DATA'];
    const state: DeepPartial<StateSchema> =
    {
      profile: { validateErrors }
    };

    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});