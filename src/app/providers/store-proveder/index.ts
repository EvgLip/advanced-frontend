import StoreProvider from './ui/StoreProveder';
import { store, createReduxStore, RootState } from './config/store';
import { useAppDispatch, useAppSelector } from './config/hooks';
import { IStateSheme } from './config/stateSheme';


export
{
  StoreProvider,
  createReduxStore,
  store,
  RootState,
  useAppDispatch,
  useAppSelector,
  IStateSheme,
};