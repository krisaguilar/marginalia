import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'email@example.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: 'MyPassword123',
  })
  @IsString()
  @Length(8, 72)
  password!: string;
}
