import { CounterState } from '@/entities/counter';
import { UserState } from '@/entities/user';
import { LoginState } from '@/features/auth-by-username/model/types/loginState';



export interface RootState
{
  counter: CounterState;
  user: UserState;

  // Асинхронные редюсеры
  login?: LoginState;
}

export type RootStateKey = keyof RootState;