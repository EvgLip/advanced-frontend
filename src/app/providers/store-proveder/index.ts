import StoreProvider from './ui/StoreProveder';
import { createReduxStore, RootState } from './config/store';
import { useAppDispatch, useAppSelector } from './config/hooks';
import { IStateSheme } from './config/stateSheme';


export
{
  StoreProvider,
  createReduxStore,
  RootState,
  useAppDispatch,
  useAppSelector,
  IStateSheme,
};