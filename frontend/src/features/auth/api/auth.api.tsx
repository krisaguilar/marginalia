import apiClient from '@/services/api-client';
import type { LoginPayload, RegisterPayload, User } from '../types';

export const authApi = {
  async login(payload: LoginPayload): Promise<User> {
    const { data } = await apiClient.post<User>(
      '/auth/login',
      payload,
    );

    return data;
  },

  async register(payload: RegisterPayload): Promise<User> {
    const { data } = await apiClient.post<User>(
      '/auth/register',
      payload,
    );

    return data;
  },

  async logout(): Promise<void> {
    await apiClient.post('/auth/logout');
  },

  async me(): Promise<User> {
    const { data } = await apiClient.get<User>(
      '/auth/me',
    );

    return data;
  },
};