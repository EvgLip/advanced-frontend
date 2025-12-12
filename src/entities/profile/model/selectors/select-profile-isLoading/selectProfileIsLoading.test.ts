import { StateSchema } from '@/app/providers/store-provider';
import selectProfileIsLoading from './selectProfileIsLoading';


describe('selectProfileIsLoading', function ()
{
  test('should return the loader', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      profile: { isLoading: true }
    };
    expect(selectProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  //////////////////////////
  test('should work with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};
    expect(selectProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});