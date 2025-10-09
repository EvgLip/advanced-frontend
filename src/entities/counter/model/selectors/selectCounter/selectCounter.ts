import { RootState } from '@/app/providers/store-proveder';

export const selectCounter = (state: RootState) => state.counter; 