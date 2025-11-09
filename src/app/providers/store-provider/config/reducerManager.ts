import { RootState, RootStateKey } from './rootState';
import { combineReducers, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';

export function createReducerManager(initialReducers: ReducersMapObject<RootState>)
{
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: RootStateKey[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: RootState, action: UnknownAction) =>
    {
      if (keysToRemove.length > 0)
      {
        state = { ...state };
        for (const key of keysToRemove)
        {
          delete state[key];
        }
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    // добавление нового редюсера с указанным ключом
    add: (key: RootStateKey, reducer: Reducer) =>
    {
      if (!key || reducers[key]) return;
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    // удаление редюсера по ключу
    remove: (key: RootStateKey) =>
    {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
}