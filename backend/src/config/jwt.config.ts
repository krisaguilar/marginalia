import { registerAs } from '@nestjs/config';
import type { StringValue } from 'ms';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET!,
  expiresIn: process.env.JWT_EXPIRES_IN as StringValue,
}));
