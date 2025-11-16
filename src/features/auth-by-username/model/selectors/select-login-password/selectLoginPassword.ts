import { StateShema } from '@/app/providers/store-provider';

export const selectLoginPassword = (state: StateShema) => state?.login?.password || '';