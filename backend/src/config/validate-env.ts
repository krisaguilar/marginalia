import { envSchema } from './env.schema';

export function validateEnv(config: Record<string, unknown>) {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    console.error('❌ Invalid environment variables:');

    console.error(result.error.format());

    throw new Error('Environment validation failed');
  }

  return result.data;
}
