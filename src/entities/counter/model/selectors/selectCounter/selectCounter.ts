import { StateShema } from '@/app/providers/store-provider';

export const selectCounter = (state: StateShema) => state.counter; 