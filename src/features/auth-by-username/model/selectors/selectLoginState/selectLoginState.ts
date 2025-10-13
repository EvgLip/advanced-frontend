import { RootState } from '@/app/providers/store-proveder';

export const selectLoginState = (state: RootState) => state?.login;