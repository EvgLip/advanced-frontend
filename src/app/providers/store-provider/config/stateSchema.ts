import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { AxiosInstance } from 'axios';

import { CounterState } from '@/entities/counter';
import { UserState } from '@/entities/user';
import { LoginState } from '@/features/auth-by-username/model/types/loginState';
import { ProfileState } from '@/entities/profile';

export interface StateSchema
{
  counter: CounterState;
  user: UserState;
  // Асинхронные редюсеры
  login?: LoginState;
  profile?: ProfileState;
}

//export type DynamicStateSchema = StateSchema | Partial<StateSchema> | undefined;
export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager 
{
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StateSchemaWithManager extends EnhancedStore<StateSchema>
{
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg
{
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T>
{
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

