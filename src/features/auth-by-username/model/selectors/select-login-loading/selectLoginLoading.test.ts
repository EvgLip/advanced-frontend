import { RootState } from '@/app/providers/store-provider';
import { selectLoginLoading } from './selectLoginLoading';

describe('selectLoginLoading', function ()
{
  test('should return true', () =>
  {
    const state: DeepPartial<RootState> =
    {
      login: { isLoading: true }
    };

    expect(selectLoginLoading(state as RootState)).toEqual(true);
  });
  /////////////////////////////////
  test('should return false with empty state', () =>
  {
    const state: DeepPartial<RootState> = {};

    expect(selectLoginLoading(state as RootState)).toEqual(false);
  });
});