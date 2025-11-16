import StoreProvider from './ui/StoreProvider';
import { StateShema, StateShemaWithManager, StateShemaKey } from './config/stateShema';
import { createReduxStore } from './config/store';
import { useAppDispatch, useAppSelector } from './config/hooks';


export
{
  StoreProvider,
  createReduxStore,
  StateShema,
  useAppDispatch,
  useAppSelector,
  StateShemaWithManager,
  StateShemaKey,
};