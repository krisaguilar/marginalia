import { useQuery } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { authApi } from '../api/auth.api';
import { AuthContext } from './auth.context';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const {
    data: user,
    isLoading,
  } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: authApi.me,
    retry: false,
  });

  const value = {
    user: user ?? null,
    isAuthenticated: !!user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}