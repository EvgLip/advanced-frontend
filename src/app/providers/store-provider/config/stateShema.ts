import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

import { CounterState } from '@/entities/counter';
import { UserState } from '@/entities/user';
import { LoginState } from '@/features/auth-by-username/model/types/loginState';
import { ProfileState } from '@/entities/profile';
import { AxiosInstance } from 'axios';

export interface StateShema
{
  counter: CounterState;
  user: UserState;
  // Асинхронные редюсеры
  login?: LoginState;
  profile?: ProfileState;
}

//export type DynamicStateShema = StateShema | Partial<StateShema> | undefined;
export type StateShemaKey = keyof StateShema;

export interface ReducerManager 
{
  getReducerMap: () => ReducersMapObject<StateShema>;
  reduce: (state: StateShema | undefined, action: UnknownAction) => StateShema;
  add: (key: StateShemaKey, reducer: Reducer) => void;
  remove: (key: StateShemaKey) => void;
}

export interface StateShemaWithManager extends EnhancedStore<StateShema>
{
  reducerManager: ReducerManager;
}

export interface ThunckExtraArg
{
  api: AxiosInstance;
}

