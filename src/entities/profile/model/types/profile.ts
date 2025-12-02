import { CountryType } from '@/entities/country';
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

export const ValidateProfileError =
  {
    NO_DATA: 'NO_DATA',
    INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
    INCORRECT_AGE: 'INCORRECT_AGE',
    // INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
    SERVER_ERROR: 'SERVER_ERROR',
  } as const;

export type ValidateProfileErrorType = typeof ValidateProfileError[keyof typeof ValidateProfileError]


