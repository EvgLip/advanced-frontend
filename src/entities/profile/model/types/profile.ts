import { CountryType } from '@/shared/const/common';
import { CurrencyType } from '@/entities/currency';

export interface Profile
{
  firstname?: string;
  lastname?: string;
  age?: number,
  currency?: CurrencyType;
  country?: CountryType;
  city?: string;
  username?: string;
  avatar?: string;
}

