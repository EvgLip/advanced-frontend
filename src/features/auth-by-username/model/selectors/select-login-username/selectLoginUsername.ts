import { RootState } from '@/app/providers/store-provider';

export const selectLoginUsername = (state: RootState) => state?.login?.username || '';