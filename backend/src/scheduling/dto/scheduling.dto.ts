import { ApiProperty } from '@nestjs/swagger';

export class schedulingDto {
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  service_id: number;
  @ApiProperty()
  dateOfService: string;
  @ApiProperty()
  hourOfService: string;
}
