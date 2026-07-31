import {
  createContext,
} from 'react';

import type {
  User,
} from '../types';

export interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);
