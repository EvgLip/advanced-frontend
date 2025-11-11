import { RootState } from '@/app/providers/store-provider';

export const selectLoginError = (state: RootState) => state?.login?.error;