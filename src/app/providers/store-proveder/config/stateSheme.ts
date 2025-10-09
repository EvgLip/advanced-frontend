import { CounterState } from '@/entities/counter';
import { UserState } from '@/entities/user';
import { LoginState } from '@/features/auth-by-username/model/types/loginState';

export interface StateSheme
{
  counter: CounterState;
  user: UserState;
  login?: LoginState;
}