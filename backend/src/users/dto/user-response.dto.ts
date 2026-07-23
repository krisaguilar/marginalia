import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    example: '8b7f9c2e-5f4a-4d3e-9c2a-123456789abc',
  })
  id!: string;

  @ApiProperty({
    example: 'email@example.com',
  })
  email!: string;

  @ApiProperty({
    example: 'John Doe',
  })
  displayName!: string;

  constructor(user: { id: string; email: string; displayName: string }) {
    this.id = user.id;
    this.email = user.email;
    this.displayName = user.displayName;
  }
}
