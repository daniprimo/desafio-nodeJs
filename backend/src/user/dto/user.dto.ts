import { ApiProperty } from '@nestjs/swagger';

export class userDto {
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  telephone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  senha: string;
}
