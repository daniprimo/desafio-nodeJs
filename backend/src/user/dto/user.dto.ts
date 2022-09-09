import { ApiProperty } from '@nestjs/swagger';

export class userDto {
  @ApiProperty()
  cpf: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
<<<<<<< HEAD
  @ApiProperty()
  role?: string;
=======
>>>>>>> a6fea912b86288d8eb940cd434a25860957209de
}
