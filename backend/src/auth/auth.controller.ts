import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import type { Response } from 'express';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserResponseDto } from '../users/dtos/user-response.dto';
import { MessageResponseDto } from '../common/dtos/messageResponse.dto';
import { createAuthCookieOptions } from '../config/auth-cookie.config';
import { ConfigService } from '@nestjs/config';
import { StringValue } from 'ms';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({
    summary: 'Register a new user',
    description: 'Creates a new user account and returns the created user.',
  })
  @ApiCreatedResponse({
    description: 'User registered successfully.',
    type: UserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation failed.',
  })
  @ApiConflictResponse({
    description: 'Email is already registered.',
  })
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @ApiOperation({
    summary: 'Authenticate a user',
    description: 'Authenticates a user and stores the JWT in an HttpOnly authentication cookie.',
  })
  @ApiOkResponse({
    description: 'User authenticated successfully.',
    type: UserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation failed.',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication failed due to invalid credentials.',
  })
  @Post('login')
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) response: Response) {
    const result = await this.authService.login(dto);

    const expiresIn = this.configService.getOrThrow<StringValue>('jwt.expiresIn');
    response.cookie('access_token', result.accessToken, createAuthCookieOptions(expiresIn));

    return result.user;
  }

  @ApiOperation({
    summary: 'Get current authenticated user',
    description: 'Returns the currently authenticated user.',
  })
  @ApiOkResponse({
    description: 'Authenticated user returned successfully.',
    type: UserResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication required.',
  })
  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: UserResponseDto) {
    return user;
  }

  @ApiOperation({
    summary: 'Logout current user',
    description: 'Clears the authentication cookie and ends the current session.',
  })
  @ApiOkResponse({
    description: 'User logged out successfully.',
    type: MessageResponseDto,
  })
  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    const expiresIn = this.configService.getOrThrow<StringValue>('jwt.expiresIn');
    response.clearCookie('access_token', createAuthCookieOptions(expiresIn));

    const responseBody: MessageResponseDto = {
      message: 'Logged out successfully',
    };

    return responseBody;
  }
}
