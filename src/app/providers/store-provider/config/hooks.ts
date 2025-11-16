import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { StateShema } from './stateShema';


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<StateShema>();