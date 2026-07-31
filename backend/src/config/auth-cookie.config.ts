import type { CookieOptions } from 'express';
import type { StringValue } from 'ms';
import ms from 'ms';

export function createAuthCookieOptions(expiresIn: StringValue): CookieOptions {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', //false in dev no https
    sameSite: 'lax',
    maxAge: ms(expiresIn),
  };
}
