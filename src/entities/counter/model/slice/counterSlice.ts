import { createSlice } from '../../../../../node_modules/@reduxjs/toolkit';

import { CounterState } from '../type/counterState';

const initialState: CounterState =
{
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state)
    {
      state.value += 1;
    },
    decrement(state)
    {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = counterSlice;

export const { reducer: counterReducer } = counterSlice;