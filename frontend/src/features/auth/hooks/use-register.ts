import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { authApi } from '../api/auth.api';

import type {
  RegisterPayload,
} from '../types';

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: RegisterPayload,
    ) => authApi.register(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['auth', 'me'],
      });
    },
  });
}