import { StateSchema } from '@/app/providers/store-provider';

export const selectLoginUsername = (state: StateSchema) => state?.login?.username || '';