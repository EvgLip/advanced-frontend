import { useStore } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

import { StateSchemaKey, StateSchemaWithManager, useAppDispatch } from '@/app/providers/store-provider';

export type ReducerList =
  {
    [name in StateSchemaKey]?: Reducer;
  };

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

  const store = useStore() as StateSchemaWithManager;
  const dispatch = useAppDispatch();

  useEffect(
    function ()
    {
      Object.entries(reducers).forEach(([name, reducer]) =>
      {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });


      return () => 
      {
        if (removeAfterUnmount)
        {
          Object.entries(reducers).forEach(([name, reducer]) =>
          {
            store.reducerManager.remove(name as StateSchemaKey);
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