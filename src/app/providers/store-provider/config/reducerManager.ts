import { combineReducers, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

import { ReducerManager, StateShema, StateShemaKey } from './stateShema';


export function createReducerManager(initialReducers: ReducersMapObject<StateShema>): ReducerManager
{
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateShemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateShema | undefined, action: UnknownAction) =>
    {
      if (state !== undefined && keysToRemove.length > 0)
      {
        state = { ...state };
        for (const key of keysToRemove)
        {
          delete state[key];
        }
        keysToRemove = [];
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return combinedReducer(state as any, action);
    },

    // добавление нового редюсера с указанным ключом
    add: (key: StateShemaKey, reducer: Reducer) =>
    {
      if (!key || reducers[key]) return;
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    // удаление редюсера по ключу
    remove: (key: StateShemaKey) =>
    {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
}