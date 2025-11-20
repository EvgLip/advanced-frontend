import { StateSchema } from '@/app/providers/store-provider';

export const selectLoginLoading = (state: StateSchema) => state?.login?.isLoading || false;