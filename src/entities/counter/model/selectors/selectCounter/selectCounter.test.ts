//import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSheme } from '@/app/providers/store-proveder';
import { selectCounter } from '@/entities/counter/model/selectors/selectCounter/selectCounter';

// describe(
//   'selectCounter',
//   function ()
//   {
//     test(
//       'should return counter value',
//       function ()
//       {
//         const state: DeepPartial<IStateSheme> = { counter: { value: 10 } };
//         expect(selectCounter(state as IStateSheme)).toEqual({ value: 10 });
//       }
//     );
//   }
// );