import { StateSchema } from '@/app/providers/store-provider';

export const selectLoginPassword = (state: StateSchema) => state?.login?.password || '';