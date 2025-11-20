import { StateSchema } from '@/app/providers/store-provider';
import { selectLoginLoading } from './selectLoginLoading';

describe('selectLoginLoading', function ()
{
  test('should return true', () =>
  {
    const state: DeepPartial<StateSchema> =
    {
      login: { isLoading: true }
    };

    expect(selectLoginLoading(state as StateSchema)).toEqual(true);
  });
  /////////////////////////////////
  test('should return false with empty state', () =>
  {
    const state: DeepPartial<StateSchema> = {};

    expect(selectLoginLoading(state as StateSchema)).toEqual(false);
  });
});