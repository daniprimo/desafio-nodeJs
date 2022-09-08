import { ApiProperty } from '@nestjs/swagger';

export class schedulingDto {
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  service_id: number;
  @ApiProperty()
  dateOfService: Date | string;
  @ApiProperty()
  hourOfService: Date | string;
}
