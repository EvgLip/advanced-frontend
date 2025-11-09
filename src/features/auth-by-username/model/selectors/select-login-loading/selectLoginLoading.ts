import { RootState } from '@/app/providers/store-provider';

export const selectLoginLoading = (state: RootState) => state?.login?.isLoading || false;