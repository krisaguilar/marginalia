import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .email('Invalid email address'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters'),

  displayName: z
    .string()
    .min(2, 'Display name must be at least 2 characters'),
});

export type RegisterFormValues = z.infer<
  typeof registerSchema
>;