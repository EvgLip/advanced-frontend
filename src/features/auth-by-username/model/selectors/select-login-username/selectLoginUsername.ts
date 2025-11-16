import { StateShema } from '@/app/providers/store-provider';

export const selectLoginUsername = (state: StateShema) => state?.login?.username || '';