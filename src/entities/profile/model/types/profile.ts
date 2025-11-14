import { CountryType, CurrrencyType } from '@/shared/const/common';

export interface Profile
{
  first: string;
  lastname: string;
  age: number,
  currency: CurrrencyType;
  country: CountryType;
  city: string;
  username: string;
  avatar: string;
}

