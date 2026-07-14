import { registerAs } from '@nestjs/config';

export default registerAs('bookProvider', () => ({
  provider: process.env.BOOK_PROVIDER,
  baseUrl: process.env.BOOK_PROVIDER_BASE_URL,
}));
