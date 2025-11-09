import { useStore } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

import { RootStateKey, RootStateWithManager, useAppDispatch } from '@/app/providers/store-provider';

export type ReducerList =
  {
    [name in RootStateKey]?: Reducer;
  };

type ReducerListEntry = [RootStateKey, Reducer];

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

  const store = useStore() as RootStateWithManager;
  const dispatch = useAppDispatch();

  useEffect(
    function ()
    {
      Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) =>
      {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });


      return () => 
      {
        if (removeAfterUnmount)
        {
          Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) =>
          {
            store.reducerManager.remove(name);
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