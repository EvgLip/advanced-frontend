import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import axios from 'axios';


export const axiosApi = axios.create(
  {
    baseURL: __API__,
    headers:
    {
      authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
    }
  }
);

