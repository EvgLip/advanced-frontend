import { selectCounter } from '../selectCounter/selectCounter';
import { createSelector } from '@reduxjs/toolkit';


export const selectCounterValue = createSelector(selectCounter, counter => counter.value);