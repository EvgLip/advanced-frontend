import { StateSchema } from '@/app/providers/store-provider';

import selectProfileError from './selectProfileError';

const error = 'error text';

describe('selectProfileError', function ()
{
  test('should return the error text', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      profile: { error }
    };

    expect(selectProfileError(state as StateSchema)).toEqual(error);
  });

  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};

    expect(selectProfileError(state as StateSchema)).toEqual(undefined);
  });
});