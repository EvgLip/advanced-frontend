import { StateShema } from '@/app/providers/store-provider';

export const selectLoginError = (state: StateShema) => state?.login?.error;