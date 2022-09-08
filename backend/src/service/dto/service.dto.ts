import { ApiProperty } from '@nestjs/swagger';

export class serviceDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}
