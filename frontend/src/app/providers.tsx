import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { AuthProvider } from '@/features/auth/context/auth.provider';

import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
}