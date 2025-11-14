import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

import { CounterState } from '@/entities/counter';
import { UserState } from '@/entities/user';
import { LoginState } from '@/features/auth-by-username/model/types/loginState';
import { ProfileState } from '@/entities/profile';

export interface RootState
{
  counter: CounterState;
  user: UserState;

  // Асинхронные редюсеры
  login?: LoginState;
  profile?: ProfileState;
}

export type RootStateKey = keyof RootState;

export interface ReducerManager 
{
  getReducerMap: () => ReducersMapObject<RootState>;
  reduce: (state: RootState, action: UnknownAction) => RootState;
  add: (key: RootStateKey, reducer: Reducer) => void;
  remove: (key: RootStateKey) => void;
}

export interface RootStateWithManager extends EnhancedStore<RootState>
{
  reducerManager: ReducerManager;
}

