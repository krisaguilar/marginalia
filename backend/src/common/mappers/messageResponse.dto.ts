import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
  @ApiProperty({
    example: 'Operation completed successfully',
    description: 'Human-readable message describing the operation result.',
  })
  message!: string;
}
