import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3000),

  DATABASE_URL: z.string().min(1),

  JWT_SECRET: z.string().min(1),

  JWT_EXPIRES_IN: z.string().min(1),

  BOOK_PROVIDER: z.enum([
    'open_Library',
    // 'googleBooks',
  ]),

  BOOK_PROVIDER_BASE_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;
