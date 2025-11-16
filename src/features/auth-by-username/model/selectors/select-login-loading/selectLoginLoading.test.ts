import { StateShema } from '@/app/providers/store-provider';
import { selectLoginLoading } from './selectLoginLoading';

describe('selectLoginLoading', function ()
{
  test('should return true', () =>
  {
    const state: DeepPartial<StateShema> =
    {
      login: { isLoading: true }
    };

    expect(selectLoginLoading(state as StateShema)).toEqual(true);
  });
  /////////////////////////////////
  test('should return false with empty state', () =>
  {
    const state: DeepPartial<StateShema> = {};

    expect(selectLoginLoading(state as StateShema)).toEqual(false);
  });
});