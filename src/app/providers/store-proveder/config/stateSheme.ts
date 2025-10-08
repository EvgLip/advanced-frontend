import { CounterState } from '@/entities/counter';
import { UserState } from '@/entities/user';

export interface StateSheme
{
  counter: CounterState;
  user: UserState;
}