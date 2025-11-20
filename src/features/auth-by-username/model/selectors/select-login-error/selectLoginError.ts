import { StateSchema } from '@/app/providers/store-provider';

export const selectLoginError = (state: StateSchema) => state?.login?.error;