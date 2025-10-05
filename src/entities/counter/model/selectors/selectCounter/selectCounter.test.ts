import { IStateSheme } from '@/app/providers/store-proveder';
import { selectCounter } from './selectCounter';

describe(
  'selectCounter',
  function ()
  {
    test(
      'must return the counter object',
      function ()
      {
        const state: DeepPartial<IStateSheme> = { counter: { value: 10 } };
        expect(selectCounter(state as IStateSheme)).toEqual({ value: 10 });
      }
    );
  }
);
