import { RootState } from '@/app/providers/store-provider';

export const selectLoginPassword = (state: RootState) => state?.login?.password || '';