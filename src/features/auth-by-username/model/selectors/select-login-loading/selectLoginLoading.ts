import { StateShema } from '@/app/providers/store-provider';

export const selectLoginLoading = (state: StateShema) => state?.login?.isLoading || false;