import { createParamDecorator } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

import type { UserResponseDto } from '../../users/dto/user-response.dto';

type RequestWithUser = Request & {
  user: UserResponseDto;
};

export const CurrentUser = createParamDecorator((_, ctx: ExecutionContext): UserResponseDto => {
  const request = ctx.switchToHttp().getRequest<RequestWithUser>();

  return request.user;
});
