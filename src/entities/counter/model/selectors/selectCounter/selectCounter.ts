import { RootState } from '@/app/providers/store-provider';

export const selectCounter = (state: RootState) => state.counter; 