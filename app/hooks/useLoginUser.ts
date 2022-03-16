import { useContext } from 'react';
import {
  LoginUserContext,
  LoginUserContextType,
} from '../providers/AuthProvider';

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
