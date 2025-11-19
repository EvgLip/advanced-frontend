import { CountryType, CurrrencyType } from '@/shared/const/common';

export interface Profile
{
  firstname: string;
  lastname: string;
  age: number,
  currency: CurrrencyType;
  country: CountryType;
  city: string;
  username: string;
  avatar: string;
}

