import { useStore } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

import { StateShemaKey, StateShemaWithManager, useAppDispatch } from '@/app/providers/store-provider';

export type ReducerList =
  {
    [name in StateShemaKey]?: Reducer;
  };

type ReducerListEntry = [StateShemaKey, Reducer];

interface DinamicModuleLoaderProps
{
  reducers: ReducerList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}
export default function DinamicModuleLoader(props: DinamicModuleLoaderProps)
{
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props;

  const store = useStore() as StateShemaWithManager;
  const dispatch = useAppDispatch();

  useEffect(
    function ()
    {
      Object.entries(reducers).forEach(([name, reducer]) =>
      {
        store.reducerManager.add(name as StateShemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });


      return () => 
      {
        if (removeAfterUnmount)
        {
          Object.entries(reducers).forEach(([name, reducer]) =>
          {
            store.reducerManager.remove(name as StateShemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          });

        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <>
      {children}
    </>
  );
}