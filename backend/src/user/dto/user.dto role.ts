import { ApiProperty } from '@nestjs/swagger';

export class userDtoRole {
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
  @ApiProperty()
  role?: number | null;
}
